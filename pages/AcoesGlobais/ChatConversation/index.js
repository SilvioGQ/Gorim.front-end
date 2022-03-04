import React, { useState, useContext } from 'react';
import { Text, View, StyleSheet, Dimensions, FlatList, Image, TextInput, TouchableOpacity, ScrollView, KeyboardAvoidingView } from 'react-native';
import { GameContext, deleteAdvert } from "../../../contexts/GameContext";
import { format, formatDistance, formatRelative, subDays } from 'date-fns';

import Rodada from '../../../components/Rodada';
import TextBold from '../../../components/Atons/TextBold';
import HeaderIcons from '../../../components/headerIcons';
import ICONS from '../../../constants/imagesIcons'
import COLORS from '../../../constants/colors';
const Tela = Dimensions.get('screen').width;
const Height = Dimensions.get('screen').height;
export default function ChatConversation({ navigation }) {
  const { player, players } = useContext(GameContext);
  const [text, onChangeText] = useState('')
  const fns = require('date-fns')

  const [messagens, setMessagens] = useState([
    {id:0, message:'cu', owner: true},
    {id:1, message:'tes teste teste teste', owner: false},
    {id:2, message:'cu3', owner: true},
    {id:3, message:'cu4', owner: false},
  ])
  // Essa tela pode ficar genericona por enquanto.
  console.log(fns.format(new Date(), "yyyy-MM-dd'T'HH:mm:ss.SSS"));
  return (

    <View style={styles.container}>
      <Rodada arrow={true} onClick={() => navigation.navigate('Chat')} />
      <View style={styles.margem}>
        <Image
          style={styles.icone}
          source={ICONS[player.avatar]}
        />
        <Text style={styles.textinhos}>EmpMaquinas/Silvio</Text>
      </View>
      <View style={styles.line} />

      <View style={styles.viewMessages}>
        <KeyboardAvoidingView
    style={styles.keyboard}
    behavior={"padding"}
    enabled
    keyboardVerticalOffset={200}
>
        <ScrollView style={styles.scrollView}>
      

        {messagens ? messagens.map((i)=>{
          return (
            <View style={i.owner ? styles.owner : styles.instOwner}>
            <Text style={styles.message}>{i.message}</Text>
            </View>

          )
        }) 
      :
      null
      }
      </ScrollView>
       {/* <View style={{ height: 70 }} /> */}
              </KeyboardAvoidingView>

      </View>

      {/* <View style={styles.botao}> */}
      <TouchableOpacity style={styles.enviar} onPress={()=>{if(text!== '') {onChangeText(''); setMessagens([...messagens, {id: messagens.length+2, message:text, owner:true}])}}}>
      <Image style={styles.arrow} source={require('../../../assets/flecha.png')} />
      </TouchableOpacity>
      <TextInput
        style={[styles.button2, styles.text2]}
        onChangeText={t => onChangeText(t)}
        placeholder='Mensagem'
        value={text}
      >
      </TextInput>
      </View>
    // </View>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: Tela,
  },
    keyboard: {
      flex: 1,
      flexDirection: 'column',
      justifyContent: 'center',
    },
  line: {
    width: '100%',
    borderWidth: 0.2,
    borderColor: '#AAAAAA',
    marginVertical: 10
  },
  //   botao: {
  //  marginTop: 70

  //   },
  icone: {
    borderWidth: 4,
    borderRadius: 17,
    borderColor: '#A8DADC',
    width: Tela > 350 ? 60 : 52,
    height: Tela > 350 ? 60 : 52,
    position: 'absolute',

  },
  textinhos: {
    marginTop: 20,
    fontSize: 16,
    marginLeft: 65,
    fontFamily: 'Rubik_700Bold',
  },
  margem: {
    marginHorizontal: 20,
    marginVertical: 20
  },
  text2: {
    fontSize: Tela > 350 ? 18 : 16,
    textAlign: 'left',
    color: '#000',
    paddingLeft: 20
  },
  button2: {
    zIndex:1,
    backgroundColor: '#c2e0e4',
    // opacity: '50%',
    height: 60,
    borderRadius: 93,
    width: '80%',
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.32,
    shadowRadius: 4.46,
    elevation: 3,
    position: 'absolute',
    bottom:10,
    right:66,
  },
  viewMessages:{
    height: Height*63/100,
    // alignItems: 'center',
    // marginBottom: 100
  },
  enviar:{
    color:'#000',
    alignSelf:'flex-end',
    zIndex:5,
    position: 'absolute',
    bottom:30,
    right:20,
 
  },
   arrow: {
     width: 30,
     height: 30,
     marginTop: 40,
     marginLeft: 10,
   },
  owner:{
    padding: 10,
    borderRadius:17,
    backgroundColor: '#c2e0e4',
    alignSelf:'flex-end',
    marginHorizontal:25,
    marginVertical:3
  },
  instOwner:{
    padding: 10,
    borderRadius:17,
    backgroundColor: '#c8eede',
    alignSelf:'flex-start',
    marginHorizontal: 25,
    marginVertical:3
  },
  message:{
    color: '#000'
  }
});
