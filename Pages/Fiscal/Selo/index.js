import React, { useState, useContext, useEffect } from 'react';
import { Text, View, StyleSheet, Image, Dimensions, ScrollView } from 'react-native';
import Button from '../../../Components/Button';
import Quadrados from '../../../Components/Quadrado';
import Rodada from '../../../Components/Rodada';
import ParcelaAgr from '../../../Components/parcelaAgr'
import { GameContext, sendStamp } from '../../../contexts/GameContext.js'
import HistoricosPlatacao from '../../../Components/HistóricosPlatacao'
const Tela = Dimensions.get('screen').width;
export default function Selo({ navigation, route }) {
  const [selectClient, setSelectClient] = useState(-1);
  const { players, player, logs } = useContext(GameContext);
  const [modalText, setModalText] = useState('');
  const [farmer, setFarmer] = useState([]);
  const [Logs, setLogs] = useState([]);
  const [selectParcel, setSelectParcel] = useState(-1);
  const [parcelLands, setParcelLands] = useState([]);

  useEffect(() => {
    setFarmer(players.filter(i => i.type === 'Agricultor'))
    if(selectClient !== -1){
      setLogs(players.find((p)=> p.id === selectClient))
      setParcelLands(players.find((p)=> p.id === selectClient).parcelLand.filter(p => p.planted));
      sendStamp(selectClient, parcelLands);
    }
  }, [selectClient]);
  console.log(player.appliedStamp)

  return (
    <View>
      <Rodada name={'Selo'} arrow={true} onClick={() => navigation.navigate('MenuPolitico')} />
      <ScrollView>
        <View style={styles.container}>
          <View style={styles.row}>
            <Image
              style={styles.image}
              source={require('../../../assets/icons/stamp.png')}
            />
            <Text style={styles.title}>Concessão de{'\n'}selo verde</Text>
          </View>
          <Text style={styles.texto}>Destinatário:</Text>
          <View style={{ marginHorizontal: 10, flexDirection: 'row', width: '100%', flexWrap: 'wrap' }}>
            {farmer.map((item) => <Quadrados key={item.id} player={item} onClick={() => setSelectClient(item.id)} backgroundColor={selectClient == item.id ? '#8ACF3A' : '#fff'} color={selectClient == item.id ? '#fff' : '#000'} />)}
          </View>
          <Text style={styles.texto}>Plantações:</Text>
          {Logs.length !== 0 ?
          Logs.logs.filter(i => i.type === 'plantation').map((p, index) => {
            // if (parcel.planted === true && !parcel.pesticide) {
              return <ParcelaAgr item={p} key={p.id} onClick={()=>{setSelectParcel(p.id)}} backgroundGreen={selectParcel == p.id ? '#8ACF3A' : '#fff'} vermais={true} display={'flex'}/>
            // }
          })
          :
          null
          }
          <Button
            onClick={() => navigation.reset({ routes: [{ name: 'TransferenciaConfirmada', params: { text: 'Selo concedido', Menu: 'MenuPolitico' } }] })}
            name='CONCEDER' />
        </View>
      </ScrollView>
    </View>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    width: Tela,
  },
  title: {
    fontSize: 20,
    fontFamily: 'Rubik_300Light',
  },
  row: {
    flexDirection: 'row',
    marginVertical: 20
  },
  image: {
    width: 62,
    height: 60,
  },
  texto: {
    fontFamily: 'Rubik_400Regular',
    fontSize: 20,
    textAlign: 'left',
    alignSelf: 'flex-start',
    marginVertical: 15,
    marginLeft: 20
  },
});