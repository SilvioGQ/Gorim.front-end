import React, {useState} from 'react';
import { Text, View, StyleSheet, Image, TouchableOpacity, Dimensions, Modal } from 'react-native';
const Tela = Dimensions.get('screen').width
import Money from '../../../Components/Money'
import Cenarios from '../../../Components/Cenario';
import Conf from '../../../Components/selo verde confirmacao/index'
export default function Agricultor1({ navigation }) {
  const [isVisible, setisVisible] = useState(false);
  const [unblock, setunblock] = useState(false);
  return (
    <View style={styles.container}>
    <View style={styles.row3}>
    <Text style={styles.header}> Agricultora 1 {'\n'} em Atlantis</Text>
    <View style= {{flexDirection: 'row', alignItems: 'center'}}>
    <Image  style={styles.logo} source={require('../../../assets/moedas/Selo.png')}/>
    <Text style= {{fontSize: 21, fontFamily: 'Rubik_400Regular'}}> 123 </Text>
    </View>
    <View>
    <Money/>
    </View>
     <Image  style={styles.person} source={require('../../../assets/perfils/agricultor/Agricultor2.png')}/>
    </View>
    <TouchableOpacity onPress= {()=> navigation.navigate('Parcela')}> 
      <View style={styles.row2}>
       <Image  style={styles.icone} source={require('../../../assets/agricultorIcones/ParcelaPequena.png')}/>
       <Text style= {styles.textos}> Parcelas de terra </Text>
      </View>
    </TouchableOpacity>
    <View style={styles.row}>
    <TouchableOpacity onPress= {()=> navigation.navigate('Proposta')}> 
    <View style={styles.colunm}>
       <Image  style={styles.icone} source={require('../../../assets/agricultorIcones/handshake.png')}/>
       <Text style= {styles.textinhos}> Checar {'\n'} Propostas </Text>
    </View>
    </TouchableOpacity>
    <TouchableOpacity onPress= {()=> navigation.navigate('Transferindo')}> 
    <View style={styles.colunm}>
       <Image  style={styles.icone} source={require('../../../assets/agricultorIcones/money2.png')}/>
       <Text style= {styles.textinhos}> Fazer {'\n'} tranferência </Text>
    </View>
     </TouchableOpacity>
    <TouchableOpacity onPress= {()=> navigation.navigate('Analizar')}>
     <View style={styles.colunm}>
       <Image  style={styles.icone} source={require('../../../assets/agricultorIcones/lupa.png')}/>
       <Text style= {styles.textinhos}> Analizar {'\n'} produtos </Text>
    </View>
    </TouchableOpacity>
    <Modal 
          style= {styles.modal}
          animationType={'fade'}
          visible={isVisible}
          transparent= {true}
        >
          <View style= {styles.modal}>
        <Conf Conf={() => setisVisible(false)}/>
          </View>
     </Modal>
    <TouchableOpacity onPress={() => setisVisible(true)}> 
    <View style={[styles.colunm, styles.vermelho]}>
       <Image  style={styles.icone} source={require('../../../assets/agricultorIcones/seloG.png')}/>
       <Text style= {styles.textinhos}> Pedir selo {'\n'} verde </Text>
    </View>
    </TouchableOpacity>
    </View>
    
    <View>
      <View style= {{width: 306, height: 70, borderRadius: 20, alignItems: 'center', backgroundColor: '#66BF00', marginTop: 20}}>
        <Text style={{fontFamily: 'Rubik_400Regular', fontSize: 36, color: 'white'}}>400</Text>
        <Text style={styles.candidato, {color: 'white'}}>Produtividade atual</Text>
      </View>
      <View style= {{width: 306, height: 70, borderRadius: 20, alignItems: 'center', backgroundColor: '#BF0000', marginTop: 20 }}>
        <Text style={{fontFamily: 'Rubik_400Regular', fontSize: 36, color: 'white'}}>400</Text>
        <Text style={styles.candidato, {color: 'white'}}>Poluição atual</Text>
      </View>
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
    row2:{
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: '6%',
    backgroundColor: '#FFFFFF',
    width: 320,
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
  modal: {
    flex:1,
    alignSelf: 'center',
    justifyContent: 'center',
    backgroundColor:'#000000aa',
    width: Tela,
  }
});