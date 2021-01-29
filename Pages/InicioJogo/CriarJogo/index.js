import React, {useState} from 'react';
import { Text, View, StyleSheet, Image, TouchableOpacity, Dimensions, TextInput } from 'react-native';
const Tela = Dimensions.get('screen').width
import {Batata, Batata2} from '../../../Pages/Api'
import Api from '../../../Pages/Api'
export default function Inicio({ navigation }) {
  const [value, onChangeText] = React.useState('Nome'); 
  return (
    <View style={styles.container}>
        <TextInput style={styles.input}  onChangeText={text => onChangeText(text)}
      value={value}>
        </TextInput>
        <Text style={styles.header}> HOST </Text>
        <View style={{width: '100%', borderWidth: 1}}/>
            <View style={styles.row}>
                <Image style={styles.logo2} source={require('../../../assets/Group28.png')}/>
                <TouchableOpacity
                style={styles.button2}
                onPress= {()=> navigation.navigate('frame3')}
                >
                <Text style={styles.texto}>CRIAR JOGO
                </Text>
                </TouchableOpacity>
            </View>
            <Text style={[styles.header, {marginTop: -80}]}> ENTRAR </Text>
            <View style={{width: '100%', borderWidth: 1}}/>
            <View style={styles.row}>
                <Image style={styles.logo2} source={require('../../../assets/Group29.png')}/>
                <TextInput style={[styles.button2, styles.texto2]} placeholder= 'ESCREVER CÓDIGO'>
                </TextInput>
                <TouchableOpacity >
                <Image style= {styles.arrow} source={require('../../../assets/right-arrow.png')} />
                </TouchableOpacity>
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
    padding: '1%',
    paddingTop: 45,
    width:Tela
  },
  input:{
    height: 45,
    fontSize: 24,
    borderWidth: 1,
    color:'#A1A1A1',
    width: '80%',
    textAlign: 'center'
  },
  row:{
    flex:1,
    flexDirection: 'row',
    alignSelf: 'flex-start',
    justifyContent: 'flex-start',
    margin: '4%',
  },
  header: {
    fontFamily: 'Rubik_300Light',
    fontSize: 28,
    lineHeight: 49,
    alignSelf: 'flex-start',
    marginTop: 40
  },
  logo2:{
  width: 95,
  height: 89,
  margin: 12
  },
  simbolo:{
    width: 45,
    height: 45
  },
  button2:{
    height: 45,
    margin: '2%',
    alignItems:'center',
    width: 175,
    borderWidth: 1,
    shadowColor: "#000",
    shadowOffset: {
    	width: 0,
    	height: 4,
    },
    shadowOpacity: 0.32,
    shadowRadius: 4.46,
    
    elevation: 6,
    marginTop: 30
  },
  texto:{
    fontSize:24,
    fontFamily: 'Rubik_300Light',
    textAlign: 'center',
    alignItems: 'center',
    marginTop: 5
  },
  texto2:{
    fontSize:18,
    fontFamily: 'Rubik_300Light',
    textAlign: 'center',
    alignItems: 'center',
  },
  arrow: {
    width: 35,
    height: 35,
    marginTop: 32,
    marginLeft: 10
  }
});