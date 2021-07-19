import React, { useState, useContext } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Dimensions } from 'react-native';
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
        {close && (
          <>
            <TouchableOpacity onPress={() => setModalVisible(!modalVisible)} style={{ alignSelf:'center', borderWidth:1, borderRadius:20, padding:10, position:'absolute', left:'82%', top:'30%'}}>
              <Text style={styles.textExit}>Sair</Text>
            </TouchableOpacity>
          </>
        )}
        {modalVisible && (
          <ModalConfirmExit deletePlayer={removeFromRoom} text='Tem certeza que deseja sair da partida?' onClick={() => setModalVisible(!modalVisible)} />
        )}
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: COLORS.headerColor,
    height: 70,
    width: Tela,
    paddingTop:15,
    justifyContent: 'center'
  },
  textLarge: {
    color: '#ffffff',
    fontSize: 20,
    fontFamily: 'Rubik_300Light',
    marginLeft:5,
    alignSelf: 'center',
    marginTop:-10
  },
  textExit: {
    color: '#ffffff',
    fontSize: 15,
    fontFamily: 'Rubik_700Bold',
    textAlign: 'center',
  }
});