import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, Dimensions, FlatList, StatusBar } from 'react-native';

import Coin from '../../../Components/Coin';
import Oferta from '../../../Components/Oferta';
import OfertaGeral from '../../../Components/OfertaGeral';
import HistoricosDinheiro from '../../../Components/HistóricosDinheiro';
import COLORS from '../../../resources/colors';
import FunctionalityService from '../../../services/FunctionalityService';
import PlayerService from '../../../services/PlayerService';
import Modal from '../../../Components/ModalInfo'
const Tela = Dimensions.get('screen').width;
export default function Proposta({ route }) {
  const [offersIndividual, setOffersIndividual] = useState([]);
  const [offersAll, setOffersAll] = useState([]);
  const { player } = route.params;
  const [modalText, setModalText] = useState('');

  useEffect(() => {
    // setTimeout(() => {
    FunctionalityService.getOffers(player.id, player.room).then(setOffersIndividual);
    FunctionalityService.getOffers(-1, player.room).then(setOffersAll);
    // }, 100)
  }, []);
  const confirmOffer = (item, amount = null) => {
    let count = 0;
    if (player.coin >= item.price * item.amount) {
      player.inventory.filter(i => {

        if (item.product == i.name) {
          i.amount++;
        } else { count++; }
      });

      if (count == player.inventory.length) player.inventory.push({ type: item.type, name: item.product, amount: 1 });
      if (item.idBuyer != -1) FunctionalityService.deleteOffer(item);
      if (item.amount == -1) item.amount = amount;
      let price = item.price * item.amount;
      PlayerService.addInvetory(player)
      FunctionalityService.makeTransfer(player.id, item.idSeller, price);
      player.coin -= item.price * item.amount
      FunctionalityService.getOffers(player.id, player.room).then(setOffersIndividual);
      FunctionalityService.getOffers(-1, player.room).then(setOffersAll);
      PlayerService.getPlayer(item.idSeller).then(resp => {
        // <HistoricosDinheiro player={player} amount={item.amount} price={item.price} product={item.product} />
        let text = 'Você Comprou ' + item.amount + ' unidade(s) de ' + item.product + ' do ' + resp.name + ' por ' + price + '$'
        PlayerService.addNegociation(text, player)
        let text2 = 'Você vendeu ' + item.amount + ' unidade(s) de ' + item.product + ' para o ' + player.name + ' por ' + price + '$'
        PlayerService.addNegociation(text2, resp)
      });
    } else {
      setModalText('Você não possui dinheiro suficiente para esta compra.')
    }
  }
  const rejectOffer = item => {
    FunctionalityService.deleteOffer(item);
    FunctionalityService.getOffers(player.id, player.room).then(setOffersIndividual);
  }
  return (
    <View style={styles.container}>
      <Coin coin={player.coin} />
      <Text style={styles.header}>Propostas</Text>
      {modalText !== '' && (
        <Modal onClick={() => setModalText('')} text={modalText} />
      )}
      <Text style={styles.text}>Oferta para todos</Text>
      {offersAll.length === 0 && (
        <Text style={{ flex: 1, textAlign: 'center', fontFamily: 'Rubik_700Bold', fontSize: 18, marginVertical: 50 }}>Você não tem nada!</Text>
      )}
      <FlatList
        showsVerticalScrollIndicator={false}
        data={offersAll}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => <OfertaGeral item={item} confirmOffer={confirmOffer} />}
      />
      <Text style={styles.text}>Negociação individual</Text>
      {offersIndividual.length === 0 && (
        <Text style={{ flex: 1, textAlign: 'center', fontFamily: 'Rubik_700Bold', fontSize: 18, marginVertical: 50 }}>Você não tem nada!</Text>
      )}
      <FlatList
        showsVerticalScrollIndicator={false}
        data={offersIndividual}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => <Oferta item={item} confirmOffer={confirmOffer} rejectOffer={rejectOffer} />}
      />
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