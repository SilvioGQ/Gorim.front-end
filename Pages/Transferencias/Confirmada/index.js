import React, { useEffect } from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';

export default function Confirmada({ navigation, route }) {
  const { text } = route.params;
  const { Menu } = route.params
  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.reset({ routes: [{ name: Menu == 'MenuPolitico' ? 'MenuPolitico': 'MenuJogador'}] });
    }, 2200);

    return () => clearTimeout(timer);
  }, []);

  return (
    <View style={styles.container}>
      <Image style={styles.logo} source={require('../../../assets/symbols/confirm.png')} />
      <Text style={styles.text}>{text}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  logo: {
    height: 140,
    width: 140,
  },
  text: {
    marginTop: 30,
    fontFamily: 'Rubik_300Light',
    fontWeight: 'normal',
    fontSize: 22,
    textAlign: 'center'
  }
});
