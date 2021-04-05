import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, Image, TouchableOpacity, Dimensions, StatusBar } from 'react-native';

import COLORS from '../../styles/Colors';
import Header from '../../Components/Header';
import Item from '../../Components/Item';
import PlayerService from '../../services/PlayerService';
import Conf from '../../Components/Selo-Verde-Confirmacao';
import Cenarios from '../../Components/CenarioBotao';
import Rodada from '../../Components/Rodada';

const Tela = Dimensions.get('screen').width;
const Height = Dimensions.get('screen').height;
export default function MenuJogador({ navigation, route }) {
  const [isVisible, setisVisible] = useState(false);
  const [player, setPlayer] = useState({});

  useEffect(() => {
    if (route.params.player) {
      setPlayer(route.params.player);
    } else {
      PlayerService.getPlayer(route.params.id).then(setPlayer);
    }
  }, []);

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={'#58AB23'} StatusBarStyle='light-content' />
      <Rodada player={player} onClick={() => navigation.reset({ routes: [{ name: 'Gorim' }] })} />
      {player.type === 'Agricultor' && (
        <>
          <Header player={player} image={require('../../assets/perfils/agricultor/Agricultor.png')} />
          <TouchableOpacity onPress={() => navigation.navigate('ControleParcelas', { player })} style={{ width: '100%' }}>
            <View style={styles.row2}>
              <Image style={{ width: 40, height: 40 }} source={require('../../assets/agricultorIcones/ParcelaPequena.png')} />
              <Text style={{ fontFamily: 'Rubik_300Light', fontSize: 20, alignSelf: 'center' }}>Parcelas de terra</Text>
            </View>
          </TouchableOpacity>
          <View style={styles.row}>
            <View style={styles.items}>
              <Item onClick={() => navigation.navigate('Proposta', { player })} icone={require('../../assets/agricultorIcones/handshake.png')} texto='Checar propostas' backgroundColor='#fff' />
              <Item onClick={() => navigation.navigate('FazerTransferencia', { player })} icone={require('../../assets/agricultorIcones/coin.png')} texto='Fazer transferencia' backgroundColor='#fff' />
              <Item onClick={() => navigation.navigate('Analizar')} icone={require('../../assets/agricultorIcones/lupa.png')} texto='Analisar produtos' backgroundColor='#fff' />
              <Item onClick={() => setisVisible(true)} icone={require('../../assets/agricultorIcones/seloG.png')} texto='Pedir selo verde' backgroundColor='#FF7F7E' />
            </View>
            <Conf isVisible={isVisible} Conf={() => setisVisible(false)} />
          </View>
        </>
      )}
      {player.type === 'Empresário' && (
        <>
          <Header player={player} image={require('../../assets/perfils/empresariox1/Semente.png')} />
          <View style={styles.row}>
            {player.speciality === 'Fertilizante' && (
              <View style={styles.items}>
                <Item onClick={() => navigation.navigate('Vendas', { player, name: 'Fertilizante Comum' })} icone={require('../../assets/fertilizers/fertilizerBasic.png')} texto='Vender Fertilizante Comum' backgroundColor='#fff' />
                <Item onClick={() => navigation.navigate('Vendas', { player, name: 'Fertilizante Premium' })} icone={require('../../assets/fertilizers/fertilizerMedium.png')} texto='Vender Fertilizante Premium' backgroundColor='#fff' />
                <Item onClick={() => navigation.navigate('Vendas', { player, name: 'Fertilizante Super Premium' })} icone={require('../../assets/fertilizers/fertilizerStandard.png')} texto='Vender Fertilizante Super Premium' backgroundColor='#fff' />
              </View>
            )}
            {player.speciality === 'Agrotoxico' && (
              <View style={styles.items}>
                <Item onClick={() => navigation.navigate('Vendas', { player, name: 'Agrotoxico Comum' })} icone={require('../../assets/pesticides/pesticideBasic.png')} texto='Vender Agrotoxico Comum' backgroundColor='#fff' />
                <Item onClick={() => navigation.navigate('Vendas', { player, name: 'Agrotoxico Premium' })} icone={require('../../assets/pesticides/pesticideMedium.png')} texto='Vender Agrotoxico Premium' backgroundColor='#fff' />
                <Item onClick={() => navigation.navigate('Vendas', { player, name: 'Agrotoxico Super Premium' })} icone={require('../../assets/pesticides/pesticideStandard.png')} texto='Vender Agrotoxico Super Premium' backgroundColor='#fff' />
              </View>
            )}
            {player.speciality === 'Semente' && (
              <View style={styles.items}>
                <Item onClick={() => navigation.navigate('Vendas', { player, name: 'Soja' })} icone={require('../../assets/seeds/soy.png')} texto='Vender Soja' backgroundColor='#fff' />
                <Item onClick={() => navigation.navigate('Vendas', { player, name: 'Arroz' })} icone={require('../../assets/seeds/rice.png')} texto='Vender Arroz' backgroundColor='#fff' />
                <Item onClick={() => navigation.navigate('Vendas', { player, name: 'Hortaliças' })} icone={require('../../assets/seeds/greenery.png')} texto='Vender Hortaliças' backgroundColor='#fff' />
              </View>
            )}
            {player.speciality === 'Maquina' && (
              <View style={styles.items}>
                <Item onClick={() => navigation.navigate('Vendas', { player, name: 'Semeadora' })} icone={require('../../assets/agricultorIcones/pacote.png')} texto='Semeadora' backgroundColor='#fff' />
                <Item onClick={() => navigation.navigate('Vendas', { player, name: 'Semeadora Colheitadera' })} icone={require('../../assets/agricultorIcones/pacote.png')} texto='Semeadora Colheitadera' backgroundColor='#fff' />
                <Item onClick={() => navigation.navigate('Vendas', { player, name: 'Semeadroa Colheitadero Drone' })} icone={require('../../assets/agricultorIcones/pacote.png')} texto='Semeadroa Colheitadero Drone' backgroundColor='#fff' />
              </View>
            )}
            {player.speciality === 'Maquina' && (
              <>
                <Item onClick={() => navigation.navigate('Vendas', { player, name: 'Pulverizador' })} icone={require('../../assets/agricultorIcones/pulverizador.png')} texto='Pulverizador' backgroundColor='#fff' />
              </>
            )}
            <Item onClick={() => navigation.navigate('FazerTransferencia', { player })} icone={require('../../assets/agricultorIcones/coin.png')} texto='Fazer Transferencia' backgroundColor='#fff' />
          </View>
        </>
      )}
      {Height >= 780 && (
        <>
          <View style={[styles.bar, { backgroundColor: '#66BF00' }]}>
            <Text style={styles.textBar}>200</Text>
            <Text style={{ color: 'white' }}>Produtividade atual</Text>
          </View>
          <View style={[styles.bar, { backgroundColor: '#BF0000' }]}>
            <Text style={styles.textBar}>100</Text>
            <Text style={{ color: 'white' }}>Poluição atual</Text>
          </View>
        </>
      )}
      <Cenarios onClick={() => navigation.navigate('Cenario')} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.bgColorPrimary,
    alignItems: 'center',
    width: Tela,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    alignSelf: 'flex-start',
    justifyContent: 'flex-start',
    marginHorizontal: 20,
    width: Tela,
    flexWrap: 'wrap'
  },
  row2: {
    flexDirection: 'row',
    marginHorizontal: 20,
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: '6%',
    backgroundColor: COLORS.bgColorSecondary,
    width: '88%',
    height: 50,
    borderRadius: 20,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.32,
    shadowRadius: 5.46,
    elevation: 6,
  },
  items: {
    width: '90%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexWrap: 'wrap'
  },
  bar: {
    height: 80,
    width: '89%',
    borderRadius: 20,
    alignItems: 'center',
    marginTop: 20
  },
  textBar: {
    fontFamily: 'Rubik_400Regular',
    fontSize: 36,
    color: 'white'
  }
});