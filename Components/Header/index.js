import React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';
import IMAGES from '../../resources/imagesIcons'
import Coin from '../Coin';

export default function Header({ player }) {
  return (
    <View style={styles.row}>
      <Text style={styles.header}>{player.type.slice(0,3)}/{player.name}{'\n'}em {player.city}</Text>
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
    marginHorizontal:10,
    marginVertical:15,
    marginLeft:20,
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
  person: {
    width: 46,
    height: 50,
    marginRight: 10
  }
})