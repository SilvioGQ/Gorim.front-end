import React, { useState, useContext, useEffect } from 'react';
import { Text, View, StyleSheet, Image, ScrollView, StatusBar } from 'react-native';
import { GameContext } from '../../contexts/GameContext';

import COLORS from '../../constants/colors';
import IMAGES from '../../constants/imagesIcons';

export default function Status({ navigation }) {
  
  const { player, globalPollution, data: round, stage, globalProduction, startTime, timer } = useContext(GameContext);

  // useEffect(() => {
  //   startTime(15, 'NEXTSTAGE');
  // }, []);

  useEffect(() => {
    if (stage === 'NEXTROUND') navigation.reset({ routes: [{ name: 'MenuPolitico' }] });
  }, [stage]);

  return (
    <View style={{ flex: 1 }}>
      <StatusBar backgroundColor={COLORS.bgColorPrimary} barStyle={'dark-content'} />
      <ScrollView>
        <View style={styles.container}>
          <View style={styles.containerescuro}>
            <Text style={styles.text}>RESUMO DA ETAPA</Text>
            <Image source={IMAGES[player.avatar]} style={styles.img} />
            <Text style={styles.text2}>{player.type ? player.type.slice(0, 3) : ''}{player.type === 'Empresário' ? player.specialty[0] : ''}/{player.name} em {player.city}</Text>
            <View style={styles.circulo}>
              <Text style={styles.text3}>Poluição global: {globalPollution}%</Text>
            </View>
            <View style={styles.circulo}>
              <Text style={styles.text3}>Poluição individual: {player.pollution.toFixed(1)}</Text>
            </View>
            <View style={styles.circulo}>
              <Text style={styles.text3}>Imposto pago: ${round.tax.value} {round.tax.percentual ? '= (' +  round.tax.percentual + '%)' : ''}</Text>
            </View>
            <View style={styles.circulo}>
              <Text style={styles.text3}>Produtividade $: {round.totalProduction} = ({globalProduction}%)</Text>
            </View>
            <View style={styles.circulo}>
              <Text style={styles.text3}>Saldo atual: ${player.coin}</Text>
            </View>
            {/* <View style={styles.circulo}>
              <Text style={styles.text3}>Multa: {round.fine > 0 ? round.fine + '$' : round.nameFine}</Text>
              </View>
            <View style={styles.circulo}>
              <Text style={styles.text3}>Produtividade global: 70%</Text>
            </View> */}
            <View style={styles.botao}>
              <Text>{timer}</Text>
              {/* <Button onClick={() => { navigation.navigate('') }} name={'AVANÇAR'} /> */}
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  )
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    paddingVertical: 60,
  },
  containerescuro: {
    flex: 1,
    backgroundColor: '#C8EEEA',
    alignItems: 'center',
    borderRadius: 17,
    marginHorizontal: 100,
    width: '90%',
  },
  text: {
    fontSize: 24,
    fontFamily: 'Rubik_400Regular',
    marginVertical: 32,
    color: '#3F5510',
    fontWeight: 'bold'
  },
  text2: {
    fontSize: 18,
    fontFamily: 'Rubik_700Bold',
    marginTop: 10,
    marginBottom: 25,
    textAlign: 'center'
  },
  text3: {
    marginLeft: 20,
    marginTop: 14,
    fontSize: 18,
    fontFamily: 'Rubik_300Light',
  },
  img: {
    height: 85,
    width: 79,
    alignItems: 'center'
  },
  circulo: {
    backgroundColor: '#fff',
    marginVertical: 2,
    borderRadius: 17,
    width: '85%',
    height: 51,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.20,
    shadowRadius: 4.46,
    elevation: 2,
  },
  botao: {
    marginVertical: 25
  }
})