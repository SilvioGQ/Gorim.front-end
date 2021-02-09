import * as React from 'react';
import { Text, View, StyleSheet, Image, TouchableOpacity, Dimensions, FlatList} from 'react-native';
import Button from '../../../../Components/Button/index'
const Tela = Dimensions.get('screen').width
// import Api from '../Api'
export default function Lobby({ navigation,route }) {
  const [value, onChangeText] = React.useState('Nome');
  const {nome} = route.params
  const Jogadores=[
    {  
      id: 1,
      nome: nome
    },
    {
      id: 2,
      nome:'Alan'
    }
  ]

  return (
     <View style={styles.container}>
       <Text style={styles.texto}>CODIGO DA SALA</Text>
       <View style={{borderWidth: 1, width: '70%'}}/>
       <Text style={styles.texto2}>13KJ21</Text>
       <FlatList
       data={Jogadores}
       keyExtractor= {item=> item.id}
       renderItem={({item})=><View style={styles.linha}><Text style={styles.texto3}>{item.nome}</Text></View>}
       />
       <Button 
       name= 'começar'/>
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
  linha: {
    paddingVertical: 15,
    borderWidth:1,
    width:Tela,
  },
  texto:{
    fontSize:28,
    fontFamily: 'Rubik_300Light',
    marginTop: 5,
    textAlign: 'center',
    alignItems: 'center',
    lineHeight:32
  },
  texto2:{
    fontSize:32,
    fontFamily: 'Rubik_300Light',
    textAlign: 'center',
    alignItems: 'center',
    lineHeight: 38,
    marginBottom: 35
  },
  texto3:{
    fontSize:22,
    fontFamily: 'Rubik_300Light',
  },
});