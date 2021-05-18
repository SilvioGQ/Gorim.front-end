import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, Image, TouchableOpacity, Dimensions, StatusBar } from 'react-native';
import COLORS from '../../resources/colors';
import Header from '../../Components/Header';
import Item from '../../Components/Item';
import PlayerService from '../../services/PlayerService';
import Cenarios from '../../Components/CenarioBotao';
import Rodada from '../../Components/Rodada';

const Height = Dimensions.get('screen').height;
export default function MenuJogador({ navigation, route }) {
  const [isVisible, setisVisible] = useState(false);
  const [player, setPlayer] = useState(route.params.player);
  useEffect(() => {
    PlayerService.getPlayer(player.id).then(setPlayer);
  }, [player])
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={'#58AB23'} StatusBarStyle='light-content' />
      <Rodada player={player} onClick={() => navigation.reset({ routes: [{ name: 'Gorim' }] })} />
      <Header player={player} />
      {player.type === 'Agricultor' && (
        <>
          <TouchableOpacity onPress={() => navigation.navigate('ControleParcelas', { player })} style={{ width: '100%' }}>
            <View style={styles.row2}>
              <Image style={{ width: 35, height: 35 }} source={require('../../assets/agricultorIcones/ParcelaPequena.png')} />
              <Text style={{ fontFamily: 'Rubik_300Light', fontSize: 20, alignSelf: 'center', marginLeft: 10 }}>Parcelas de terra</Text>
            </View>
          </TouchableOpacity>
          <View style={styles.row}>
            <View style={styles.items}>
              <Item type='Menu' onClick={() => navigation.navigate('Proposta', { player })} name='Checar propostas' />
              <Item type='Menu' onClick={() => navigation.navigate('FazerTransferencia', { player })} name='Fazer Transferência' />
              <Item type='Menu' onClick={() => navigation.navigate('Analizar')} name='Analisar produtos' />
            </View>
          </View>
        </>
      )}
      {player.type === 'Empresário' && (
        <>

          <View style={styles.row}>
            {player.speciality === 'Fertilizante' && (
              <View style={styles.items}>
                <Item type='Produtos' onClick={() => navigation.navigate('Vendas', { player, type: 'fertilizer', name: 'Fertilizante Comum' })} name='Fertilizante Comum' />
                <Item type='Produtos' onClick={() => navigation.navigate('Vendas', { player, type: 'fertilizer', name: 'Fertilizante Premium' })} name='Fertilizante Premium' />
                <Item type='Produtos' onClick={() => navigation.navigate('Vendas', { player, type: 'fertilizer', name: 'Fertilizante Super Premium' })} name='Fertilizante Super Premium' />
              </View>
            )}
            {player.speciality === 'Agrotoxico' && (
              <View style={styles.items}>
                <Item type='Produtos' onClick={() => navigation.navigate('Vendas', { player, type: 'pesticide', name: 'Agrotóxico Comum' })} name='Agrotóxico Comum' />
                <Item type='Produtos' onClick={() => navigation.navigate('Vendas', { player, type: 'pesticide', name: 'Agrotóxico Premium' })} name='Agrotóxico Premium' />
                <Item type='Produtos' onClick={() => navigation.navigate('Vendas', { player, type: 'pesticide', name: 'Agrotóxico Super Premium' })} name='Agrotóxico Super Premium' />
              </View>
            )}
            {player.speciality === 'Semente' && (
              <View style={styles.items}>
                <Item type='Produtos' onClick={() => navigation.navigate('Vendas', { player, type: 'seed', name: 'Soja' })} name='Soja' />
                <Item type='Produtos' onClick={() => navigation.navigate('Vendas', { player, type: 'seed', name: 'Arroz' })} name='Arroz' />
                <Item type='Produtos' onClick={() => navigation.navigate('Vendas', { player, type: 'seed', name: 'Hortaliça' })} name='Hortaliça' />
              </View>
            )}
            {player.speciality === 'Maquina' && (
              <View style={styles.items}>
                <Item type='Produtos' onClick={() => navigation.navigate('Vendas', { player, type: 'machine', name: 'Pacote 1' })} name='Pacote 1' />
                <Item type='Produtos' onClick={() => navigation.navigate('Vendas', { player, type: 'machine', name: 'Pacote 2' })} name='Pacote 2' />
                <Item type='Produtos' onClick={() => navigation.navigate('Vendas', { player, type: 'machine', name: 'Pacote 3' })} name='Pacote 3' />
              </View>
            )}
            {/* {player.speciality === 'Maquina' && (
              <>
                <Item type='Produtos' onClick={() => navigation.navigate('Vendas', { player, name: 'Pulverizador' })} name='Pulverizador' />
              </>
            )} */}
            <Item type='Menu' onClick={() => navigation.navigate('FazerTransferencia', { player })} name='Fazer Transferência' />
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
      <Cenarios onClick={() => navigation.navigate('Cenario', { player })} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.bgColorPrimary,
    alignItems: 'center',
  },
  row: {
    flexDirection: 'row',
    alignSelf: 'flex-start',
    marginHorizontal: 20,
    width: '100%',
    flexWrap: 'wrap'
  },
  row2: {
    flexDirection: 'row',
    marginHorizontal: 20,
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 20,
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
    flexWrap: 'wrap'
  },
  bar: {
    height: 80,
    width: '89%',
    borderRadius: 20,
    alignItems: 'center',
    marginTop: 15
  },
  textBar: {
    fontFamily: 'Rubik_400Regular',
    fontSize: 36,
    color: '#fff'
  }
});