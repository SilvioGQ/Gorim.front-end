import React, {useState} from 'react';
import { Text, View, StyleSheet, Image, ScrollView, TouchableOpacity, Dimensions } from 'react-native';
import Money from '../../Components/Dinheiro'
import Produtos from '../../Components/produtos'
const Tela = Dimensions.get('screen').width
export default function Analizar() {

  return (
    <View style={styles.container}>
        <Money/>
    <Text style={styles.header}> Produtos</Text>
    <Produtos/>
    </View>
    
      );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    backgroundColor: '#EBFFFD',
    alignItems: 'center',
    padding: '2%',
    width: Tela,
    paddingTop: '8%'
  },

  row:{
    flexDirection: 'row',
    alignItems: 'flex-start',
    alignSelf: 'flex-start',
    justifyContent: 'flex-start',
    margin: '5%',
    marginTop: '8%',
    width: Tela,
    flexWrap: 'wrap'
  },
  row3:{
    flexDirection: 'row',
    alignSelf: 'flex-start',
    justifyContent: 'space-around',
    margin: '1%',
    width: Tela
  },
  colunm:{
    alignItems: 'center',
    justifyContent: 'center',
    margin: 7,
    marginTop: '8%',
    backgroundColor: '#FFFFFF',
    width: Tela,
    height: 95,
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
    fontFamily: 'Rubik_400Regular',
    fontSize: 24,
    paddingTop: 10,
    paddingBottom: 10
  },
  textos: {
    fontFamily: 'Rubik_700Bold',
    fontSize: 20,
    alignSelf: 'center'
  },
    textinhos: {
    fontFamily: 'Rubik_300Light',
    alignItems: 'center',
    alignSelf: 'center',
    margin: '5%',
    fontSize: 20,
  },
  logo:{
    width: 20,
    height: 23
  },
  person:{
    width: 46,
    height: 50,
    marginRight: '5%'
  },
  icone:{
    width: 42,
    height: 42,
  },
    map:{
    width: 50,
    height: 50,
    marginRight: '8%'
  },
  vermelho: {
    backgroundColor: '#FF7F7E'
  },
  candidato: {
    fontFamily: 'Rubik_300Light',
    fontSize: 18
  }
});