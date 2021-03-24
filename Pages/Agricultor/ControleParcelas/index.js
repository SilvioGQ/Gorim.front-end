import React, { useState } from 'react';
import { Text, View, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import COLORS from '../../../styles/Colors';

import Parcela from '../../../assets/agricultorIcones/Parcela.png';

export default function ControleParcelas({ navigation, route }) {
  const [player, setPlayer] = useState(route.params.player);

  return (
    <View style={styles.container}>
      <Text style={{
        fontFamily: 'Rubik_300Light',
        fontSize: 24,
        lineHeight: 120,
        alignSelf: 'center',
      }}>Parcelas de terra</Text>
      <FlatList
        numColumns={2}
        data={player.parcelLand}
        keyExtractor={(item, index) => index}
        renderItem={({ item, index })  =>
          <TouchableOpacity onPress={() => navigation.navigate('Parcela', { item })} style={{marginVertical:35, marginLeft:30, marginRight:20}}>
            <Image style={styles.logo} source={Parcela} />
            <Text style={styles.text}>P{index+1}</Text>
          </TouchableOpacity>
        }
      />
      {/* <View style={styles.row}>
        <TouchableOpacity onPress={() => navigation.navigate('Aparcela')}>
          <Image
            style={styles.logo}
            source={Parcela}
          />
          <Text style={{ position: "absolute", left: 42, top: 40, color: '#fff', fontSize: 20 }}>P1</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Aparcela')}>
          <Image
            style={styles.logo}
            source={Parcela}
          />
          <Text style={{ position: "absolute", left: 42, top: 40, color: '#fff', fontSize: 20 }}>P2</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.row}>
        <TouchableOpacity onPress={() => navigation.navigate('Aparcela')}>
          <Image
            style={styles.logo}
            source={Parcela}
          />
          <Text style={{ position: "absolute", left: 42, top: 40, color: '#fff', fontSize: 20 }}>P3</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Aparcela')}>
          <Image
            style={styles.logo}
            source={Parcela}
          />
          <Text style={{ position: "absolute", left: 42, top: 40, color: '#fff', fontSize: 20 }}>P4</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.row}>
        <TouchableOpacity onPress={() => navigation.navigate('Aparcela')}>
          <Image
            style={styles.logo}
            source={Parcela}
          />
          <Text style={{ position: "absolute", left: 42, top: 40, color: '#fff', fontSize: 20 }}>P5</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Aparcela')}>
          <Image
            style={styles.logo}
            source={Parcela}
          />
          <Text style={{ position: "absolute", left: 42, top: 40, color: '#fff', fontSize: 20 }}>P6</Text>
        </TouchableOpacity>
      </View> */}
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
    width: '100%'
  },
  logo: {
    height: 105,
    width: 105,
    alignItems: 'center',

  },
  text: {
    position: "absolute",
    left: 42,
    top: 40,
    color: '#fff',
    fontSize: 20
  }
});
