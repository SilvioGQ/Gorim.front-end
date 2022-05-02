import React from 'react';
import { Text, View, Image, TouchableOpacity, StyleSheet } from 'react-native';
import COLORS from '../../constants/colors';
import Papel from '../../assets/agricultorIcones/papel.png';

export default function Cenarios({ seeScenery, endStage, notification }) {
  return (
    <View style={[styles.container]}>
      <TouchableOpacity onPress={endStage}  >
        <View style={styles.resumo}>
          <Text style={styles.candidato}>FINALIZAR ETAPA</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  resumo: {
    height: 60,
    width: '100%',
    alignItems: 'center',
      justifyContent: 'center',
    backgroundColor: '#EB5656',
    borderRadius: 20,
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
    fontFamily: 'Rubik_400Regular',
    fontWeight: 'bold',
    color: COLORS.textWhite,
    textAlign: 'center',
    fontSize: 14,
    paddingHorizontal: 20
  },
  logo: {
    width: 30,
    height: 30,
    marginLeft: 15
  },
  titulo: {

    fontSize: 12,
    paddingHorizontal: 5
  },
  notificacao: {
    width: 18,
    height: 18,
    borderRadius: 9,
    backgroundColor: '#F19F00',
    marginTop: -40,
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
    justifyContent: 'center',
    alignContent: 'center',
    // flexDirection: 'row',
    width: '85%',
    backgroundColor: COLORS.bgColorPrimary

  }

});
