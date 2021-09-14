import React, { useState, useEffect, useContext } from 'react';
import { Text, View, StyleSheet, Image, TouchableOpacity, Dimensions, StatusBar } from 'react-native';
import { GameContext, removeToRoom, endStage } from '../../contexts/GameContext';

import COLORS from '../../constants/colors';
import Header from '../../Components/Header';
import Item from '../../Components/Item';
import Cenarios from '../../Components/CenarioBotao';
import Rodada from '../../Components/Rodada';
import ModalConfirmExit from '../../Components/ModalConfirmExit';
import Modal from '../../Components/ModalInfo';

const Height = Dimensions.get('screen').height;
export default function MenuJogador({ navigation }) {
  const [modalText, setModalText] = useState('');
  const [modalVisible, setModalVisible] = useState(false);
  const { players, player, awaitPlayers, stage, notify, round } = useContext(GameContext);
  //   const [notificationScene, setNotificationScene] = useState(false);
  //   const [notificationNegociation, setNotificationNegociation] = useState(false);

  useEffect(() => {
    let isMounted = true;
    if (stage === 'REMOVEDTOROOM' && isMounted) navigation.reset({ routes: [{ name: 'Gorim' }] });
    if (stage === 'ENDSTAGE' && isMounted) navigation.navigate('AguardarJogadores');

    return () => isMounted = false;
  }, [stage]);

  const removeFromRoom = () => {
    setModalVisible(!modalVisible);
    removeToRoom();
  }

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={'#58AB23'} StatusBarStyle='light-content' />
      <Rodada removeFromRoom={removeFromRoom} close={true} name={`${round}° Rodada`} setModalVisible={setModalVisible} />
      <Header />
      {modalVisible && <ModalConfirmExit deletePlayer={removeFromRoom} onClick={() => setModalVisible(!modalVisible)} />}
      {modalText !== '' && (
        <Modal onClick={() => setModalText('')} text={modalText} />
      )}
      {player.type === 'Agricultor' && (
        <>
          <TouchableOpacity onPress={() => navigation.navigate('ControleParcelas')} style={{ width: '100%' }} activeOpacity={0.7}>
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
          {player.specialty === 'Fertilizante' && (
            <View style={styles.items}>
              <Item type='Produtos' onClick={() => navigation.navigate('Vendas', { name: 'Fertilizante Comum' })} name='Fertilizante Comum' />
              <Item type='Produtos' onClick={() => navigation.navigate('Vendas', { name: 'Fertilizante Premium' })} name='Fertilizante Premium' />
              <Item type='Produtos' onClick={() => navigation.navigate('Vendas', { name: 'Fertilizante Super Premium' })} name='Fertilizante Super Premium' />
            </View>
          )}
          {player.specialty === 'Agrotoxico' && (
            <View style={styles.items}>
              <Item type='Produtos' onClick={() => navigation.navigate('Vendas', { name: 'Agrotóxico Comum' })} name='Agrotóxico Comum' />
              <Item type='Produtos' onClick={() => navigation.navigate('Vendas', { name: 'Agrotóxico Premium' })} name='Agrotóxico Premium' />
              <Item type='Produtos' onClick={() => navigation.navigate('Vendas', { name: 'Agrotóxico Super Premium' })} name='Agrotóxico Super Premium' />
            </View>
          )}
          {player.specialty === 'Semente' && (
            <View style={styles.items}>
              <Item type='Produtos' onClick={() => navigation.navigate('Vendas', { name: 'Soja' })} name='Soja' />
              <Item type='Produtos' onClick={() => navigation.navigate('Vendas', { name: 'Arroz' })} name='Arroz' />
              <Item type='Produtos' onClick={() => navigation.navigate('Vendas', { name: 'Hortaliça' })} name='Hortaliça' />
            </View>
          )}
          {player.specialty === 'Maquina' && (
            <>
              <View style={styles.items}>
                <Item type='Produtos' onClick={() => navigation.navigate('Vendas', { name: 'Pacote 1' })} name='Pacote 1' />
                <Item type='Produtos' onClick={() => navigation.navigate('Vendas', { name: 'Pacote 2' })} name='Pacote 2' />
                <Item type='Produtos' onClick={() => navigation.navigate('Vendas', { name: 'Pacote 3' })} name='Pacote 3' />
              </View>

            </>
          )}
          <View style={styles.items}>
            {player.specialty === 'Maquina' && (<Item type='Produtos' onClick={() => navigation.navigate('Vendas', { type: 'Maquina', name: 'Pulverizador' })} name='Pulverizador' />)}
            <Item type='Menu' onClick={() => navigation.navigate('FazerTransferencia')} name='Fazer Transferência' />
            <Item type='Menu' onClick={() => navigation.navigate('ChecarAnuncio')} name='Checar Anúncios' />
            {player.specialty !== 'Maquina' && (<View style={{ marginRight: 10, marginVertical: 10, backgroundColor: COLORS.bgColorPrimary, width: 96, height: 92, borderRadius: 20 }} />)}
          </View>
        </View>
      )}
      {Height >= 720 && (
        <>
          <View style={[styles.bar, { backgroundColor: '#66BF00', borderColor: '#8ACF3A' }]}>
            <Text style={styles.textBar}>{player.production}</Text>
            <Text style={styles.inferior}>Produtividade individual</Text>
          </View>
              {player.type === 'Agricultor' ?
          <TouchableOpacity style={[styles.bar, { backgroundColor: 'rgba(255,13,13,0.7)', borderColor: '#BF0000' }]} onPress={() => setModalText('Poluição é a soma da poluição de cada parcela dividida por 6.')} activeOpacity={0.7}>
            <View style={{ flexDirection: 'row' }}>
              {player.pollution ? <Text style={styles.textBar}>{player.pollution.toFixed(2).toString().indexOf('.00') !== -1 ? player.pollution.toFixed(0) : player.pollution.toFixed(2)}</Text> : <Text style={styles.textBar}>0</Text>}
                <Image source={require('../../assets/agricultorIcones/information.png')} style={{ position: 'absolute', top: 0, left: 30, width: 23, height: 23, marginLeft: 70, marginTop: 10, opacity: 0.5 }} />
            </View>
            <Text style={styles.inferior}>Poluição individual</Text>
          </TouchableOpacity>
              :
              <View style={[styles.bar, { backgroundColor: 'rgba(255,13,13,0.7)', borderColor: '#BF0000' }]}>
              <View style={{ flexDirection: 'row' }}>
                {player.pollution ? <Text style={styles.textBar}>{player.pollution.toFixed(2).toString().indexOf('.00') !== -1 ? player.pollution.toFixed(0) : player.pollution.toFixed(2)}</Text> : <Text style={styles.textBar}>0</Text>}
              </View>
              <Text style={styles.inferior}>Poluição individual</Text>
            </View>
              }
        </>
      )}
      <Cenarios seeScenery={() => navigation.navigate('Cenario')} endStage={() => endStage()} notification={notify.scene} />
      {awaitPlayers !== 0 && <Text style={{ color: 'red', marginTop: 50, fontFamily: 'Rubik_300Light' }}>{`${awaitPlayers} de ${players.length} jogadores já finalizaram`}</Text>}
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