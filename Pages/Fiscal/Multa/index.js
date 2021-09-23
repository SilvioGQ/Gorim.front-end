import React, { useState } from 'react';
import { Text, View, StyleSheet, Image, ScrollView, TouchableOpacity, Dimensions, TouchableWithoutFeedback } from 'react-native';
import Button from '../../../Components/Button';
import Rodada from '../../../Components/Rodada';

const Tela = Dimensions.get('screen').width;
export default function Multa({ navigation }) {
  const [activated, setActivated] = useState(false)
  const [activated2, setActivated2] = useState(false)

  return (
    <View style={styles.container}>
      <Rodada name={'Multa'} arrow={true} onClick={() => navigation.navigate('MenuPolitico')} />
      <View style={styles.row}>
        <Image
          style={styles.image}
          source={require('../../../assets/icons/penalty.png')}
        />
        {modalText !== '' && (
          <Modal onClick={() => setModalText('')} text={modalText} />
        )}
        <Text style={styles.title}>Aplicação{'\n'}de multa</Text>
        <TouchableOpacity onPress={information} activeOpacity={0.7}>
          <Image source={require('../../../assets/agricultorIcones/information.png')} style={{ width: 20, height: 20, alignSelf: 'center', marginLeft: 10, marginTop: 20 }} />
        </TouchableOpacity>
      </View>
      
      <Button
        onClick={() => navigation.navigate('Fiscal')}
        name='APLICAR' />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: Tela
  },
  row: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    marginTop: 20,
    marginLeft: 8,
    width: Tela,
    flexWrap: 'wrap'
  },
  espaco: {
    flexDirection: 'row',
    alignSelf: 'center',
    justifyContent: 'center',
    margin: 15,
    width: Tela
  },
  row3: {
    flexDirection: 'row',
    alignSelf: 'center',
    justifyContent: 'flex-end',
    margin: 10,
    width: Tela
  },
  row2: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    marginTop: 10,
    marginLeft: 6
  },
  colunm: {
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
    fontFamily: 'Rubik_300Light',

    fontSize: 20,
  },
  textinhos: {
    fontFamily: 'Rubik_300Light',
    fontSize: 14,
  },
  logo: {
    width: 20,
    height: 23
  },
  icone: {
    width: 32,
    height: 35,
  },
  font: {
    fontSize: 18,
    marginTop: 15,
    fontFamily: 'Rubik_300Light'
  },
  linha: {
    margin: '8%',
    marginLeft: '5%',
    borderWidth: 1,
    width: '85%',
    height: 1
  },
  nivel: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginRight: '5%',
    marginTop: -10
  },
  traco: {
    width: 1,
    height: 12,
    zIndex: 1,
    borderWidth: 1,
  }
});