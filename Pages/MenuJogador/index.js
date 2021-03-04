import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, Image, TouchableOpacity, Dimensions } from 'react-native';

import Cenarios from '../../Components/CenarioBotao';
import Parcela from '../../assets/agricultorIcones/ParcelaPequena.png';
import COLORS from '../../styles/Colors';
import Header from '../../Components/Header';
import Item from '../../Components/Item';
import Rodada from '../../Components/Rodada';
import PlayerService from '../../services/PlayerService';
import Conf from '../../Components/Selo-Verde-Confirmacao';

const Tela = Dimensions.get('screen').width;
const Height = Dimensions.get('screen').height;
export default function Agricultor1({ navigation, route }) {
  const [player, setPlayer] = useState({});
  const [isVisible, setisVisible] = useState(false);

  useEffect(() => {
    PlayerService.getPlayer(route.params.idUser).then(setPlayer);
  }, []);

  return (
    <View style={styles.container}>
      <Rodada idUser={player.id} navigationG={() => navigation.reset({ routes: [{ name: 'Gorim' }] })} />
      {player.type === 'Agricultor' && (
        <>
          <Header nome={player.name} cidade='Atlantis'
            image={require('../../assets/perfils/agricultor/Agricultor.png')}
            Selo={player.stamp} coin={player.coin} />
          <View>
            <TouchableOpacity onPress={() => navigation.navigate('Parcela')}>
              <View style={styles.row2}>
                <Image
                  style={styles.icone}
                  source={Parcela}
                />
                <Text style={styles.textos}>Parcelas de terra</Text>
              </View>
            </TouchableOpacity>
          </View>
          <View style={styles.row}>
            <Item onClick={() => navigation.navigate('Propostas')} icone={require('../../assets/agricultorIcones/handshake.png')} texto='Checar propostas' backgroundColor='#fff' />
            <Item onClick={() => navigation.navigate('Transferindo')} icone={require('../../assets/agricultorIcones/money2.png')} texto='Fazer transferencia' backgroundColor='#fff' />
            <Item onClick={() => navigation.navigate('Analizar')} icone={require('../../assets/agricultorIcones/lupa.png')} texto='Analisar propostas' backgroundColor='#fff' />
            <Item onClick={() => setisVisible(true)} icone={require('../../assets/agricultorIcones/seloG.png')} texto='Pedir selo verde' backgroundColor='#FF7F7E' />
            <Conf isVisible={isVisible} Conf={() => setisVisible(false)} />
          </View>
        </>
      )}
      {player.type === 'Empresário' && (
        <>
          <Header nome={player.name} cidade='Atlantis'
            image={require(`../../assets/perfils/empresariox1/${player.speciality}.png`)}
            coin={player.coin} />
          <View style={styles.row}>
            <Item onClick={() => navigation.navigate('Propostas')} icone={require('../../assets/agricultorIcones/handshake.png')} texto='Checar propostas' />
            <Item onClick={() => navigation.navigate('Propostas')} icone={require('../../assets/agricultorIcones/handshake.png')} texto='Checar propostas' />
            <Item onClick={() => navigation.navigate('Propostas')} icone={require('../../assets/agricultorIcones/handshake.png')} texto='Checar propostas' />
            {player.speciality === 'Fertilizante' && (
              <Item onClick={() => navigation.navigate('Propostas')} icone={require('../../assets/agricultorIcones/handshake.png')} texto='Checar propostas' />
              // <Text>{`../../assets/perfils/empresariox1/${player.speciality}.png`}</Text>
            )}
          </View>
        </>
      )}
      {Height >= 750 && (
        <View>
          <View style={{ width: 306, height: 70, borderRadius: 20, alignItems: 'center', backgroundColor: '#66BF00', marginTop: 20 }}>
            <Text style={{ fontFamily: 'Rubik_400Regular', fontSize: 36, color: 'white' }}>200</Text>
            <Text style={styles.candidato, { color: 'white' }}>Produtividade atual</Text>
          </View>
          <View style={{ width: 306, height: 70, borderRadius: 20, alignItems: 'center', backgroundColor: '#BF0000', marginTop: 20 }}>
            <Text style={{ fontFamily: 'Rubik_400Regular', fontSize: 36, color: 'white' }}>100</Text>
            <Text style={styles.candidato, { color: 'white' }}>Poluição atual</Text>
          </View>
        </View>
      )}
      <Cenarios
        onClick={() => {
          navigation.navigate('Cenario');
        }} />
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    backgroundColor: COLORS.bgColorPrimary,
    alignItems: 'center',
    padding: '2%',
    width: Tela,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    alignSelf: 'flex-start',
    justifyContent: 'flex-start',
    margin: '5%',
    marginTop: '1%',
    width: Tela,
    flexWrap: 'wrap'
  },
  row3: {
    flexDirection: 'row',
    alignSelf: 'flex-start',
    justifyContent: 'space-around',
    margin: '3%',
    width: Tela
  },
  row2: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: '6%',
    backgroundColor: COLORS.bgColorSecondary,
    width: 320,
    height: 50,
    borderRadius: 20,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.32,
    shadowRadius: 5.46,
    elevation: 9,
  },
  colunm: {
    alignItems: 'center',
    justifyContent: 'center',
    margin: 10,
    backgroundColor: COLORS.bgColorSecondary,
    width: 96,
    height: 84,
    borderRadius: 20,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.32,
    shadowRadius: 5.46,

    elevation: 9
  },
  header: {
    fontFamily: 'Rubik_400Regular',
    fontSize: 20,
  },
  textos: {
    fontFamily: 'Rubik_300Light',
    fontSize: 20,
    alignSelf: 'center'
  },
  textinhos: {
    fontFamily: 'Rubik_300Light',
    fontSize: 14,
  },
  logo: {
    width: 20,
    height: 23
  },
  person: {
    width: 46,
    height: 50,
    marginRight: '5%'
  },
  icone: {
    width: 40,
    height: 40,
  },
  vermelho: {
    backgroundColor: '#FF7F7E'
  },
  modal: {
    flex: 1,
    alignSelf: 'center',
    justifyContent: 'center',
    backgroundColor: '#000000aa',
    width: Tela,
  }
});