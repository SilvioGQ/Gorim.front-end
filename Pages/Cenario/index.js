import React, { useEffect, useContext, Fragment, useState } from 'react';
import { Text, View, StyleSheet, Image, Dimensions, ScrollView, TouchableOpacity } from 'react-native';
import { GameContext, getTax } from '../../context/GameContext';

import HistoricoDinheiro from '../../Components/HistóricosDinheiro';
import HistoricosPlatacao from '../../Components/HistóricosPlatacao';
import Coin from '../../Components/Coin';
import Papel from '../../assets/agricultorIcones/papel.png';
import COLORS from '../../resources/colors';
import Rodada from '../../Components/Rodada';
import ModalInfo from '../../Components/ModalInfo';
import FilterCenary from '../../Components/FilterCenary';
import HistoricosDinheiro from '../../Components/HistóricosDinheiro';

const Height = Dimensions.get('screen').height;
const Tela = Dimensions.get('screen').width;
export default function Cenario() {
  const [modalText, setModalText] = useState('');
  const [type, setType] = useState('transfer');
  const { player, logs, disableNotifyScene, data: tax, stage, globalPollution, globalProduction } = useContext(GameContext);

  useEffect(() => {
    getTax();
    disableNotifyScene();
  }, []);
  console.log(tax);

  return (
    <View style={{ backgroundColor: COLORS.bgColorPrimary, height: Height }}>
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
          <Text style={styles.texto}>Informações gerais:</Text>
          <View style={styles.numeros}>
            <View style={styles.bloquinho}>
              <Text style={styles.numero}>
                {stage === 'GETTAX' && (tax.percentual ? `${tax.percentual}%` : `${tax.value}$`)}
              </Text>
              <Text style={styles.inferior}>
                Imposto
              </Text>
              <TouchableOpacity onPress={() => setModalText(<Text style={styles.legenda}>Impostos: serão cobrados todas rodadas, porém vai variar conforme as decisões do prefeito</Text>)}>
                <Image source={require('../../assets/agricultorIcones/information.png')} style={{ opacity:0.7, width: 16, height: 16, marginVertical: 5, alignSelf:'center'}} />
              </TouchableOpacity>
            </View >
            <View style={styles.bloquinho}>
              <Text style={styles.numero}>
                {globalProduction}%
              </Text>
              <Text style={styles.inferior}>
                Produtividade
              </Text>
              <TouchableOpacity onPress={() => setModalText(<Text style={styles.legenda}>Produtividade: é todo seu lucro na rodada, ele depende da poluição, quanto maior sua poluição menor será seus lucros. Siga a tabela a baixo {'\n'}</Text>)}>
                <Image source={require('../../assets/agricultorIcones/information.png')} style={{ opacity:0.7, width: 16, height: 16, marginVertical: 5, alignSelf:'center'}} />
              </TouchableOpacity>
            </View >
            <View style={styles.bloquinho}>
              <Text style={[styles.numero, { color: '#BF0000' }]}>
                {globalPollution}%
              </Text>
              <Text style={styles.inferior}>
                Poluição
              </Text>
              <TouchableOpacity onPress={() => setModalText(<Text style={styles.legenda}>Poluição: é causada pelo uso de agrotóxicos, porém cada semente também produz um determinado número de poluição</Text>)}>
                <Image source={require('../../assets/agricultorIcones/information.png')} style={{ opacity:0.7, width: 16, height: 16, marginVertical: 5, alignSelf:'center'}} />
              </TouchableOpacity>
            </View >
          </View>
          {modalText !== '' && <ModalInfo onClick={() => setModalText('')} text={modalText}/>}
          {Height <= 720 && (
            <>
              <Text style={styles.texto}>Resultado da sua plantação atual:</Text>
              <Text style={styles.italiano}>Com base nos insumos do armazém.</Text>
              <View style={{ flexDirection: 'row', margin: 5 }}>
                <View style={styles.coloridos}>
                  <Text style={styles.numero2}>{player.productive}</Text>
                  <Text style={styles.inferior2}>{player.type === 'Agricultor' ? 'Produtividade ' : 'Lucro'}</Text>
                </View>
                <View style={[styles.coloridos, { backgroundColor: 'rgba(255,13,13,1)', borderColor: '#BF0000', opacity: 0.7, }]}>
                  <Text style={styles.numero2}>{player.pollution.toFixed(2)}</Text>
                  <Text style={styles.inferior2}>Poluição</Text>
                </View>
              </View>
            </>
          )}
          <Text style={styles.texto}>Histórico:</Text>
          <FilterCenary type={type} setType={setType} />
          {logs.filter((item) => {
            if (item.type == type) {
              return item
            }
          }).map((item, index) => {
            if (item.type === 'plantation') {
              return <HistoricosPlatacao key={index} item={item} />
            } else {
              return <HistoricosDinheiro key={index} item={item} />
            }
          })
          }
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
    height: Height
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
  legenda: {
    fontFamily: 'Rubik_400Regular',
    fontSize: 13,
    textAlign: 'left',
  },
  numeros: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: '3%',
    width: "90%"
  },
  emoji: {
    width: 60,
    height: 60,
    alignItems: 'center',
    marginLeft: 20,
    marginTop: 15
  },
  bloquinho: {
    backgroundColor: COLORS.bgColorSecondary,
    width: 85,
    height: 85,
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
    color: '#66BF00',
    marginTop: '15%'
  },
  inferior: {
    fontSize: 10,
    marginTop: 2,
    fontFamily: 'Rubik_300Light'
  },
  coloridos: {
    backgroundColor: '#8ACF3A',
    borderWidth: 1,

    borderColor: COLORS.successButton,
    margin: 5,
    width: 145,
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
    marginTop: 15,
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
    marginLeft: 15,
    fontFamily: 'Rubik_300Light'
  }
});
