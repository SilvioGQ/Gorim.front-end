import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, Dimensions } from 'react-native';

import ModalConfirmExit from '../ModalConfirmExit';
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
      <Text style={styles.textLarge}>Rodada</Text>
      <TouchableOpacity onPress={() => setModalVisible(!modalVisible)} style={{flexDirection:'row', alignSelf:'center', position:'absolute', left:'85%' }}>
        <Image style={{ width: 25, height: 27, marginTop: 25, marginRight: 15 }} source={require('../../assets/Logo/Fechar.png')} />
      </TouchableOpacity>
      {modalVisible && (
        <ModalConfirmExit deletePlayer={deletePlayer} text='Tem certeza que deseja sair da partida?' onClick={() => setModalVisible(!modalVisible)} />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: COLORS.headerColor,
    height: 85,
    width: Tela,
  },
  textLarge: {
    color: '#ffffff',
    fontSize: 15,
    fontFamily: 'Rubik_300Light',
    marginTop: 45,
    marginLeft: 15
  },

});