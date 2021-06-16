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
  const [type, setType] = useState(0)
  useEffect(() => {
    socket.emit('getOffers', -1, resp => setOffersAll(resp));
    socket.emit('getOffers', player.id, resp => setOffersIndividual(resp));
  }, []);
  // let lista1 = offersAll.filter(i => i.type == 'Semente');
  let novaLista= offersAll
  if(type==4){
  novaLista = offersAll.filter(function (x) {
    return x.type == 'Semente'
  });
}
  if(type==3){
  novaLista = offersAll.filter(function (x) {
    return x.type == 'Agrotoxico'
  });
}
if(type==2){
  novaLista = offersAll.filter(function (x) {
    return x.type == 'Fertilizante'
  });

}
if(type==1){
  novaLista = offersAll.filter(function (x) {
    return x.type == 'Maquina'
  });
}
  const confirmOffer = item => {
    if (player.coin >= item.price * item.amount) {
      socket.emit('respOffer', true, item, resp => setOffersIndividual(resp));
    } else {
      setModalText('Você não possui dinheiro suficiente para esta compra.')
    }
  }

  const confirmOfferAll = (item, count) => {
    if (player.coin >= item.price * item.amount) {
      socket.emit('respOfferAll', item, count, resp => setOffersAll(resp));
    } else {
      setModalText('Você não possui dinheiro suficiente para esta compra.')
    }
  }

  const rejectOffer = item => {
    socket.emit('respOffer', false, item, resp => setOffersIndividual(resp));
  }
  // const selectType = () => {

  // }

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
      <Text style={styles.text}>Anúncios</Text>
      <View style={{ flexDirection: 'row', marginHorizontal: 15, width: '90%', justifyContent: 'space-between', marginVertical: 10 }}>
        <TouchableOpacity style={[styles.button, {backgroundColor: type == 1 ? "#8ACF3A" : '#fff'}]} onPress={() =>{ setType(1)}}>
          <Text style={[styles.textSmall, {color: type == 1 ? '#fff' : '#000'}]}>Máquina</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.button, {backgroundColor: type == 2 ? "#8ACF3A" : '#fff'}]} onPress={() =>{ setType(2)}}>
          <Text style={[styles.textSmall, {color: type == 2 ? '#fff' : '#000'}]}>Fertilizante</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.button, {backgroundColor: type == 3 ? "#8ACF3A" : '#fff'}]} onPress={() =>{ setType(3)}}>
          <Text style={[styles.textSmall, {color: type == 3 ? '#fff' : '#000'}]}>Agrotóxico</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.button, {backgroundColor: type == 4 ? "#8ACF3A" : '#fff'}]} onPress={() =>{ setType(4)}}>
          <Text style={[styles.textSmall, {color: type == 4 ? '#fff' : '#000'}]}>Semente</Text>
        </TouchableOpacity>
      </View>
      <FlatList
        showsVerticalScrollIndicator={false}
        data={novaLista}
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