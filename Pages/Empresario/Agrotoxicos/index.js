import React, {useState} from 'react';
import { Text, View, StyleSheet, Image, ScrollView, TouchableOpacity, CheckBox, Dimensions } from 'react-native';
import Comecar from '../../../Components/Button'
import Quadrados from '../../../Components/Quadrado/indez';
import Quantidade from '../../../Components/Quantidades';

const Tela = Dimensions.get('screen').width
export default function Agrotoxicos ( {navigation}){
  const [isSelected, setSelection] = useState(false);
  const [colorido, setcolorido] = useState(false);
  if(!setcolorido){
    return alert("mudou")
  }
  return (
    <View style={styles.container}>
    <View style={styles.end}>
     <Image  style={styles.logo} source={require('../../../assets/moedas/Selo.png')}/>
    <Text style= {{fontSize: 21}}> 123 </Text>
     <Image  style={styles.logo} source={require('../../../assets/moedas/Moeda.png')}/>
     <Text style= {{fontSize: 21}}> 000 </Text>
     </View>
    <View style={styles.center}>
    <Image  style={styles.person} source={require('../../../assets/agricultorIcones/toxico.png')}/>
    <Text style={styles.header}> Compra de {'\n'} Agrotóxicos</Text>
    <TouchableOpacity style={{alignItems: 'center', margin: 15, marginTop: 15}}>
    <Image style={{width:26, height: 22}} source={require('../../../assets/back1.png')}/>
    </TouchableOpacity>
    </View>
    <Text style= {{alignSelf: 'flex-start', fontSize: 20, fontFamily: 'Rubik_300Light', marginLeft: 25}}> Clientes: </Text>
    <View style={styles.row}>
    <TouchableOpacity > 
    <View style={styles.colunm} value={isSelected} onClick={isSelected  ? <View style= {{backgroundColor: '#000000'}}/> : <View style= {{backgroundColor: '#ffffff'}}/>}>
      <View style= {styles.row5}>
       <Image  style={styles.icone} source={require('../../../assets/perfils/agricultor/Agricultor.png')}/>
       <Text style= {styles.textinhos}> Agricultor 1 </Text>
</View>
    </View>
    </TouchableOpacity>
    <TouchableOpacity> 
    <View style={styles.colunm}>
      <View style= {styles.row5}>
       <Image  style={styles.icone} source={require('../../../assets/perfils/agricultor/Agricultor.png')}/>
       <Text style= {styles.textinhos}> Agricultor2 </Text>
</View>
    </View>
     </TouchableOpacity>
    <TouchableOpacity>
     <View style={styles.colunm}>
       <View style= {styles.row5}>
       <Image  style={styles.icone} source={require('../../../assets/perfils/agricultor/Agricultor2.png')}/>
       <Text style= {styles.textinhos}> Agricultor 3</Text>
 </View>
    </View>
    </TouchableOpacity>
    </View>
      <View style={{flexDirection: 'row', alignSelf: 'flex-start', marginLeft: '10%'}}>
    <TouchableOpacity> 
    <View style={styles.colunm}>
      <View style= {styles.row5}>
       <Image  style={styles.icone} source={require('../../../assets/perfils/agricultor/people1.png')}/>
       <Text style= {styles.textinhos}> Silvio </Text>
</View>
    </View>
    </TouchableOpacity>
    </View>

    <Text style= {{alignSelf: 'flex-start', fontSize: 20, fontFamily: 'Rubik_300Light', marginLeft: 25}}> Pacotes: </Text>
    <View style={styles.row}>
    <TouchableOpacity> 
    <View style={styles.colunm}>
      <View style= {styles.row5}>
       <Image  style={styles.icone} source={require('../../../assets/agricultorIcones/agrotoxicoComum.png')}/>
       <Text style= {styles.textinhos}> Comprar {'\n'} agrotóxicos {'\n'} Comum</Text>
</View>
    </View>
    </TouchableOpacity>
    <TouchableOpacity> 
    <View style={styles.colunm}>
      <View style= {styles.row5}>
       <Image  style={styles.icone} source={require('../../../assets/agricultorIcones/agrotoxicoPremium.png')}/>
       <Text style= {styles.textinhos}> Comprar {'\n'} agrotóxicos {'\n'} Premium </Text>
</View>
    </View>
     </TouchableOpacity>
    <TouchableOpacity>
     <View style={styles.colunm}>
       <View style= {styles.row5}>
       <Image  style={styles.icone} source={require('../../../assets/agricultorIcones/agrotoxicoSuperPremium.png')}/>
       <Text style= {styles.textinhos}> Comprar {'\n'} agrotóxicos Super Premium</Text>
 </View>
    </View>
    </TouchableOpacity>
    </View>
    <Text style= {{alignSelf: 'flex-start', fontSize: 20, fontFamily: 'Rubik_300Light', marginLeft: 25}}> valor: </Text>
    <View style={styles.row}>
    <TouchableOpacity> 
    <View style={styles.colunm}>
      <View style= {styles.row5}>
       <Image  style={styles.icone} source={require('../../../assets/moedas/baixo.png')}/>
       <Text style= {styles.valor}> Baixo </Text>
</View>
    </View>
    </TouchableOpacity>
        <TouchableOpacity> 
    <View style={styles.colunm}>
      <View style= {styles.row5}>
       <Image  style={styles.icone} source={require('../../../assets/moedas/normal.png')}/>
       <Text style= {styles.valor}> Normal </Text>
</View>
    </View>
    </TouchableOpacity>
        <TouchableOpacity> 
    <View style={styles.colunm}>
      <View style= {styles.row5}>
       <Image  style={styles.logo} source={require('../../../assets/moedas/alto.png')}/>
       <Text style= {styles.valor}> Alto </Text>
</View>
    </View>
    </TouchableOpacity>
    </View>
    <Quantidade/>
    <Comecar 
    onClick= {()=> {navigation.navigate('insumo', {texto: 'Compra de Agrotóxico XXXXXX'});
  }}
    name= 'COMPRAR'/>
    </View>
    
      );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EBFFFD',
    alignItems: 'center',
    width: Tela,
    paddingTop: 35
  },
  row:{
    flexDirection: 'row',
    alignSelf: 'center',
    justifyContent: 'space-around',
    paddingVertical: 15,
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
    marginVertical: 25,
    paddingVertical: 8,
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
    width: 91,
    height: 61,
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
    margin: '3%',
    fontSize: 10,
  },
  logo:{
    width: 20,
    height: 27
  },
  person:{
    width: 64,
    height: 64
  },
  icone:{
    width: 35,
    height: 35,
  },
  valor: {
    fontFamily: 'Rubik_300Light',
    fontSize: 12,
    margin: '7%'
  },
  numeros: {
    width: 40,
    height: 40,
    borderRadius: 20,
    margin: '3%',
    alignItems:'center',

    shadowColor: "#000",
    shadowOffset: {
    	width: 0,
    	height: 4,
      },
    shadowOpacity: 0.32,
    shadowRadius: 5.46,
    
    elevation: 9
  },
  numeros2: {
    fontFamily: 'Rubik_400Regular',
    fontSize: 25,
    marginTop: '14%',
  },
  view: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    marginLeft: '8%',
    alignSelf: 'flex-start'
  },
  row5: {
    flexDirection: 'row'
  }
});