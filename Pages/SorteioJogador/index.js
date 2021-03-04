import React, { useEffect } from 'react';
import { Text, View, StyleSheet, Image, YellowBox } from 'react-native';

import COLORS from '../../styles/Colors';
import Dados from '../../assets/Logo/Dados.png';
import PlayerService from '../../services/PlayerService';

export default function SorteioJogador({ navigation, route }) {
  
  useEffect(() => {
    if(route.params.host) { 
      PlayerService.typesRaffle(route.params.room);
    }
    
    setTimeout(() => {
      navigation.reset({
        routes: [{
          name: 'MenuJogador',
          params: {
            host: route.params.host,
            idUser: route.params.idUser,
            room: route.params.room
          }
        }]
      })
    }, 2000);
    
    YellowBox.ignoreWarnings(['Setting a timer']);
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