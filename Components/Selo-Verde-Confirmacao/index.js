import React from 'react';
import { Text, View, StyleSheet, Image, TouchableOpacity, Modal, Dimensions } from 'react-native';

const Tela = Dimensions.get('screen').width;
import COLORS from '../../resources/colors';
export default function Conf({ text, confirm, denied }) {
  return (
    <Modal
      animationType={'fade'}
      transparent={true}>
      <View style={styles.modal}>
        <View style={styles.container}>
          <Text style={styles.loading}>{text}</Text>
          <TouchableOpacity style={styles.button} onPress={confirm} activeOpacity={0.7}>
            <Text style={styles.buttontext}>CONFIRMAR</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.button, styles.button2]} onPress={denied} activeOpacity={0.7}>
            <Text style={styles.buttontext}>CANCELAR</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLORS.bgColorSecondary,
    padding: 25,
    borderRadius: 30,
    shadowColor: "#000", 
    shadowOffset: {width: 0,height: 2},
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    margin: 20
  },
  modal: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#000000aa',
    width: Tela,
  },
  loading: {
    fontFamily: 'Rubik_300Light',
    fontSize: 18,
    textAlign: "center",
    marginBottom:15,
  },
  button: {
    alignItems: 'center',
    width: 250,
    padding:10,
    backgroundColor: COLORS.successButton,
    borderRadius: 20,
    margin: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.32,
    shadowRadius: 4.16,
    elevation: 4,
  },
  button2: {
    backgroundColor: COLORS.warningButton,
  },
  buttontext: {
    textAlign: 'center',
    fontSize: 15,
    fontFamily: 'Rubik_300Light',
    color: '#fff',
  }
});