import React, { useState } from 'react';
import { Text, View, StyleSheet, Image, Dimensions } from 'react-native';
import Button from '../../../Components/Button';

import Moeda from '../../../assets/moedas/Moeda.png';
import Agua from '../../../assets/simbolos/agua.png';
import Esgoto from '../../../assets/simbolos/esgoto.png';
import Lixo from '../../../assets/simbolos/lixo.png';

const Tela = Dimensions.get('screen').width;
export default function Prevençao({ navigation }) {
  const [isSelected, setSelection] = useState(false);
  const [isSelected2, setSelection2] = useState(false);
  const [isSelected3, setSelection3] = useState(false);
  return (
    <View style={styles.container}>
      <View style={styles.row3}>
        <Image
          style={styles.logo}
          source={Moeda}
        />
        <Text> 000 </Text>
      </View>
      <View style={styles.espaco}>
        <Image
          style={{ width: 62, height: 62 }}
          source={Agua}
        />
        <Text style={styles.header}>Medidas de {"\n"}Prevenção</Text>
      </View>
      <Text style={styles.header}>Medidas à aplicar na cidade:</Text>
      <View style={styles.row}>
        <View style={styles.colunm}>
          <Image
            style={styles.icone}
            source={Agua}
          />
          <Text style={styles.textinhos}>Tratamento de água</Text>
          <CheckBox
            style={styles.checkBox}
            value={isSelected}
            onValueChange={setSelection}
          />
        </View>
        <View style={styles.colunm}>
          <Image
            style={styles.icone}
            source={Esgoto}
          />
          <Text style={styles.textinhos}>Tratamento de esgoto</Text>
          <CheckBox
            style={styles.checkBox}
            value={isSelected2}
            onValueChange={setSelection2}
          />
        </View>
        <View style={styles.colunm}>
          <Image
            style={styles.icone}
            source={Lixo}
          />
          <Text style={styles.textinhos}>Tratamento de lixo</Text>
          <CheckBox
            style={styles.checkBox}
            value={isSelected3}
            onValueChange={setSelection3}
          />
        </View>
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
    backgroundColor: '#EBFFFD',
    padding: 6,
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
    margin: 12,
    backgroundColor: '#FFFFFF',
    width: 91,
    height: 154,
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
    marginTop: 15
  },
  textinhos: {
    fontFamily: 'Rubik_300Light',
    fontSize: 12,
    marginVertical: 10,
    alignSelf: 'center',
    textAlign: 'center'
  },
  logo: {
    width: 20,
    height: 23
  },
  icone: {
    width: 40,
    height: 40,
    marginBottom: 10,
    marginTop: 20
  },
  checkBox: {
    width: 26,
    height: 26,
    marginBottom: 10
  }
});