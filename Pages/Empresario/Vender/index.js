import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, Image, TouchableOpacity, Dimensions } from 'react-native';
import Button from '../../../Components/Button';
import Quadrados from '../../../Components/Quadrado';
import Modal from '../../../Components/ModalInfo'
import Quantidades from '../../../Components/Quantidades';
import COLORS from '../../../resources/colors';
import Selo from '../../../assets/moedas/Selo.png';
import Moeda from '../../../assets/moedas/Moeda.png';
import Tractor from '../../../assets/machines/tractor.png';
import Baixo from '../../../assets/moedas/cheap.png';
import Normal from '../../../assets/moedas/medium.png';
import Alto from '../../../assets/moedas/expensive.png';
import PlayerService from '../../../services/PlayerService';
import { FlatList } from 'react-native-gesture-handler';
const Tela = Dimensions.get('screen').width;
export default function Vendas({ navigation, route }) {
  const { name } = route.params;
  const [modalText, setModalText] = useState('');
  const [players, setPlayers] = useState([]);
  const [Selected, setSelected] = useState(-1);
  const { player } = route.params;
  const [id, setId] = useState();
  useEffect(() => {
    PlayerService.getPlayers(player.room).then(resp => {
      resp = resp.filter(item => {
        if (item.id !== player.id) return item;
      });
      setPlayers(resp);
    });
  }, []);
  const confirmTransfer = () => {
    if (!id) {
      setModalText('Selecione o destino!');
    }
  }
  return (
    <View style={styles.container}>
      <View style={styles.center}>
        <Image
          style={styles.person}
          source={Tractor}
        />
        <Text style={styles.header}> Venda de {'\n'} {JSON.stringify(name)} </Text>
      </View>
      <Text style={{ fontSize: 18, fontFamily: 'Rubik_300Light', marginHorizontal: 15, marginTop: 30 }}> Clientes: </Text>
      <View style={{ marginHorizontal: 10 }}>
        <FlatList
          numColumns={3}
          data={players}
          keyExtractor={item => item.id.toString()}
          renderItem={({ item }) => <Quadrados player={item} onClick={() => setId(item.id)} backgroundColor={id == item.id ? '#8ACF3A' : '#fff'} />}
        />
      </View>
      {modalText !== '' && (
        <ModalInfo onClick={() => setModalText('')} text={modalText} />
      )}
      <Text style={{ fontSize: 18, fontFamily: 'Rubik_300Light', marginHorizontal: 15, marginTop: 30 }}> Valor: </Text>
      <View style={styles.row}>
        <TouchableOpacity onPress={() => setSelected(0)}>
          <View style={[styles.colunm, { backgroundColor: Selected == 0 ? "#8ACF3A" : '#fff' }]}>
            <Image
              style={styles.icone}
              source={Baixo}
            />
            <Text style={styles.valor}> Baixo </Text>
            <Text style={styles.valor}> $25 </Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setSelected(1)}>
          <View style={[styles.colunm, { backgroundColor: Selected == 1 ? "#8ACF3A" : '#fff' }]}>
            <Image
              style={styles.icone}
              source={Normal}
            />
            <Text style={styles.valor}> Normal </Text>
            <Text style={styles.valor}> $30 </Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setSelected(2)}>
          <View style={[styles.colunm, { backgroundColor: Selected == 2 ? "#8ACF3A" : '#fff' }]}>
            <Image
              style={styles.icone}
              source={Alto}
            />
            <Text style={styles.valor}> Alto </Text>
            <Text style={styles.valor}> $35 </Text>
          </View>
        </TouchableOpacity>
      </View>
      <Text style={{fontSize: 18, fontFamily: 'Rubik_300Light', marginHorizontal:15, marginTop:30}}>Quantidade:</Text>
      <Quantidades />
      <Button
        onClick={confirmTransfer}
        name='VENDER' />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.bgColorPrimary,
    paddingTop: 25,
  },
  valor: {
    fontFamily: 'Rubik_300Light',
    fontSize: 12,
  },
  row: {
    flexDirection: 'row',
    marginHorizontal: 10,
    width:'95%',
    marginVertical:15,
    justifyContent:'space-around'
  },
  center: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  colunm: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: COLORS.textWhite,
    width: 96,
    height: 84,
    borderRadius: 20,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.32,
    shadowRadius: 5.46,

    elevation: 6
  },
  header: {
    fontFamily: 'Rubik_300Light',
    fontWeight: 'bold',
    fontSize: 20,
  },
  textos: {
    fontFamily: 'Rubik_300Light',
    marginHorizontal:15,
    fontSize: 20,
    alignSelf: 'center'
  },
  person: {
    width: 59,
    height: 58
  },
  icone: {
    width: 40,
    height: 40,
    marginTop:5
  }
});