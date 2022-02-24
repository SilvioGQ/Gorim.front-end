import React, { useEffect, useState, useContext } from 'react';
import { View, StyleSheet, Image, TouchableOpacity, Dimensions, FlatList, StatusBar } from 'react-native';
import { GameContext, getProducts } from '../../../../contexts/GameContext';

import Produtos from '../../../../components/Produtos';
import ModalInfo from '../../../../components/ModalInfo';
import FilterType from '../../../../components/FilterType';
import Rodada from '../../../../components/Rodada';
import HeaderIcons from '../../../../components/headerIcons';

const Tela = Dimensions.get('screen').width;
export default function AnalisarProdutos({ navigation }) {

  const [type, setType] = useState('Agrotóxico');
  const [modalText, setModalText] = useState('');
  const { player, data: products, stage } = useContext(GameContext);

  useEffect(() => {
    getProducts();
  }, []);

  const selectType = () => {
    console.log(products)
    if (type !== '') {
      return products.filter(i => i.type == type);
    } else {
      return products;
    }
  }

  return (
    <View style={styles.container}>
      <Rodada arrow={true} onClick={() => navigation.navigate('MenuJogador')} />
      <TouchableOpacity style={{ flexDirection: 'row', justifyContent: 'center', marginTop: '10%' }} onPress={() => setModalText('Legenda:')}  >
        <HeaderIcons name={'Analisar \nprodutos'} icon='Analisar produtos' />
        <Image source={require('../../../../assets/agricultorIcones/information.png')} style={{ width: 20, height: 20, marginVertical: 5, marginLeft: 10 }} />
      </TouchableOpacity>
      <FilterType type={type} setType={setType} />
      {modalText !== '' && <ModalInfo player={player} onClick={() => setModalText('')} text={modalText} modalImage={true} />}
      {stage === 'GETPRODUCTS' && (
        <FlatList
          data={selectType().sort((a, b) => a.medium - b.medium)}
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
