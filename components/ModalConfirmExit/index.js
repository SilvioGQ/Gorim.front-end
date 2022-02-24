import React from 'react';
import { Text, View, Modal, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';
const Tela = Dimensions.get('screen').width;
import COLORS from '../../constants/colors';

export default function ModalConfirmExit({ deletePlayer, onClick }) {
  return (
    <Modal animationType="fade" transparent={true} >
      <View style={styles.modal}>
        <View style={styles.container}>
          <Text style={styles.text}>Tem certeza que deseja sair da partida?</Text>
          <TouchableOpacity style={[styles.button, { backgroundColor: COLORS.warningButton, marginRight: 20 }]} onPress={deletePlayer}   >
            <Text style={styles.textButton}>Sim</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={onClick}  >
            <Text style={styles.textButton}>Não</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  modal: {
    flex: 1,
    alignSelf: 'center',
    justifyContent: 'center',
    backgroundColor: '#000000aa',
    width: Tela,
  },
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLORS.bgColorSecondary,
    padding: 25,
    borderRadius: 30,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    margin: 20
  },
  text: {

    fontSize: 18,
    textAlign: "center",
    marginBottom: 15,
  },
  button: {
    alignItems: 'center',
    width: 250,
    padding: 10,
    backgroundColor: COLORS.successButton,
    borderRadius: 20,
    margin: 10,
  },
  textButton: {
    textAlign: 'center',
    fontSize: 18,

    color: '#fff',
  },
});
