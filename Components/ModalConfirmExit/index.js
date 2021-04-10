import React from 'react';
import { Text, View, Modal, TouchableOpacity, StyleSheet } from 'react-native';

import COLORS from '../../resources/colors';

export default function ModalConfirmExit({ deletePlayer, onClick }) {
  return (
    <View>
      <Modal animationType="fade" transparent={true} >
        <View style={styles.header}>
          <View style={{ margin: 20, backgroundColor: "#fff", borderRadius: 20, padding: 35, alignItems: "center", shadowColor: "#000", shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.25, shadowRadius: 4, elevation: 5 }}>
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
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    flex: 1,
    justifyContent: "center",
    marginTop: 22,
    backgroundColor: '#000000aa'
  },
  text: {
    marginBottom: 15,
    textAlign: "center",
    fontFamily: 'Rubik_300Light',
    fontSize: 18
  },
  button: {
    borderRadius: 20,
    padding: 15,
    elevation: 5,
    backgroundColor: COLORS.successButton,
    alignItems: 'center'
  },
  textButton: {
    textAlign: 'center',
    fontFamily: 'Rubik_400Regular',
    fontSize: 18,
    color: COLORS.textWhite
  }, 
});