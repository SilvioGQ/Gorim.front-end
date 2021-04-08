import React from 'react';
import { Text, View, StyleSheet, Image, TouchableOpacity } from 'react-native';
import COLORS from '../../../resources/Colors';
import Handshake from '../../../assets/Logo/handshake.png';

export default function Insumo({ route, navigation }) {

  const { texto } = route.params;
  return (
    <View style={styles.container}>
      <Text style={styles.texto}> {JSON.stringify(texto)} </Text>
      {/* <Text style={styles.texto}> Compra de insumo </Text> */}
      <Image
        style={styles.logo}
        source={Handshake}
      />
      <Text style={styles.texto}> Esperando confirmação de negociação...  </Text>
      {/* <Text style={styles.texto}> Esperando confirmação {'\n'} de negociação... </Text> */}
      <TouchableOpacity onPress={() => navigation.navigate('Agricultor1')}>
        <View style={styles.button}>
          <Text style={styles.textobuton}> CANCELAR </Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: COLORS.bgColorPrimary,
    alignItems: 'center'
  },
  logo: {
    height: 180,
    width: 180,
  },
  texto: {
    margin: 50,
    fontFamily: 'Rubik_300Light',

    fontWeight: 'normal',
    fontSize: 22,
    textAlign: 'center'
  },
  textobuton: {
    fontFamily: 'Rubik_300Light',

    fontWeight: 'normal',
    fontSize: 14,
    textAlign: 'center',
    color: COLORS.textWhite,
  },
  button: {
    padding: 13,
    marginTop: 40,
    backgroundColor: "#BF0000",
    borderRadius: 20,
    width: 255,
    alignSelf: 'flex-end',
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.32,
    shadowRadius: 5.46,

    elevation: 9,
  },
});
