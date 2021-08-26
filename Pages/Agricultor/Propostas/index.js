import React, { useState, useEffect, useContext } from 'react';
import { Text, View, StyleSheet, Dimensions, FlatList, StatusBar, TouchableOpacity } from 'react-native';
import { GameContext, getOffers, confirmOffer, rejectOffer } from "../../../context/GameContext";

import Coin from '../../../Components/Coin';
import Oferta from '../../../Components/Oferta';
import OfertaGeral from '../../../Components/OfertaGeral';
import FilterType from '../../../Components/FilterType';
import COLORS from '../../../resources/colors';
import Modal from '../../../Components/ModalInfo';
import Rodada from '../../../Components/Rodada';

const Tela = Dimensions.get('screen').width;
export default function Propostas() {
  const [modalText, setModalText] = useState('');
  const [type, setType] = useState('');
  const { player, offers, disableNotifyOffers } = useContext(GameContext);

  useEffect(() => {
    disableNotifyOffers()
  }, []);

  const confirmPurchase = (item, amount = null) => {
    if (amount) {
      if (player.coin >= item.price * amount) {
        confirmOffer(item, amount);
      } else {
        setModalText('Você não possui dinheiro suficiente para esta compra.');
      }
    } else if (player.coin >= item.price * item.amount) {
      confirmOffer(item);
    } else {
      setModalText('Você não possui dinheiro suficiente para esta compra.');
    }
  }

  const selectType = () => {
    if (type !== '') {
      return offers.all.filter(i => i.type == type);
    } else {
      return offers.all;
    }
  }

  return (
    <View style={styles.container}>
      <Rodada name={'Propostas'} />
      <Coin coin={player.coin} />
      {modalText !== '' && <Modal onClick={() => setModalText('')} text={modalText} />}
      <Text style={styles.text}>Anúncios</Text>
      <FilterType type={type} setType={setType} />
      {offers && offers.all && offers.all.length === 0 ?
        <Text style={{ flex: 1, textAlign: 'center', fontFamily: 'Rubik_700Bold', fontSize: 18, marginVertical: 50 }}>Você não tem nada!</Text>
        : <FlatList
          showsVerticalScrollIndicator={false}
          data={selectType()}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item, index }) => <OfertaGeral key={index} item={item} confirmOffer={confirmPurchase} />}
        />
      }
      <Text style={styles.text}>Negociação individual</Text>
      {offers && offers.individual && offers.individual.length === 0 ?
        <Text style={{ flex: 1, textAlign: 'center', fontFamily: 'Rubik_700Bold', fontSize: 18, marginVertical: 50 }}>Você não tem nada!</Text>
        : <FlatList
          showsVerticalScrollIndicator={false}
          data={offers.individual}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item, index }) => <Oferta item={item} key={index} confirmOffer={confirmPurchase} rejectOffer={rejectOffer} />}
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
    borderRadius: 50,
    borderWidth: 1
  }
});