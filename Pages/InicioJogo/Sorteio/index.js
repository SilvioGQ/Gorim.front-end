import React, { useEffect, useRef, useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { Text, View, StyleSheet, Image } from 'react-native';
import { Batata } from '../../Api'
import COLORS from '../../../styles/Colors';

import Dados from '../../../assets/Logo/Dados.png';

export default function Frame3() {
  const navigation = useRef(useNavigation());
  const [idJogo, setIdJogo] = useState();
  // const game = () => {
  //   let request = Api.idJogo();
  //   request.then(id => {
  //     setIdJogo(id);
  //     console.log(id);
  //   });
  // }
  const game = () => {
    Batata().then(async (id) => {
      setIdJogo(id.data);
      console.log(idJogo);
    });
  }

  const selectScreen = () => {
    setTimeout(() => {

      let selected = Math.floor(Math.random() * 2)
      if (selected === 1) {
        navigation.current.navigate("Agricultor1");
      }
      if (selected === 0) {
        navigation.current.navigate("Empresario1");
      }
    }, 2000);
  }
  useEffect(() => {
    game();
    selectScreen();
  }, [])

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Gorim</Text>
      <View style={styles.container}>
        <Image style={styles.logo} source={Dados} />
        <Text style={styles.loading}> Sorteando Personagens... </Text>
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