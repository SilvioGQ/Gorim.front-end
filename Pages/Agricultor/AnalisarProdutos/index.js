import React, { useEffect, useState, useContext } from 'react';
import { Text, View, StyleSheet, Image, TouchableOpacity, Dimensions, FlatList, StatusBar } from 'react-native';
import { GameContext, getProducts } from '../../../contexts/GameContext';

import COLORS from '../../../constants/colors';
import Produtos from '../../../Components/Produtos';
import ModalInfo from '../../../Components/ModalInfo';
import FilterType from '../../../Components/FilterType';
import Rodada from '../../../Components/Rodada';

const Tela = Dimensions.get('screen').width;
export default function AnalisarProdutos({navigation}) {
  const [type, setType] = useState('Agrotoxico');
  const [modalText, setModalText] = useState('');
  const { data: products, stage } = useContext(GameContext);

  useEffect(() => {
    getProducts();
  }, []);

  const selectType = () => {
    if (type !== '') {
      return products.filter(i => i.type == type);
    } else {
      return products;
    }
  }

  return (
    <View style={styles.container}>
      <Rodada name={'Analisar produtos'} arrow={true} onClick={()=>navigation.navigate('MenuJogador')} />
        <TouchableOpacity style={{ flexDirection: 'row', justifyContent: 'center', marginTop: '10%' }} onPress={() => setModalText('Legenda:')}  >
        <Text style={styles.header}>Produtos</Text>
          <Image source={require('../../../assets/agricultorIcones/information.png')} style={{ width: 20, height: 20, marginVertical: 5, marginLeft: 10 }} />
        </TouchableOpacity>
      <FilterType type={type} setType={setType} />
      {modalText !== '' && <ModalInfo onClick={() => setModalText('')} text={modalText} modalImage={true} />}
      {stage === 'GETPRODUCTS' && (
        <FlatList
          data={selectType().sort((a, b) => a.medium-b.medium)}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => <Produtos item={item} />}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: Tela,
  },
  header: {
    fontFamily: 'Rubik_400Regular',
    fontSize: 20,
    textAlign: 'center',
    marginLeft: 20
  },
});