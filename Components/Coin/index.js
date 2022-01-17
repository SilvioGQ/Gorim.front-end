import React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';

import IMAGES from '../../constants/imagesCoins';
export default function Coin({coin}) {
  const PlayerCoin= ()=>{
    if(coin.toString().indexOf('.00') !== -1){
      return coin.toString().slice(0,-3)
    }
    else 
    return coin
  }
  return (
    <View style={styles.container}>
      <Text style={{ fontFamily: 'Rubik_400Regular', fontSize: 19 }}>{PlayerCoin()}</Text>
      <Image style={{ width: 20, height: 23 }} source={IMAGES["Moeda"]} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row-reverse',
    alignItems: 'flex-end',
    paddingTop: 15,
    width: '90%'
  }
});