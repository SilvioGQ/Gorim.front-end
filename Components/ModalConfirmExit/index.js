import React from 'react';
import { Text, View, Modal, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';
const Tela = Dimensions.get('screen').width;
import COLORS from '../../resources/colors';

export default function ModalConfirmExit({ deletePlayer, onClick }) {
  return (
      <Modal animationType="fade" transparent={true} >
        <View style={styles.modal}>
          <View style={styles.container}>
            <Text style={styles.text}>Tem certeza que deseja sair da partida?</Text>
            <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
              <TouchableOpacity style={[styles.button, { marginRight: 20 }]} onPress={onClick} >
                <Text style={styles.textButton}>Continuar</Text>
              </TouchableOpacity>
              <TouchableOpacity style={[styles.button, {backgroundColor:COLORS.warningButton}]} onPress={deletePlayer} >
                <Text style={styles.textButton}>Sair</Text>
              </TouchableOpacity>
            </View>
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
    shadowOffset: {width: 0,height: 2},
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    margin: 20
  },
  text: {
    fontFamily: 'Rubik_300Light',
    fontSize: 18,
    textAlign: "center",
    marginBottom:15,
  },
  button: {
    alignItems: 'center',
    width: 150,
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
  textButton: {
    textAlign: 'center',
    fontSize: 15,
    fontFamily: 'Rubik_300Light',
    color: '#fff',
  }, 
});