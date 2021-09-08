import React, { useState, useContext } from 'react';
import { Text, View, StyleSheet, Dimensions, FlatList } from 'react-native';
import { GameContext, deleteAdvert } from "../../../contexts/GameContext";

import Coin from '../../../Components/Coin';

import Anuncio from '../../../Components/Anuncio';
import COLORS from '../../../constants/colors';
import Modal from '../../../Components/ModalInfo';
import Rodada from '../../../Components/Rodada';

const Tela = Dimensions.get('screen').width;
export default function ChecarAnuncio({ navigation }) {

  const [modalText, setModalText] = useState('');
  const { player } = useContext(GameContext);

  return (
    <View style={styles.container}>
      <Rodada name={'Checar anúncios'} />
      <Coin coin={player.coin} />
      <Text style={styles.header}>Anúncios</Text>
      {modalText !== '' && <Modal onClick={() => setModalText('')} text={modalText} />}
      {player.offers.filter(offer => offer.idBuyer === -1).length === 0 ?
        <Text style={{flex: 1, textAlign: 'center', fontFamily: 'Rubik_700Bold', fontSize: 18, marginVertical:20}}>Você não possui anúncios</Text> :
        <FlatList
          showsVerticalScrollIndicator={false}
          data={player.offers.filter(offer => offer.idBuyer === -1)}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item, index }) => <Anuncio key={index} item={item} Historico={() => navigation.navigate('Cenario')} deleteAdvert={id => deleteAdvert(id)} />}
        />
      }
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