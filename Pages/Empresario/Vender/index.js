import React, { useState, useEffect, useContext } from 'react';
import { Text, View, StyleSheet, Image, TouchableOpacity, StatusBar } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import { socketContext } from "../../../context/socket";
import { playerContext } from "../../../context/player";

import Button from '../../../Components/Button';
import Quadrados from '../../../Components/Quadrado';
import Modal from '../../../Components/ModalInfo'
import Quantidades from '../../../Components/Quantidades';
import COLORS from '../../../resources/colors';
import Coin from '../../../Components/Coin'
import Baixo from '../../../assets/moedas/cheap.png';
import Normal from '../../../assets/moedas/medium.png';
import Alto from '../../../assets/moedas/expensive.png';
import IMAGES from '../../../resources/imagesProducts';
import CaixaDeValor from '../../../Components/CaixaDeValor';

export default function Vendas({ navigation, route }) {

  const { name } = route.params;
  const [modalText, setModalText] = useState('');
  const [players, setPlayers] = useState();
  const [selectPrice, setSelectPrice] = useState(-1);
  const [selectClient, setSelectClient] = useState();
  const [selectAmount, setSelectAmount] = useState(0);
  const [product, setProduct] = useState([]);
  const socket = useContext(socketContext);
  const [player, setPlayer] = useContext(playerContext);
  
  useEffect(() => {
    socket.emit('getPlayers', p => {
      let todos = { name: 'Todos', avatar: 'Todos', id: -1 }
      p = p.filter(i => i.id !== player.id && i.type == 'Agricultor');
      p.unshift(todos);
      setPlayers(p);
    });
    socket.emit('getProducts', name, resp => setProduct(resp));
  }, []);

  const confirmTransfer = () => {
    if (!selectClient) return setModalText('Selecione um Cliente!');
    if (selectPrice == -1) return setModalText('Selecione o Preço!');
    if (selectAmount == -1) return setModalText('Selecione a quantidade!');

    socket.emit('addOffer', name, player.speciality, selectPrice, selectClient, selectAmount);
    navigation.reset({ routes: [{ name: 'TransferenciaConfirmada', params: { text: 'Sua proposta foi enviada com sucesso' } }] });
  }

  return (
    <View style={styles.container}>
      <Coin coin={player.coin} />
      <View style={styles.center}>
        <Image style={styles.person} source={IMAGES[name]} />
        <Text style={styles.header}> Venda de {'\n'} {name} </Text>
      </View>
      <Text style={{ fontSize: 18, fontFamily: 'Rubik_300Light', marginHorizontal: 15, marginTop: 30 }}> Clientes: </Text>
      <View style={{ marginHorizontal: 10, flexDirection: 'row' }}>
        <FlatList
          numColumns={3}
          data={players}
          keyExtractor={item => item.id.toString()}
          renderItem={({ item }) => <Quadrados player={item} onClick={() => setSelectClient(item.id)} backgroundColor={selectClient == item.id ? '#8ACF3A' : '#fff'} />}
        />
      </View>
      {modalText !== '' && (
        <Modal onClick={() => setModalText('')} text={modalText} />
      )}
      <Text style={{ fontSize: 18, fontFamily: 'Rubik_300Light', marginHorizontal: 15, marginTop: 30 }}> Valor: </Text>
      <View style={styles.row}>
        <TouchableOpacity onPress={() => setSelectPrice(product?.cheap)}>
          <View style={[styles.colunm, { backgroundColor: selectPrice == product?.cheap ? "#8ACF3A" : '#fff' }]}>
            <Image style={styles.icone} source={Baixo} />
            <Text style={styles.categoryprice}>Baixo</Text>
            <Text style={styles.price}>${product?.cheap}</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setSelectPrice(product?.medium)}>
          <View style={[styles.colunm, { backgroundColor: selectPrice == product?.medium ? "#8ACF3A" : '#fff' }]}>
            <Image style={styles.icone} source={Normal} />
            <Text style={styles.categoryprice}>Normal</Text>
            <Text style={styles.price}>${product?.medium}</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setSelectPrice(product?.expensive)}>
          <View style={[styles.colunm, { backgroundColor: selectPrice == product?.expensive ? "#8ACF3A" : '#fff' }]}>
            <Image style={styles.icone} source={Alto} />
            <Text style={styles.categoryprice}>Alto</Text>
            <Text style={styles.price}>${product?.expensive}</Text>
          </View>
        </TouchableOpacity>
      </View>
      <Text style={{ fontSize: 18, fontFamily: 'Rubik_300Light', marginHorizontal: 15, marginTop: 30 }}>Quantidade:</Text>
      {selectClient == -1 && <CaixaDeValor value={selectAmount} setValue={setSelectAmount} increment={5} />}
      {selectClient !== -1 && <Quantidades selectAmount={selectAmount} setSelectAmount={setSelectAmount} />}
      <Button onClick={confirmTransfer} name='VENDER' />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.bgColorPrimary,
    paddingTop: StatusBar.currentHeight,
  },
  categoryprice: {
    fontFamily: 'Rubik_300Light',
    fontSize: 12,
    marginTop: 5
  },
  price: {
    fontFamily: 'Rubik_300Light',
    fontSize: 12,
  },
  row: {
    flexDirection: 'row',
    marginHorizontal: 10,
    width: '95%',
    marginVertical: 15,
    justifyContent: 'space-around'
  },
  center: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  colunm: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: COLORS.textWhite,
    width: 96,
    height: 84,
    borderRadius: 20,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.32,
    shadowRadius: 5.46,

    elevation: 6
  },
  header: {
    fontFamily: 'Rubik_300Light',
    fontWeight: 'bold',
    fontSize: 20,
  },
  textos: {
    fontFamily: 'Rubik_300Light',
    marginHorizontal: 15,
    fontSize: 20,
    alignSelf: 'center'
  },
  person: {
    width: 59,
    height: 58
  },
  icone: {
    width: 35,
    height: 35,
  }
});