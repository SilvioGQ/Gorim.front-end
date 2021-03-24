import * as React from 'react';
import { Text, View, StyleSheet, Image, TouchableOpacity } from 'react-native';
import COLORS from '../../../styles/Colors';

import Parcela2 from '../../../assets/agricultorIcones/Parcela.png';

export default function Parcela({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={{
        fontFamily: 'Rubik_300Light',
        fontSize: 24,
        lineHeight: 120,
        alignSelf: 'center',
      }}>Parcelas de terra</Text>
      <View style={styles.row}>
        <TouchableOpacity onPress={() => navigation.navigate('Aparcela')}>
          <Image
            style={styles.logo}
            source={Parcela2}
          />
          <Text style={{ position: "absolute", left: 42, top: 40, color: '#fff', fontSize: 20 }}>P1</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Aparcela')}>
          <Image
            style={styles.logo}
            source={Parcela2}
          />
          <Text style={{ position: "absolute", left: 42, top: 40, color: '#fff', fontSize: 20 }}>P2</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.row}>
        <TouchableOpacity onPress={() => navigation.navigate('Aparcela')}>
          <Image
            style={styles.logo}
            source={Parcela2}
          />
          <Text style={{ position: "absolute", left: 42, top: 40, color: '#fff', fontSize: 20 }}>P3</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Aparcela')}>
          <Image
            style={styles.logo}
            source={Parcela2}
          />
          <Text style={{ position: "absolute", left: 42, top: 40, color: '#fff', fontSize: 20 }}>P4</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.row}>
        <TouchableOpacity onPress={() => navigation.navigate('Aparcela')}>
          <Image
            style={styles.logo}
            source={Parcela2}
          />
          <Text style={{ position: "absolute", left: 42, top: 40, color: '#fff', fontSize: 20 }}>P5</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Aparcela')}>
          <Image
            style={styles.logo}
            source={Parcela2}
          />
          <Text style={{ position: "absolute", left: 42, top: 40, color: '#fff', fontSize: 20 }}>P6</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.bgColorPrimary,
    alignItems: 'center'
  },
  row: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    width:'100%'
  },
  logo: {
    height: 105,
    width: 105,
    alignItems: 'center',
  }
});
