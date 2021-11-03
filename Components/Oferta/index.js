import React from 'react';
import { Text, View, StyleSheet, Image, TouchableOpacity, Dimensions } from 'react-native';

import COLORS from '../../constants/colors';
import imagesProducts from '../../constants/imagesProducts';
import imagesCoins from '../../constants/imagesCoins';
import IMAGES from '../../constants/imagesIcons';

const Tela = Dimensions.get('screen').width;
export default function Oferta({ item, confirmOffer, rejectOffer }) {
  return (
    <View style={styles.colunm}>
      <View style={styles.row3}>
        <View>
          <Image
            style={styles.person}
            source={IMAGES[item.avatarSeller]}
          />
          <Text style={styles.text}>{item.idSeller.name}</Text>
        </View>
        <View>
          <Text style={styles.text}>Produto:</Text>
          <Text style={styles.textBold}>{item.name}</Text>
        </View>
        <Image
          style={styles.icone}
          source={imagesProducts[item.name]}
        />
        <View>
          <Text style={styles.text}>Preço:</Text>
          <Text style={styles.textBold}>${item.price}</Text>
        </View>
        <Image
          style={styles.icone}
          source={imagesCoins[item.priceType]}
        />
      </View>
      <Text style={styles.text2}> Quantidade: {item.amount}</Text>
      <View style={styles.row}>
        <TouchableOpacity style={[styles.button, { backgroundColor: '#66BF00' }]} onPress={() => confirmOffer(item)}  >
          <Text style={styles.textbutton}>CONFIRMAR</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => rejectOffer(item)}  >
          <Text style={styles.textbutton}>REJEITAR</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  colunm: {
    marginLeft:15,
    backgroundColor: COLORS.bgColorPrimary,
    borderRadius: 20,
    width: Tela-30,
    paddingVertical:10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.32,
    shadowRadius: 5.46,
    elevation: 6,
    marginVertical: 10
  },
  button: {
    width: 120,
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
    justifyContent: 'space-evenly',
    marginTop: -5,
  },
  row3: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 15,
  },
  icone: {
    width: 36,
    height: 36,
    alignSelf: 'center',
    marginTop: -25
  },
  person: {
    width: 56,
    height: 56,
  },
  textBold: {
    fontSize: 13,
    fontFamily: 'Rubik_400Regular',
    fontWeight: 'bold',
  },
  text: {
    textAlign: 'center',
    fontSize: 15,
    marginBottom:1
  },
  text2: {
    textAlign: 'center',
    fontSize: 15,
    marginBottom:7
  }
});