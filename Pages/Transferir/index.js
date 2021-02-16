import React, { useState } from 'react';
import { Text, View, StyleSheet, Image, TouchableOpacity, Dimensions } from 'react-native';
import Button from '../../Components/Button';
import Quadrados from '../../Components/Quadrado';
import Money from '../../Components/Dinheiro';

import setaDireita from '../../assets/agricultorIcones/setadireita.png';
import Money2 from '../../assets/agricultorIcones/money2.png';
import setaEsquerda from '../../assets/agricultorIcones/setaesquerda.png';

const Tela = Dimensions.get('screen').width;
export default function Transferindo({ navigation }) {
  const [count, setCount] = useState(0);
  const [selected, setSelected] = useState(true);

  const handleOnPress = () => setSelected(true);
  const increaseCount = () => setCount(count + 5);
  const decreaseCount = () => setCount(count > 0 ? count - 5 : count);

  return (
    <View style={styles.container}>
      <Money />
      <View style={styles.espaco}>
        <Image
          style={{ width: 63, height: 61 }}
          source={Money2}
        />
        <Text style={styles.header}>Fazer {'\n'} transferência</Text>
      </View>
      <Text style={{ fontSize: 18, marginTop: 20, fontFamily: 'Rubik_300Light' }}>Destinatário:</Text>
      <Quadrados onPress={handleOnPress} />
      <Text style={{ fontSize: 18, marginTop: 25, fontFamily: 'Rubik_300Light' }}>Valor:</Text>
      <View style={{ flex: 1, marginTop: 35 }}>
        <View style={styles.setas}>
          <TouchableOpacity onPress={decreaseCount}>
            <Image
              style={styles.icone2}
              source={setaEsquerda}
            />
          </TouchableOpacity>
          <View style={styles.bgbranco}>
            <Text style={styles.bgbrancotext}>{count}</Text>
          </View>
          <TouchableOpacity onPress={increaseCount}>
            <Image
              style={styles.icone2}
              source={setaDireita}
            />
          </TouchableOpacity>
        </View>
      </View>
      <Button
        onClick={() => navigation.navigate('FazerTransferencia', { valor: count })}
        name='CONTINUAR' disable={!selected || count === 0 ? true : false} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EBFFFD',
    padding: 6,
    width: Tela,
    paddingTop: 25
  },
  setas: {
    flexDirection: 'row',
    alignSelf: 'center',
    justifyContent: 'center',
    marginEnd: 5
  },
  espaco: {
    flexDirection: 'row',
    alignSelf: 'center',
    justifyContent: 'center',
    margin: 15,
    width: Tela
  },
  header: {
    fontFamily: 'Rubik_300Light',

    fontSize: 20,
  },
  icone: {
    width: 32,
    height: 35,
  },
  icone2: {
    width: 46,
    height: 48
  },
  bgbranco: {
    backgroundColor: '#fff',
    borderWidth: 1,
    borderRadius: 20,
    height: 51,
    width: 180
  },
  bgbrancotext: {
    alignSelf: 'center',
    textAlign: 'center',
    marginTop: 10,
    fontFamily: 'Rubik_400Regular',
    fontSize: 25
  }
});