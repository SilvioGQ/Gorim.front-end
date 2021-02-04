import React from 'react';
import { Text, View, StyleSheet, Image, TouchableOpacity, Dimensions, Animated } from 'react-native';
import Button from '../../../Components/Button';

import Imposto2 from '../../../assets/simbolos/imposto.png';
import Rectangle from '../../../assets/Rectangle.png';

const Tela = Dimensions.get('screen').width;
export default function Imposto() {
  return (
    <View style={styles.container}>
      <View style={styles.espaco}>
        <Image
          style={{ width: 62, height: 48 }}
          source={Imposto2}
        />
        <Text style={styles.header}>Aplicação {"\n"}de multa</Text>
      </View>
      <Text style={styles.font}> Para produtividade nula:</Text>
      <View style={styles.linha}>
        <View style={{ zIndex: 1, marginTop: -5, marginLeft: 4 }}>
          <View style={{ justifyContent: 'space-between', width: '85%', flexDirection: 'row', marginLeft: '6%' }}>
            <TouchableOpacity style={styles.traco} />
            <TouchableOpacity style={styles.traco} />
            <TouchableOpacity style={styles.traco} />
          </View>
          <Animated.Image
            style={{ width: 10, height: 19, marginTop: -15, marginLeft: '46%' }}
            source={Rectangle}
          />
        </View>
      </View>
      <View style={styles.nivel}>
        <Text styles={styles.texto}>Baixo</Text>
        <Text styles={styles.texto}>Medio</Text>
        <Text styles={styles.texto}>Alto</Text>
      </View>
      <Text style={styles.font}> Para produtividade entre 1 e 200:</Text>
      <View style={styles.linha}>
        <View style={{ zIndex: 1, marginTop: -5, marginLeft: 4 }}>
          <View style={{ justifyContent: 'space-between', width: '85%', flexDirection: 'row', marginLeft: '6%' }}>
            <TouchableOpacity style={styles.traco} />
            <TouchableOpacity style={styles.traco} />
            <TouchableOpacity style={styles.traco} />
          </View>
          <Animated.Image
            style={{ width: 10, height: 19, marginTop: -15, marginLeft: '46%' }}
            source={Rectangle}
          />
        </View>
      </View>
      <View style={styles.nivel}>
        <Text styles={styles.texto}>Baixo</Text>
        <Text styles={styles.texto}>Medio</Text>
        <Text styles={styles.texto}>Alto</Text>
      </View>
      <Text style={styles.font}> Para produtividade acima de 200:</Text>
      <View style={styles.linha}>
        <View style={{ zIndex: 1, marginTop: -5, marginLeft: 4 }}>
          <View style={{ justifyContent: 'space-between', width: '85%', flexDirection: 'row', marginLeft: '6%' }}>
            <TouchableOpacity style={styles.traco} />
            <TouchableOpacity style={styles.traco} />
            <TouchableOpacity style={styles.traco} />
          </View>
          <Animated.Image
            style={{ width: 10, height: 19, marginTop: -15, marginLeft: '46%' }}
            source={Rectangle}
          />
        </View>
      </View>
      <View style={styles.nivel}>
        <Text styles={styles.texto}>Baixo</Text>
        <Text styles={styles.texto}>Medio</Text>
        <Text styles={styles.texto}>Alto</Text>
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
    width: Tela,
    paddingTop: 35
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
  font: {
    fontSize: 20,
    marginTop: 15,
    fontFamily: 'Rubik_300Light'
  },
  linha: {
    margin: '16%',
    marginLeft: '5%',
    borderWidth: 1,
    width: '85%',
    height: 1
  },
  nivel: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginRight: '5%',
    marginTop: -12
  },
  traco: {
    width: 1,
    height: 12,
    zIndex: 1,
    borderWidth: 1,
  }
});