import React from 'react';
import { Text, View, StyleSheet, Image, Dimensions, ScrollView } from 'react-native';

import FertilizanteComum from '../../assets/fertilizers/fertilizerBasic.png';
import FertilizantePremium from '../../assets/fertilizers/fertilizerMedium.png';
import FertilizanteSuperPremium from '../../assets/fertilizers/fertilizerStandard.png';
import AgrotoxicoPremium from '../../assets/pesticides/pesticideMedium.png';
import AgrotoxicoComum from '../../assets/pesticides/pesticideBasic.png';
import AgrotoxicoSuperPremium from '../../assets/seeds/rice.png';
import Hortalicas from '../../assets/seeds/greenery.png';
import Arroz from '../../assets/seeds/soy.png';
import Rice from '../../assets/seeds/rice.png';
import COLORS from '../../styles/Colors'
const Tela = Dimensions.get('screen').width;
export default function Produtos({nomes,logo, Preco1,Preco2,Preco3,Poluicao}) {
  console.log(Preco2)
  return (
      <View style={styles.container}>
        <View style={styles.colunm}>
          <View style={styles.row3}>
            <View style={styles.centro}>
              <Image
                style={styles.logo}
                source={logo}
              />
              <Text style={styles.textos}>{nomes}</Text>
            </View>
            <View>
              <Text style={styles.textinhos}>Preços:</Text>
              <View>
                <Text style={styles.numeros}>{Preco1}</Text>
                <Text style={styles.numeros}>{Preco2}</Text>
                  <Text style={styles.numeros}>{Preco3}</Text>
              </View>
            </View>
            <View style={styles.poluicao}>
              <Text style={styles.textinhos}>Poluição</Text>
              <Text style={styles.numeros}>{Poluicao}</Text>
            </View>
          </View>
        </View>
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'flex-start',
    alignItems: 'center',
    width: Tela,
  },
  row3: {
    flexDirection: 'row',
    alignSelf: 'flex-start',
    width: Tela - 20,
    justifyContent: 'space-around',
    margin: 5,
    marginTop: 5
  },
  colunm: {
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 15,
    backgroundColor: COLORS.bgColorPrimary,
    width: Tela - 25,
    height: 115,
    borderRadius: 20,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.32,
    shadowRadius: 5.46,
    elevation: 2
  },
  textos: {
    fontFamily: 'Rubik_700Bold',
    fontSize: 12,
    alignSelf: 'center',
    textAlign: 'center',
    marginTop: 5
  },
  textinhos: {
    fontFamily: 'Rubik_700Bold',
    alignItems: 'center',
    textAlign: 'center',
    fontSize: 18,
  },
  logo: {
    width: 35,
    height: 36
  },
  numeros: {
    fontFamily: 'Rubik_300Light',
    fontSize: 16,
    alignItems: 'center',
    textAlign: 'center',
    marginVertical: 5
  },
  centro: {
    alignItems: 'center',
    justifyContent: 'center'
  },
});