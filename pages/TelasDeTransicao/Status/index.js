import React, { useContext, useEffect } from 'react';
import { Text, View, StyleSheet, Image, ScrollView, StatusBar, Dimensions } from 'react-native';
import { GameContext } from '../../../contexts/GameContext';

import COLORS from '../../../constants/colors';
import ICONS from '../../../constants/imagesIcons';
import normalizeNumber from '../../../helpers/normalizeNumber';

const Tela = Dimensions.get('screen').width;
export default function Status({ navigation }) {

  const { player, data: round, stage, game, timer } = useContext(GameContext);

  useEffect(() => {
    if (stage === 'NAVIGATEFORMENU') navigation.reset({ routes: [{ name: 'MenuJogador' }] });
    if (stage === 'NAVIGATEFORMENUPOLITIC') navigation.reset({ routes: [{ name: 'MenuPolitico' }] });
    if (stage === 'NAVIGATEFORLOBBY') navigation.reset({ routes: [{ name: 'Lobby' }] });
    if (stage === 'NEXTSTAGE') navigation.reset({ routes: [{ name: 'MenuPolitico' }] });
    if (stage === 'INITELECTIONS') navigation.reset({ routes: [{ name: 'Candidatura' }] });
  }, [stage]);

  return (
    <View style={{ flex: 1 }}>
      <StatusBar backgroundColor={COLORS.bgColorPrimary} barStyle={'dark-content'} />
      <ScrollView>
        <View style={styles.container}>
          <View style={styles.containerescuro}>
            <Text style={styles.text}>RESUMO DA ETAPA 1</Text>
            <Image source={ICONS[player.avatar]} style={styles.img} />
            <Text style={styles.text2}>{player.type ? player.type.slice(0, 3) : ''}{player.type === 'Empresário' ? player.specialty[0] : ''}/{player.name} em {player.city}</Text>
            <View style={styles.circulo}>
              <Text style={styles.text3}>Poluição global: {normalizeNumber(game.globalPollution)}%</Text>
            </View>
            <View style={styles.circulo}>
              <Text style={styles.text3}>Poluição individual: {normalizeNumber(player.pollution)}</Text>
            </View>
            <View style={styles.circulo}>
              <Text style={styles.text3}>Imposto pago: ${normalizeNumber(round.tax.value)} {round.tax.percentual ? '= (' + normalizeNumber(round.tax.percentual) + '%)' : ''}</Text>
            </View>
            <View style={styles.circulo}>
              <Text style={styles.text3}>Produtividade: ${normalizeNumber(round.totalProduction)} = ({normalizeNumber(game.globalProduction)}%)</Text>
            </View>
            <View style={styles.circulo}>
              <Text style={styles.text3}>Saldo atual: ${normalizeNumber(player.coin)}</Text>
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
    paddingVertical: 30,
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
    marginTop: 17,
    fontSize: 16,
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
    width: '88%',
    height: Tela > 350 ? 51 : 46,
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
