import React, { useContext, useEffect } from 'react';
import { Text, View, StyleSheet, Image, ScrollView, StatusBar } from 'react-native';
import { GameContext } from '../../contexts/GameContext';

import COLORS from '../../constants/colors';
import IMAGES from '../../constants/imagesIcons';

export default function Status2({ navigation }) {

  const { player, players, globalPollution, data: round, stage, timer, phase } = useContext(GameContext);
  const { oldLogs } = useContext(GameContext);
  // console.log(logsOffice)
  useEffect(() => {
    if (stage === 'ALLFORNEXTROUND') navigation.reset({ routes: [{ name: 'MenuJogador' }] });
  }, [stage]);

  if (stage === 'NEXTROUNDSTATUS') console.log(round)

  const findMayor = players.find((item) => item.office === "Prefeito" && item.city === player.city).logsOffice.filter((item) => item.type === 'tax')
  return (
    <View style={{ flex: 1 }}>
      <StatusBar backgroundColor={COLORS.bgColorPrimary} barStyle={'dark-content'} />
      <ScrollView>
        <View style={styles.container}>
          <View style={styles.containerescuro}>
            <Text style={styles.text}>RESUMO DA ETAPA{phase}</Text>
            <Image source={IMAGES[player.avatar]} style={styles.img} />
            <Text style={styles.text2}>{player.type ? player.type.slice(0, 3) : ''}/{player.name} em {player.city}</Text>
            <View style={styles.circulo}>
              <Text style={styles.text3}>Poluição global: {globalPollution}%</Text>
            </View>
            {stage === 'NEXTROUNDSTATUS' && (
              <>
                <View style={styles.circulo1}>
                  <Text style={styles.text3}>Alteração de impostos {"\n"}para produtividade: {"\n"}
                  Nula:{round.tax.find(i=>i.name === player.city).lowProduction + " => " + "\n"}
                  {findMayor.length > 0 && (
                    console.log(findMayor)
                  
                  )}
                  Entre 1 e 100:{"\n"}
                  Acima de 200:</Text>
                </View>
                <View style={styles.circulo1}>
                  <Text style={styles.text3}>Medidas de prevenção{"\n"}Trat. de água:{"\n"}Trat. de lixo:{"\n"}Trat. de esgoto:</Text>
                </View>
              </>
            )}
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
  },
  text4: {
    marginLeft: 20,
    marginTop: 14,
    fontSize: 13,
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
  circulo1: {
    backgroundColor: '#fff',
    marginVertical: 2,
    borderRadius: 17,
    width: '85%',
    height: 130,
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