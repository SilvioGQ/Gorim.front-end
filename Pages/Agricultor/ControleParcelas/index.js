import React, { useState } from 'react';
import { Text, View, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import COLORS from '../../../styles/Colors';

import Parcela from '../../../assets/agricultorIcones/Parcela.png';

export default function ControleParcelas({ navigation, route }) {
  const [player, setPlayer] = useState(route.params.player);

  return (
    <View style={styles.container}>
      <Text style={styles.mainText}>Parcelas de terra</Text>
      <FlatList
        numColumns={2}
        data={player.parcelLand}
        keyExtractor={item => item.id}
        renderItem={({ item })  =>
          <TouchableOpacity onPress={() => navigation.navigate('Parcela', { item })} style={styles.item}>
            <Image style={styles.image} source={Parcela} />
            <Text style={styles.text}>P{item.id+1}</Text>
          </TouchableOpacity>
        }
      />
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
  image: {
    height: 105,
    width: 105,
    alignItems: 'center',

  },
  item: { 
    marginVertical: 35,
    marginLeft: 20,
    marginRight: 20
  },
  mainText: {
    fontFamily: 'Rubik_300Light',
    fontSize: 24,
    lineHeight: 120,
    alignSelf: 'center',
  },
  text: {
    position: "absolute",
    left: 42,
    top: 40,
    color: '#fff',
    fontSize: 20
  }
});
