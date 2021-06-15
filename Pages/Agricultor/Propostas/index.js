import React, { useState, useEffect, useContext } from 'react';
import { Text, View, StyleSheet, Dimensions, FlatList, StatusBar } from 'react-native';
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

  useEffect(() => {
    socket.emit('getOffers', -1, resp => setOffersAll(resp));
    socket.emit('getOffers', player.id, resp => setOffersIndividual(resp));
  }, []);

  const confirmOffer = item => {
    if (player.coin >= item.price * item.amount) {
      socket.emit('respOffer', true, item, resp => setOffersIndividual(resp));
    } else {
      setModalText('Você não possui dinheiro suficiente para esta compra.')
    }
  }
  const rejectOffer = item => {
    socket.emit('respOffer', false, item, resp => setOffersIndividual(resp));
  }

  return (
    <View style={styles.container}>
      <Coin coin={player.coin} />
      <Text style={styles.header}>Propostas</Text>
      {/* {modalText !== '' && (
        <Modal onClick={() => setModalText('')} text={modalText} />
      )}
      <Text style={styles.text}>Oferta para todos</Text>
      {offersAll.length === 0 && (
        <Text style={{ flex: 1, textAlign: 'center', fontFamily: 'Rubik_700Bold', fontSize: 18, marginVertical: 50 }}>Você não tem nada!</Text>
      )} */}
      <FlatList
        showsVerticalScrollIndicator={false}
        data={offersAll}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => <OfertaGeral item={item} confirmOffer={confirmOffer} />}
      />
      <Text style={styles.text}>Negociação individual</Text>
      {offersIndividual.length === 0 && (
        <Text style={{ flex: 1, textAlign: 'center', fontFamily: 'Rubik_700Bold', fontSize: 18, marginVertical: 50 }}>Você não tem nada!</Text>
      )}
      <FlatList
        showsVerticalScrollIndicator={false}
        data={offersIndividual}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item, index }) => <Oferta item={item} key={index} confirmOffer={confirmOffer} rejectOffer={rejectOffer}/>}
      />
      {/*
      <FlatList
        showsVerticalScrollIndicator={false}
        data={offersIndividual}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => <Oferta item={item} confirmOffer={confirmOffer} rejectOffer={rejectOffer} />}
      /> */}
      {/* tem que fazer funcionar <OfertaGeral/> */}
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
    marginBottom: 35
  },
  text: {
    fontFamily: 'Rubik_300Light',
    textAlign: 'center',
    fontSize: 22,
    paddingTop: 10
  }
});