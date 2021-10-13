import React, { useState, useContext } from 'react';
import { Text, View, StyleSheet, Image, Dimensions } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import { GameContext } from "../../../contexts/GameContext";

import ModalInfo from '../../../Components/ModalInfo';
import Button from '../../../Components/Button';
import Quadrados from '../../../Components/Quadrado';
import Coin from '../../../Components/Coin';
import COLORS from '../../../constants/colors';
import CaixaDeValor from '../../../Components/CaixaDeValor';
import Rodada from '../../../Components/Rodada';

const Tela = Dimensions.get('screen').width;
export default function FazerTransferencia({ navigation }) {

  const [modalText, setModalText] = useState('');
  const [count, setCount] = useState(0);
  const [id, setId] = useState();
  const [type, setType] = useState();
  const { players, player, phase } = useContext(GameContext);

  const confirmTransfer = () => {
    if (!id) return setModalText('Selecione o destino!');
    if (count === 0) return setModalText('Adicione um valor!');
    
    navigation.navigate('ConfirmarTransferencia', { idDest: id, count, provider: phase === 1 ? false : true, type: type == 'Agricultor' || type == "Empresário" ? false : true});
  }
  console.log(players)
  return (
    <View style={styles.container}>
      <Rodada name={'Fazer transferência'} arrow={true} onClick={()=> navigation.goBack()}/>
      <Coin coin={ phase === 1 ? player.coin : player.serviceSalary} />
      <View style={styles.header}>
        <Image style={{ width: 63, height: 61 }} source={require('../../../assets/icons/coin.png')} />
        <Text style={{ fontFamily: 'Rubik_300Light', fontSize: 20 }}>Fazer {'\n'}transferência</Text>
      </View>
      <Text style={styles.text}>Destinatário:</Text>
      <View style={{ marginHorizontal: 10 }}>
        <FlatList
          numColumns={3}
          data={phase === 1 ? players.filter(i => i.id !== player.id && i.office !== 'Cidadão') : players.filter(i => i.office !== 'Cidadão')}
          keyExtractor={item => item.id.toString()}
          renderItem={({ item }) => <Quadrados abr={item.type.slice(0,3)} player={item} onClick={() =>{setId(item.id); setType(item.type)}} backgroundColor={id == item.id ? '#8ACF3A' : '#fff'} color={id == item.id ? '#fff' : '#000'} />}
        />
      </View>
      <View style={{ marginHorizontal: 10 }}>
        <FlatList
          numColumns={3}
          data={phase === 2 ? players.filter(i => i.id !== player.id && i.office !== 'Cidadão') : players.filter(i => i.office !== 'Cidadão')}
          keyExtractor={item => item.id.toString()}
          renderItem={({ item }) => <Quadrados abr={item.office.slice(0,3)} player={item} onClick={() =>{setId(item.id); setType(item.office)}} backgroundColor={id == item.id ? '#8ACF3A' : '#fff'} color={id == item.id ? '#fff' : '#000'} />}
        />
      </View>
      <Text style={[styles.text, {marginBottom: 15}]}>Valor:</Text>
      <CaixaDeValor value={count} setValue={setCount} increment={5} maxValue={phase === 1 ? player.coin : player.serviceSalary} coin ={true} />
      <Button onClick={confirmTransfer} name='CONTINUAR' />
      {modalText !== '' && <ModalInfo onClick={() => setModalText('')} text={modalText} /> }
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: Tela,
  },
  header: {
    flexDirection: 'row',
    alignSelf: 'center',
    justifyContent: 'center',
    margin: 15,
    width: Tela
  },
  text: {
    fontSize: 18,
    marginTop: 30,
    fontFamily: 'Rubik_300Light',
    marginHorizontal: 15,
  }
});