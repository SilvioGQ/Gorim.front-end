import React, { useState } from 'react';
import { Text, View, StyleSheet, Image, Dimensions, TouchableOpacity } from 'react-native';
import normalizeNumber from '../../helpers/normalizeNumber';

const Tela = Dimensions.get('screen').width;
export default function HistoricoPlayers({ player }) {

  const [open, setOpen] = useState(false);
  const rotateZ = open ? "180deg" : "0deg";

  return (
    <View>
      <View style={styles.backgreen}>
        <View style={styles.whiteRow}>
          <Text style={[styles.subtitle]}>{player.name}</Text>
          <TouchableOpacity onPress={() => { setOpen(!open) }}>
            <Image style={{ width: 35, height: 35, marginRight: 5, marginTop: 5, transform: [{ rotateZ }] }} source={require('../../assets/dropdown.png')} />
          </TouchableOpacity>
        </View>
        <View style={{ display: open ? 'flex' : 'none', flexDirection: 'column' }}>
          <Text style={[styles.texto]}>Poluição: {normalizeNumber(player.pollution)}</Text>
          <Text style={[styles.texto]}>Produtividade: ${player.production < 0 ? '0' : normalizeNumber(player.production)}</Text>
          <Text style={[styles.texto]}>Imposto pago: ${normalizeNumber(player.logs.find((item) => item.type == 'tax').value)}</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  subtitle: {
    fontSize: 18,
    marginLeft: 10,
    marginTop: 10
  },
  backgreen: {
    width: '80%',
    borderRadius: 17,
    backgroundColor: '#C8EEDE',
    paddingVertical: 10,
    marginVertical: 10
  },
  whiteRow: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  texto: {
    marginLeft: 5,
    paddingHorizontal: 5,
    fontFamily: 'Rubik_300Light'
  }
});
