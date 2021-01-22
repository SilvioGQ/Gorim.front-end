import React, {useEffect, useRef, useState} from 'react';
import { useNavigation } from '@react-navigation/native';
import { Text, View, StyleSheet, Image } from 'react-native';
import {Batata, Batata2} from '../../Api'
import Api from '../../Api'
export default function Frame3() {
  const navigation = useRef(useNavigation());
  // const game= ()=> { setIdJogo(Api.idJogo()); console.log(idJogo)  }
  // const [idJogo, setIdJogo] = useState();
  useEffect(()=> {
    function SelectScreen(){
      setTimeout(() => {
        let selected=Math.floor(Math.random() * 2)
        if(selected===1){
          navigation.current.navigate("Agricultor1");
          // game()
        }
        if(selected===0){
          navigation.current.navigate("Empresario1");
          // game()
        }
      }, 2000);
    } 
    
    SelectScreen();
  },[])

  return (
    <View style={styles.container}>
    <Text style={styles.header}> Gorim </Text>
    <View style={styles.container}>
    <Image style={styles.logo} source={require('../../../assets/Logo/Dados.png')}/>
    <Text style={styles.loading}> Sorteando Personagens... </Text>
    </View>
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#EBFFFD',
    alignItems: 'center',
    padding: 10,
  },
  header: {
    fontFamily: 'Rubik_400Regular',
    
    fontWeight: 'normal',
    fontSize: 41.1111,
    lineHeight: 49,
    alignItems: 'center'
  },
  logo:{
  width: 200,
  height: 200
  },
  loading:{
  fontFamily: 'Rubik_400Regular',
  fontSize: 22,
  lineHeight: 32,
  alignItems: 'center',
  }
});