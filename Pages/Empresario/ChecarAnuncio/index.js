import React, { useState, useEffect, useContext } from 'react';
import { Text, View, StyleSheet, Dimensions, FlatList } from 'react-native';
import { GameContext, getAdverts, deleteAdvert } from "../../../context/GameContext";

import Coin from '../../../Components/Coin';

import Anuncio from '../../../Components/Anuncio';
import COLORS from '../../../resources/colors';
import Modal from '../../../Components/ModalInfo';
import Rodada from '../../../Components/Rodada';
const Tela = Dimensions.get('screen').width;
export default function ChecarAnuncio({ navigation }) {
  const [modalText, setModalText] = useState('');
  const { player, data: offers, stage } = useContext(GameContext);

  useEffect(() => {
    getAdverts();
  }, []);
  return (
    <View style={styles.container}>
      <Rodada name={'Checar anúncios'} />
      <Coin coin={player.coin} />
      <Text style={styles.header}>Anúncios</Text>
      {modalText !== '' && (
        <Modal onClick={() => setModalText('')} text={modalText} />
      )}
      {stage == 'GETADVERTS' && (
        <FlatList
          showsVerticalScrollIndicator={false}
          data={offers}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item, index }) => <Anuncio key={index} item={item} Historico={() => navigation.navigate('Cenario')} deleteAdvert={id => deleteAdvert(id)} />}
        />
      )}
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