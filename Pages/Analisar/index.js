import React, { useEffect, useState } from 'react';
import { Text, View, StyleSheet, Image, TouchableOpacity, Dimensions, FlatList } from 'react-native';
import COLORS from '../../resources/colors';

import Produtos from '../../Components/Produtos';
import ModalInfo from '../../Components/ModalInfo';

import FunctionaliryService from '../../services/FunctionalityService';
import { StatusBar } from 'react-native';

const Tela = Dimensions.get('screen').width;
export default function Analizar() {
  const [modalText, setModalText] = useState('');
  const [modalImage, setModalImage] = useState(false);
  const [products, setProducts] = useState([]);
  const textInfo = 'Informações em tela: \nIcones e nomes dos produtos que podem ser usados nas parcelas de terra';

  useEffect(() => {
    setModalImage(true)
    FunctionaliryService.getProducts().then(setProducts);
  }, []);

  return (
    <View style={styles.container}>
      <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
        <Text style={styles.header}>Produtos</Text>
        <TouchableOpacity onPress={() => setModalText(textInfo)}>
          <Image source={require('../../assets/agricultorIcones/information.png')} style={{ width: 20, height: 20, marginVertical: 5, marginLeft: 10 }} />
        </TouchableOpacity>
      </View>
      {modalText !== '' && (
        <ModalInfo onClick={() => setModalText('')} text={modalText} modalImage ={modalImage}/>
      )}
      <FlatList
        showsVerticalScrollIndicator={false}
        data={products}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => <Produtos item={item} />}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.bgColorPrimary,
    width: Tela,
    paddingTop: StatusBar.currentHeight
  },
  header: {
    fontFamily: 'Rubik_400Regular',
    fontSize: 24,
    textAlign: 'center',
    marginLeft: 20
  },
});