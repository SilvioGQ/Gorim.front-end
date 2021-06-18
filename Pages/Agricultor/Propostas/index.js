import React, { useState, useEffect, useContext } from 'react';
import { Text, View, StyleSheet, Dimensions, FlatList, StatusBar, TouchableOpacity } from 'react-native';
import { socketContext } from "../../../context/socket";
import { playerContext } from "../../../context/player";

import Coin from '../../../Components/Coin';
import Oferta from '../../../Components/Oferta';
import OfertaGeral from '../../../Components/OfertaGeral';
import HistoricosDinheiro from '../../../Components/HistóricosDinheiro';
import COLORS from '../../../resources/colors';
import PlayerService from '../../../services/PlayerService';
import Modal from '../../../Components/ModalInfo';

const Tela = Dimensions.get('screen').width;
export default function Proposta({ navigation }) {

  const [offersIndividual, setOffersIndividual] = useState([]);
  const [offersAll, setOffersAll] = useState([]);
  const [player, setPlayer] = useContext(playerContext);
  const socket = useContext(socketContext);
  const [modalText, setModalText] = useState('');
  const [type, setType] = useState('')
  useEffect(() => {
    socket.emit('getOffers', -1, resp => { setOffersAll(resp) });
    socket.emit('getOffers', player.id, resp => setOffersIndividual(resp));
    socket.on('newOffers', resp => setOffersAll(resp));
  }, []);

  const confirmOffer = item => {
    if (player.coin >= item.price * item.amount) {
      socket.emit('respOffer', true, item, resp => setOffersIndividual(resp));
    } else {
      setModalText('Você não possui dinheiro suficiente para esta compra.')
    }
  }

  const confirmOfferAll = (item, count) => {
    if (player.coin >= item.price * count) {
      socket.emit('respOfferAll', item, count, resp => setOffersAll(resp));
    } else {
      setModalText('Você não possui dinheiro suficiente para esta compra.');
    }
  }

  const rejectOffer = item => {
    socket.emit('respOffer', false, item, resp => setOffersIndividual(resp));
  }
  const selectType = () => {
    if (type !== '') {
      return offersAll.filter(i => i.type == type);
    } else {
      return offersAll;
    }
  }

  return (
    <View style={styles.container}>
      <Coin coin={player.coin} />
      <Text style={styles.header}>Propostas</Text>
      {modalText !== '' && (
        <Modal onClick={() => setModalText('')} text={modalText} />
      )}
      <Text style={styles.text}>Anúncios</Text>
      <View style={{ flexDirection: 'row', marginHorizontal: 15, width: '90%', justifyContent: 'space-between', marginVertical: 10 }}>
        <TouchableOpacity style={[styles.button, { backgroundColor: type == 'Maquina' ? "#8ACF3A" : '#fff' }]} onPress={() => { setType('Maquina') }}>
          <Text style={[styles.textSmall, { color: type == 'Maquina' ? '#fff' : '#000' }]}>Máquina</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.button, { backgroundColor: type == 'Fertilizante' ? "#8ACF3A" : '#fff' }]} onPress={() => { setType('Fertilizante') }}>
          <Text style={[styles.textSmall, { color: type == 'Fertilizante' ? '#fff' : '#000' }]}>Fertilizante</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.button, { backgroundColor: type == 'Agrotoxico' ? "#8ACF3A" : '#fff' }]} onPress={() => { setType('Agrotoxico') }}>
          <Text style={[styles.textSmall, { color: type == 'Agrotoxico' ? '#fff' : '#000' }]}>Agrotóxico</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.button, { backgroundColor: type == 'Semente' ? "#8ACF3A" : '#fff' }]} onPress={() => { setType('Semente') }}>
          <Text style={[styles.textSmall, { color: type == 'Semente' ? '#fff' : '#000' }]}>Semente</Text>
        </TouchableOpacity>
      </View>
      {offersAll.length === 0 && (
        <Text style={{ flex: 1, textAlign: 'center', fontFamily: 'Rubik_700Bold', fontSize: 18, marginVertical: 50 }}>Você não tem nada!</Text>
      )}
      <FlatList
        showsVerticalScrollIndicator={false}
        data={selectType()}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item, index }) => <OfertaGeral key={index} item={item} confirmOffer={confirmOfferAll} />}
      />
      <Text style={styles.text}>Negociação individual</Text>
      {offersIndividual.length === 0 && (
        <Text style={{ flex: 1, textAlign: 'center', fontFamily: 'Rubik_700Bold', fontSize: 18, marginVertical: 50 }}>Você não tem nada!</Text>
      )}
      <FlatList
        showsVerticalScrollIndicator={false}
        data={offersIndividual}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item, index }) => <Oferta item={item} key={index} confirmOffer={confirmOffer} rejectOffer={rejectOffer} />}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.bgColorPrimary,
    width: Tela,
    paddingTop: StatusBar.currentHeight
  },
  header: {
    fontFamily: 'Rubik_300Light',
    textAlign: 'center',
    fontSize: 32,
    marginBottom: 10
  },
  text: {
    fontFamily: 'Rubik_300Light',
    textAlign: 'center',
    fontSize: 22,
    marginVertical: 10
  },
  textSmall: {
    textAlign: 'center',
    fontSize: 13,
    fontFamily: 'Rubik_300Light',
    marginTop: 9
  },
  button: {
    width: '22%',
    height: 40,
    borderRadius: '42%',
    borderWidth: 1
  }
});