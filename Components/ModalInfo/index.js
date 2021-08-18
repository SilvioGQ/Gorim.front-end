import React, { useContext } from 'react';
import { Text, View, Modal, TouchableOpacity, Image, StyleSheet, Dimensions } from 'react-native';
import COLORS from '../../resources/colors';
import { GameContext } from '../../context/GameContext';
const Tela = Dimensions.get('screen').width;
export default function ModalInfo({ text, onClick, modalImage, title }) {
  const { player } = useContext(GameContext);
  return (
    <Modal
      animationType="fade"
      transparent={true}
    >
      <View style={styles.modal}>
        <View style={styles.container}>
          {title && (
            <>
              <Text style={{ marginVertical: 10, textAlign: "center", fontFamily: 'Rubik_300Light', fontSize: 24 }}>{player.type === 'Agricultor' ? 'Agricultor' : 'Empresário'}</Text>
            </>
          )}
          <Text style={styles.loading}>{text}</Text>
          {modalImage && (
            <View style={{padding: 15, marginRight:25}}>
              <View style={{ flexDirection: 'row' }}>
                <View style={{ width: 32, height:30, borderRadius: 10, borderColor: '#58AB23', borderWidth: 2.5, marginRight: 5 }}>
                  <Text style={{ fontFamily: 'Rubik_300Light', fontWeight: 'bold', color: '#58AB23', fontSize: 18, alignSelf:'center' }}>0+</Text>
                </View>
                <Text style={{ marginBottom: 15, textAlign: 'left', fontFamily: 'Rubik_300Light', fontSize: 14}}>Indica quanto o item faz de produtividade</Text>
              </View>
                <View style={{ flexDirection: 'row' }}>
                  <View style={{ width: 32, height:30, borderRadius: 10, borderColor: '#58AB23', borderWidth: 2.5, marginRight: 5 }}>
                    <Text style={{ fontFamily: 'Rubik_300Light', fontWeight: 'bold', color: '#58AB23', fontSize: 18, alignSelf:'center' }}>0x</Text>
                  </View>
                  <Text style={{ marginBottom: 15, textAlign: 'left', fontFamily: 'Rubik_300Light', fontSize: 14}}>Indica o número para multiplicar o valor de produtividade da semente</Text>
                </View>
                <View style={{ flexDirection: 'row' }}>
                <View style={{ width: 32, height:30, borderRadius: 10, borderColor: COLORS.warningButton, borderWidth: 2.5, marginRight: 5 }}>
                  <Text style={{ fontFamily: 'Rubik_300Light', fontWeight: 'bold', color: COLORS.warningButton, fontSize: 18, alignSelf:'center'}}>0+</Text>
                </View>
                <Text style={{ marginBottom: 15, textAlign: 'left', fontFamily: 'Rubik_300Light', fontSize: 14}}>Indica quanto o item faz de poluição</Text>
              </View>
                <View style={{ flexDirection: 'row' }}>
                  <View style={{ width: 32, height:30, borderRadius: 10, borderColor: COLORS.warningButton, borderWidth: 2.5, marginRight: 5 }}>
                    <Text style={{ fontFamily: 'Rubik_300Light', fontWeight: 'bold', color: COLORS.warningButton, fontSize: 18, alignSelf:'center' }}>0x</Text>
                  </View>
                  <Text style={{ marginBottom: 15, textAlign: 'left', fontFamily: 'Rubik_300Light', fontSize: 14}}>Indica o número para multiplicar o valor da poluição da semente</Text>
                </View>
            </View>
          )}
          <TouchableOpacity
            style={{ borderRadius: 20, padding: 10, elevation: 5, backgroundColor: COLORS.successButton, alignItems: 'center', width: 250 }}
            onPress={onClick}
            activeOpacity={0.7}
          >
            <Text style={{ textAlign: 'center', fontFamily: 'Rubik_400Regular', fontSize: 18, color: COLORS.textWhite }}>VOLTAR</Text>
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
    padding: 20,
    margin: 20,
    borderRadius: 30,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  loading: {
    fontFamily: 'Rubik_300Light',
    fontSize: 18,
    textAlign: 'justify',
    marginBottom: 25,
  },
})