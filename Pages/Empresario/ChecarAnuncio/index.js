import React, { useState, useEffect, useContext } from 'react';
import { Text, View, StyleSheet, Dimensions, FlatList, StatusBar } from 'react-native';
// import { socketContext } from "../../../context/socket";
import { GameContext } from "../../../context/GameContext";

import Coin from '../../../Components/Coin';

import Anuncio from '../../../Components/Anuncio';
import COLORS from '../../../resources/colors';
import Modal from '../../../Components/ModalInfo';
import Rodada from '../../../Components/Rodada';
const Tela = Dimensions.get('screen').width;
export default function ChecarAnuncio({ navigation }) {

  const [offers, setOffers] = useState([]);
  const [modalText, setModalText] = useState('');
  // const socket = useContext(socketContext);
  const { player } = useContext(GameContext);

  // useEffect(() => {
  //   socket.emit('getAdverts', resp => setOffers(resp));
  // }, []);

  const deleteAdvert = id => {
    socket.emit('deleteAdvert', id, resp => setOffers(resp));
  }

  return (
    <View style={styles.container}>
      <Rodada name={'Checar anúncios'}/>
      <Coin coin={player.coin} />
      <Text style={styles.header}>Anúncios</Text>
      {modalText !== '' && (
        <Modal onClick={() => setModalText('')} text={modalText} />
      )}
      <FlatList
        showsVerticalScrollIndicator={false}
        data={offers}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item, index }) => <Anuncio key={index} item={item} Historico={() => navigation.navigate('Cenario')} deleteAdvert={deleteAdvert} />}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.bgColorPrimary,
    width: Tela,
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