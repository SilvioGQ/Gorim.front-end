import React, { useState } from 'react';
import { CheckBox } from 'react-native';
import { Text, View, Image, TouchableOpacity, Dimensions, StyleSheet } from 'react-native';

import Papel from '../../assets/agricultorIcones/papel.png';

const Tela = Dimensions.get('screen').width;
export default function Cenarios({ onClick }) {
  const [isSelected3, setSelection3] = useState(false);
  return (
    <View style={styles.container}>
      <View style={{ flex: 1, justifyContent: 'flex-end', alignItems: 'center', padding: 30, width: Tela }}>
        <TouchableOpacity onPress={onClick}>
          <View style={styles.resumo}>
            <Image
              style={styles.logo}
              source={Papel}
            />
            <Text style={{ fontFamily: 'Rubik_300Light', fontSize: 15, textAlign: 'center', margin: 5 }}> Resumo de cenário </Text>
          </View>
        </TouchableOpacity>
        <View style={{ flexDirection: 'row', alignSelf: 'flex-start', marginLeft: 20, marginTop: 10 }}>
          <CheckBox
            value={isSelected3}
            onValueChange={setSelection3}
            style={styles.checkbox}
          />
          <Text style={styles.candidato}>Terminei minhas ações</Text>
        </View>
      </View>
    </View>

  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    backgroundColor: '#EBFFFD',
    alignItems: 'center',
    padding: '2%',
    width: Tela,
  },
  resumo: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    margin: '1%',
    backgroundColor: '#FFFFFF',
    width: 260,
    height: 44,
    borderRadius: 20,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.32,
    shadowRadius: 5.46,
    elevation: 9,
  },
  candidato: {
    fontFamily: 'Rubik_300Light',
    fontSize: 18,
    marginTop: -1
  },
  logo: {
    width: 30,
    height: 30,
    marginRight: 16,
    margin: 7
  }
});