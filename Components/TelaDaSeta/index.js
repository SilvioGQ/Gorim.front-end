import React from 'react';
import { View, Text, Image, StyleSheet, Dimensions } from 'react-native';

import Money3 from '../../assets/moedas/money3.png';
import Pacote from '../../assets/agricultorIcones/pacote.png';
import Pulverizador from '../../assets/agricultorIcones/pulverizador.png';

const Tela = Dimensions.get('screen').width;
export default function Pacotes() {
  return (
    <View style={styles.container}>
      <Text style={styles.bold}>Clique em cada produto para saber mais sobre a produtividade gerada por ele: </Text>
      <View style={styles.row}>
        <Image
          style={styles.image}
          source={Pacote}
        />
        <Text style={[styles.texto, { fontSize: 12 }]}>Pacote 1 {'\n'} Semeadora</Text>
        <Image
          style={styles.money}
          source={Money3}
        />
        <Text style={[styles.texto, { fontSize: 20 }]}>$30</Text>
      </View>
      <View style={styles.row}>
        <Image
          style={styles.image}
          source={Pacote}
        />
        <Text style={[styles.texto, { fontSize: 10 }]}>Pacote 2 {'\n'} Semeadora {'\n'} colhetadeira</Text>
        <Image
          style={styles.money}
          source={Money3}
        />
        <Text style={[styles.texto, { fontSize: 20 }]}>$60</Text>
      </View>
      <View style={styles.row}>
        <Image
          style={styles.image}
          source={Pacote}
        />
        <Text style={[styles.texto, { fontSize: 9 }]}> Pacote 3 {'\n'} Semeadora {'\n'} colhetadeira {'\n'} Drone</Text>
        <Image
          style={styles.money}
          source={Money3}
        />
        <Text style={[styles.texto, { fontSize: 20 }]}>$90</Text>
      </View>
      <View style={styles.row}>
        <Image
          style={styles.image}
          source={Pulverizador}
        />
        <Text style={[styles.texto, { fontSize: 14 }]}>Pulverizador</Text>
        <Image
          style={styles.money}
          source={Money3}
        />
        <Text style={[styles.texto, { fontSize: 20 }]}>$400</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-around',
    backgroundColor: '#EBFFFD',
    alignItems: 'center',
    width: Tela
  },
  row: {
    flexDirection: 'row',
    borderRadius: 20,
    height: 70,
    alignItems: 'center',
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.32,
    shadowRadius: 4.46,
    elevation: 5,
    width: '80%'
  },
  texto: {
    fontFamily: 'Rubik_300Light',
    fontSize: 20,
    alignItems: 'center',
    margin: 10
  },
  bold: {
    fontFamily: 'Rubik_700bold',
    fontSize: 12,
    marginHorizontal: '10%'
  },
  money: {
    width: 40,
    height: 40,
    margin: 10
  },
  image: {
    width: 40,
    height: 42,
    margin: 10
  }
});