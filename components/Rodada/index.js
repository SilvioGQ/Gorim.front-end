import React, { useState, useContext } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Dimensions, Image } from 'react-native';
import { GameContext } from '../../contexts/GameContext';
import COLORS from '../../constants/colors';

const Tela = Dimensions.get('screen').width;
export default function Rodada({ removeFromRoom = null, close = null, setModalVisible, arrow = null, onClick = null }) {

  const { timer } = useContext(GameContext);

  const stringTimer = () => {
    let min = Math.floor(timer / 60);
    let sec = Math.floor(timer - min * 60);

    return `${min}:${sec >= 10 ? sec : `0${sec}`}`;
  }

  return (
    <View style={styles.container}>
      <Text style={styles.textLarge}>Tempo {stringTimer(timer)}</Text>
      {close && (
        <>
          <TouchableOpacity onPress={() => setModalVisible(true)} style={styles.botaosair}  >
            <Text style={styles.textExit}>Sair</Text>
          </TouchableOpacity>
        </>
      )}
      {arrow && (
        <>
          <TouchableOpacity onPress={onClick} style={{ position: 'absolute', left: '7%', top: 20 }}  >
            <View style={{width:60,height:35}}>
            <Image style={styles.arrow} source={require('../../assets/icons/left-arrow.png')}  />
            </View>
          </TouchableOpacity>
        </>
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
    paddingTop: 10,
    justifyContent: 'center'
  },
  textLarge: {
    color: '#ffffff',
    fontSize: Tela > 350 ? 20 : 16,
    
    marginLeft: 5,
    alignSelf: 'center',
    marginTop: -10
  },
  textExit: {
    color: '#ffffff',
    fontSize: 15,
    fontFamily: 'Rubik_700Bold',
    textAlign: 'center',
  },
  arrow: {
    width:25,
    height:25,
    tintColor:'#fff'
  },
  botaosair: {
    alignSelf: 'center', 
    position: 'absolute', 
    left: '78%', 
    top: 20, 
    paddingVertical: 7, 
    paddingHorizontal: 20, 
    backgroundColor: '#E84857', 
    borderRadius: 20,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.15,
    shadowRadius: 5.46,
    elevation: 3,
  }
});