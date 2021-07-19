import React, { useState, useContext } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, Dimensions } from 'react-native';
import { GameContext } from '../../context/GameContext';

import ModalConfirmExit from '../ModalConfirmExit';
import COLORS from '../../resources/colors';

const Tela = Dimensions.get('screen').width;
export default function Rodada({ removeFromRoom = null, close = null, name }) {

  const { timer } = useContext(GameContext);
  const [modalVisible, setModalVisible] = useState(false);

  const stringTimer = () => {
    let min = Math.floor(timer / 60);
    let sec = Math.floor(timer - min * 60);

    return `${min}:${sec >= 10 ? sec : `0${sec}`}`;
  }

  return (
    <View style={styles.container}>
      <Text style={styles.textLarge}>{name} {stringTimer()}</Text>
      <View style={{ justifyContent:'flex-end' }}>
        {close && (
          <>
            <TouchableOpacity onPress={() => setModalVisible(!modalVisible)} style={{ borderWidth:1, borderRadius:20, width: 47, height: 43, marginTop: 5 }}>
              <Text style={styles.textExit}>Sair</Text>
            </TouchableOpacity>
          </>
        )}
        {modalVisible && (
          <ModalConfirmExit deletePlayer={removeFromRoom} text='Tem certeza que deseja sair da partida?' onClick={() => setModalVisible(!modalVisible)} />
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: COLORS.headerColor,
    height: 50,
    width: Tela,
    justifyContent: 'center'
  },
  textLarge: {
    color: '#ffffff',
    fontSize: 20,
    fontFamily: 'Rubik_300Light',
    marginTop: 5,
    textAlign: 'center',
    alignSelf: 'center'
  },
  textExit: {
    color: '#ffffff',
    fontSize: 15,
    fontFamily: 'Rubik_700Bold',
    marginTop: 11,
    textAlign: 'center',
    alignSelf: 'center'
  }
});