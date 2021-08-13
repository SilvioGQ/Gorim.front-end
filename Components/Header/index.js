import React, { useContext } from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';
import IMAGES from '../../resources/imagesIcons'
import Coin from '../Coin';
import { GameContext } from "../../context/GameContext";

export default function Header() {

  const mudarcor = (valor) => {
    if (valor >= 20 && valor <= 50) return '#FF0000';
    if (valor > 50 && valor <= 80) return '#A50000';
    if (valor > 80 && valor <= 100) return '#000000';
  }
  const { player, globalPollution } = useContext(GameContext);
console.log(globalPollution)
  return (
    <View style={styles.row}>
      <Text style={styles.header}>{player.type ? player.type.slice(0, 3) : ''}/{player.name}{'\n'}em {player.city}</Text>
      <View style={{ flexDirection: 'row', paddingTop: 15 }}>
        <Image
          style={styles.pollution}
          source={require('../../assets/agricultorIcones/Barril.png')}
        />
        <Text style={{ color: mudarcor(globalPollution), fontSize: 21, fontFamily: 'Rubik_400Regular', marginLeft: 3 }}>{globalPollution}%</Text>
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