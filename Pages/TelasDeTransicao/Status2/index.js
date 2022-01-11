import React, { useContext, useEffect } from 'react';
import { Text, View, StyleSheet, Image, ScrollView, StatusBar, Dimensions } from 'react-native';
import { GameContext } from '../../../contexts/GameContext';

import COLORS from '../../../constants/colors';
import ICONS from '../../../constants/imagesIcons';

const Tela = Dimensions.get('screen').width;
export default function Status2({ navigation }) {
  
  const { player, players, globalPollution, data: round, stage, timer, phase } = useContext(GameContext);
  useEffect(() => {
    if (stage === 'ALLFORNEXTROUND') navigation.reset({ routes: [{ name: 'MenuJogador' }] });
  }, [stage]);

  const findMayorTax = () => {
    if (players.find((item) => item.office === "Prefeito" && item.city === player.city)) {
      return players.find((item) => item.office === "Prefeito" && item.city === player.city).logsOffice.filter((item) => item.type === 'tax')
    }
  }
  const findMayorPre = () => {
    if (players.find((item) => item.office === "Prefeito" && item.city === player.city)) {
      return players.find((item) => item.office === "Prefeito" && item.city === player.city).logsOffice.filter((item) => item.type === 'prevention')
    }
  }
  const lowProductionValue = () => {
    let mayor = findMayorTax();
    if (!mayor) return '';
    let nula = mayor.filter((i) => i.label === "Produtividade nula");
    if (nula.length !== 0) {
      return nula[nula.length - 1].value
    } else return ""
  }
  const mediumProductionValue = () => {
    let mayor = findMayorTax();
    if (!mayor) return '';
    let medium = mayor.filter((i) => i.label === "Produtividade entre 1 e 200");
    if (medium.length !== 0) {
      return medium[medium.length - 1].percentual
    } else return ""
  }
  const highProductionValue = () => {
    let mayor = findMayorTax();
    if (!mayor) return '';
    let high = mayor.filter((i) => i.label === "Produtividade acima de 200");
    if (high.length !== 0) {
      return high[high.length - 1].percentual
    } else return ""
  }
  const treatWater = () => {
    let mayor = findMayorPre();
    if (!mayor) return 0;
    return mayor.filter((i) => i.label === "Tratamento de água").length;
  }
  const treatTrash = () => {
    let mayor = findMayorPre();
    if (!mayor) return 0;
    return mayor.filter((i) => i.label === "Tratamento de lixo").length;
  }
  const treatSewer = () => {
    let mayor = findMayorPre();
    if (!mayor) return 0;
    return mayor.filter((i) => i.label === "Tratamento de esgoto").length;
  }
  return (
    <View style={{ flex: 1 }}>
      <StatusBar backgroundColor={COLORS.bgColorPrimary} barStyle={'dark-content'} />
      <ScrollView>
        <View style={styles.container}>
          <View style={styles.containerescuro}>
            <Text style={styles.text}>RESUMO DA ETAPA {phase}</Text>
            <Image source={ICONS[player.avatar]} style={styles.img} />
            <Text style={styles.text2}>{player.office ? player.office.slice(0, 3) : 'cid'}/{player.name} em {player.city}</Text>
            <View style={styles.circulo}>
              <Text style={styles.text3}>Poluição global: {round.globalPollution + '% => ' + globalPollution}%</Text>
            </View>
            {stage === 'NEXTROUNDSTATUS' && (
              <>
                <View style={styles.circulo1}>
                  <Text style={styles.text3}>Alteração de impostos {"\n"}para produtividade: {"\n"}
                    Nula: {"$" + round.tax.find(i => i.name === player.city).lowProduction.value} {lowProductionValue() == '' ? '' : ` => $${lowProductionValue()}`}{"\n"}
                    Entre 1 e 200: {round.tax.find(i => i.name === player.city).mediumProduction.percentual}% {mediumProductionValue() == '' ? '' : ` => ${mediumProductionValue()}%`}{"\n"}
                    Acima de 200: {round.tax.find(i => i.name === player.city).highProduction.percentual}% {highProductionValue() == '' ? '' : ` => ${highProductionValue()}%`}</Text>
                </View>
                <View style={styles.circulo1}>
                  <Text style={styles.text3}>Medidas de prevenção{"\n"}Trat. de água: {treatWater() == 0 ? 'Não aplicado' : `Aplicado ${treatWater()}x`}{"\n"}
                    Trat. de esgoto: {treatSewer() == 0 ? 'Não aplicado' : `Aplicado ${treatSewer()}x`}{"\n"}
                    Trat. de lixo: {treatTrash() == 0 ? 'Não aplicado' : `Aplicado ${treatTrash()}x`}
                  </Text>
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
    width: Tela,
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
    fontSize: Tela > 350 ? 18 : 12,
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