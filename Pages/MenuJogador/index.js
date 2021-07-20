import React, { useState, useEffect, useContext } from 'react';
import { Text, View, StyleSheet, Image, TouchableOpacity, Dimensions, StatusBar } from 'react-native';
import { GameContext, removeToRoom, stepFinish } from '../../context/GameContext';

import COLORS from '../../resources/colors';
import Header from '../../Components/Header';
import Item from '../../Components/Item';
import Cenarios from '../../Components/CenarioBotao';
import Rodada from '../../Components/Rodada';
import ModalConfirmExit from '../../Components/ModalConfirmExit';

const Height = Dimensions.get('screen').height;
export default function MenuJogador({ navigation }) {

  const [modalVisible, setModalVisible] = useState(false);
  const { players, player, awaitPlayers, stage, notify } = useContext(GameContext);
  //   const [notificationScene, setNotificationScene] = useState(false);
  //   const [notificationNegociation, setNotificationNegociation] = useState(false);

  useEffect(() => {
    if (stage === 'REMOVEDTOROOM') navigation.reset({ routes: [{ name: 'Gorim' }] });
    if (stage === 'STEPFINISH') navigation.navigate('AguardarJogadores');
  }, [stage]);

  const removeFromRoom = () => {
    setModalVisible(!modalVisible);
    removeToRoom();
  }
  
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={'#58AB23'} StatusBarStyle='light-content' />
      <Rodada removeFromRoom={removeFromRoom} close={true} name={'Rodada'} setModalVisible={setModalVisible} />
      <Header />
      {modalVisible && <ModalConfirmExit deletePlayer={removeFromRoom} onClick={() => setModalVisible(!modalVisible)} />}
      {player.type === 'Agricultor' && (
        <>
          <TouchableOpacity onPress={() => navigation.navigate('ControleParcelas')} style={{ width: '100%' }}>
            <View style={styles.row2}>
              <Image style={{ width: 35, height: 35 }} source={require('../../assets/agricultorIcones/ParcelaPequena.png')} />
              <Text style={{ fontFamily: 'Rubik_300Light', fontSize: 20, alignSelf: 'center', marginLeft: 10 }}>Parcelas de terra</Text>
            </View>
          </TouchableOpacity>
          <View style={styles.row}>
            <View style={styles.items}>
              <Item type='Menu' onClick={() => navigation.navigate('Propostas')} name='Checar propostas' notification={notify.offers} />
              <Item type='Menu' onClick={() => navigation.navigate('FazerTransferencia')} name='Fazer Transferência' />
              <Item type='Menu' onClick={() => navigation.navigate('AnalisarProdutos')} name='Analisar produtos' />
            </View>
          </View>
        </>
      )}
      {player.type === 'Empresário' && (
        <View style={styles.row}>
          {player.speciality === 'Fertilizante' && (
            <View style={styles.items}>
              <Item type='Produtos' onClick={() => navigation.navigate('Vendas', { name: 'Fertilizante Comum' })} name='Fertilizante Comum' />
              <Item type='Produtos' onClick={() => navigation.navigate('Vendas', { name: 'Fertilizante Premium' })} name='Fertilizante Premium' />
              <Item type='Produtos' onClick={() => navigation.navigate('Vendas', { name: 'Fertilizante Super Premium' })} name='Fertilizante Super Premium' />
            </View>
          )}
          {player.speciality === 'Agrotoxico' && (
            <View style={styles.items}>
              <Item type='Produtos' onClick={() => navigation.navigate('Vendas', { name: 'Agrotóxico Comum' })} name='Agrotóxico Comum' />
              <Item type='Produtos' onClick={() => navigation.navigate('Vendas', { name: 'Agrotóxico Premium' })} name='Agrotóxico Premium' />
              <Item type='Produtos' onClick={() => navigation.navigate('Vendas', { name: 'Agrotóxico Super Premium' })} name='Agrotóxico Super Premium' />
            </View>
          )}
          {player.speciality === 'Semente' && (
            <View style={styles.items}>
              <Item type='Produtos' onClick={() => navigation.navigate('Vendas', { name: 'Soja' })} name='Soja' />
              <Item type='Produtos' onClick={() => navigation.navigate('Vendas', { name: 'Arroz' })} name='Arroz' />
              <Item type='Produtos' onClick={() => navigation.navigate('Vendas', { name: 'Hortaliça' })} name='Hortaliça' />
            </View>
          )}
          {player.speciality === 'Maquina' && (
            <>
              <View style={styles.items}>
                <Item type='Produtos' onClick={() => navigation.navigate('Vendas', { name: 'Pacote 1' })} name='Pacote 1' />
                <Item type='Produtos' onClick={() => navigation.navigate('Vendas', { name: 'Pacote 2' })} name='Pacote 2' />
                <Item type='Produtos' onClick={() => navigation.navigate('Vendas', { name: 'Pacote 3' })} name='Pacote 3' />
              </View>

            </>
          )}
          <View style={styles.items}>
            {player.speciality === 'Maquina' && (<Item type='Produtos' onClick={() => navigation.navigate('Vendas', { type: 'Maquina', name: 'Pulverizador' })} name='Pulverizador' />)}
            <Item type='Menu' onClick={() => navigation.navigate('FazerTransferencia')} name='Fazer Transferência' />
            <Item type='Menu' onClick={() => navigation.navigate('ChecarAnuncio')} name='Checar Anúncios' />
            {player.speciality !== 'Maquina' && (<View style={{ marginRight: 10, marginVertical: 10, backgroundColor: COLORS.bgColorPrimary, width: 96, height: 92, borderRadius: 20 }} />)}
          </View>
        </View>
      )}
      {Height >= 780 && (
        <>
          <View style={[styles.bar, { backgroundColor: '#66BF00',  borderColor: '#8ACF3A' }]}>
            <Text style={styles.textBar}>100</Text>
            <Text style={styles.inferior}>Produtividade individual</Text>
          </View>
          <View style={[styles.bar, { backgroundColor: 'rgba(255,13,13,0.7)', borderColor: '#BF0000' }]}>
            <Text style={styles.textBar}>0</Text>
            <Text style={styles.inferior}>Poluição individual</Text>
          </View>
        </>
      )}
      <Cenarios seeScenery={() => navigation.navigate('Cenario')} stepFinish={() => stepFinish()} notification={notify.scene} />
      {awaitPlayers !== 0 && <Text style={{ color: 'red', paddingTop: 30 }}>{`Etapa será finalizada após todos finalizarem ${awaitPlayers}/${players.length}`}</Text>}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.bgColorPrimary,
    alignItems: 'center',
  },
  container2: {
    flexDirection: 'row',
    backgroundColor: COLORS.headerColor,
    height: 65,
    width: '100%',
  },
  textLarge: {
    color: '#ffffff',
    fontSize: 20,
    fontFamily: 'Rubik_300Light',
    marginTop: 20,
    marginLeft: 15
  },
  row: {
    flexDirection: 'row',
    alignSelf: 'flex-start',
    marginHorizontal: 20,
    marginVertical: 20,
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
  },
  bar: {
    padding: 8,
    width: '89%',
    borderRadius: 20,
    alignItems: 'center',
    marginTop: 15
  },
  textBar: {
    fontFamily: 'Rubik_400Regular',
    fontSize: 36,
    color: '#fff',
  },
  inferior: {
    fontSize: 18,
    fontFamily: 'Rubik_300Light',
    color: '#fff',
  },
});