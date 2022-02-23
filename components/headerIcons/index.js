import React from 'react';
import { Text, View, StyleSheet, Image, Dimensions } from 'react-native';
import IMAGES from '../../constants/imagesMenu'
const Tela = Dimensions.get('screen').width;
export default function HeaderIcons({ name, icon }) {
  return (
    <View style={styles.header}>
    <Image source={IMAGES[icon]} style={styles.icon} />
    <Text style={styles.textFont}>{name}</Text>
  </View>
  );
}

const styles = StyleSheet.create({
    header: {
        flexDirection: 'row',
        alignSelf: 'center',
        justifyContent: 'center',
        margin: 15,
        width: Tela
      },
      textFont: {
        fontSize: 20,
        marginLeft:10,
        alignSelf: 'center',
      },
      icon: {
        width: 63,
        height: 61
      },
});