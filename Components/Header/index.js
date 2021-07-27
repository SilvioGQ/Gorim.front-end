import React, { useContext } from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';
import IMAGES from '../../resources/imagesIcons'
import Coin from '../Coin';
import { GameContext } from "../../context/GameContext";

export default function Header() {

  const { player } = useContext(GameContext);
  const mudarcor = (valor) => {
    if (valor <= 20) return '#8ACF3A';
    if (valor > 20 && valor <= 40) return '#FCBB29';
    if (valor > 40 && valor <= 60) return '#FF5C00';
    if (valor > 60 && valor <= 80) return '#E70000';
    if (valor > 80 && valor <= 100) return '#8B0000';
  }
  return (
    <View style={styles.row}>
      <Text style={styles.header}>{player.type ? player.type.slice(0, 3) : ''}/{player.name}{'\n'}em {player.city}</Text>
      <View style={{ flexDirection: 'row', paddingTop: 15 }}>
        <Image
          style={styles.pollution}
          source={require('../../assets/agricultorIcones/Barril.png')}
        />
        <Text style={{ color:mudarcor(0), fontSize: 21, fontFamily: 'Rubik_400Regular', marginLeft: 3 }}>0%</Text>
      </View>
      <View>
        <Coin coin={player.coin} />
      </View>
      <Image style={styles.person} source={IMAGES[player.avatar]} />
    </View>
  )
}

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    alignSelf: 'flex-start',
    justifyContent: 'space-between',
    marginHorizontal: 10,
    marginVertical: 15,
    marginLeft: 20,
    width: '90%'
  },
  header: {
    fontFamily: 'Rubik_400Regular',
    fontSize: 20,
  },
  textos: {
    fontFamily: 'Rubik_300Light',
    fontSize: 20,
    alignSelf: 'center'
  },
  textinhos: {
    fontFamily: 'Rubik_300Light',
    fontSize: 14,
  },
  logo: {
    width: 20,
    height: 23
  },
  pollution: {
    width: 18,
    height: 18,
    marginTop: 2
  },
  person: {
    width: 46,
    height: 50,
    marginRight: 10
  }
})