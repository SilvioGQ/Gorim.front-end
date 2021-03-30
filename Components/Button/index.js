import * as React from 'react';
import { Text, View, StyleSheet, TouchableOpacity, Dimensions } from 'react-native';
import COLORS from '../../styles/Colors';

const Tela = Dimensions.get('screen').width;
export default function Button({ name, onClick, disabled = false }) {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.button}
        onPress={onClick}
        disabled={disabled}
      >
        <Text style={styles.text}>{name}</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'center',
    backgroundColor: COLORS.bgColorPrimary,
    alignItems: 'center',
    width: Tela
  },
  button: {
    height: 45,
    margin: '2%',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: COLORS.successButton,
    borderRadius: 25,
    width: '80%',
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.32,
    shadowRadius: 4.46,
    elevation: 2,
  },
  text: {
    // alignSelf: 'center',
    textTransform: 'uppercase',
    color: COLORS.textWhite,
    fontSize: 15,
    fontFamily: 'Rubik_400Regular',
    // textAlign: 'center',
    // alignItems: 'center',
    // marginTop: 15
  }
});
