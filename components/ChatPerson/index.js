import React, {useContext} from 'react';
import { Text, View, StyleSheet, Image, TouchableOpacity, Dimensions } from 'react-native';

import COLORS from '../../constants/colors';
const Height = Dimensions.get('screen').height;
const Tela = Dimensions.get('screen').width;
import GameContext from '../../contexts/GameContext'
import ICONS from '../../constants/imagesIcons'
export default function ChatPerson({ onClick, player, notification = null }) {
//    const { game } = useContext(GameContext);
    const getTypeMenu = () => {
       // if (game.phase == 1) {
          return `${player.type ? player.type.slice(0, 3) : ''}${player.type === 'Empresário' ? player.specialty[0] : ''}`;
       // } else {
       //   return `${player.office ? player.office.slice(0, 3) : 'Cid'}`;
       // }
      }
    return (
    <TouchableOpacity onPress={onClick}  >
      <View>
        <Image
          style={styles.icone}
          source={ICONS[player.avatar]}
          />
        <Text style={styles.textinhos}>{`${getTypeMenu()}/${player.name}`}</Text>
          {notification && <View style={[styles.notificacao]} />}
      </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  icone: {
    width: Tela > 350 ? 40 : 32,
    height: Tela > 350 ? 40 : 32,
    marginBottom: Height > 720 && Height < 800 ? 2 : 5,
    marginTop: 11.5
  },
  textinhos: {
    fontSize: Tela > 350 ? 11 : 8,
    textAlign: 'center',
    marginHorizontal: 5
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
