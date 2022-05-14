import React from 'react';
import { Text, View, Image, TouchableOpacity, StyleSheet } from 'react-native';
import COLORS from '../../constants/colors';
import Papel from '../../assets/agricultorIcones/papel.png';
import Chat from '../../assets/icons/chat.png';

export default function ResumoEChat({ seeScenery, seeChat, notification, notificationChat }) {
  return (
    <View style={[styles.container]}>
      <TouchableOpacity style={{marginRight: 50}} onPress={seeScenery} activeOpacity={0.7}>
        <View style={[styles.resumo]}>
          <Image style={styles.logo} source={Papel} />
          <Text style={[styles.titulo]}> Resumo de cenário </Text>
          {notification &&
            <View style={[styles.notificacao]} />}
        </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={seeChat}  >
        <View style={styles.resumo1}>
          <Image style={styles.logo2} source={Chat} />
          {notificationChat &&
            <View style={[styles.notificacao]} />}
        </View>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  resumo: {
    height: 60,
    width: '120%',
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: COLORS.textWhite,
    borderRadius: 20,
    // marginRight: 20,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.32,
    shadowRadius: 5.46,
    elevation: 3,
  },
  resumo1: {
    height: 60,
    width: '110%',
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: COLORS.textWhite,
    borderRadius: 20,
    // marginRight: 20,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.32,
    shadowRadius: 5.46,
    elevation: 3,
  },
  candidato: {

    fontSize: 12,
    paddingHorizontal: 20
  },
  logo: {
    width: 30,
    height: 30,
    marginLeft: 15
  },
    logo2: {
      width: 30,
      height: 30,
      // paddingHorizontal: 20,
      marginHorizontal: 25

    },
  titulo: {

    fontSize: 12,
    paddingHorizontal: 5
  },
  notificacao: {
    position: 'absolute',
    width: 18,
    height: 18,
    borderRadius: 9,
    backgroundColor: '#F19F00',
    marginTop: -40,
    top: 40,
    left: '95%',
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.94,
    elevation: 6,
  },
  container: {
    height: 60,
    // justifyContent: 'space-between',
    flexDirection: 'row',
    width: '85%',
    backgroundColor: COLORS.bgColorPrimary

  }

});
