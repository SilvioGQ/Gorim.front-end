import React, {useEffect, useState} from 'react';
import { Text, View, StyleSheet, Image, TouchableOpacity } from 'react-native';
import Comecar from '../../../Components/Button'

export default function Frame1( { navigation }) {
  
  /*
  Batata().then(function(response){setidJogo(response.data)})
  Batata2(idJogo).then(function(response){console.log(response)})
  */
  return (
    <View style={styles.container}>
    <View style={styles.row}>
    <Image
    style={styles.logo}
    source={require('../../../assets/Logo/Trator.png')}
    />
    <Text style={styles.texto}>Gorim</Text>
    </View>
     <Image
    style={styles.logo2}
    source={require('../../../assets/Logo/Animação.png')}
    />
    <View style={styles.container}>
    <Comecar 
    onClick= {()=> navigation.navigate('Inicio')}
    name= 'COMEÇAR'/>
    </View>
    </View>
  );
}
  
  const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-around',
    backgroundColor: '#EBFFFD',
    alignItems:'center'
  },
  texto:{
    fontSize:60,
    color:'#58AB23'
  },
  row:{
    flex:1,
    flexDirection:'row',
    alignItems:'center'
  },
  logo:{
    height:40,
    width:42,
    alignItems:'center'
  },
    logo2:{
    height:280,
    width:280
  },
});
