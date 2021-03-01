import React from 'react';
import { Text, View, StyleSheet, Image, TouchableOpacity, Dimensions } from 'react-native';
import COLORS from '../../styles/Colors'
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
            style={styles.person}
            source={Empresario}
          />
          <Text style={styles.text}>{vendedor}</Text>
        </View>
        <View>
          <Text style={styles.text}>Produto:</Text>
          <Text style={styles.textBold}>{produto}</Text>
        </View>
        <Image
          style={[styles.icone, { marginTop: -12 }]}
          source={Rice}
        />
        <View>
          <Text style={styles.text}>Preço:</Text>
          <Text style={styles.textBold}>{preço}</Text>
        </View>
        <Image
          style={[styles.icone, { marginTop: -12 }]}
          source={Normal}
        />
      </View>
        <Text style={[styles.text, { marginTop: -15 }]}> Quantidade: 4</Text>
      <View style={styles.row3}>
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
  colunm: {
    alignItems: 'center',
    justifyContent: 'center',
    margin: 7,
    backgroundColor: COLORS.bgColorPrimary,
    borderRadius:20,
    width: Tela,
    height: 125,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.32,
    shadowRadius: 5.46,
  
    elevation: 6
  },
  button: {
    width: 140,
    height: 30,
    borderRadius: 15,
    backgroundColor: COLORS.warningButton,
    padding:5
  },
  textbutton: {
    color: COLORS.textWhite,
    fontSize: 9,
    textAlign: 'center',
    marginTop: 6,
    fontFamily: 'Rubik_400Regular'
  },
  row: {
    flexDirection: 'row',
    margin: '5%',
    width: Tela,
  },
  row3: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    margin: 5,
    width: Tela
  },
  icone: {
    width: 36,
    height: 36,
    alignSelf: 'center',
  },
  person: {
    width: 56,
    height: 58,
    alignSelf: 'center',
  },
  textBold: {
    fontSize: 15,
    fontFamily: 'Rubik_700bold'
  },
  text:{ 
    textAlign: 'center',
    fontSize:15,
    alignItems:'center',
}
});