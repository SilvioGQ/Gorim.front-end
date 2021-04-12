import * as React from 'react';
import { Text, View, StyleSheet, Image, TouchableOpacity, Modal, Dimensions } from 'react-native';
const Tela = Dimensions.get('screen').width;
import COLORS from '../../resources/colors';
export default function Conf({ Conf, isVisible }) {
  return (
    <Modal
      style={styles.modal}
      animationType={'fade'}
      visible={isVisible}
      transparent={true}>
      <View style={styles.modal}>
        <View style={styles.container}>
          <Text style={styles.header}> Gorim </Text>
          <Text style={styles.loading}> Tem certeza de que deseja solicitar o selo {'\n'}verde ao fiscal? </Text>
          <TouchableOpacity style={styles.button} onPress={Conf}>
            <Text style={styles.buttontext}> CONFIRMAR </Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.button, styles.button2, styles.buttontext]} onPress={Conf}>
            <Text style={styles.buttontext}> CANCELAR </Text>
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
    padding: 10,
    width: 318,
    height: 217,
    borderRadius: 30,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.32,
    shadowRadius: 5.46,
    elevation: 9,
    marginLeft: 50
  },
  modal: {
    flex: 1,
    alignSelf: 'center',
    justifyContent: 'center',
    backgroundColor: '#000000aa',
    width: Tela,
  },
  header: {
    fontFamily: 'Rubik_300Light',
    fontWeight: 'normal',
    fontSize: 20,
    lineHeight: 49,
    alignSelf: 'center'
  },
  loading: {
    fontFamily: 'Rubik_300Light',
    fontSize: 14,
    lineHeight: 20,
    alignSelf: 'center',

  },
  button: {
    alignItems: 'center',
    width: 274,
    height: 35,
    backgroundColor: COLORS.successButton,
    borderRadius: 12,
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
    alignSelf: 'center',
    textAlign: 'center',
    fontSize: 15,
    fontFamily: 'Rubik_300Light',
    color: '#fff',
    marginTop: 7
  }
});