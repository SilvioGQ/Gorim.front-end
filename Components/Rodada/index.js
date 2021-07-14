import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, Dimensions } from 'react-native';

import ModalConfirmExit from '../ModalConfirmExit';
import COLORS from '../../resources/colors';

const Tela = Dimensions.get('screen').width;
export default function Rodada({ timer, removeFromRoom = null, close = null, name }) {

  const [modalVisible, setModalVisible] = useState(false);

  const stringTimer = () => {
    let min = Math.floor(timer / 60);
    let sec = Math.floor(timer - min * 60);

    return `${min}:${sec >= 10 ? sec : `0${sec}`}`;
  }

  return (
    <View style={styles.container}>
      <Text style={styles.textLarge}>{name} {stringTimer()}</Text>
      <View style={{ position: 'absolute', left: '82%' }}>
        {close && (
          <>
            <TouchableOpacity onPress={() => setModalVisible(!modalVisible)} style={{ width: 47, height: 40, marginTop: -5 }}>
              {/* <Image style={{ width: 23, height: 25, alignSelf: 'center', marginTop: 10 }} source={require('../../assets/Logo/Fechar.png')} /> */}
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
    fontSize: 14,
    fontFamily: 'Rubik_700Bold',
    marginTop: 21,
    textAlign: 'center',
    alignSelf: 'center'
  }
});