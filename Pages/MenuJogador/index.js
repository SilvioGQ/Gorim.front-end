import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, Image, TouchableOpacity, Dimensions } from 'react-native';

import Parcela from '../../assets/agricultorIcones/ParcelaPequena.png';
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
      <Rodada player={player} onClick={() => navigation.reset({ routes: [{ name: 'Gorim' }] })} />
      {player.type === 'Agricultor' && (
        <>
          <Header
            player={player}
            image={require('../../assets/perfils/agricultor/Agricultor.png')}
          />
          <View>
            <TouchableOpacity onPress={() => navigation.navigate('ControleParcelas', { player })}>
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
            <View style={{ width: '90%', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap' }}>
              <Item onClick={() => navigation.navigate('Propostas')} icone={require('../../assets/agricultorIcones/handshake.png')} texto='Checar propostas' backgroundColor='#fff' />
              <Item onClick={() => navigation.navigate('Transferindo')} icone={require('../../assets/agricultorIcones/money2.png')} texto='Fazer transferencia' backgroundColor='#fff' />
              <Item onClick={() => navigation.navigate('Analizar')} icone={require('../../assets/agricultorIcones/lupa.png')} texto='Analisar propostas' backgroundColor='#fff' />
              <Item onClick={() => setisVisible(true)} icone={require('../../assets/agricultorIcones/seloG.png')} texto='Pedir selo verde' backgroundColor='#FF7F7E' />
            </View>
            <Conf isVisible={isVisible} Conf={() => setisVisible(false)} />
          </View>
        </>
      )}
      {player.type === 'Empresário' && (
        <>
          <Header
            player={player}
            image={require(`../../assets/perfils/empresariox1/Semente.png`)}
          />
          <View style={styles.row}>
            {player.speciality === 'Fertilizante' && (
              <View style={{ width: '90%', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                <Item onClick={() => navigation.navigate('Vendas', { player, name: 'Fertilizante Comum' })} icone={require('../../assets/agricultorIcones/fertilizanteComum.png')} texto='Vender Fertilizante Comum' backgroundColor='#fff' />
                <Item onClick={() => navigation.navigate('Vendas', { player, name: 'Fertilizante Premium' })} icone={require('../../assets/agricultorIcones/fertilizantePremium.png')} texto='Vender Fertilizante Premium' backgroundColor='#fff' />
                <Item onClick={() => navigation.navigate('Vendas', { player, name: 'Fertilizante Super Premium' })} icone={require('../../assets/agricultorIcones/fertilizanteSuperPremium.png')} texto='Vender Fertilizante Super Premium' backgroundColor='#fff' />
              </View>
            )}
            {player.speciality === 'Agrotoxico' && (
              <View style={{ width: '90%', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                <Item onClick={() => navigation.navigate('Vendas', { player, name: 'Agrotoxico Comum' })} icone={require('../../assets/agricultorIcones/agrotoxicoComum.png')} texto='Vender Agrotoxico Comum' backgroundColor='#fff' />
                <Item onClick={() => navigation.navigate('Vendas', { player, name: 'Agrotoxico Premium' })} icone={require('../../assets/agricultorIcones/agrotoxicoPremium.png')} texto='Vender Agrotoxico Premium' backgroundColor='#fff' />
                <Item onClick={() => navigation.navigate('Vendas', { player, name: 'Agrotoxico Super Premium' })} icone={require('../../assets/agricultorIcones/agrotoxicoSuperPremium.png')} texto='Vender Agrotoxico Super Premium' backgroundColor='#fff' />
              </View>
            )}
            {player.speciality === 'Semente' && (
              <View style={{ width: '90%', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                <Item onClick={() => navigation.navigate('Vendas', { player, name: 'Soja' })} icone={require('../../assets/agricultorIcones/arroz.png')} texto='Vender Soja' backgroundColor='#fff' />
                <Item onClick={() => navigation.navigate('Vendas', { player, name: 'Arroz' })} icone={require('../../assets/agricultorIcones/rice.png')} texto='Vender Arroz' backgroundColor='#fff' />
                <Item onClick={() => navigation.navigate('Vendas', { player, name: 'Hortaliças' })} icone={require('../../assets/agricultorIcones/hortaliças.png')} texto='Vender Hortaliças' backgroundColor='#fff' />
              </View>
            )}
            {player.speciality === 'Maquina' && (
              <View style={{ width: '90%', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap' }}>
                <Item onClick={() => navigation.navigate('Vendas', { player, name: 'Semeadora' })} icone={require('../../assets/agricultorIcones/pacote.png')} texto='Semeadora' backgroundColor='#fff' />
                <Item onClick={() => navigation.navigate('Vendas', { player, name: 'Semeadora Colheitadera' })} icone={require('../../assets/agricultorIcones/pacote.png')} texto='Semeadora Colheitadera' backgroundColor='#fff' />
                <Item onClick={() => navigation.navigate('Vendas', { player, name: 'Semeadroa Colheitadero Drone' })} icone={require('../../assets/agricultorIcones/pacote.png')} texto='Semeadroa Colheitadero Drone' backgroundColor='#fff' />
                <Item onClick={() => navigation.navigate('Vendas', { player, name: 'Pulverizador' })} icone={require('../../assets/agricultorIcones/pulverizador.png')} texto='Pulverizador' backgroundColor='#fff' />
              </View>
            )}
            {player.speciality === 'Maquina' && (
              <>
                <Item onClick={() => navigation.navigate('Vendas', { player, name: 'Pulverizador' })} icone={require('../../assets/agricultorIcones/pulverizador.png')} texto='Pulverizador' backgroundColor='#fff' />
              </>
            )}
            <Item onClick={() => navigation.navigate('FazerTransferencia', { player })} icone={require('../../assets/agricultorIcones/money2.png')} texto='Fazer Transferencia' backgroundColor='#fff' />
          </View>
        </>
      )}
      {Height >= 750 && (
        <>
          <View style={{ flex: 0.6, width: '90%', borderRadius: 20, alignItems: 'center', backgroundColor: '#66BF00', marginTop: 20 }}>
            <Text style={{ fontFamily: 'Rubik_400Regular', fontSize: 36, color: 'white' }}>200</Text>
            <Text style={styles.candidato, { color: 'white' }}>Produtividade atual</Text>
          </View>
          <View style={{ flex: 0.6, width: '90%', borderRadius: 20, alignItems: 'center', backgroundColor: '#BF0000', marginTop: 20 }}>
            <Text style={{ fontFamily: 'Rubik_400Regular', fontSize: 36, color: 'white' }}>100</Text>
            <Text style={styles.candidato, { color: 'white' }}>Poluição atual</Text>
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
    justifyContent: 'flex-start',
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
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: '6%',
    backgroundColor: COLORS.bgColorSecondary,
    width: 330,
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
  textos: {
    fontFamily: 'Rubik_300Light',
    fontSize: 20,
    alignSelf: 'center'
  },
  icone: {
    width: 40,
    height: 40,
  },
});