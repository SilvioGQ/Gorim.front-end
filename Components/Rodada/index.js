import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import ModalFrame2 from '../../Components/Modal'
export default function Rodada({navigation}) {
    const [modalVisible, setModalText] = useState(false)
  return (
    <View style={styles.container}>
        <Text style={styles.textLarge}>Rodada </Text>
        <TouchableOpacity onPress={() => setModalText(!modalVisible)}>
        <Image style={{width:25, height:27, marginTop:28}} source={require('../../assets/Logo/Fechar.png')}/>
        </TouchableOpacity>
        {modalVisible === true && (
        <ModalFrame2 onClick={() => navigation.navigate('Gorim')} text='Tem certeza que deseja sair da partida?'/>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
        flexDirection:'row',
        backgroundColor: '#58AB23',
        justifyContent:'space-between',
        height: 75,
        width:'100%',
    },
    textLarge:{
        color: '#ffffff',
        fontSize: 15,
        fontFamily: 'Rubik_300Light',
        justifyContent:'flex-start',
        textAlign:'flex-star',
        marginTop:32,
        alignItems:'flex-start'
    },

});