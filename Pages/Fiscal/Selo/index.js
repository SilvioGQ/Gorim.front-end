import React, { useState, useContext, useEffect } from 'react';
import { Text, View, StyleSheet, Image, Dimensions, ScrollView } from 'react-native';
import Button from '../../../Components/Button';
import Quadrados from '../../../Components/Quadrado';
import Rodada from '../../../Components/Rodada';
import ParcelaAgr from '../../../Components/parcelaAgr'
import { GameContext, sendStamp } from '../../../contexts/GameContext.js'
import HistoricosPlatacao from '../../../Components/HistóricosPlatacao'
import Modal from '../../../Components/ModalInfo';
const Tela = Dimensions.get('screen').width;
export default function Selo({ navigation, route }) {
  const [selectClient, setSelectClient] = useState(-1);
  const { players, player, logs } = useContext(GameContext);
  const [modalText, setModalText] = useState('');
  const [farmer, setFarmer] = useState([]);
  const [selectedPlayer, setSelectedPlayer] = useState([]);
  const [selectParcel, setSelectParcel] = useState([]);

  useEffect(() => {
    setFarmer(players.filter(i => i.type === 'Agricultor'  && i.city == player.city))
    if(selectClient !== -1){
      setSelectedPlayer(players.find((p)=> p.id === selectClient))
    }
  }, [selectClient]);
  
  const aplicar = ()=>{
    sendStamp(selectClient, selectParcel); 
    navigation.reset({ routes: [{ name: 'TransferenciaConfirmada', params: { text: 'Selo concedido', Menu: 'MenuPolitico' } }] })
  }

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
          {modalText !== '' && (
          <Modal onClick={() => setModalText('')} text={modalText} />
        )}
          <Text style={styles.texto}>Plantações:</Text>
          {selectedPlayer.length === 0 ?
           <Text style={{textAlign: 'center', fontFamily: 'Rubik_700Bold', fontSize: 15, marginVertical: 30 }}>Selecione um agricultor!</Text>
           :
          selectedPlayer.logs && selectedPlayer.logs.filter(i=> i.type=='plantation').length !== player.appliedStamp.filter(i=> i.indexOf(selectClient) !== -1).length  ?
          selectedPlayer.logs.filter(i => i.type === 'plantation' && player.appliedStamp.includes(selectClient+i.parcelLand.id.toString()) === false).map((p, index) => {
              return <ParcelaAgr item={p} key={p.parcelLand.id} onClick={()=>{ selectParcel.includes(p.parcelLand.id) ? setSelectParcel(selectParcel.filter((e)=>(e !== p.parcelLand.id))) :  setSelectParcel([...selectParcel, p.parcelLand.id])}} backgroundGreen={selectParcel.includes(p.parcelLand.id) ? '#8ACF3A' : '#fff'} vermais={true} display2={'none'} pedido={p.parcelLand.requestStamp === true ? true : false}/>
          })
          :
          <Text style={{textAlign: 'center', fontFamily: 'Rubik_700Bold', fontSize: 15, marginVertical: 30 }}>Não há parcelas para conceder selo!</Text>
          }
          <Button
            onClick={ ()=>{selectParcel.length !== 0 ? aplicar(): setModalText('Selecione uma parcela')}}
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