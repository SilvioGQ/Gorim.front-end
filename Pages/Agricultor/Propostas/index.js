import React, { useState, useEffect, useContext } from 'react';
import { Text, View, StyleSheet, Dimensions, FlatList } from 'react-native';
import { GameContext, confirmOffer, rejectOffer } from "../../../contexts/GameContext";

import Coin from '../../../Components/Coin';
import Oferta from '../../../Components/Oferta';
import OfertaGeral from '../../../Components/OfertaGeral';
import FilterType from '../../../Components/FilterType';
import FilterNew from '../../../Components/FilterNew';
import Modal from '../../../Components/ModalInfo';
import Rodada from '../../../Components/Rodada';
import TextBold from '../../../Components/Atons/TextBold';
const Tela = Dimensions.get('screen').width;
export default function Propostas({navigation}) {
  const [modalText, setModalText] = useState('');
  const [type, setType] = useState('Anuncios');
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
      <Rodada name={'Checar anúncios'} arrow={true} onClick={()=>navigation.navigate('MenuJogador')} />
      <Coin coin={player.coin} />
      {modalText !== '' && <Modal onClick={() => setModalText('')} text={modalText} />}
      <View style={{flex:1}}>
      <Text style={styles.text}>Anúncios</Text>
      {/* <FilterType type={type} setType={setType} /> */}
      <FilterNew type={type} setType={setType} nome1={'Gerais'} nome2={'Individual'}/>
      {type==='Gerais' ? 
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