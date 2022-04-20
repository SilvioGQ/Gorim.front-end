import React, { useState, useContext } from 'react';
import { Text, View, StyleSheet, Dimensions, FlatList, Image, TextInput, TouchableOpacity, ScrollView, KeyboardAvoidingView } from 'react-native';
import { GameContext, deleteAdvert, sendMessage } from "../../../contexts/GameContext";
import { format, formatDistance, formatRelative, subDays } from 'date-fns';

import Rodada from '../../../components/Rodada';
import TextBold from '../../../components/Atons/TextBold';
import HeaderIcons from '../../../components/headerIcons';
import ICONS from '../../../constants/imagesIcons'
import COLORS from '../../../constants/colors';
const Tela = Dimensions.get('screen').width;
const Height = Dimensions.get('screen').height;
export default function ChatConversation({ navigation, route }) {
  const { player } = route.params
  const [text, onChangeText] = useState('')
  const fns = require('date-fns')
  console.log(player)
  const [messagens, setMessagens] = useState([{ id: 0, message: 'olá', owner: true, data: '20:20' },])
  // Essa tela pode ficar genericona por enquanto.
  return (
    <View style={styles.container}>
      <Rodada arrow={true} onClick={() => navigation.navigate('Chat')} />
      <View style={styles.margem}>
        <Image
          style={styles.icone}
          source={ICONS[player.avatar]}
        />
        <Text style={styles.textinhos}>{player.type ? player.type : player.office} {player.name}{'\n'}{player.city}</Text>
      </View>
      <View style={styles.line} />

      <View style={styles.viewMessages}>
        <KeyboardAvoidingView
          style={styles.keyboard}
          behavior={"height"}
          enabled
          keyboardVerticalOffset={270}
        >
          <ScrollView>
            {messagens ? messagens.map((i) => {
              return (
                <View style={i.owner ? styles.owner : styles.instOwner}>
                  <Text style={styles.message}>{i.message}</Text>
                  <Text style={styles.time}>{i.data}</Text>
                </View>
              )
            })
              :
              null
            }
          </ScrollView>
        </KeyboardAvoidingView>
      </View>
      <View style={styles.borda}>
        <TouchableOpacity style={styles.enviar} onPress={() => { 
          if (text !== '') {sendMessage(player.id, 'texto'); onChangeText(''); }
          }}>
          <Image style={styles.arrow} source={require('../../../assets/flecha.png')} />
        </TouchableOpacity>
        <TextInput
          style={[styles.text2]}
          onChangeText={t => onChangeText(t)}
          placeholder='Mensagem'
          value={text}
        >
        </TextInput>
      </View>
    </View>

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
    width: Tela,
  },
  line: {
    width: '85%',
    alignSelf: 'center',
    borderWidth: 0.2,
    borderColor: '#D6E8E6'

  },
  icone: {
    paddingHorizontal: 8,
    width: Tela > 350 ? 60 : 52,
    height: Tela > 350 ? 60 : 52,
  },
  textinhos: {
    marginTop: 10,
    fontSize: 18,
    fontFamily: 'Rubik_700Bold',
  },
  margem: {
    marginHorizontal: 10,
    marginVertical: 20,
    alignItems: 'center',
    alignSelf: 'center',
    flexDirection: 'row'
  },
  time: {
    fontSize: 9,
    color: '#000',
    textAlign: 'right'
  },
  text2: {
    fontSize: Tela > 350 ? 18 : 16,
    textAlign: 'left',
    color: '#000',
    width: '80%',
    paddingLeft: 20
  },

  viewMessages: {
    height: Height * 63 / 100,
    // alignItems: 'center',
    // marginBottom: 100
  },
  enviar: {
    color: '#000',
    alignSelf: 'flex-end',
    zIndex: 5,
    position: 'absolute',
    bottom: 15,
    right: 20,

  },
  arrow: {
    width: 30,
    height: 30,
    marginTop: 40,
    marginLeft: 10,
  },
  owner: {
    padding: 10,
    borderTopLeftRadius: 17,
    borderTopRightRadius: 17,
    borderBottomLeftRadius: 17,
    borderBottomRightRadius: 0,
    backgroundColor: '#C8EEEA',
    alignSelf: 'flex-end',
    marginHorizontal: 15,
    marginVertical: 3
  },
  instOwner: {
    padding: 10,
    borderTopLeftRadius: 17,
    borderTopRightRadius: 17,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 17,
    backgroundColor: '#c2e0e4',
    alignSelf: 'flex-start',
    marginHorizontal: 15,
    marginVertical: 3
  },
  message: {
    color: '#000'
  },

  borda: {
    zIndex: 1,
    height: 60,
    width: '90%',
    flexDirection: 'row',
    borderRadius: 20,
    borderWidth: 2,
    borderColor: '#C8EEEA',
    position: 'absolute',
    bottom: 10,
    right: 20,
  },
});
