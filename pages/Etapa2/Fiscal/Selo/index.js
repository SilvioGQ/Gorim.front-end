import React, { useState, useContext, useEffect } from 'react';
import { Text, View, StyleSheet, Image, Dimensions, ScrollView } from 'react-native';
import Button from '../../../../components/Button';
import Quadrados from '../../../../components/Quadrado';
import Rodada from '../../../../components/Rodada';
import ParcelaAgr from '../../../../components/parcelaAgr'
import { GameContext, sendStamp, suggestFine } from '../../../../contexts/GameContext.js'
import Modal from '../../../../components/ModalInfo';
import TextBold from '../../../../components/Atons/TextBold';
const Tela = Dimensions.get('screen').width;
export default function Selo({ navigation, route }) {
  const [selectClient, setSelectClient] = useState(-1);
  const { player, data: playersType, stage } = useContext(GameContext);
  const [modalText, setModalText] = useState('');
  const [farmer, setFarmer] = useState([]);
  const [selectedPlayer, setSelectedPlayer] = useState([]);
  const [selectParcel, setSelectParcel] = useState([]);

  useEffect(() => {
    suggestFine();
  }, []);
  useEffect(() => {
    if (stage === 'SUGGESTFINE') {
      setFarmer(playersType.filter(i => i.type === 'Agricultor' && i.city == player.city))
      if (selectClient !== -1) {
        setSelectedPlayer(playersType.find((p) => p.playerId === selectClient))
      }
    }
  }, [selectClient, stage]);
  const aplicar = () => {
    sendStamp(selectClient, selectParcel);
    navigation.reset({ routes: [{ name: 'TransferenciaConfirmada', params: { text: 'Selo concedido', Menu: 'MenuPolitico' } }] })
  }

  return (
    <View style={{ flex: 1, marginBottom: 30 }}>
      <Rodada arrow={true} onClick={() => navigation.navigate('MenuPolitico')} />
      <ScrollView>
        <View style={styles.container}>
          <View style={styles.row}>
            <Image
              style={styles.image}
              source={require('../../../../assets/icons/stamp.png')}
            />
            <Text style={styles.title}>Concessão de{'\n'}selo verde</Text>
          </View>
          <Text style={styles.texto}>Destinatário:</Text>
          <View style={styles.estilo}>
            {farmer.map((item) => <Quadrados city={item.city} key={item.playerId} abr={item?.type.slice(0, 3)} player={item} onClick={() => setSelectClient(item.playerId)} backgroundColor={selectClient == item.playerId ? '#8ACF3A' : '#fff'} color={selectClient == item.playerId ? '#fff' : '#000'} />)}
          </View>
          {modalText !== '' && (
            <Modal onClick={() => setModalText('')} text={modalText} />
          )}
          <Text style={styles.texto}>Plantações:</Text>
          {selectedPlayer.length === 0 ?
            <TextBold>Selecione um agricultor!</TextBold>
            :
            selectedPlayer.logs && selectedPlayer.logs.filter(i => i.type == 'plantation').length !== player.appliedStamp.filter(i => i.indexOf(selectClient) !== -1).length ?
              selectedPlayer.logs.filter(i => i.type === 'plantation' && player.appliedStamp.includes(selectClient + i.parcelLand.id.toString()) === false).map((p, index) => {
                return <ParcelaAgr item={p} key={p.parcelLand.id} onClick={() => { selectParcel.includes(p.parcelLand.id) ? setSelectParcel(selectParcel.filter((e) => (e !== p.parcelLand.id))) : setSelectParcel([...selectParcel, p.parcelLand.id]) }} backgroundGreen={selectParcel.includes(p.parcelLand.id) ? '#8ACF3A' : '#fff'} color={selectParcel.includes(p.parcelLand.id) ? '#fff' : '#000'} vermais={true} display2={'none'} pedido={p.parcelLand.requestStamp === true ? true : false} />
              })
              :
              <TextBold>Não há parcelas para conceder selo!</TextBold>
          }
          <Button
            onClick={() => { selectParcel.length !== 0 ? aplicar() : setModalText('Selecione uma parcela') }}
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
  estilo: {
    marginHorizontal: 10,
    flexDirection: 'row',
    width: '100%',
    flexWrap: 'wrap'
  }
});
