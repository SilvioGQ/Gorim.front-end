import React, {useState} from 'react';
import { Text, View, StyleSheet, Image, ScrollView, TouchableOpacity, Dimensions } from 'react-native';
const Tela = Dimensions.get('screen').width;
import Comecar from '../../../Components/Button';
import Quadrados from '../../../Components/Quadrado';
export default function Selo({ navigation, route }) {
    
 const { title } = route.params;
  return (
    <View style={styles.container}>
    <View style={styles.row3}>
     <Image  style={styles.logo} source={require('../../../assets/moedas/Moeda.png')}/>
     <Text> 000 </Text>
    </View>
    <View style={styles.espaco}>
    <Image  style={{width: 62, height: 62}} source={require('../../../assets/selos/selogrande.png')}/>
    <Text style={styles.header}>{JSON.stringify(title)} de {'\n'} selo verde</Text>
    </View>
    <Text style={{fontSize: 18, marginTop: 15, fontFamily: 'Rubik_300Light'}}> Destinatário:</Text>
    <Quadrados/>
    <Comecar 
    onClick= {()=> navigation.navigate('Fiscal')}
    name= 'CONCEDER'/>
    </View>
    
      );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EBFFFD',
    padding: 6,
    width: Tela
  },
  row:{
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    marginTop: 20,
    marginLeft: 8,
    width: Tela,
    flexWrap: 'wrap'
  },
  espaco:{
    flexDirection: 'row',
    alignSelf: 'center',
    justifyContent: 'center',
    margin: 15,
    width: Tela
  },
  row3:{
    flexDirection: 'row',
    alignSelf: 'center',
    justifyContent: 'flex-end',
    margin: 10,
    width: Tela
  },
    row2:{
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    marginTop: 10,
    marginLeft: 6
      },
  colunm:{
    alignItems: 'center',
    justifyContent: 'center',
    margin: 10,
    backgroundColor: '#FFFFFF',
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
    
    elevation: 9
    },
  header: {
    fontFamily: 'Rubik_300Light',
    
    fontSize: 20,
  },
    textinhos: {
    fontFamily: 'Rubik_300Light', 
    fontSize: 14,
  },
  logo:{
    width: 20,
    height: 23
  },
  icone:{
    width: 32,
    height: 35,
  },
});