import React, { useState, useEffect, useContext } from 'react';
import { Text, View, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
// import { socketContext } from "../../../context/socket";
import { GameContext, getProducts, addAdvert } from "../../../context/GameContext";

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
import Rodada from '../../../Components/Rodada';
export default function Vendas({ navigation, route }) {

  const { name } = route.params;
  const [modalText, setModalText] = useState('');
  const [selectPrice, setSelectPrice] = useState(-1);
  const [selectClient, setSelectClient] = useState();
  const [selectAmount, setSelectAmount] = useState(0);
  const { players, player, data: product, stage } = useContext(GameContext);

  useEffect(() => {
    getProducts(name);
  }, []);
  const confirmTransfer = () => {
    let priceType;
    if (!selectClient) return setModalText('Selecione um Cliente!');
    if (selectPrice == -1) return setModalText('Selecione o Preço!');
    if (selectAmount == -1 || selectAmount == 0) return setModalText('Selecione a quantidade!');
    if (selectPrice == product.cheap) priceType = 'Baixo';
    if (selectPrice == product.medium) priceType = 'Normal';
    if (selectPrice == product.expensive) priceType = 'Alto';
    addAdvert(name, player.speciality, selectPrice, selectClient, selectAmount, priceType);
    navigation.reset({ routes: [{ name: 'TransferenciaConfirmada', params: { text: 'Sua proposta foi enviada com sucesso' } }] });
  }

  const information = () => {
    if (name == 'Pacote 1') return setModalText('Neste pacote contém semeadora.\nProdutividade: \nPoluição:');
    if (name == 'Pacote 2') return setModalText('Neste pacote contêm semeadora, e colheitadeira.\nProdutividade: \nPoluição:');
    if (name == 'Pacote 3') return setModalText('Neste pacote contêm semeadora, colheitadeira e drone.\nProdutividade: \nPoluição:');

    return setModalText('Informações gerais do produto.\nProdutividade: \nPoluição:');
  }

  const filterPlayers = () => {
    let p = [];
    p = players.filter(i => i.id !== player.id && i.type === 'Agricultor');
    p.unshift({ name: 'Todos', avatar: 'Todos', id: -1 });

    return p;
  }

  return (
    <View style={styles.container}>
      <Rodada name={'Criar Anúncio'} />
      <ScrollView showsVerticalScrollIndicator={false}>
        <Coin coin={player.coin} />
        <View style={styles.center}>
          <Image style={styles.person} source={IMAGES[name]} />
          <Text style={styles.header}>Anunciar{'\n'}{name.replace(/Fertilizante |Agrotóxico /, '')} </Text>
          <TouchableOpacity onPress={information}>
            <Image source={require('../../../assets/agricultorIcones/information.png')} style={{ width: 20, height: 20, alignSelf: 'center', marginLeft: 10, marginTop: 20 }} />
          </TouchableOpacity>
        </View>
        <Text style={styles.textos}> Clientes: </Text>
        <View style={{ marginHorizontal: 10, flexDirection: 'row', width: '100%', flexWrap: 'wrap' }}>
          {filterPlayers().map((item) => <Quadrados key={item.id} player={item} onClick={() => setSelectClient(item.id)} backgroundColor={selectClient == item.id ? '#8ACF3A' : '#fff'} />)}
        </View>
        {modalText !== '' && (
          <Modal onClick={() => setModalText('')} text={modalText} />
        )}
        <Text style={styles.textos}> Valor: </Text>
        {stage === 'GETPRODUCTS' && (
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
        )}
        <Text style={{ fontSize: 18, fontFamily: 'Rubik_300Light', marginHorizontal: 15, marginTop: 30, marginBottom: 15 }}>Quantidade:</Text>
        {selectClient == -1 && <CaixaDeValor value={selectAmount} setValue={setSelectAmount} increment={1} />}
        {selectClient !== -1 && <Quantidades selectAmount={selectAmount} setSelectAmount={setSelectAmount} />}
      </ScrollView>
      <Button onClick={confirmTransfer} name={selectClient == -1 ? 'ANUNCIAR' : 'VENDER'} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.bgColorPrimary,
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
    marginTop: 5,
  },
  colunm: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: COLORS.textWhite,
    width: 90,
    height: 78,
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
    marginLeft: 10
  },
  textos: {
    fontSize: 18,
    fontFamily: 'Rubik_300Light',
    marginHorizontal: 15,
    marginTop: 30
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