import React, { useEffect } from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';
import COLORS from '../../styles/Colors';
import Dados from '../../assets/Logo/Dados.png';

export default function SorteioJogador({ navigation, route }) {
  const selectScreen = () => {
    setTimeout(() => {

      let selected = Math.floor(Math.random() * 2)
      if (selected === 1) {
        navigation.reset({
          routes: [{
            name: 'Agricultor1',
            params: {
              host: route.params.host,
              idUser: route.params.idUser
            }
          }]
        })
      }
      if (selected === 0) {
        navigation.reset({
          routes: [{
            name: 'Empresario1',
            params: {
              host: route.params.host,
              idUser: route.params.idUser
            }
          }]
        })
      }
    }, 2000);
  }
  
  useEffect(() => {
    selectScreen();
  }, [])

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Gorim</Text>
      <View style={styles.container}>
        <Image
          style={styles.logo}
          source={Dados}
        />
        <Text style={styles.loading}>Sorteando Personagens...</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: COLORS.bgColorPrimary,
    alignItems: 'center',
    padding: 10,
  },
  header: {
    fontFamily: 'Rubik_400Regular',

    fontWeight: 'normal',
    fontSize: 41.1111,
    lineHeight: 49,
    alignItems: 'center'
  },
  logo: {
    width: 200,
    height: 200
  },
  loading: {
    fontFamily: 'Rubik_400Regular',
    fontSize: 22,
    lineHeight: 32,
    alignItems: 'center',
  }
});