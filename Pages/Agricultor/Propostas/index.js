import React, { useState, useEffect, useContext } from 'react';
import { Text, View, StyleSheet, Dimensions, FlatList, StatusBar, TouchableOpacity } from 'react-native';
import { socketContext } from "../../../context/socket";
import { GameContext } from "../../../context/GameContext";

import Coin from '../../../Components/Coin';
import Oferta from '../../../Components/Oferta';
import OfertaGeral from '../../../Components/OfertaGeral';
import FilterType from '../../../Components/FilterType';
import COLORS from '../../../resources/colors';
import Modal from '../../../Components/ModalInfo';
import Rodada from '../../../Components/Rodada';
const Tela = Dimensions.get('screen').width;
export default function Propostas() {

  const [offersIndividual, setOffersIndividual] = useState([]);
  const [offersAll, setOffersAll] = useState([]);
  const { players, player } = useContext(GameContext);
  const socket = useContext(socketContext);
  const [modalText, setModalText] = useState('');
  const [type, setType] = useState('')
  useEffect(() => {
    socket.emit('getOffers', -1, resp => { setOffersAll(resp) });
    socket.emit('getOffers', player.id, resp => setOffersIndividual(resp));
    socket.on('newOffers', resp => setOffersAll(resp));
  }, []);

  const confirmOffer = item => {
    if (player.coin >= item.price * item.amount) {
      socket.emit('respOffer', true, item, resp => setOffersIndividual(resp));
    } else {
      setModalText('Você não possui dinheiro suficiente para esta compra.')
    }
  }

  const confirmOfferAll = (item, count) => {
    if (player.coin >= item.price * count) {
      socket.emit('respOfferAll', item, count, resp => setOffersAll(resp));
    } else {
      setModalText('Você não possui dinheiro suficiente para esta compra.');
    }
  }

  const rejectOffer = item => {
    socket.emit('respOffer', false, item, resp => setOffersIndividual(resp));
  }
  const selectType = () => {
    if (type !== '') {
      return offersAll.filter(i => i.type == type);
    } else {
      return offersAll;
    }
  }

      // if (count == player.inventory.length) player.inventory.push({ type: item.type, name: item.product, amount: 1 });
      // if (item.idBuyer != -1) FunctionalityService.deleteOffer(item);
      // if(item.amount == -1) item.amount = amount;
      // let price = item.price * item.amount;
      // PlayerService.addInvetory(player)
      // FunctionalityService.makeTransfer(player.id, item.idSeller, price);
      // player.coin -= item.price * item.amount
      // PlayerService.getPlayer(item.idSeller).then(resp => {
      //   <HistoricosDinheiro player={player} amount={item.amount} price={item.price} product={item.product} />
      //   let text = 'Você Comprou ' + item.amount + ' unidade(s) de ' + item.product + ' do ' + resp.name + ' por ' + price + '$'
      //   PlayerService.addLog(text, player)
      //   let text2 = 'Você vendeu ' + item.amount + ' unidade(s) de ' + item.product + ' para o ' + player.name + ' por ' + price + '$'
      //   PlayerService.addLog(text2, resp)
      // });
    // } else {
    //   setModalText('Você não possui dinheiro suficiente para esta compra.')
    // }
  // }
  // const rejectOffer = item => {
  //   FunctionalityService.deleteOffer(item);
  // }
  return (
    <View style={styles.container}>
      <Rodada name={'Propostas'}/>
      <Coin coin={player.coin} />
      {modalText !== '' && (
        <Modal onClick={() => setModalText('')} text={modalText} />
      )}
      <Text style={styles.text}>Anúncios</Text>
      <FilterType type={type} setType={setType}/>
      {offersAll.length === 0 && (
        <Text style={{ flex: 1, textAlign: 'center', fontFamily: 'Rubik_700Bold', fontSize: 18, marginVertical: 50 }}>Você não tem nada!</Text>
      )}
      <FlatList
        showsVerticalScrollIndicator={false}
        data={selectType()}
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
      {/* tem que fazer funcionar <OfertaGeral/> */}
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