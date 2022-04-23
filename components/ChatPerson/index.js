import React, {useContext} from 'react';
import { Text, View, StyleSheet, Image, TouchableOpacity, Dimensions } from 'react-native';

import COLORS from '../../constants/colors';
const Height = Dimensions.get('screen').height;
const Tela = Dimensions.get('screen').width;
import {GameContext} from '../../contexts/GameContext'
import ICONS from '../../constants/imagesIcons'
export default function ChatPerson({ onClick, player2, notification = null, messages }) {
    const { player } = useContext(GameContext);
    const getTypeMenu = () => {
       // if (game.phase == 1) {
          return `${player2.type ? player2.type.slice(0, 3) : ''}${player2.type === 'Empresário' ? player2.specialty[0] : ''}`;
       // } else {
       //   return `${player2.office ? player2.office.slice(0, 3) : 'Cid'}`;
       // }
      }
    return (
      <View style={styles.margem}>
    <TouchableOpacity onPress={onClick}  >
        <Image
          style={styles.icone}
          source={ICONS[player2.avatar]}
          />
        <Text style={styles.textinhos}>{`${getTypeMenu()}/${player2.name}`}</Text>
        {/* {messages && messages.filter((i)=>i.player1 === player2.id && i.player2 === player2.id).length !== 0 ?
            messages.find((i)=>i.player1 === player2.id && i.player2 === player2.id).messages[0].map((i) => {
              return (
                <View>
                  <Text style={{fontSize:11}}>{i.sender == player.id ? 'Você: ' : `${player2.name}: `}{i.message}</Text>
                  <Text style={{fontSize:9}}>{i.datetime.substr(11,5)}</Text>
                </View>
              )
            })
              :
              null
            }
            {messages && messages.filter((i)=>i.player1 === player2.id && i.player2 === player2.id).length !== 0 ?
            messages.find((i)=>i.player1 === player2.id && i.player2 === player2.id).messages[0].map((i) => {
              return (
                <View>
                  <Text style={{fontSize:11}}>{i.sender == player.id ? 'Você: ' : `${player2.name}: `}{i.message}</Text>
                  <Text style={{fontSize:9}}>{i.datetime.substr(11,5)}</Text>
                </View>
              )
            })
              :
              null
            } */}
          {notification && <View style={[styles.notificacao]} />}
    </TouchableOpacity>
      </View>
  )
}

const styles = StyleSheet.create({
  icone: {
    borderWidth: 4,
    borderRadius: 17,
    borderColor: '#A8DADC',
    width: Tela > 350 ? 55 : 52,
    height: Tela > 350 ? 55 : 52,
    // marginBottom: Height > 720 && Height < 800 ? 2 : 5,
    // marginTop: 11.5,
    position: 'absolute',

  },
  textinhos: {
    marginTop: 20,
    fontSize: 14,
    marginLeft: 70,
    fontFamily: 'Rubik_700Bold',

  },
  margem: {
    // marginTop: 20,
    marginHorizontal: 20,
    marginVertical: 15
  },
  notificacao: {
    position: 'absolute',
    left: 82,
    width: 18,
    height: 18,
    borderRadius: 9,
    backgroundColor: '#F19F00',
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.94,
    elevation: 6,
  }
})
//alt shift f
