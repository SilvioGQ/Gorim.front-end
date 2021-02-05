import React, { useState } from 'react';
import { Text, View, StyleSheet, Image, TouchableOpacity, CheckBox, Dimensions } from 'react-native';
import Cenarios from '../../../Components/CenarioBotao';
import Money from '../../../Components/Dinheiro';

import Selo from '../../../assets/moedas/Selo.png';
import Agricultor2 from '../../../assets/perfils/agricultor/Agricultor2.png';
import MenoSelo from '../../../assets/selos/menoSelo.png';
import Multa from '../../../assets/selos/multa.png';
import Money2 from '../../../assets/agricultorIcones/money2.png';

const Tela = Dimensions.get('screen').width;
export default function Fiscal({ navigation }) {
  const [value, onChangeText] = React.useState('Adicione uma informação');
  const [isSelected3, setSelection3] = useState(false);
  return (
    <View style={styles.container}>
      <View style={styles.row3}>
        <Text style={styles.header}> Fiscal 1 {'\n'} em Atlantis</Text>
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <Image
            style={styles.logo}
            source={Selo}
          />
          <Text style={{ fontSize: 21, fontFamily: 'Rubik_400Regular' }}> 123 </Text>
        </View>
        <View>
          <Money />
        </View>
        <Image
          style={styles.person}
          source={Agricultor2}
        />
      </View>
      <View style={styles.row}>
        <TouchableOpacity onPress={() => navigation.navigate('Selo', { title: 'Concessão' })}>
          <View style={styles.colunm}>
            <Image
              style={styles.icone}
              source={Selo}
            />
            <Text style={styles.textinhos}> Conceder selo verde </Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Selo', { title: 'Retirada' })}>
          <View style={styles.colunm}>
            <Image
              style={styles.icone}
              source={MenoSelo}
            />
            <Text style={styles.textinhos}> Retirar selo verde</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Multa')}>
          <View style={styles.colunm}>
            <Image
              style={styles.icone}
              source={Multa}
            />
            <Text style={styles.textinhos}> Aplicar multa </Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Transferindo')}>
          <View style={styles.colunm}>
            <Image
              style={styles.icone}
              source={Money2}
            />
            <Text style={styles.textinhos}> Fazer {'\n'} tranferência </Text>
          </View>
        </TouchableOpacity>
      </View>
      <Cenarios onClick={() => {
        navigation.navigate('Cenario');
      }} />
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
    width: Tela
  },
  row: {
    flexDirection: 'row',
    alignSelf: 'center',
    justifyContent: 'flex-start',
    marginTop: '8%',
    width: Tela,
    flexWrap: 'wrap',
    paddingLeft: '4%'
  },
  row3: {
    flexDirection: 'row',
    alignSelf: 'flex-start',
    justifyContent: 'space-around',
    margin: '3%',
    width: Tela
  },
  colunm: {
    paddingVertical: 10,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 10,
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
    fontFamily: 'Rubik_400Regular',
    fontSize: 20,
  },
  textos: {
    fontFamily: 'Rubik_300Light',
    fontSize: 20,
    alignSelf: 'center'
  },
  textinhos: {
    fontFamily: 'Rubik_300Light',

    fontSize: 14,
  },
  logo: {
    width: 20,
    height: 23
  },
  person: {
    width: 46,
    height: 50,
    marginRight: '5%'
  },
  icone: {
    width: 40,
    height: 40,
  },
  map: {
    width: 50,
    height: 50,
    marginRight: '8%'
  },
  vermelho: {
    backgroundColor: '#FF7F7E'
  },
  candidato: {
    fontFamily: 'Rubik_300Light',
    fontSize: 18
  }
});