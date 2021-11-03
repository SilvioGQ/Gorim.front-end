import React, { useState } from 'react';
import { Text, View, StyleSheet, Image, Dimensions, TouchableOpacity } from 'react-native';

const Tela = Dimensions.get('screen').width;
export default function HistoricoPlayers({ player }) {

  const [open, setOpen] = useState(false);
  const rotateZ = open ? "180deg" : "0deg";

  return (
    <View>
      <View style={styles.backgreen}>
        <View style={styles.whiteRow}>
          <Text style={[styles.subtitle, {
            marginLeft: 10,
            marginTop: 10
          }]}>{player.name}</Text>
          <TouchableOpacity onPress={() => { setOpen(!open) }}>
            <Image style={{ width: 35, height: 35, marginRight: 5, marginTop: 5, transform: [{ rotateZ }] }} source={require('../../assets/dropdown.png')} />
          </TouchableOpacity>
        </View>
        <View style={{ display: open ? 'flex' : 'none', flexDirection: 'column' }}>
          <Text style={{ marginLeft: 5, paddingHorizontal: 5, fontFamily: 'Rubik_300Light' }}>Poluição: {player.pollution.toFixed(1)}</Text>
          <Text style={{ marginLeft: 5, paddingHorizontal: 5, fontFamily: 'Rubik_300Light' }}>Produtividade: ${player.production < 0 ? '0' : player.production}</Text>
          <Text style={{ marginLeft: 5, paddingHorizontal: 5, fontFamily: 'Rubik_300Light' }}>Imposto pago: ${player.logs.find((item) => item.type == 'tax').value}</Text>
          {/* ${round.tax.value} {round.tax.percentual ? '= (' + round.tax.percentual + '%)' : ''} */}

        </View>
      </View>


    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    width: Tela,
  },
  row: {
    flexDirection: 'row',
    marginVertical: 35
  },
  image: {
    width: 80,
    height: 80
  },
  name: {
    fontFamily: 'Rubik_700Bold',
    fontSize: 18
  },
  subtitle: {
    
    fontSize: 18
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
  header: {
    fontFamily: 'Rubik_400Regular',
    fontSize: 24,
    color: '#3F5510',
    marginTop: 25
  },
  rodada: {
    fontFamily: 'Rubik_400Regular',
    fontSize: 18,
    color: '#3F5510'
  }
});