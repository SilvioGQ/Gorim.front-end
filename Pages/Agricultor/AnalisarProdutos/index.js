import React, { useEffect, useState, useContext } from 'react';
import { Text, View, StyleSheet, Image, TouchableOpacity, Dimensions, FlatList, StatusBar } from 'react-native';
import { GameContext, getProducts } from '../../../context/GameContext';

import COLORS from '../../../resources/colors';
import Produtos from '../../../Components/Produtos';
import ModalInfo from '../../../Components/ModalInfo';
import FilterType from '../../../Components/FilterType';
import Rodada from '../../../Components/Rodada';

const Tela = Dimensions.get('screen').width;
export default function AnalisarProdutos() {
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
      <Rodada name={'Analisar produtos'} />
      <View style={{ flexDirection: 'row', justifyContent: 'center', marginTop: '10%' }}>
        <Text style={styles.header}>Produtos</Text>
        <TouchableOpacity onPress={() => setModalText('Legenda:')}>
          <Image source={require('../../../assets/agricultorIcones/information.png')} style={{ width: 20, height: 20, marginVertical: 5, marginLeft: 10 }} />
        </TouchableOpacity>
      </View>
      <FilterType type={type} setType={setType} />
      {modalText !== '' && <ModalInfo onClick={() => setModalText('')} text={modalText} modalImage={true} />}
      {stage === 'GETPRODUCTS' && (
        <FlatList
          data={selectType().sort((a, b) => a.name.localeCompare(b.name))}
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
    backgroundColor: COLORS.bgColorPrimary,
    width: Tela,
  },
  header: {
    fontFamily: 'Rubik_400Regular',
    fontSize: 24,
    textAlign: 'center',
    marginLeft: 20
  },
});