import React, { useContext } from 'react';
import { Text, View, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import { GameContext } from "../../../../contexts/GameContext";

import COLORS from '../../../../constants/colors';
import Rodada from '../../../../components/Rodada';
export default function ControleParcelas({ navigation }) {

  const { player } = useContext(GameContext);
  return (
    <View style={styles.container}>
      <Rodada arrow={true} onClick={() => navigation.navigate('MenuJogador')} />
      <Text style={styles.mainText}>Faça suas plantações!</Text>
      <FlatList
        numColumns={2}
        data={player.parcelLand}
        showsVerticalScrollIndicator={false}
        keyExtractor={item => item.id}
        renderItem={({ item }) =>
          <TouchableOpacity onPress={() => navigation.navigate('Parcela', { parcelLand: item })} style={styles.item}  >
            <Image style={styles.imageParcel} source={require('../../../../assets/agricultorIcones/Parcela.png')} />
            <View style={{ flexDirection: 'row', display: item.planted ? 'flex' : 'none' }}>
              <Image style={[styles.imagem, { left: 5 }]} source={require('../../../../assets/agricultorIcones/Planted.png')} />
              <Image style={[styles.imagem, { right: 7 }]} source={require('../../../../assets/agricultorIcones/Planted.png')} />
            </View>
            <View style={{ borderRadius: 17, width: 75, height: 23, backgroundColor: '#D4F15F', alignSelf: 'center', marginTop: 2 }}>
              <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
                <Text style={[styles.texto, { color: '#CF0101' }]}>{item.pollution}</Text>
                <Text style={[styles.texto, { color: '#6EBA16' }]}>{item.production}</Text>
              </View>
            </View>
          </TouchableOpacity>
        }
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center'
  },
  imageParcel: {
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

    fontSize: 20,
    lineHeight: 120,
    alignSelf: 'center',
  },
  imagem: {
    position: 'absolute',
    width: 46,
    height: 77,
    bottom: 5,
  },
  texto: {
    fontSize: 16,
    fontFamily: 'Rubik_400Regular',
    fontWeight: 'bold'
  }
});
