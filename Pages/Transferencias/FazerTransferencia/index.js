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
  const { players, player } = useContext(GameContext);

  const confirmTransfer = () => {
    if (!id) return setModalText('Selecione o destino!');
    if (count === 0) return setModalText('Adicione um valor!');

    navigation.navigate('ConfirmarTransferencia', { idDest: id, count });
  }
  return (
    <View style={styles.container}>
      <Rodada name={'Fazer transferência'} arrow={true} onClick={()=>navigation.navigate('MenuJogador')}/>
      <Coin coin={player.coin} />
      <View style={styles.header}>
        <Image style={{ width: 63, height: 61 }} source={require('../../../assets/icons/coin.png')} />
        <Text style={{ fontFamily: 'Rubik_300Light', fontSize: 20 }}>Fazer {'\n'}transferência</Text>
      </View>
      <Text style={styles.text}>Destinatário:</Text>
      <View style={{ marginHorizontal: 10 }}>
        <FlatList
          numColumns={3}
          data={players.filter(i => i.id !== player.id)}
          keyExtractor={item => item.id.toString()}
          renderItem={({ item }) => <Quadrados player={item} onClick={() => setId(item.id)} backgroundColor={id == item.id ? '#8ACF3A' : '#fff'} color={id == item.id ? '#fff' : '#000'} />}
        />
      </View>
      <Text style={[styles.text, {marginBottom: 15}]}>Valor:</Text>
      <CaixaDeValor value={count} setValue={setCount} increment={5} maxValue={player.coin} coin ={true} />
      <Button onClick={confirmTransfer} name='CONTINUAR' />
      {modalText !== '' && <ModalInfo onClick={() => setModalText('')} text={modalText} /> }
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.bgColorPrimary,
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