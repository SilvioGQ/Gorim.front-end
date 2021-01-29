import React, {useState} from 'react';
import { Text, View, StyleSheet, Image, ScrollView, TouchableOpacity, CheckBox, Dimensions } from 'react-native';
import Cenarios from '../../../Components/CenarioBotao';
const Tela = Dimensions.get('screen').width
import Money from '../../../Components/Dinheiro/index'
export default function Agricultor1({ navigation }) {
  const [value, onChangeText] = React.useState('Adicione uma informação');
 const [isSelected3, setSelection3] = useState(false);
  return (
    <View style={styles.container}>
    <View style={styles.row3}>
    <Text style={styles.header}> Empresário 1 {'\n'} em Atlantis</Text>
    <View style= {{flexDirection: 'row', alignItems: 'center'}}>
    <Image  style={styles.logo} source={require('../../../assets/moedas/Selo.png')}/>
    <Text style= {{fontSize: 21, fontFamily: 'Rubik_400Regular'}}> 000 </Text>
    </View>
    <View>
    <Money/>
    </View>
     <Image  style={styles.person} source={require('../../../assets/perfils/empresariox1/Empresario.png')}/>
    </View>
    <View style={styles.row}>
    <TouchableOpacity onPress= {()=> navigation.navigate('Vendas',  {name: 'Soja'})}> 
    <View style={styles.colunm}>
       <Image  style={styles.icone} source={require('../../../assets/agricultorIcones/arroz.png')}/>
       <Text style= {styles.textinhos}> Vender soja </Text>
    </View>
    </TouchableOpacity>
    <TouchableOpacity onPress= {()=> navigation.navigate('Vendas',  {name: 'Arroz'})}> 
    <View style={styles.colunm}>
       <Image  style={styles.icone} source={require('../../../assets/agricultorIcones/rice.png')}/>
       <Text style= {styles.textinhos}> Vender arroz </Text>
    </View>
     </TouchableOpacity>
    <TouchableOpacity onPress= {()=> navigation.navigate('Vendas',  {name: 'Hortaliças'})}>
     <View style={styles.colunm}>
       <Image  style={styles.icone} source={require('../../../assets/agricultorIcones/hortaliças.png')}/>
       <Text style= {styles.textinhos}> Venda {'\n'} hortaliças </Text>
    </View>
    </TouchableOpacity>
    <TouchableOpacity onPress= {() => navigation.navigate('Transferindo')}> 
    <View style={styles.colunm}>
       <Image  style={styles.icone} source={require('../../../assets/agricultorIcones/money2.png')}/>
       <Text style= {styles.textinhos}> Fazer {'\n'} tranferência </Text>
    </View>
     </TouchableOpacity>
    </View>
    <View>
      <View style= {{width: 306, height: 70, borderRadius: 20, alignItems: 'center', backgroundColor: '#66BF00', margin: 5, marginTop: 35}}>
        <Text style={{fontFamily: 'Rubik_400Regular', fontSize: 36, color: 'white'}}>400</Text>
        <Text style={styles.candidato, {color: 'white'}}>Produtividade atual</Text>
      </View>
      <View style= {{width: 306, height: 70, borderRadius: 20, alignItems: 'center', backgroundColor: '#BF0000', margin: 5}}>
        <Text style={{fontFamily: 'Rubik_400Regular', fontSize: 36, color: 'white'}}>400</Text>
        <Text style={styles.candidato, {color: 'white'}}>Poluição atual</Text>
      </View>
    </View>
    <Cenarios onClick={()=> {navigation.navigate('Cenario');
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
    width: Tela,
  },
  row:{
    flexDirection: 'row',
    alignItems: 'flex-start',
    alignSelf: 'flex-start',
    justifyContent: 'flex-start',
    margin: '5%',
    marginTop: '1%',
    width: Tela,
    flexWrap: 'wrap'
  },
  row3:{
    flexDirection: 'row',
    alignSelf: 'flex-start',
    justifyContent: 'space-around',
    margin: '3%',
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
    width: 22,
    height: 26
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
    map:{
    width: 50,
    height: 50,
    marginRight: '8%'
  },
  vermelho: {
    backgroundColor: '#FF7F7E'
  },
  candidato: {
    fontFamily: 'Rubik_300Light',
    fontSize: 18
  }
});