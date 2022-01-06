import React, { useEffect, useContext } from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';
import { GameContext } from "../../../../contexts/GameContext";

export default function Confirmada({ navigation, route }) {
  const { phase } = useContext(GameContext);
  const { text } = route.params;
  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.reset({ routes: [{ name: phase == 2 ? 'MenuPolitico': 'MenuJogador'}] });
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <View style={styles.container}>
      <Image style={styles.logo} source={require('../../../../assets/symbols/confirm.png')} />
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
    fontSize: 22,
    textAlign: 'center'
  }
});
