import React, {useState} from 'react';
import { Text, View, StyleSheet, Image, ScrollView, TouchableOpacity, CheckBox, Dimensions } from 'react-native';
import Comecar from '../../../Components/Button'
const Tela = Dimensions.get('screen').width
export default function Maquinas({ navigation }) {
  state: { 
    texto: 'sahdksaja'
  }
  return (
    <View style={styles.container}>
    <View style={styles.end}>
     <Image  style={styles.logo} source={require('../../../assets/moedas/Selo.png')}/>
    <Text> 123 </Text>
     <Image  style={styles.logo} source={require('../../../assets/moedas/Moeda.png')}/>
     <Text> 000 </Text>
     </View>
    <View style={styles.center}>
    <Image  style={styles.person} source={require('../../../assets/agricultorIcones/tractor.png')}/>
    <Text style={styles.header}> Aluguel {'\n'} de Máquinas</Text>
    <TouchableOpacity style={{alignItems: 'center', margin: 15, marginTop: 15}}>
    <Image style={{width:26, height: 22}} source={require('../../../assets/back1.png')}/>
    </TouchableOpacity>
    </View>
    <Text style= {{alignSelf: 'flex-start', fontSize: 20, fontFamily: 'Rubik_300Light', marginLeft: 25}}> Responsável: </Text>
    <TouchableOpacity> 
      <View style={styles.row2}>
       <Image  style={styles.icone} source={require('../../../assets//perfils/empresariox1/person2.png')}/>
       <Text style= {styles.textos}> Empresário 1 </Text>
      </View>
    </TouchableOpacity>
    <Text style= {{alignSelf: 'flex-start', fontSize: 20, fontFamily: 'Rubik_300Light', marginLeft: 25}}> Pacotes: </Text>
    <View style={styles.row}>
    <TouchableOpacity> 
    <View style={styles.colunm}>
       <Image  style={styles.icone} source={require('../../../assets/agricultorIcones/pacote.png')}/>
       <Text style= {styles.textinhos}> Pacote 1 </Text>
    </View>
    </TouchableOpacity>
    <TouchableOpacity> 
    <View style={styles.colunm}>
       <Image  style={styles.icone} source={require('../../../assets/agricultorIcones/pacote.png')}/>
       <Text style= {styles.textinhos}> Pacote 2 </Text>
    </View>
     </TouchableOpacity>
    <TouchableOpacity>
     <View style={styles.colunm}>
       <Image  style={styles.icone} source={require('../../../assets/agricultorIcones/pacote.png')}/>
       <Text style= {styles.textinhos}> Pacote 3</Text>
    </View>
    </TouchableOpacity>
    </View>
        <View style={styles.row}>
    <TouchableOpacity> 
    <View style={styles.colunm}>
       <Image  style={styles.icone} source={require('../../../assets/agricultorIcones/pulverizador.png')}/>
       <Text style= {styles.textinhos}> Pulverizador </Text>
    </View>
    </TouchableOpacity>
    </View>
    <Text style= {{alignSelf: 'flex-start', fontSize: 20, fontFamily: 'Rubik_300Light', marginLeft: 25}}> valor: </Text>
    <View style={styles.row}>
    <TouchableOpacity> 
    <View style={styles.colunm}>
       <Image  style={styles.icone} source={require('../../../assets/moedas/baixo.png')}/>
       <Text style= {styles.valor}> Baixo </Text>
    </View>
    </TouchableOpacity>
        <TouchableOpacity> 
    <View style={styles.colunm}>
       <Image  style={styles.icone} source={require('../../../assets/moedas/normal.png')}/>
       <Text style= {styles.valor}> Normal </Text>
    </View>
    </TouchableOpacity>
        <TouchableOpacity> 
    <View style={styles.colunm}>
       <Image  style={styles.logo} source={require('../../../assets/moedas/alto.png')}/>
       <Text style= {styles.valor}> Alto </Text>
    </View>
    </TouchableOpacity>
    </View>
    <Comecar
    onClick={()=> {navigation.navigate('insumo', {texto: 'Aluguel de semeadeira'});
  }}
    name= 'ALUGAR'/>
    </View>
    
      );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#EBFFFD',
    alignItems: 'center',
    padding: 6,
  },
  valor: {
    fontFamily: 'Rubik_300Light',
    fontSize: 12,
    margin: '7%'
  },
  row:{
    flexDirection: 'row',
    alignSelf: 'flex-start',
    justifyContent: 'space-around',
    margin: 18,
  },
  center:{
    flexDirection: 'row',
    justifyContent: 'center',
    margin: 15,
  },
  end:{
    flexDirection: 'row',
    alignSelf: 'flex-end',
  },
    row2:{
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    margin: 7,
    backgroundColor: '#FFFFFF',
    width: 280,
    height: 50,
    borderRadius: 20,
    shadowColor: "#000",
    shadowOffset: {
    	width: 0,
    	height: 4,
    },
    shadowOpacity: 0.32,
    shadowRadius: 5.46,
    elevation: 9,
      },
  colunm:{
    alignItems: 'center',
    justifyContent: 'center',
    margin: 7,
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
    fontWeight: 'bold',
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
    marginTop: '7%'
  },
  logo:{
    width: 20,
    height: 23
  },
  person:{
    width: 64,
    height: 60
  },
  icone:{
    width: 32,
    height: 35,
  }
});