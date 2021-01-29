import * as React from 'react';
import { Text, View, StyleSheet, Image, ScrollView, TouchableOpacity, Dimensions } from 'react-native';
import Comecar from '../../../Components/Button'
const Tela = Dimensions.get('screen').width
export default function Frame10({ navigation }) {
  return (
     <View style={styles.container}>
    <Text style={styles.header}> Solicitação de aluguel de {'\n'} máquina </Text>
    <Image  style={styles.logo2} source={require('../../../assets/agricultorIcones/talk.png')}/>
    <View style={styles.row}>
    <Image  style={{height: 45, width: 40}} source={require('../../../assets/perfils/agricultor/Agricultor.png')}/>
    <View>
    <Text style={styles.superior}> Cliente/Vendedor</Text>
    <Text style={styles.inferior}> XXXXXXX</Text>
    </View>
    </View>
     <View style={styles.row}>
    <Image  style={styles.simbolo} source={require('../../../assets/agricultorIcones/Fertilizantes.png')}/>
    <View>
    <Text style={styles.superior}> Produto</Text>
    <Text style={styles.inferior}> XXXXXXXXXXXX </Text>
    </View>
    </View>
     <View style={styles.row}>
    <Image  style={styles.simbolo} source={require('../../../assets/moedas/alto.png')}/>
    <View>
    <Text style={styles.superior}> Valor</Text>
    <Text style={styles.inferior}> XXXXXXXX</Text>
    </View>
    </View>
    <Comecar 
    onClick= {()=> navigation.navigate('Tranferenciaconfirmada')}
    name= 'CONTINUAR'/>
    <TouchableOpacity
        style={styles.button2}
        onPress= {() => navigation.navigate('Agricultor1')}
        >
        <Text style= {styles.texto}>CANCELAR</Text>
    </TouchableOpacity>
    </View>
    
      );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    backgroundColor: '#EBFFFD',
    alignItems: 'center',
    padding: '5%',
    width:Tela
  },
  input:{
    height: 30,
    marginRight: 2,
    fontSize: 15,
    color:'#A1A1A1',
  },
  row:{
    flexGrow:1,
    flexDirection: 'row',
    alignSelf: 'flex-start',
    justifyContent: 'space-around',
    margin: '8%',
  },
  header: {
    fontFamily: 'Rubik_300Light',
    fontSize: 24,
    lineHeight: 49,
    alignSelf: 'center',
    textAlign:'center'
  },
  logo2:{
  width: 80,
  height: 63,
  margin: 24
  },
  simbolo:{
    width: 45,
    height: 45
  },
  superior:{
    fontSize: 15,
    fontFamily: 'Rubik_300Light',
    marginLeft: 8
  },
  inferior: {
    fontSize: 20,
    marginLeft: 8,
    fontFamily: 'Rubik_700bold',
  },
  button2:{
    height: 45,
    margin: '2%',
    alignItems:'center',
    backgroundColor:"#BF0000",
    color:"#FFFFFF",
    borderRadius:25,
    width: '80%',
    shadowColor: "#000",
    shadowOffset: {
    	width: 0,
    	height: 4,
    },
    shadowOpacity: 0.32,
    shadowRadius: 4.46,
    
    elevation: 6,
    marginTop: 17
  },
  texto:{
    color:'#FFFFFF',
    fontSize:15,
    fontFamily: 'Rubik_400Regular',
    textAlign: 'center',
    alignItems: 'center',
    marginTop: 15
  }
});