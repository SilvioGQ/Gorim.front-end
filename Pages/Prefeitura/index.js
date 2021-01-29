import React, {useState} from 'react';
import { Text, View, StyleSheet, Image, ScrollView, TouchableOpacity, CheckBox, Dimensions, Animated } from 'react-native';
import Cenarios from '../../Components/CenarioBotao';
const Tela = Dimensions.get('screen').width
import Money from '../../Components/Dinheiro'
export default function Prefeitura({ navigation }) {
  const [isSelected3, setSelection3] = useState(false);
  return (
    <View style={styles.container}>
    <View style={styles.row3}>
    <Text style={styles.header}> Prefeito {'\n'} em Atlantis</Text>
    <View>
    <Money/>
    </View>
     <Image  style={styles.person} source={require('../../assets/perfils/agricultor/Agricultor2.png')}/>
    </View>
    <View style={styles.row}>
    <TouchableOpacity onPress= {()=> navigation.navigate('Prevençao')}> 
    <View style={styles.colunm}>
       <Image  style={styles.icone} source={require('../../assets/simbolos/agua.png')}/>
       <Text style= {styles.textinhos}> Medidas de {'\n'} prevenção </Text>
    </View>
    </TouchableOpacity>
    <TouchableOpacity onPress= {()=> navigation.navigate('Imposto')}> 
    <View style={styles.colunm}>
       <Image  style={{width: 44, height: 35}} source={require('../../assets/simbolos/imposto.png')}/>
       <Text style= {styles.textinhos}>  Alteração de {'\n'} impostos</Text>
    </View>
     </TouchableOpacity>
    <TouchableOpacity onPress= {() => navigation.navigate('Transferindo')}> 
    <View style={styles.colunm}>
       <Image  style={styles.icone} source={require('../../assets/agricultorIcones/money2.png')}/>
       <Text style= {styles.textinhos}> Fazer {'\n'} tranferência </Text>
    </View>
     </TouchableOpacity>
    </View>
    <Cenarios
    onClick={()=> {navigation.navigate('Cenario');
  }}/>
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
    paddingTop: 15,
    width: Tela
  },
  row:{
    flexDirection: 'row',
    alignSelf: 'center',
    justifyContent: 'flex-start',
    marginTop: '8%',
    width: Tela,
    flexWrap: 'wrap',
    paddingLeft: '4%'
  },
  row3:{
    flexDirection: 'row',
    alignSelf: 'flex-start',
    justifyContent: 'space-around',
    width: Tela
  },
  colunm:{
    paddingVertical: 10,
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
    fontFamily: 'Rubik_400Regular',
    fontSize: 20,
  },
  textos: {
    fontFamily: 'Rubik_300Light',
    fontSize: 20,
    alignSelf: 'center'
  },
    textinhos: {
    fontFamily: 'Rubik_300Light',
     
    fontSize: 14,
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
    width: 40,
    height: 40,
  },
  vermelho: {
    backgroundColor: '#FF7F7E'
  },
  candidato: {
    fontFamily: 'Rubik_300Light',
    fontSize: 18
  }
});