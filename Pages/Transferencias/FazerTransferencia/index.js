import React, { useEffect, useState } from 'react';
import { Text, View, StyleSheet, Image, TouchableOpacity, Dimensions } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';

import ModalInfo from '../../../Components/ModalInfo';
import Button from '../../../Components/Button';
import Quadrados from '../../../Components/Quadrado';
import Coin from '../../../Components/Coin';
import COLORS from '../../../styles/Colors';
import PlayerService from '../../../services/PlayerService';

const Tela = Dimensions.get('screen').width;
export default function FazerTransferencia({ navigation, route }) {
  const [modalText, setModalText] = useState('');
  const [players, setPlayers] = useState([]);
  const [count, setCount] = useState(0);
  const [id, setId] = useState();
  const { player } = route.params;

  useEffect(() => {
    PlayerService.getPlayers(player.room).then(resp => {
      resp = resp.filter(item => {
        if (item.id !== player.id) return item;
      });
      setPlayers(resp);
    });
  }, []);

  const increaseCount = () => setCount(count < player.coin ? count + 5 : count);
  const decreaseCount = () => setCount(count > 0 ? count - 5 : count);
  const confirmTransfer = () => {
    if (!id) {
      setModalText('Selecione o destino!');
    } else if (count === 0) {
      setModalText('Adicione um valor!');
    } else {
      navigation.navigate('ConfirmarTransferencia', { player, idDest: id, count });
    }
  }

  return (
    <View style={styles.container}>
      <Coin coin={player.coin} />
      <View style={styles.header}>
        <Image style={{ width: 63, height: 61 }} source={require('../../../assets/agricultorIcones/coin.png')} />
        <Text style={{ fontFamily: 'Rubik_300Light', fontSize: 20 }}>Fazer {'\n'}transferência</Text>
      </View>
      <Text style={styles.text}>Destinatário:</Text>
      <View style={{ marginHorizontal: 15 }}>
        <FlatList
          numColumns={3}
          data={players}
          keyExtractor={item => item.id.toString()}
          renderItem={({ item }) => <Quadrados player={item} onClick={() => setId(item.id)} backgroundColor={id == item.id ? '#8ACF3A' : '#fff'} />}
        />
      </View>
      <Text style={styles.text}>Valor:</Text>
      <View style={{ flex: 1, marginTop: 35 }}>
        <View style={styles.arrows}>
          <TouchableOpacity onPress={decreaseCount}>
            <Image style={[styles.icon, { opacity: count === 0 ? 0.5 : 1 }]} source={require('../../../assets/agricultorIcones/setaesquerda.png')} />
          </TouchableOpacity>
          <View style={styles.buttonAmount}>
            <Text style={styles.textAmount}>{count}</Text>
          </View>
          <TouchableOpacity onPress={increaseCount}>
            <Image style={[styles.icon, { opacity: count === player.coin ? 0.5 : 1 }]} source={require('../../../assets/agricultorIcones/setadireita.png')} />
          </TouchableOpacity>
        </View>
      </View>
      <Button onClick={confirmTransfer} name='CONTINUAR' />
      {modalText !== '' && (
        <ModalInfo onClick={() => setModalText('')} text={modalText} />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.bgColorPrimary,
    padding: 6,
    width: Tela,
    paddingTop: 25,
  },
  arrows: {
    flexDirection: 'row',
    alignSelf: 'center',
    justifyContent: 'center',
    marginEnd: 5
  },
  header: {
    flexDirection: 'row',
    alignSelf: 'center',
    justifyContent: 'center',
    margin: 15,
    width: Tela
  },
  icon: {
    width: 46,
    height: 48
  },
  text: {
    fontSize: 18,
    marginTop: 30,
    fontFamily: 'Rubik_300Light',
    marginHorizontal: 15
  },
  buttonAmount: {
    backgroundColor: COLORS.textWhite,
    borderWidth: 1,
    borderRadius: 20,
    height: 51,
    width: 180
  },
  textAmount: {
    alignSelf: 'center',
    textAlign: 'center',
    marginTop: 10,
    fontFamily: 'Rubik_400Regular',
    fontSize: 25
  }
});