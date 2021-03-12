import React from 'react';
import { Text, View, StyleSheet, Image, Dimensions } from 'react-native';

import Money from '../Dinheiro';
import Stamp from '../../assets/moedas/Selo.png';

const Tela = Dimensions.get('screen').width;
export default function Header({ player, image }) {

  return (
    <View style={styles.row3}>
      <Text style={styles.header}>{player.name}{'\n'}em Atlantis</Text>
      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        {player.stamp && (
          <Image
            style={styles.logo}
            source={Stamp}
          />
        )}
      </View>
      <View>
        <Money coin={player.coin} />
      </View>
      <Image
        style={styles.person}
        source={image}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  row3: {
    flexDirection: 'row',
    alignSelf: 'flex-start',
    justifyContent: 'space-around',
    margin: '3%',
    width: Tela
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
    marginRight: '5%'
  }
})
//alt shift f