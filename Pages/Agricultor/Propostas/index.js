import React, {useState} from 'react';
import { Text, View, StyleSheet, Image, ScrollView, TouchableOpacity, Dimensions } from 'react-native';
import Money from '../../../Components/Money'
const Tela = Dimensions.get('screen').width
export default function Proposta() {
  return (
    <View style={styles.container}>
      <Money/>
    <Text style={styles.header}> Ofertas</Text>
    <View style= {styles.colunm}>
    <View style={styles.row3}>
        <View>
        <Image style= {styles.icone} source={require('../../../assets/perfils/empresariox1/Empresario.png')}/>
        <Text style= {{textAlign: 'center'}}>Empresário</Text>
        </View>
        <View>
            <Text>Produto</Text>
            <Text>Soja</Text>
        </View>
        <Image style= {[styles.icone,{marginTop: -6}]} source={require('../../../assets/agricultorIcones/rice.png')}/>
        <View>
            <Text>Preço</Text>
            <Text>Baixo</Text>
        </View>
        <Image style= {[styles.icone,{marginTop: -6}]} source={require('../../../assets/moedas/normal.png')}/>
    </View>
    <View style={styles.row3}>
            <Text> Quantidade: 4</Text>
            <TouchableOpacity style={[styles.button, {backgroundColor: '#66BF00'}]}><Text style={styles.textbutton}>CONFIRMAR</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.button, {backgroundColor: '#BF0000'}]}><Text style={styles.textbutton}>REJEITAR</Text>
            </TouchableOpacity>
    </View>
    </View>
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
    paddingTop: 25
  },
  feito: {
    padding: 5
  },
  button:{
      width: 85,
      height: 30,
      borderRadius: 20,
      backgroundColor: '#BF0000'
  },
  textbutton:{
      color: '#FFFFFF',
      fontSize: 9,
      textAlign: 'center',
      marginTop: '10%',
      fontFamily: 'Rubik_400Regular'
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
    paddingTop: 10
  },
  textos: {
    fontFamily: 'Rubik_300Light',
    fontSize: 14,
    alignSelf: 'center'
  },
    textinhos: {
    fontFamily: 'Rubik_300Light',
    fontSize: 12,
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
    width: 36,
    height: 36,
    alignSelf: 'center',

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