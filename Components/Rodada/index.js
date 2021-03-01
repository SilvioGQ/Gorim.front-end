import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import ModalHeader from '../Modal/ModalHeader';
import PlayerService from '../../services/PlayerService';
import COLORS from '../../styles/Colors'
export default function Rodada({navigationG, route, idUser}) {
  const DeletePlayer = () => {
    PlayerService.deletePlayer(idUser);
    navigationG()
    setModalText(!modalVisible)
  }

    const [modalVisible, setModalText] = useState(false)
  return (
    <View style={styles.container}>
        <Text style={styles.textLarge}>Rodada </Text>
        <TouchableOpacity onPress={() => setModalText(!modalVisible)}>
        <Image style={{width:25, height:27, marginTop:27, marginRight:15}} source={require('../../assets/Logo/Fechar.png')}/>
        </TouchableOpacity>
        {modalVisible === true && (
        <ModalHeader DeletePlayer={DeletePlayer} text='Tem certeza que deseja sair da partida?' onClick={()=> setModalText(!modalVisible)}/>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
        flexDirection:'row',
        backgroundColor: COLORS.headerColor,
        justifyContent:'space-between',
        height: 75,
        width:'100%',
    },
    textLarge:{
        color: '#ffffff',
        fontSize: 15,
        fontFamily: 'Rubik_300Light',
        justifyContent:'flex-start',
        textAlign:'left',
        marginTop:30,
        alignItems:'flex-start',
        marginLeft:15
    },

});