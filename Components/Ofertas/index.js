import React from 'react';
import { Text, View, StyleSheet, Image, TouchableOpacity, Dimensions } from 'react-native';

import Empresario from '../../assets/perfils/empresariox1/Empresario.png';
import Rice from '../../assets/agricultorIcones/rice.png';
import Normal from '../../assets/moedas/normal.png';

const Tela = Dimensions.get('screen').width
export default function Oferta({ vendedor, produto, preço }) {
  return (
    <View style={styles.colunm}>
      <View style={styles.row3}>
        <View>
          <Image
            style={styles.icone}
            source={Empresario}
          />
          <Text style={{ textAlign: 'center' }}>{vendedor}</Text>
        </View>
        <View>
          <Text>Produto</Text>
          <Text>{produto}</Text>
        </View>
        <Image
          style={[styles.icone, { marginTop: -6 }]}
          source={Rice}
        />
        <View>
          <Text>Preço</Text>
          <Text>{preço}</Text>
        </View>
        <Image
          style={[styles.icone, { marginTop: -6 }]}
          source={Normal}
        />
      </View>
      <View style={styles.row3}>
        <Text> Quantidade: 4</Text>
        <TouchableOpacity style={[styles.button, { backgroundColor: '#66BF00' }]}>
          <Text style={styles.textbutton}>CONFIRMAR</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.button, { backgroundColor: '#BF0000' }]}>
          <Text style={styles.textbutton}>REJEITAR</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  button: {
    width: 85,
    height: 30,
    borderRadius: 20,
    backgroundColor: '#BF0000'
  },
  textbutton: {
    color: '#FFFFFF',
    fontSize: 9,
    textAlign: 'center',
    marginTop: '10%',
    fontFamily: 'Rubik_400Regular'
  },
  row: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    alignSelf: 'flex-start',
    justifyContent: 'flex-start',
    margin: '5%',
    marginTop: '8%',
    width: Tela,
    flexWrap: 'wrap'
  },
  row3: {
    flexDirection: 'row',
    alignSelf: 'flex-start',
    justifyContent: 'space-around',
    margin: '1%',
    width: Tela
  },
  colunm: {
    alignItems: 'center',
    justifyContent: 'center',
    margin: 7,
    marginTop: '8%',
    backgroundColor: '#FFFFFF',
    width: Tela,
    height: 95,
    borderRadius: 20,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.32,
    shadowRadius: 5.46,

    elevation: 6
  },
  icone: {
    width: 36,
    height: 36,
    alignSelf: 'center',

  }
});