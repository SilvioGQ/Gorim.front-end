import React from 'react';
import { Text, View, Modal, TouchableOpacity, Image, StyleSheet, Dimensions } from 'react-native';
import COLORS from '../../constants/colors';

const Tela = Dimensions.get('screen').width;
export default function ModalInfo({ player, text, onClick, modalImage, title, image, image2, image3 = false, display = 'flex' }) {

  return (
    <Modal
      animationType="fade"
      transparent={true}
    >
      <View style={styles.modal}>
        <View style={styles.container}>
          {title && (
              <Text style={{ marginVertical: 10, textAlign: "center", fontSize: 20 }}>{player.type === 'Agricultor' ? 'AGRICULTOR' : `EMPRESÁRIO DE ${player.specialty.toUpperCase()}S`}</Text>
          )}
          <Text style={styles.loading}>{text}</Text>
          {image && (
            <Image source={require('../../assets/tabelaprod.png')} style={{ width: 266, height: 250, marginBottom: 25 }} />
          )}
          {image2 && (
            <Image source={require('../../assets/Imposto.png')} style={{ width: 304, height: 210, marginBottom: 25 }} />
          )}
          {image3 && (
            <Image source={require('../../assets/tabelamulta4.png')} style={{ width: 319, height: 213, marginBottom: 25 }} />
          )}
          {modalImage && (
            <View style={{ padding: 15, marginRight: 25 }}>
              <View style={{ flexDirection: 'row' }}>
                <View style={[styles.estilo]}>
                  <Text style={[styles.texto1]}>0+</Text>
                </View>
                <Text style={[styles.texto]}>Indica quanto o item faz de produtividade</Text>
              </View>
              <View style={{ flexDirection: 'row' }}>
                <View style={[styles.estilo]}>
                  <Text style={[styles.texto1]}>0x</Text>
                </View>
                <Text style={[styles.texto]}>Indica o número para multiplicar o valor de produtividade da semente</Text>
              </View>
              <View style={{ flexDirection: 'row' }}>
                <View style={[styles.estilo2]}>
                  <Text style={[styles.texto2]}>0+</Text>
                </View>
                <Text style={[styles.texto]}>Indica quanto o item faz de poluição</Text>
              </View>
              <View style={{ flexDirection: 'row' }}>
                <View style={[styles.estilo2]}>
                  <Text style={[styles.texto2]}>0x</Text>
                </View>
                <Text style={[styles.texto]}>Indica o número para multiplicar o valor da poluição da semente</Text>
              </View>
            </View>
          )}
          <TouchableOpacity
            style={{ borderRadius: 20, padding: 10, elevation: 5, backgroundColor: COLORS.successButton, alignItems: 'center', width: 250, display: display }}
            onPress={onClick}
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

    fontSize: 18,
    textAlign: 'justify',
    marginBottom: 25,
  },
  texto: {
    marginBottom: 15,
    textAlign: 'left',

    fontSize: 14
  },
  estilo: {
    width: 32,
    height: 30,
    borderRadius: 10,
    borderColor: '#58AB23',
    borderWidth: 2.5,
    marginRight: 5
  },
  texto1: {

    fontWeight: 'bold',
    color: '#58AB23',
    fontSize: 18,
    alignSelf: 'center'
  },
  estilo2: {
    width: 32,
    height: 30,
    borderRadius: 10,
    borderColor: COLORS.warningButton,
    borderWidth: 2.5,
    marginRight: 5
  },
  texto2: {

    fontWeight: 'bold',
    color: COLORS.warningButton,
    fontSize: 18,
    alignSelf: 'center'
  }
})