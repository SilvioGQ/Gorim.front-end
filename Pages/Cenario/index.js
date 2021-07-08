import React, { useEffect, useContext } from 'react';
import { Text, View, StyleSheet, Image, Dimensions, ScrollView } from 'react-native';
import { GameContext, getLogs } from '../../context/GameContext';
import HistoricoDinheiro from '../../Components/HistóricosDinheiro';
import HistoricosPlatacao from '../../Components/HistóricosPlatacao';
import Feliz from '../../assets/emojis/feliz.png';
import Coin from '../../Components/Coin';
import Meio from '../../assets/emojis/meio.png';
import Preocupado from '../../assets/emojis/preocupado.png';
import Tenso from '../../assets/emojis/tenso.png';
import Corona from '../../assets/emojis/corona.png';
import Papel from '../../assets/agricultorIcones/papel.png';
import COLORS from '../../resources/colors';
import Rodada from '../../Components/Rodada';

const Height = Dimensions.get('screen').height;
const Tela = Dimensions.get('screen').width;
export default function Cenario() {
  const { player, data: logs } = useContext(GameContext);
  console.log(logs)
  useEffect(() => {
    getLogs();
  }, []);
  return (
    <View>
      <Rodada name={'Cenário'} />
      <ScrollView>
        <View style={styles.container}>
          <Coin coin={player.coin} />
          <View style={styles.row}>
            <Image
              style={styles.image}
              source={Papel}
            />
            <Text style={styles.title}>Resumo do {'\n'}Cenário</Text>
          </View>
          <Text style={styles.texto}>Nível de poluição:</Text>
          <View style={[styles.row, { backgroundColor: '#FFFFFF', marginTop: 20, borderRadius: 20, height: 90, width: 180, shadowColor: "#000", shadowOffset: { width: 0, height: 4 }, shadowOpacity: 0.32, shadowRadius: 5.46, elevation: 9 }]}>
            <Text style={{ fontSize: 36, marginLeft: 7, textAlign: 'center', marginTop: 20 }}>20%</Text>
            <Image style={styles.emoji} source={Feliz} />
          </View>
          {Height <= 780 && (
            <>
              <Text style={styles.texto}>Resultado da sua plantação atual:</Text>
              <Text style={[styles.inferior, styles.italiano]}>Com base nos insumos do armazém.</Text>
              <View style={{ flexDirection: 'row', margin: '5%' }}>
                <View style={styles.coloridos}>
                  <Text style={styles.numero2}>400</Text>
                  <Text style={styles.inferior2}>Produtividade</Text>
                </View>
                <View style={[styles.coloridos, { backgroundColor: '#FF0D0D', borderColor: '#BF0000' }]}>
                  <Text style={styles.numero2}>200</Text>
                  <Text style={styles.inferior2}>Poluição</Text>
                </View>
              </View>
            </>
          )}

          <Text style={styles.texto}>Histórico de transferência:</Text>
          {logs && (
            logs.map((item, index) => {
              if (item.type == 'transfer') {
                return <HistoricoDinheiro key={index} item={item} />
              }
            })
          )}
          <Text style={styles.texto}>Histórico de compras:</Text>
          {logs && (
            logs.map((item, index) => {
              if (item.type == 'buy') {
                return <HistoricoDinheiro key={index} item={item} />
              }
            })
          )}
          {player.type == 'Agricultor' && (
            <>
              <Text style={styles.texto}>Histórico de plantação:</Text>
              {logs && (
                logs.map((item, index) => {
                  if (item.type == 'plantation') {
                    return <HistoricosPlatacao key={index} item={item}/>
                  }
                })
              )}
            </>
          )}
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: COLORS.bgColorPrimary,
    width: Tela,
  },
  title: {
    fontSize: 20,
    fontFamily: 'Rubik_300Light',
    marginTop: 10
  },
  row: {
    flexDirection: 'row',
    marginVertical: 10
  },
  image: {
    width: 62,
    height: 60,
  },
  texto: {
    fontFamily: 'Rubik_400Regular',
    fontSize: 20,
    textAlign: 'left',
    alignSelf: 'flex-start',
    marginVertical: 15,
    marginLeft: 15
  },
  numeros: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: '3%',
    width: "90%"
  },
  emoji: {
    width: 70,
    height: 70,
    alignItems: 'center',
    marginLeft: 20,
    marginTop: 10
  },
  bloquinho: {
    backgroundColor: COLORS.bgColorSecondary,
    width: 66,
    height: 84,
    alignItems: 'center',
    textAlign: 'center',
    borderRadius: 20,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.22,
    shadowRadius: 4.06,
    elevation: 4,
  },
  numero: {
    fontSize: 24,
    fontFamily: 'Rubik_300Light',
    color: '#FF9900',
    marginTop: '30%'
  },
  inferior: {
    fontSize: 10,
    fontFamily: 'Rubik_300Light'
  },
  coloridos: {
    backgroundColor: '#8ACF3A',
    opacity: 0.8,
    borderWidth: 1,
    borderColor: COLORS.successButton,
    margin: '3%',
    width: 127,
    height: 84,
    alignItems: 'center',
    textAlign: 'center',
    borderRadius: 20,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.22,
    shadowRadius: 4.06,
    elevation: 4,
  },
  numero2: {
    fontSize: 32,
    fontFamily: 'Rubik_400Regular',
    color: '#fff',
    marginTop: '13%',
  },
  inferior2: {
    fontSize: 13,
    fontFamily: 'Rubik_300Light',
    color: '#fff',
  },
  italiano: {
    fontSize: 14,
    fontStyle: 'italic',
    alignSelf: 'flex-start',
    marginLeft: '7%',
    fontFamily: 'Rubik_300Light'
  }
});
