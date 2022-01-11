import React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';

import IMAGES from '../../constants/imagesProducts';
import COLORS from '../../constants/colors';

export default function Produtos({ item }) {
  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <Image style={styles.logo} source={IMAGES[item.name]} />
        <View>
          <Text style={styles.textos}>{item.name}</Text>
          {item.name == 'Pacote 1' && <Text style={styles.pacotes}>Semeadora</Text>}
          {item.name == 'Pacote 2' && <Text style={styles.pacotes}>Semeadora e Colheitadera</Text>}
          {item.name == 'Pacote 3' && <Text style={styles.pacotes}>Semeadora, Colheitadera e Drone</Text>}
          {item.type == 'Agrotóxico' && <Text style={styles.sementes}>mais 2x a produtividade com arroz {'\n'}mais 3x a produtividade com soja</Text>}
        </View>
      </View>

      <View style={{
        position: 'absolute',

        left: 37, flexDirection: 'row'
      }}>
        <View style={[styles.row, { marginVertical: 3 }]}>
          <Text style={styles.textinhos}>Preço:</Text>
          {/* <Text style={styles.numeros}>{item.cheap}$</Text> */}
          <Text style={styles.numeros}>${item.medium}</Text>
          {/* <Text style={styles.numeros}>{item.expensive}$</Text> */}
        </View>
      </View>
      <View style={{
        flexDirection: 'row', 
        position: 'absolute',
        right: 30,
        bottom: 20,
      }}>
        <View style={{ padding: 5, borderRadius: 10, borderColor: '#58AB23', borderWidth: 2.5, marginRight:5 }}>
          <Text style={{  fontWeight: 'bold', color: '#58AB23', fontSize: 18 }}>{item.productive}{item.type === 'Semente' ? '+' : 'x'}</Text>
        </View>
        {item.pollution ? <View style={{ padding: 5, borderRadius: 10, borderColor: COLORS.warningButton, borderWidth: 2.5 }}>
          <Text style={{  fontWeight: 'bold', color: COLORS.warningButton, fontSize: 18 }}>{item.pollution}{item.type === 'Semente' ? '+' : 'x'}</Text>
        </View> : <View></View>}
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 15,
    backgroundColor: COLORS.textWhite,
    width: '90%',
    height: 115,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.32,
    shadowRadius: 5.46,
    elevation: 2,
    marginHorizontal: 20
  },
  row: {
    flexDirection: 'row',
    marginVertical: 10,
    position: 'absolute',
    top: 10,
    left: 20
  },
  textos: {
    fontFamily: 'Rubik_700Bold',
    fontSize: 16,
  },
  pacotes: {
    
    fontSize: 12,
  },
  sementes: {
    
    fontSize: 10,
  },
  textinhos: {
    fontFamily: 'Rubik_700Bold',
    fontSize: 18,
    marginLeft: 15
  },
  logo: {
    width: 35,
    height: 35,
    marginRight: 15
  },
  numeros: {
    
    fontSize: 18,
    marginVertical: 1,
    marginLeft: 10
  }
});