import React, { useState } from 'react';
import { Text, View, StyleSheet, Image, ScrollView, TouchableOpacity, CheckBox, Dimensions } from 'react-native';
const Tela = Dimensions.get('screen').width;
import Comecar from '../../../Components/Button';
export default function Fertilizantes({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.end}>
        <Image style={styles.logo} source={require('../../../assets/moedas/Selo.png')} />
        <Text style={{ fontSize: 21 }}> 123 </Text>
        <Image style={styles.logo} source={require('../../../assets/moedas/Moeda.png')} />
        <Text style={{ fontSize: 21 }}> 000 </Text>
      </View>
      <View style={styles.center}>
        <Image style={styles.person} source={require('../../../assets/agricultorIcones/Fertilizantes.png')} />
        <Text style={styles.header}> Compra de {'\n'} Fertilizantes</Text>
        <TouchableOpacity style={{ alignItems: 'center', margin: 15, marginTop: 15 }}>
          <Image style={{ width: 26, height: 22 }} source={require('../../../assets/back1.png')} />
        </TouchableOpacity>
      </View>
      <Text style={{ alignSelf: 'flex-start', fontSize: 20, fontFamily: 'Rubik_300Light', marginLeft: 25 }}> Responsável: </Text>
      <TouchableOpacity>
        <View style={styles.row2}>
          <Image style={styles.icone} source={require('../../../assets//perfils/empresariox1/person2.png')} />
          <Text style={styles.textos}> Empresário 1 </Text>
        </View>
      </TouchableOpacity>
      <Text style={{ alignSelf: 'flex-start', fontSize: 20, fontFamily: 'Rubik_300Light', marginLeft: 25 }}> Pacotes: </Text>
      <View style={styles.row}>
        <TouchableOpacity>
          <View style={styles.colunm}>
            <Image style={styles.icone} source={require('../../../assets/fertilizers/fertilizerBasic.png')} />
            <Text style={styles.textinhos}> Comprar {'\n'} fertilizante  {'\n'} comumn</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity>
          <View style={styles.colunm}>
            <Image style={styles.icone} source={require('../../../assets/agricultorIcones/fertilizantePremium.png')} />
            <Text style={styles.textinhos}> Comprar {'\n'} fertilizante  {'\n'} premium </Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity>
          <View style={styles.colunm}>
            <Image style={styles.icone} source={require('../../../assets/agricultorIcones/fertilizanteSuperPremium.png')} />
            <Text style={styles.textinhos}> Comprar{'\n'} fertilizante super {'\n'} premium</Text>
          </View>
        </TouchableOpacity>
      </View>
      <Text style={{ alignSelf: 'flex-start', fontSize: 20, fontFamily: 'Rubik_300Light', marginLeft: 25 }}> valor: </Text>
      <View style={styles.row}>
        <TouchableOpacity>
          <View style={styles.colunm}>
            <Image style={styles.icone} source={require('../../../assets/moedas/baixo.png')} />
            <Text style={styles.valor}> Baixo </Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity>
          <View style={styles.colunm}>
            <Image style={styles.icone} source={require('../../../assets/moedas/normal.png')} />
            <Text style={styles.valor}> Normal </Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity>
          <View style={styles.colunm}>
            <Image style={styles.logo} source={require('../../../assets/moedas/alto.png')} />
            <Text style={styles.valor}> Alto </Text>
          </View>
        </TouchableOpacity>
      </View>
      <Comecar
        onClick={() => {
          navigation.navigate('insumo', { texto: 'Compra de Fertilizante XXXXXX' });
        }}
        name='COMPRAR' />
    </View>

  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EBFFFD',
    alignItems: 'center',
    paddingTop: 35
  },
  row: {
    flexDirection: 'row',
    alignSelf: 'center',
    justifyContent: 'space-around',
    paddingVertical: 33,
  },
  center: {
    flexDirection: 'row',
    justifyContent: 'center',
    margin: 15,
  },
  end: {
    flexDirection: 'row',
    alignSelf: 'flex-end',
  },
  row2: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 25,
    paddingVertical: 8,
    backgroundColor: '#FFFFFF',
    width: 280,
    height: 50,
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
  colunm: {
    alignItems: 'center',
    justifyContent: 'center',
    margin: 7,
    backgroundColor: '#FFFFFF',
    width: 96,
    height: 84,
    borderRadius: 20,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.32,
    shadowRadius: 5.46,

    elevation: 9
  },
  header: {
    fontFamily: 'Rubik_300Light',
    fontSize: 20,
  },
  textos: {
    fontFamily: 'Rubik_300Light',
    fontSize: 20,
    alignSelf: 'center'
  },
  textinhos: {
    fontFamily: 'Rubik_300Light',
    fontSize: 10,
  },
  logo: {
    width: 20,
    height: 27
  },
  person: {
    width: 64,
    height: 64
  },
  icone: {
    width: 35,
    height: 35,
  },
  valor: {
    fontFamily: 'Rubik_300Light',
    fontSize: 12,
    margin: '7%'
  }
});