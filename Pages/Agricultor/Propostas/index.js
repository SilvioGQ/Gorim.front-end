import React, { useState, useEffect, useContext } from 'react';
import { Text, View, StyleSheet, Dimensions, FlatList } from 'react-native';
import { GameContext, confirmOffer, rejectOffer } from "../../../contexts/GameContext";

import Coin from '../../../Components/Coin';
import Oferta from '../../../Components/Oferta';
import OfertaGeral from '../../../Components/OfertaGeral';
import FilterType from '../../../Components/FilterType';
import Modal from '../../../Components/ModalInfo';
import Rodada from '../../../Components/Rodada';
import TextBold from '../../../Components/Atons/TextBold';
const Tela = Dimensions.get('screen').width;
export default function Propostas({navigation}) {
  const [modalText, setModalText] = useState('');
  const [type, setType] = useState('');
  const { player, offers, disableNotifyOffers } = useContext(GameContext);

  useEffect(() => {
    disableNotifyOffers();
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
      <Rodada name={'Propostas'} arrow={true} onClick={()=>navigation.navigate('MenuJogador')} />
      <Coin coin={player.coin} />
      {modalText !== '' && <Modal onClick={() => setModalText('')} text={modalText} />}
      <View style={{flex:1.50}}>
      <Text style={styles.text}>Anúncios</Text>
      <FilterType type={type} setType={setType} />
      {!offers.all || offers.all.length === 0 ?
          <TextBold>Você não tem nada!</TextBold>
          : <FlatList
            showsVerticalScrollIndicator={false}
            data={selectType()}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({ item, index }) => <OfertaGeral key={index} item={item} confirmOffer={confirmPurchase} />}
          />
      }
      </View>
      <View style={{flex:1}}>
      <Text style={styles.text}>Negociação individual</Text>
      {!offers.individual || offers.individual.length === 0 ?
          <TextBold>Você não tem nada!</TextBold>
          : <FlatList
            showsVerticalScrollIndicator={false}
            data={offers.individual}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({ item, index }) => <Oferta item={item} key={index} confirmOffer={confirmPurchase} rejectOffer={rejectOffer} />}
          />
      }
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  text: {
    textAlign: 'center',
    fontSize: 20,
    marginVertical: 5
  }
});