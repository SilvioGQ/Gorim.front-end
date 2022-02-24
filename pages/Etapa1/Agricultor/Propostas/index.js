import React, { useState, useEffect, useContext } from 'react';
import { Text, View, StyleSheet, Dimensions, FlatList } from 'react-native';
import { GameContext, confirmOffer, rejectOffer } from "../../../../contexts/GameContext";

import Coin from '../../../../components/Coin';
import Oferta from '../../../../components/Oferta';
import OfertaGeral from '../../../../components/OfertaGeral';
import FilterType from '../../../../components/FilterType';
import FilterNew from '../../../../components/FilterNew';
import Modal from '../../../../components/ModalInfo';
import Rodada from '../../../../components/Rodada';
import TextBold from '../../../../components/Atons/TextBold';
import HeaderIcons from '../../../../components/headerIcons';
const Tela = Dimensions.get('screen').width;
export default function Propostas({ navigation }) {
  const [modalText, setModalText] = useState('');
  const [type, setType] = useState('Gerais');
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

  // const selectType = () => {
  //   if (type !== '') {
  //     return offers.all.filter(i => i.type == type);
  //   } else {
  //     return offers.all;
  //   }
  // }

  return (
    <View style={styles.container}>
      <Rodada arrow={true} onClick={() => navigation.navigate('MenuJogador')} />
      <Coin coin={player.coin} />
      {modalText !== '' && <Modal onClick={() => setModalText('')} text={modalText} />}
      <View style={{ flex: 1 }}>
        <HeaderIcons name={'Checar \nAnúncios'} icon='Checar anúncios' />
        {/* <FilterType type={type} setType={setType} /> */}
        <FilterNew type={type} setType={setType} nome1={'Gerais'} nome2={'Individual'} />
        {type === 'Gerais' ?
          !offers.all || offers.all.length === 0 ?
            <TextBold>Não tem anúncios gerais!</TextBold>
            : <FlatList
              showsVerticalScrollIndicator={false}
              data={offers.all}
              keyExtractor={(item, index) => index.toString()}
              renderItem={({ item, index }) => <OfertaGeral key={index} item={item} confirmOffer={confirmPurchase} />}
            />
          :
          !offers.individual || offers.individual.length === 0 ?
            <TextBold>Ninguém te mandou anúncio individual!</TextBold>
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
