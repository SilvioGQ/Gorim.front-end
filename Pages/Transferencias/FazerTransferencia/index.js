import React, { useEffect, useState } from 'react';
import { Text, View, StyleSheet, Image, TouchableOpacity, Dimensions } from 'react-native';

import Modal from '../../../Components/Modal/ModalFrame2';
import Button from '../../../Components/Button';
import Quadrados from '../../../Components/Quadrado';
import Money from '../../../Components/Dinheiro';
import COLORS from '../../../styles/Colors'
import setaDireita from '../../../assets/agricultorIcones/setadireita.png';
import Money2 from '../../../assets/agricultorIcones/money2.png';
import setaEsquerda from '../../../assets/agricultorIcones/setaesquerda.png';
import PlayerService from '../../../services/PlayerService';
import { FlatList } from 'react-native-gesture-handler';

const Tela = Dimensions.get('screen').width;
export default function Transferindo({ navigation, route }) {
  const [modalText, setModalText] = useState('');
  const [id, setid] = useState('');
  const [selected, setSelected] = useState(false);
  const [players, setPlayers] = useState([]);
  const [count, setCount] = useState(0);
  const { player } = route.params;

  useEffect(() => {
    PlayerService.getPlayers(player.idJogo).then(setPlayers);
  }, []);

  const handleOnPress = () => setSelected(true);
  const increaseCount = () => setCount(count + 5);
  const decreaseCount = () => setCount(count > 0 ? count - 5 : count);
  const confirmTransfer = () => {
    if (selected === false) {
      setModalText('Selecione o destino!');
    } else if (count === 0) {
      setModalText('Adicione um valor!');
    } else {
      navigation.navigate('ConfirmarTransferencia', { player, count });
    }
  }
  return (
    <View style={styles.container}>
      <Money coin={player.coin} />
      <View style={styles.espaco}>
        <Image
          style={{ width: 63, height: 61 }}
          source={Money2}
        />
        <Text style={styles.header}>Fazer {'\n'} transferência</Text>
      </View>
      <Text style={{ fontSize: 18, marginTop: 30, fontFamily: 'Rubik_300Light', marginHorizontal:15 }}>Destinatário:</Text>
      <View style={{marginHorizontal:15}}>
        <FlatList
          numColumns={3}
          data={players}
          keyExtractor={item => item.id.toString()}
          renderItem={({ item }) =>  <Quadrados player={item} onClick={()=> setid(player.id)} backgroundColor={id == item.id ? '#8ACF3A' : '#fff'}/>}
        />
        </View>
      <Text style={{ fontSize: 18, fontFamily: 'Rubik_300Light', marginHorizontal:15, marginTop:30 }}>Valor:</Text>
      <View style={{ flex: 1, marginTop: 35 }}>
        <View style={styles.setas}>
          <TouchableOpacity onPress={decreaseCount}>
            <Image
              style={styles.icone2}
              source={setaEsquerda}
            />
          </TouchableOpacity>
          <View style={styles.bgbranco}>
            <Text style={styles.bgbrancotext}>{count}</Text>
          </View>
          <TouchableOpacity onPress={increaseCount}>
            <Image
              style={styles.icone2}
              source={setaDireita}
            />
          </TouchableOpacity>
        </View>
      </View>
      <Button onClick={confirmTransfer} name='CONTINUAR' />
      {modalText !== '' && (
        <Modal onClick={() => setModalText('')} text={modalText} />
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
  setas: {
    flexDirection: 'row',
    alignSelf: 'center',
    justifyContent: 'center',
    marginEnd: 5
  },
  espaco: {
    flexDirection: 'row',
    alignSelf: 'center',
    justifyContent: 'center',
    margin: 15,
    width: Tela
  },
  header: {
    fontFamily: 'Rubik_300Light',

    fontSize: 20,
  },
  icone: {
    width: 32,
    height: 35,
  },
  icone2: {
    width: 46,
    height: 48
  },
  bgbranco: {
    backgroundColor: COLORS.textWhite,
    borderWidth: 1,
    borderRadius: 20,
    height: 51,
    width: 180
  },
  bgbrancotext: {
    alignSelf: 'center',
    textAlign: 'center',
    marginTop: 10,
    fontFamily: 'Rubik_400Regular',
    fontSize: 25
  }
});