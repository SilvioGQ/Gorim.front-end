import React, { useEffect } from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';

import COLORS from '../../../resources/colors';
import Confirmacao from '../../../assets/Logo/confirmacao.png';

export default function Confirmada({ navigation, route }) {
  const { text } = route.params;

  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.reset({ routes: [{ name: 'MenuJogador'}] });
    }, 3500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <View style={styles.container}>
      <Image style={styles.logo} source={Confirmacao} />
      <Text style={styles.text}>{text}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: COLORS.bgColorPrimary,
    alignItems: 'center'
  },
  logo: {
    height: 180,
    width: 180,
  },
  text: {
    marginTop: 40,
    fontFamily: 'Rubik_300Light',
    fontWeight: 'normal',
    fontSize: 22,
    textAlign: 'center'
  }
});
