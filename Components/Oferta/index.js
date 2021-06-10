import React, { useState, useEffect, useContext } from 'react';
import { Text, View, StyleSheet, Image, TouchableOpacity, Dimensions } from 'react-native';

import COLORS from '../../resources/colors';
import imagesProducts from '../../resources/imagesProducts';
import imagesCoins from '../../resources/imagesCoins';
import IMAGES from '../../resources/imagesIcons'
import PlayerService from '../../services/PlayerService';
import { socketContext } from "../../context/socket";
const Tela = Dimensions.get('screen').width;
export default function Oferta({ item, confirmOffer, rejectOffer }) {
  const [player, setPlayer] = useState();
  const socket = useContext(socketContext);
  const [coin, setCoin] = useState('');

  useEffect(() => {
    console.log(item)
    console.log(player)
    socket.emit('getPlayers', p => {
      p = p.filter(i => i.id === item.idSeller );
      setPlayer(p);
    });
    // PlayerService.getPlayer(item.idSeller).then(setPlayer);
       setPlayer('Icon3');
    socket.emit('getProducts', item.name, p => {
      if(item.price == p.cheap) setCoin('Barato');
      if(item.price == p.medium) setCoin('Médio');
      if(item.price == p.expensive) setCoin('Caro');
    })
  },[]);

  return (
    <View style={styles.colunm}>
      <View style={styles.row3}>
        <View>
          <Image
            style={styles.person}
            source={IMAGES[player]}
          />
          <Text style={styles.text}>Silvio</Text>
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
          source={imagesCoins[coin]}
        />
      </View>
      <Text style={styles.text}> Quantidade: {item.amount}</Text>
      <View style={styles.row}>
        <TouchableOpacity style={[styles.button, { backgroundColor: '#66BF00' }]} onPress={() => confirmOffer(item)}>
          <Text style={styles.textbutton}>CONFIRMAR</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.button, { backgroundColor: '#BF0000' }]} onPress={() => rejectOffer(item)}>
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
    height: 185,
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
    width: 160,
    borderRadius: 20,
    backgroundColor: COLORS.warningButton,
    padding: 15
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
    marginBottom:5
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
  },
  textBold: {
    fontSize: 13,
    fontFamily: 'Rubik_400Regular',
    fontWeight: 'bold',
  },
  text: {
    textAlign: 'center',
    fontSize: 15,
    marginBottom:2
  }
});