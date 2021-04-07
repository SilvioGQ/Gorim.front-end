import React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';
import COLORS from '../../styles/Colors';

const translateName = {
  "soy": 'Soja',
  "rice": 'Arroz',
  "greenery": 'Hortiça',
  "fertilizerBasic": 'Fertilizante Normal',
  "fertilizerMedium": 'Fertilizante Premium',
  "fertilizerStandard": 'Fertilizante Super Premium',
  "pesticideBasic": 'Agrotóxico Normal',
  "pesticideMedium": 'Agrotóxico Premium',
  "pesticideStandard": 'Agrotóxico Super Premium',
  "package 1": 'Pacote 1',
  "package 2": 'Pacote 2',
  "package 3": 'Pacote 3'
};

const images = {
  'soy': require('../../assets/seeds/soy.png'),
  'rice': require('../../assets/seeds/rice.png'),
  'greenery': require('../../assets/seeds/greenery.png'),
  'pesticideBasic': require('../../assets/pesticides/pesticideBasic.png'),
  'pesticideMedium': require('../../assets/pesticides/pesticideMedium.png'),
  'pesticideStandard': require('../../assets/pesticides/pesticideStandard.png'),
  'fertilizerBasic': require('../../assets/fertilizers/fertilizerBasic.png'),
  'fertilizerMedium': require('../../assets/fertilizers/fertilizerMedium.png'),
  'fertilizerStandard': require('../../assets/fertilizers/fertilizerStandard.png'),
  "package 1": require('../../assets/agricultorIcones/pacote.png'),
  "package 2": require('../../assets/agricultorIcones/pacote.png'),
  "package 3": require('../../assets/agricultorIcones/pacote.png')
};

export default function Produtos({ item }) {
  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <Image style={styles.logo} source={images[item.name]} />
        <Text style={styles.textos}>{translateName[item.name]}</Text>
      </View>
      <View style={{justifyContent:'space-between', width:'85%', flexDirection:'row'}}>
        <View style={styles.row}>
        <Text style={styles.textinhos}>Preços:</Text>
          <Text style={styles.numeros}>{item.cheap}$</Text>
          <Text style={styles.numeros}>{item.medium}$</Text>
          <Text style={styles.numeros}>{item.expensive}$</Text>
        </View>
          <View style={styles.poluicao}>
            <Text style={styles.poluicao}>{item.pollution}</Text>
          </View>
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 15,
    backgroundColor: COLORS.textWhite,
    width: '90%',
    height: 115,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.32,
    shadowRadius: 5.46,
    elevation: 2,
    marginHorizontal:20
  },
  row:{
    flexDirection:'row',
    marginVertical:10
  },
  textos: {
    fontFamily: 'Rubik_700Bold',
    fontSize: 16,
    alignSelf: 'center',
  },
  textinhos: {
    fontFamily: 'Rubik_700Bold',
    fontSize: 18,
    marginLeft: 15
  },
  logo: {
    width: 35,
    height: 36,
    marginRight:15
  },
  numeros: {
    fontFamily: 'Rubik_300Light',
    fontSize: 18,
    marginVertical: 1,
    marginLeft:10
  },
  poluicao:{
    fontSize:36,
    fontFamily:'Rubik_400Regular',
    color:'#FF0000'
  }
});