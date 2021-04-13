import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, Image, TouchableOpacity, Dimensions } from 'react-native';

import COLORS from '../../resources/colors';
import Empresario from '../../assets/perfils/empresariox1/Fertilizante.png';
import imagesProducts from '../../resources/imagesProducts';
import imagesCoins from '../../resources/imagesCoins';

import PlayerService from '../../services/PlayerService';
import FunctionalityService from '../../services/FunctionalityService';

const Tela = Dimensions.get('screen').width;
export default function Oferta({ item }) {
  const [nameSeller, setNameSeller] = useState('');
  const [coin, setCoin] = useState('');

  useEffect(() => {
    PlayerService.getPlayer(item.idSeller).then(resp => setNameSeller(resp.name));
    FunctionalityService.getProduct(item.product).then(resp => {
      if(item.price == resp[0].cheap) setCoin('Barato');
      if(item.price == resp[0].medium) setCoin('Médio');
      if(item.price == resp[0].expensive) setCoin('Caro');
    })
  },[]);

  return (
    <View style={styles.colunm}>
      <View style={styles.row3}>
        <View style={{ marginTop: 10 }}>
          <Image
            style={styles.person}
            source={Empresario}
          />
          <Text style={styles.text}>{nameSeller}</Text>
        </View>
        <View>
          <Text style={styles.text}>Produto:</Text>
          <Text style={styles.textBold}>{item.product}</Text>
        </View>
        <Image
          style={styles.icone}
          source={imagesProducts[item.product]}
        />
        <View>
          <Text style={styles.text}>Preço:</Text>
          <Text style={styles.textBold}>{item.price}</Text>
        </View>
        <Image
          style={styles.icone}
          source={imagesCoins[coin]}
        />
      </View>
      <Text style={styles.text}> Quantidade: {item.amount}</Text>
      <View style={styles.row3}>
        <TouchableOpacity style={[styles.button, { backgroundColor: '#66BF00' }]}>
          <Text style={styles.textbutton}>CONFIRMAR</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.button, { backgroundColor: '#BF0000' }]}>
          <Text style={styles.textbutton}>REJEITAR</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  colunm: {
    backgroundColor: COLORS.bgColorPrimary,
    borderRadius: 20,
    width: Tela,
    height: 160,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.32,
    shadowRadius: 5.46,

    elevation: 6,
    marginVertical: 15
  },
  button: {
    width: 140,
    height: 30,
    borderRadius: 15,
    backgroundColor: COLORS.warningButton,
    padding: 10
  },
  textbutton: {
    color: COLORS.textWhite,
    fontSize: 9,
    textAlign: 'center',
    fontFamily: 'Rubik_400Regular'
  },
  row3: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginVertical: 5,
  },
  icone: {
    width: 36,
    height: 36,
    alignSelf: 'center',
    marginTop: -30
  },
  person: {
    width: 56,
    height: 58,
    alignSelf: 'center',
  },
  textBold: {
    fontSize: 15,
    fontFamily: 'Rubik_400Regular',
    fontWeight: 'bold'
  },
  text: {
    textAlign: 'center',
    fontSize: 15,
    alignItems: 'center',
  }
});