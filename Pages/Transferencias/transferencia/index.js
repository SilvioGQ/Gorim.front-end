import React, {Component} from 'react';
import { Text, View, StyleSheet, Image, TouchableOpacity, Dimensions } from 'react-native';
import Comecar from '../../../Components/Button/index'
const Tela = Dimensions.get('screen').width;
import Transferindo from '../../transferir'
export default function FazerTransferencia ({navigation, route}){
  const {valor}= route.params;
  return (
    <View style={styles.container}>
    <Text style={styles.texto}> Fazer transferência </Text>
     <Image
    style={styles.logo}
    source={require('../../../assets/moedas/trans.png')}
    />
    <Text style={styles.texto2}> Deseja confirmar a transação?  </Text>
    <Text style={styles.texto3}>{JSON.stringify(valor)}$ </Text>
     <Comecar 
    onClick= {()=> navigation.navigate('Tranferenciaconfirmada')}
    name= 'CONTINUAR'/>
    <View style={{width: Tela}}>
    <TouchableOpacity onPress = {()=> navigation.navigate('Transferindo')} style= {styles.button}> 
    <Text style={styles.textobuton}> CANCELAR </Text>
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
    alignItems:'center',
    width: Tela,
    paddingTop: 75
  },
  logo:{
    height:180,
    width:180,
  },
  texto : {
    margin: 50,
    fontFamily: 'Rubik_400Regular',
    fontSize: 25,
    textAlign: 'center'
  },
  texto2 : {
    margin: 33,
    fontFamily: 'Rubik_300Light',
    fontSize: 22,
    textAlign: 'center'
  },
  texto3 : {
    fontFamily: 'Rubik_300Light',
    fontSize: 48,
    textAlign: 'center'
  },
    textobuton: {
        color:'#FFFFFF',
        fontSize:15,
        fontFamily: 'Rubik_400Regular',
        textAlign: 'center',
        alignItems: 'center',
        marginTop: 15
  },
     button:{
    height: 45,
    backgroundColor:"#BF0000",
    borderRadius:25,
    marginTop: -105,
    width: '80%',
    alignSelf:'center',
    shadowColor: "#000",
    shadowOffset: {
    	width: 0,
    	height: 4,
    },
    shadowOpacity: 0.32,
    shadowRadius: 4.46,
    
    elevation: 6,
    }
});
