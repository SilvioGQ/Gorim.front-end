import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, Dimensions } from 'react-native';

import ModalHeader from '../Modal/ModalHeader';
import PlayerService from '../../services/PlayerService';
import FunctionalityService from '../../services/FunctionalityService';
import COLORS from '../../styles/Colors';

const Tela = Dimensions.get('screen').width;
export default function Rodada({ onClick, player }) {
  const [modalVisible, setModalVisible] = useState(false);
  
  const deletePlayer = () => {
    PlayerService.deletePlayer(player.id);
    FunctionalityService.deletePlayer(player.room);
    setModalVisible(!modalVisible);
    onClick();
  }

  return (
    <View style={styles.container}>
      <Text style={styles.textLarge}>Rodada </Text>
      <TouchableOpacity onPress={() => setModalVisible(!modalVisible)}>
        <Image style={{ width: 25, height: 27, marginTop: 27, marginRight: 15 }} source={require('../../assets/Logo/Fechar.png')} />
      </TouchableOpacity>
      {modalVisible && (
        <ModalHeader deletePlayer={deletePlayer} text='Tem certeza que deseja sair da partida?' onClick={() => setModalVisible(!modalVisible)} />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: COLORS.headerColor,
    justifyContent: 'space-between',
    height: 75,
    width: Tela,
  },
  textLarge: {
    color: '#ffffff',
    fontSize: 15,
    fontFamily: 'Rubik_300Light',
    justifyContent: 'flex-start',
    textAlign: 'left',
    marginTop: 30,
    alignItems: 'flex-start',
    marginLeft: 15
  },

});