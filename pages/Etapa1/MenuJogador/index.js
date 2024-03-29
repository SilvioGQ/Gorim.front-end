import React, { useState, useEffect, useContext } from 'react';
import { Text, View, StyleSheet, Image, TouchableOpacity, Dimensions, StatusBar } from 'react-native';
import { GameContext, removeToRoom, endStage } from '../../../contexts/GameContext';

import COLORS from '../../../constants/colors';
import Header from '../../../components/Header';
import Item from '../../../components/Item';
import ResumoEChat from '../../../components/ResumoEChat';
import Cenarios from '../../../components/CenarioBotao';
import Rodada from '../../../components/Rodada';
import ModalConfirmExit from '../../../components/ModalConfirmExit';
import Modal from '../../../components/ModalInfo';
import ModalAsk from '../../../components/ModalAsk';
import normalizeNumber from '../../../helpers/normalizeNumber';
import Papel from '../../../assets/agricultorIcones/papel.png';

const Height = Dimensions.get('screen').height;
export default function MenuJogador({ navigation }) {
  const [modalText, setModalText] = useState('');
  const [modalVisible, setModalVisible] = useState(false);
  const [modalVisible2, setModalVisible2] = useState(false);
  const { players, player, awaitPlayers, stage, notify, game } = useContext(GameContext);
  useEffect(() => {
    let isMounted = true;

    if (stage === 'NAVIGATEFORMENUPOLITIC') navigation.reset({ routes: [{ name: 'MenuPolitico' }] });
    if (stage === 'NAVIGATEFORSTATUS') navigation.reset({ routes: [{ name: 'Status' }] });
    if (stage === 'NAVIGATEFORLOBBY') navigation.reset({ routes: [{ name: 'Lobby' }] });
    if (stage === 'ALLFORENDSTAGE' && isMounted) navigation.reset({ routes: [{ name: 'Status' }] });

    if (stage === 'REMOVEDTOROOM' && isMounted) navigation.reset({ routes: [{ name: 'Gorim' }] });

    return () => isMounted = false;
  }, [stage]);

  const removeFromRoom = () => {
    setModalVisible(!modalVisible);
    removeToRoom();
  }

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={'#58AB23'} StatusBarStyle='light-content' />

      <Rodada removeFromRoom={removeFromRoom} close={true} setModalVisible={setModalVisible} />
      <View>
        <Text style={styles.rodada}>{game.round}ª Rodada - {game.phase}ª Etapa</Text>
      </View>
      <Header typeMenu="player" />
      {modalVisible && <ModalConfirmExit deletePlayer={removeFromRoom} onClick={() => setModalVisible(!modalVisible)} />}
      {modalVisible2 && <ModalAsk finish={() => { endStage(); navigation.reset({ routes: [{ name: 'AguardarJogadores' }] }); }} back={() => setModalVisible2(!modalVisible2)} />}
      {modalText !== '' && (
        <Modal onClick={() => setModalText('')} text={modalText} />
      )}
      {player.type === 'Agricultor' && (
        <>
          <TouchableOpacity onPress={() => navigation.navigate('ControleParcelas')} style={{ width: '100%' }}  >
            <View style={styles.row2}>
              <Image style={{ width: 35, height: 35 }} source={require('../../../assets/agricultorIcones/ParcelaPequena.png')} />
              <Text style={{ fontSize: 20, alignSelf: 'center', marginLeft: 10 }}>Parcelas de terra</Text>
            </View>
          </TouchableOpacity>
          <View style={styles.row}>
            <View style={styles.items}>
              <Item type='Menu' onClick={() => navigation.navigate('Propostas')} name='Checar anúncios' notification={notify.offers} />
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
          {player.specialty === 'Agrotóxico' && (
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
          {player.specialty === 'Máquina' && (
            <>
              <View style={styles.items}>
                <Item type='Produtos' onClick={() => navigation.navigate('Vendas', { name: 'Pacote 1' })} name='Pacote 1' />
                <Item type='Produtos' onClick={() => navigation.navigate('Vendas', { name: 'Pacote 2' })} name='Pacote 2' />
                <Item type='Produtos' onClick={() => navigation.navigate('Vendas', { name: 'Pacote 3' })} name='Pacote 3' />
              </View>

            </>
          )}
      <View style={styles.items}>
            {player.specialty === 'Máquina' && (<Item type='Produtos' onClick={() => navigation.navigate('Vendas', { type: 'Máquina', name: 'Pulverizador' })} name='Pulverizador' />)}
            <Item type='Menu' onClick={() => navigation.navigate('FazerTransferencia')} name='Fazer Transferência' />
            <Item type='Menu' onClick={() => navigation.navigate('ChecarAnuncio')} name='Checar Anúncios' />
            {player.specialty !== 'Máquina' && (<View style={{ marginRight: 10, marginVertical: 10, backgroundColor: COLORS.bgColorPrimary, width: 96, height: 92, borderRadius: 20 }} />)}
          </View>


          {/* <TouchableOpacity onPress={()=>navigation.navigate('Chat')}>
          <Text>Clique aqui para ir para o chat</Text>
          </TouchableOpacity> */}
        </View>
      )}
      {/* {Height >= 720 && (
        <>
          <View style={[styles.bar, { backgroundColor: '#66BF00', borderColor: '#8ACF3A' }]}>
            <Text style={styles.textBar}>{normalizeNumber(player.production)}</Text>
            <Text style={styles.inferior}>Produtividade individual</Text>
          </View>
          {player.type === 'Agricultor' ?
            <TouchableOpacity style={[styles.bar, { backgroundColor: 'rgba(255,13,13,0.7)', borderColor: '#BF0000' }]} onPress={() => setModalText('Poluição é a soma da poluição de cada parcela dividida por 6.')}  >
              <View style={{ flexDirection: 'row' }}>
                {player.pollution ? <Text style={styles.textBar}>{normalizeNumber(player.pollution)}</Text> : <Text style={styles.textBar}>0</Text>}
                <Image source={require('../../../assets/agricultorIcones/information.png')} style={{ position: 'absolute', top: 0, left: 30, width: 23, height: 23, marginLeft: 70, marginTop: 10, opacity: 0.5 }} />
              </View>
              <Text style={styles.inferior}>Poluição individual</Text>
            </TouchableOpacity>
            :
            <View style={[styles.bar, { backgroundColor: 'rgba(255,13,13,0.7)', borderColor: '#BF0000' }]}>
              <View style={{ flexDirection: 'row' }}>
                {player.pollution ? <Text style={styles.textBar}>{normalizeNumber(player.pollution)}</Text> : <Text style={styles.textBar}>0</Text>}
              </View>
              <Text style={styles.inferior}>Poluição individual</Text>
            </View>
          }
        </>
      )} */}
      <View style={{ paddingTop: 50, paddingBottom: 18, flexDirection: 'row', }}>
      <ResumoEChat seeScenery={() => navigation.navigate('Cenario')} seeChat={() => navigation.navigate('Chat')} notificationChat={notify.messages.length > 0 ? true : false} notification={notify.scene} />
      </View>
            <View style={{flexDirection: 'row'}}>

      <Cenarios endStage={() => setModalVisible2(true)} notification={notify.scene} />
      </View>

      {awaitPlayers !== 0 && <Text style={{ color: 'red', marginTop: 5 }}>{`${awaitPlayers} de ${players.length} jogadores já finalizaram`}</Text>}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  row: {
    flexDirection: 'row',
    alignSelf: 'flex-start',
    marginHorizontal: 30,
    marginVertical: 10,
    width: '100%',
    flexWrap: 'wrap'
  },
  row2: {
    flexDirection: 'row',
    marginHorizontal: 20,
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 12,
    backgroundColor: COLORS.bgColorSecondary,
    width: '86%',
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
    width: '85%',
    flexDirection: 'row',
    justifyContent: 'space-between',

  },
  bar: {
    padding: 6,
    width: '89%',
    borderRadius: 20,
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 5
  },
  textBar: {
    fontFamily: 'Rubik_400Regular',
    fontSize: 36,
    color: '#fff',
  },
  inferior: {
    fontSize: 18,

    color: '#fff',
  },
  rodada: {
    fontFamily: 'Rubik_700Bold',
    color: '#4A8A00',
    fontSize: 20,
    marginVertical: 15,
    textAlign: 'center'

  }
});
