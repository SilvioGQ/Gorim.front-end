import React, {useState} from 'react';
import { Text, View, StyleSheet, Image, ScrollView, TouchableOpacity, Dimensions } from 'react-native';
const Tela = Dimensions.get('screen').width;
import Comecar from '../../Components/Button';
import Quadrados from '../../Components/Quadrado/indez'
import Money from '../../Components/Dinheiro'
export default function Transferindo({ navigation }) {
  const [count, setCount] = useState(0);
  const [Selected, setSelected] = useState(0)
  if(count===-5){
    setCount(count + 5)
  }
 
  return (
    <View style={styles.container}>
      <Money/>
    <View style={styles.espaco}>
    <Image  style={{width: 63, height: 61}} source={require('../../assets/agricultorIcones/money2.png')}/>
    <Text style={styles.header}>Fazer {'\n'} transferência</Text>
    </View>
    <Text style={{fontSize: 18, marginTop: 20, fontFamily: 'Rubik_300Light'}}> Destinatário:</Text>

    <Quadrados/>

    <Text style={{fontSize: 18, marginTop: 25, fontFamily: 'Rubik_300Light'}}> Valor:</Text>
    <View style={{flex:1, marginTop: 35}}>
     <View style={styles.setas}>
    <TouchableOpacity onPress={() => setCount(count - 5)}>
    <Image style={styles.icone2} source={require('../../assets/agricultorIcones/setaesquerda.png')}/>
    </TouchableOpacity>
    <View style={styles.bgbranco}>
    <Text style={styles.bgbrancotext}>{count}</Text>
    </View>
    <TouchableOpacity onPress={() => setCount(count + 5)}>
    <Image style={styles.icone2} source={require('../../assets/agricultorIcones/setadireita.png')} />
    </TouchableOpacity>
    </View>
    </View>
    <Comecar 
    onClick= {Selected===0 ? ()=> navigation.navigate('FazerTransferencia', {valor: count}) : '' }
    name= 'CONTINUAR'/>
    </View>
    
      );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EBFFFD',
    padding: 6,
    width: Tela,
    paddingTop: 25
  },
  setas: {
    flexDirection: 'row',
    alignSelf: 'center',
    justifyContent: 'center',
    marginEnd: 5
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
  icone2:{
    width: 46,
    height: 48
  },
  bgbranco: {
    backgroundColor: '#fff',
    borderWidth: 1,
    borderRadius: 20,
    height: 51,
    width: 180
  },
  bgbrancotext: {
    alignSelf: 'center',
    textAlign: 'center',
    marginTop: 10,
    fontFamily: 'Rubik_400Regular',
    fontSize: 25
  }
});