import React, { useState, useEffect, useContext } from 'react';
import { Text, View, StyleSheet, Image, TouchableOpacity, Dimensions } from 'react-native';
import { GameContext } from "../../contexts/GameContext";

import COLORS from '../../constants/colors';
import imagesProducts from '../../constants/imagesProducts';
import imagesCoins from '../../constants/imagesCoins';
import ICONS from '../../constants/imagesIcons'
import normalizeNumber from '../../helpers/normalizeNumber';

const Tela = Dimensions.get('screen').width;
export default function Oferta({ item, confirmOffer }) {
  const [count, setCount] = useState(1);
  const { player, players } = useContext(GameContext);

  selectPlayer = (id) => {
    return players.find(player => player.id === id);
  }
  const increaseCount = () => { setCount(count < (item.amount > 6 ? 6 : item.amount) ? count + 1 : count); }
  const decreaseCount = () => { setCount(count > 1 ? count - 1 : count); }

  return (
    <View>
      <Text style={styles.text1}>Ainda restam {item.amount} produtos</Text>
      <View style={styles.colunm}>
        <View style={styles.row3}>
          <View>
            <Image
              style={styles.person}
              source={ICONS[item.avatarSeller]}
            />
            <Text style={styles.text}>{this.selectPlayer(item.idSeller).name}</Text>
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
            <Text style={styles.textBold}>${normalizeNumber(item.price)}</Text>
          </View>
          <Image
            style={styles.icone}
            source={imagesCoins[item.priceType]}
          />
        </View>
        <View style={styles.row}>
          <TouchableOpacity style={styles.button} onPress={() => { confirmOffer(item, count); setCount(1); }}  >
            <Text style={styles.textbutton}>COMPRAR</Text>
          </TouchableOpacity>
          <Text style={styles.text}> Quantidade:</Text>
          <View style={styles.arrows}>
            <TouchableOpacity onPress={decreaseCount}  >
              <Text style={styles.textDecrease}>-</Text>
            </TouchableOpacity>
            <View style={styles.buttonAmount}>
              <Text style={styles.textAmount}>{count > item.amount ? item.amount : count}</Text>
            </View>
            <TouchableOpacity onPress={increaseCount}  >
              <Text style={styles.textIncrease}>+</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  colunm: {
    marginLeft: 15,
    backgroundColor: COLORS.bgColorPrimary,
    borderRadius: 20,
    width: Tela - 30,
    paddingVertical: 10,
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
    backgroundColor: COLORS.successButton,
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
  },
  row3: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 10,
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
    marginTop: 5
  },
  text1: {
    fontSize: 13,
    marginTop: 2,
    marginLeft: 15,
    fontFamily:'Rubik_700Bold'
  },
  arrows: {
    flexDirection: 'row',
    alignSelf: 'center',
    justifyContent: 'center',
  },
  buttonAmount: {
    backgroundColor: COLORS.textWhite,
    borderWidth: 1,
    borderRadius: 20,
    height: 30,
    width: 50
  },
  textAmount: {
    alignSelf: 'center',
    marginTop: 3,
    fontFamily: 'Rubik_400Regular',
    fontSize: 18
  },
  textIncrease: {
    alignSelf: 'center',
    marginTop: -8,
    marginLeft: 7.5,
    fontFamily: 'Rubik_400Regular',
    fontSize: 36,
    color: '#FF1C1C'
  },
  textDecrease: {
    alignSelf: 'center',
    marginTop: -5,
    marginRight: 7.5,
    fontFamily: 'Rubik_400Regular',
    fontSize: 36,
    color: '#1F4EC8'
  }
});
