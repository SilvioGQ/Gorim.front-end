import React, { useState, useContext } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, Dimensions } from 'react-native';

import ModalConfirmExit from '../ModalConfirmExit';
import PlayerService from '../../services/PlayerService';
import FunctionalityService from '../../services/FunctionalityService';
import COLORS from '../../resources/colors';
import { socketContext } from "../../context/socket";
const Tela = Dimensions.get('screen').width;
export default function Rodada({onclick}) {
  const socket = useContext(socketContext);
  const [modalVisible, setModalVisible] = useState(false);
  
  const removeFromRoom = () => {
    setModalVisible(!modalVisible);
    socket.emit('removeFromRoom');
    onclick()
  }

  return (
    <View style={styles.container}>
      <Text style={styles.textLarge}>Rodada</Text>
      <View style={{marginTop: 10,position:'absolute', left:'82%' }}>
      <TouchableOpacity onPress={() => setModalVisible(!modalVisible)} style={{width: 60, height: 64, marginTop:-15}}>
        <Image style={{ width: 28, height: 30, alignSelf:'center',marginTop:20 }} source={require('../../assets/Logo/Fechar.png')} />
      </TouchableOpacity>
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
    height: 65,
    width: Tela,
  },
  textLarge: {
    color: '#ffffff',
    fontSize: 15,
    fontFamily: 'Rubik_300Light',
    marginTop: 20,
    marginLeft: 15
  },

});