import React, { useEffect, useContext, Fragment, useState } from 'react';
import { Text, View, StyleSheet, Image, Dimensions, ScrollView, TouchableOpacity } from 'react-native';
import { GameContext, calcPlayerTax } from '../../../contexts/GameContext';


import HistoricosPlatacao from '../../../Components/HistóricosPlatacao';
import Coin from '../../../Components/Coin';
import COLORS from '../../../constants/colors';
import Rodada from '../../../Components/Rodada';
import ModalInfo from '../../../Components/ModalInfo';
import FilterCenary from '../../../Components/FilterCenary';
import HistoricosDinheiro from '../../../Components/HistóricosDinheiro';
import HistoricoPolitico from '../../../Components/HistoricoPolitico';
const Height = Dimensions.get('screen').height;
const Tela = Dimensions.get('screen').width;
export default function Cenario({ navigation }) {
  const [modalText, setModalText] = useState('');
  const [type, setType] = useState('transfer');
  const { player, players, disableNotifyScene, data: tax, stage, game } = useContext(GameContext);
  const [image, setImage] = useState(true);
  const [image2, setImage2] = useState(true);
  useEffect(() => {
    calcPlayerTax();
    disableNotifyScene();
    // player.office ? null : setType('tax')
  }, []);
  const globalProductionN = ()=>{
    if(game.globalProduction.toString().indexOf('.') !== -1){
      return game.globalProduction.toFixed(2)
    }
    return game.globalProduction
  }
  const globalPollutionN = ()=>{
    if(game.globalPollution.toString().indexOf('.') !== -1){
      return game.globalPollution.toFixed(2)
    }
    return game.globalPollution
  }

  // const finded = (type) =>{
  //   players.find((item) => item.office === "Prefeito" && item.city === player.city).length > 0 ?  players.find((item) => item.office === "Prefeito" && item.city === player.city).logsOffice.filter((item) => item.type == type).length == 0 ?  <Text style={{ flex: 1, textAlign: 'center', fontFamily: 'Rubik_700Bold', fontSize: 18, marginVertical: 50 }}>Nenhuma ação executada</Text> : players.find((item) => item.office === "Prefeito" && item.city === player.city).logsOffice.filter((item) => item.type == type)((item, index) => {
  //     if (item.type === 'tax' || item.type === 'prevention') {
  //       return <HistoricoPolitico key={index} item={item} />
  //     }
  //   })
  //   :
  //   null
    
  // }
  return (
    <View>
      <Rodada arrow={true} onClick={() => navigation.goBack()} />
      <ScrollView>
        <View style={styles.container}>
          {player.office && game.phase == 2 ? <Coin coin={game.phase === 1 ? player.coin : player.serviceSalary} /> : null}
          <View style={styles.row}>
            <Image
              style={styles.image}
              source={require('../../../assets/agricultorIcones/papel.png')}
            />
            <Text style={styles.title}>Resumo do {'\n'}Cenário</Text>
          </View>
          <Text style={styles.texto}>Informações gerais:</Text>
          {game.phase === 2 && (
            <View style={styles.numeros}>
              <TouchableOpacity style={[styles.bloquinho, { width: '39%' }]} onPress={() => { setImage(true); setImage2(false); setModalText(<Text style={styles.legenda}>Produtividade: É todo seu lucro na rodada, ele depende do quanto você vendeu/produziu e se a poluição global não está inferindo nessa produção conforme a tabela abaixo.</Text>); }}  >
                <Text style={{ fontSize: 24, color: '#66BF00', marginTop: '7%' }}>
                  {globalProductionN()}%
                </Text>
                <Text style={styles.inferior}>
                  Produtividade
                </Text>
                <Image source={require('../../../assets/agricultorIcones/information.png')} style={[styles.imagem]} />
              </TouchableOpacity>
              <TouchableOpacity style={[styles.bloquinho, { width: '39%' }]} onPress={() => { setImage(false); setImage2(false); setModalText(<Text style={styles.legenda}>Poluição: é causada pelo uso de agrotóxicos, porém cada semente também produz um determinado número de poluição</Text>); setImage(false); setImage2(false) }}  >
                <Text style={{ fontSize: 24, marginTop: '7%', color: '#BF0000' }}>
                  {globalPollutionN()}%
                </Text>
                <Text style={styles.inferior}>
                  Poluição
                </Text>
                <Image source={require('../../../assets/agricultorIcones/information.png')} style={[styles.imagem]} />
              </TouchableOpacity>
            </View >
          )}
          {game.phase === 1 && (
            <View style={styles.numeros}>
              <TouchableOpacity style={styles.bloquinho} onPress={() => { setImage(false); setImage2(true); setModalText(<Text style={styles.legenda}>Impostos: serão cobrados todas rodadas, porém vai variar conforme as decisões do prefeito.</Text>) }}  >
                <Text style={styles.numero}>
                  {stage === 'CALCPLAYERTAX' && (tax.percentual ? `${tax.percentual}%` : `$${tax.value}`)}
                </Text>
                <Text style={styles.inferior}>
                  Imposto
                </Text>
                <Image source={require('../../../assets/agricultorIcones/information.png')} style={[styles.imagem]} />
              </TouchableOpacity>
              <TouchableOpacity style={styles.bloquinho} onPress={() => { setImage(true); setImage2(false); setModalText(<Text style={styles.legenda}>Produtividade: É todo seu lucro na rodada, ele depende do quanto você vendeu/produziu e se a poluição global não está inferindo nessa produção conforme a tabela abaixo.</Text>); }}  >

                <Text style={styles.numero}>
                  {globalProductionN()}%
                </Text>
                <Text style={styles.inferior}>
                  Produtividade
                </Text>
                <Image source={require('../../../assets/agricultorIcones/information.png')} style={[styles.imagem]} />
              </TouchableOpacity>
              <TouchableOpacity style={styles.bloquinho} onPress={() => { setImage(false); setImage2(false); setModalText(<Text style={styles.legenda}>Poluição: é causada pelo uso de agrotóxicos, porém cada semente também produz um determinado número de poluição</Text>); setImage(false); setImage2(false) }}  >
                <Text style={[styles.numero, { color: '#BF0000' }]}>
                  {globalPollutionN()}%
                </Text>
                <Text style={styles.inferior}>
                  Poluição
                </Text>
                <Image source={require('../../../assets/agricultorIcones/information.png')} style={[styles.imagem]} />
              </TouchableOpacity>
            </View >
          )}
          {game.round > 1 ?
            <TouchableOpacity onPress={() => navigation.navigate('Historico')} style={styles.historico}>
              <Text style={styles.textHistorico}>HISTÓRICO</Text>
            </TouchableOpacity>
            :
            null}

          {modalText !== '' && <ModalInfo player={player} onClick={() => setModalText('')} text={modalText} image={image} image2={image2} />}
          {Height <= 720 && player.type ? (
            <>
              <Text style={styles.texto}>Resultado da sua plantação atual:</Text>
              <View style={{ flexDirection: 'row', alignSelf: 'flex-start' }}>
                <Text style={styles.italiano}>Com base nos insumos do armazém.</Text>
                <TouchableOpacity onPress={() => { setModalText('Poluição é da soma da poluição de cada parcela dividida por 6'); setImage(false); setImage2(false) }}  >
                  <Image source={require('../../../assets/agricultorIcones/information.png')} style={{ width: 18, height: 18, opacity: 0.7, marginLeft: 5, marginTop: -2 }} />
                </TouchableOpacity>
              </View>
              <View style={{ flexDirection: 'row', margin: 5 }}>
                <View style={styles.coloridos}>
                  <Text style={styles.numero2}>{player.production}</Text>
                  <Text style={styles.inferior2}>Produtividade</Text>
                </View>
                <View style={[styles.coloridos, { backgroundColor: 'rgba(255,13,13,1)', borderColor: '#BF0000', opacity: 0.7, }]}>
                  <Text style={styles.numero2}>{player.pollution.toFixed(2)}</Text>
                  <Text style={styles.inferior2}>Poluição</Text>
                </View>
              </View>
            </>
          )
          : 
          null}
          <Text style={styles.texto}>Resumo:</Text>
          <FilterCenary type={type} setType={setType} />

          {game.phase === 1 ?
            player.logs.filter((item) => item.type == type).length == 0 ? <Text style={[styles.textlogs]}>Nenhuma ação executada</Text> : player.logs.filter((item) => item.type == type).map((item, index) => {
              if (item.type === 'plantation') {
                return <HistoricosPlatacao key={index} item={item} />
              } else if (item.type === 'transfer' || item.type === 'buy') {
                return <HistoricosDinheiro key={index} item={item} />
              }
            })
            :
            player.office ? player.logsOffice.filter((item) => item.type == type).length == 0 ? player.office === "Vereador" ? null: <Text style={[styles.textlogs]}>Nenhuma ação executada</Text> : player.logsOffice.filter((item) => item.type == type).map((item, index) => {
              if (item.type === 'transfer') {
                return <HistoricosDinheiro key={index} item={item} />
              }
              else if (player.office !== "Vereador" || item.type === 'fine' || item.type === 'stamp' || item.type === 'tax' || item.type === 'prevention') {
                return <HistoricoPolitico key={index} item={item} />
              }
            })
            :
            <Text style={styles.textlogs}>Nenhuma ação executada</Text>
          }
          {game.phase === 2 && (!player.office || player.office === "Vereador") && !!players.find((item) => item.office === "Prefeito" && item.city === player.city) ?
            players.find((item) => item.office === "Prefeito" && item.city === player.city).logsOffice.filter((item) => item.type == 'tax' || item.type === 'prevention').length == 0 ? player.office === "Vereador" ? null: <Text style={[styles.textlogs]}>Nenhuma ação executada</Text>  : players.find((item) => item.office === "Prefeito" && item.city === player.city).logsOffice.filter((item) => item.type == type).map((item, index) => {
              if (item.type === 'tax' || item.type === 'prevention') {
                return <HistoricoPolitico key={index} item={item} />
              }
            })
            :
            null
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
    width: Tela,
    marginBottom: 65
  },
  title: {
    fontSize: 20,

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
    fontSize: Tela > 350 ? 20 : 14,
    textAlign: 'left',
    alignSelf: 'flex-start',
    marginVertical: 15,
    marginLeft: 20,
    marginRight: 20
  },
  legenda: {
    fontSize: 16,
  },
  numeros: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: '3%',
    width: "85%"
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
    width:'29%',
    height: Tela > 350 ? 95 : 79,
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
    fontSize: Tela > 350 ? 24 : 20,

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

    color: '#fff',
  },
  italiano: {
    fontSize: 14,
    fontStyle: 'italic',
    alignSelf: 'flex-start',
    marginLeft: 20,
    fontFamily: 'Rubik_300Light'
  },
  historico: {
    width: '85%',
    height: 35,
    backgroundColor: '#66BF00',
    borderRadius: 20,
    marginVertical: 15
  },
  textHistorico: {
    fontSize: 15,
    fontFamily: 'Rubik_400Regular',
    color: '#fff',
    textAlign: 'center',
    marginTop: 8
  },
  imagem: {
    opacity: 0.7,
    width: 16,
    height: 16,
    marginVertical: 5,
    alignSelf: 'center'
  },
  textlogs: {
    flex: 1,
    textAlign: 'center',
    fontFamily: 'Rubik_700Bold',
    fontSize: 18,
    marginVertical: 50
  }
});
