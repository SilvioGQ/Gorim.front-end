import * as React from 'react';
import { Text, View, StyleSheet, Image, ScrollView, TouchableOpacity, Dimensions } from 'react-native';
import Comecar from '../../../Components/Button'
const Tela = Dimensions.get('screen').width
export default function Frame7( {navigation}) {
  return (
    <View style={styles.container}>
    <ScrollView showsVerticalScrollIndicator= {false}> 
   <View style= {styles.self}>
    <Image style={styles.logo} source={require('../../../assets/Logo/vote.png')}/>
    <Text style= {styles.title}>Eleições em {"\n"} localização </Text>
    </View> 
    <View style={{alignItems: 'flex-start', marginLeft: '12%'}}>
    <Text style= {styles.Resultado}> Resultados: </Text>
    <Text style= {styles.texto}> Eleito a prefeito com X votos: </Text>
        <Image style={styles.person} source={require('../../../assets/perfils/empresariox2/man1x2.png')} />
      <Text style= {styles.self2}>Joao</Text>
      <Text style= {styles.texto}> Eleito a vereador com X votos: </Text>
           
        <Image style={styles.person} source={require('../../../assets/perfils/empresariox2/man1x2.png')} />
     
       <Text style= {styles.self2}>Joao</Text>
      <Text style= {styles.texto}> Eleito a Fiscal com X votos: </Text>
        
        <Image style={styles.person} source={require('../../../assets/perfils/empresariox2/man1x2.png')} />
   
      <Text style= {styles.self2}>Joao</Text>
      </View>
       
       <Comecar 
    onClick= {()=> navigation.reset({
      routes: [{ name: 'frame8'}]
    })}
  name= 'CONTINUAR'/>
      </ScrollView>
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#EBFFFD',
    alignItems: 'center',
    padding: '4%',
    width: Tela
  },
  row: {
    flexDirection: 'row',
    alignItems:'center'
  },
    self: {
    flexDirection: 'row',
    alignSelf: 'center'
  },
    self2: {
    alignSelf: 'center',
    marginRight: '17%'
  },
  title: {
    fontFamily: 'Rubik_300Light',
    fontSize: 22,
    alignItems: 'center',
    alignSelf:'center'
  },
  logo:{
  width: 60,
  height: 60
  },
    person:{
  width: 95,
  height: 105,
  alignSelf: 'center',
  marginRight: 60
  },
  texto: {
    fontFamily: 'Rubik_300Light',
    fontSize: 17,
    lineHeight: 49,
    alignItems: 'center'
  },
  Resultado: {
    fontFamily: 'Rubik_300Light',
    fontSize: 23,
    color: '#FFB800',
    lineHeight: 49,
    alignSelf: 'flex-start'
  }
});