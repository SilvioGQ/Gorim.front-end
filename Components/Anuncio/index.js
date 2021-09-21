import React, { useState, useContext } from 'react';
import { Text, View, StyleSheet, Image, TouchableOpacity, Dimensions } from 'react-native';

import COLORS from '../../constants/colors';
import imagesProducts from '../../constants/imagesProducts';
import IMAGES from '../../constants/imagesIcons';
import { GameContext } from '../../contexts/GameContext';
const Tela = Dimensions.get('screen').width;
export default function Anuncio({ item, Historico, deleteAdvert }) {

  const { players } = useContext(GameContext);
  const Buyer = () => {
    let p = players.filter(i => i.id == item.idBuyer);
    return p[0].name;
  }
  return (
    <View style={styles.colunm}>
      <View style={styles.row3}>
        <Image
          style={styles.icone}
          source={imagesProducts[item.name]}
        />
        <View>
          <Text style={styles.text}>Produto:</Text>
          <Text style={styles.textBold}>{item.name}</Text>
        </View>
        <View>
          <Text style={styles.text}>Valor:</Text>
          <Text style={styles.textBold}>{item.priceType}</Text>
        </View>
        <Text style={styles.textNormal}>${item.price}</Text>
        <TouchableOpacity onPress={() => deleteAdvert(item.id)} activeOpacity={0.7}>
          <Image source={require('../../assets/agricultorIcones/FecharVermelho.png')} style={{ width: 20, height: 20 }} />
        </TouchableOpacity>
      </View>
      <View style={styles.row}>
        <Text style={styles.textCenter}> {item.idBuyer !== -1 ? `Você ofereceu ${item.amount} produto(s) para ${Buyer()}` : `Ainda restam: ${item.amount} produto(s)`}</Text>
        {item.idBuyer !== -1 ?
          null
          :
          <TouchableOpacity style={[styles.button, { backgroundColor: '#66BF00' }]} onPress={Historico} activeOpacity={0.7}>
            <Text style={styles.textbutton}>RESUMO</Text>
          </TouchableOpacity>
        }
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  colunm: {
    marginLeft: 15,
    backgroundColor: COLORS.bgColorSecondary,
    borderRadius: 20,
    width: Tela - 30,
    height: 130,
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
    width: 100,
    borderRadius: 20,
    backgroundColor: COLORS.warningButton,
    padding: 12
  },
  textbutton: {
    color: COLORS.textWhite,
    fontSize: 12,
    textAlign: 'center',
    fontFamily: 'Rubik_400Regular'
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginVertical: 5,
  },
  row3: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 15,
    marginBottom: 5
  },
  icone: {
    width: 50,
    height: 50,
    alignSelf: 'center',
    marginTop: -5
  },
  textBold: {
    fontSize: 13,
    fontFamily: 'Rubik_400Regular',
    fontWeight: 'bold',
  },
  textNormal: {
    fontSize: 24,
    fontFamily: 'Rubik_300Light',
  },
  text: {
    textAlign: 'center',
    fontSize: 15,
    marginBottom: 2
  },
  textCenter: {
    textAlign: 'center',
    fontSize: 15,
    marginTop: 8
  }
});