import React from 'react';
import { Text, View, StyleSheet, Image, Dimensions, ScrollView } from 'react-native';

import FertilizanteComum from '../../assets/agricultorIcones/fertilizanteComum.png';
import FertilizantePremium from '../../assets/agricultorIcones/fertilizantePremium.png';
import FertilizanteSuperPremium from '../../assets/agricultorIcones/fertilizanteSuperPremium.png';
import AgrotoxicoComum from '../../assets/agricultorIcones/agrotoxicoComum.png';
import AgrotoxicoPremium from '../../assets/agricultorIcones/agrotoxicoSuperPremium.png';
import AgrotoxicoSuperPremium from '../../assets/agricultorIcones/rice.png';
import Hortalicas from '../../assets/agricultorIcones/hortaliças.png';
import Arroz from '../../assets/agricultorIcones/arroz.png';
import Rice from '../../assets/agricultorIcones/rice.png';

const Tela = Dimensions.get('screen').width;
export default function Produtos() {
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.container}>
        <View style={styles.colunm}>
          <View style={styles.row3}>
            <View>
              <Image
                style={styles.logo}
                source={FertilizanteComum}
              />
              <Text style={styles.textos}>Fertilizante comum</Text>
            </View>
            <View>
              <Text style={styles.textinhos}>Preços:</Text>
              <View style={{flexDirection:'row'}} >
              <Text style={styles.textinhos}>25$</Text>
              <Text style={styles.textinhos}>30$</Text>
              <Text style={styles.textinhos}>35$</Text>
              
              </View>
            </View>
            <View>
              <Text style={styles.textinhos}>Poluição</Text>
              <Text style={styles.textinhos}>9</Text>
            </View>
          </View>
        </View>
        <View style={styles.colunm}>
          <View style={styles.row3}>
            <View>
              <Image
                style={styles.logo}
                source={FertilizantePremium}
              />
              <Text style={styles.textos}>Fertilizante Premium</Text>
            </View>
            <View>
              <Text style={styles.textinhos}>Preços:</Text>
              <View style={{flexDirection:'row'}} >
              <Text style={styles.textinhos}>55$</Text>
              <Text style={styles.textinhos}>60$</Text>
              <Text style={styles.textinhos}>65$</Text>
            </View>
            </View>
            <View>
              <Text style={styles.textinhos}>Poluição</Text>
              <Text style={styles.textinhos}>6</Text>
            </View>
          </View>
        </View>
        <View style={styles.colunm}>
          <View style={styles.row3}>
            <View>
              <Image
                style={styles.logo}
                source={FertilizanteSuperPremium}
              />
              <Text style={styles.textos}>Fertilizante SP</Text>
            </View>
            <View>
              <Text style={styles.textinhos}>Preços:</Text>
              <View style={{flexDirection:'row'}} >
              <Text style={styles.textinhos}>85$</Text>
              <Text style={styles.textinhos}>90$</Text>
              <Text style={styles.textinhos}>95$</Text>
            </View>
            </View>
            <View>
              <Text style={styles.textinhos}>Poluição</Text>
              <Text style={styles.textinhos}>3</Text>
            </View>
          </View>
        </View>
        <View style={styles.colunm}>
          <View style={styles.row3}>
            <View>
              <Image
                style={styles.logo}
                source={AgrotoxicoComum}
              />
              <Text style={styles.textos}>Agrotóxico comum</Text>
            </View>
            <View>
              <Text style={styles.textinhos}>Preços:</Text>
              <View style={{flexDirection:'row'}} >
              <Text style={styles.textinhos}>5$</Text>
              <Text style={styles.textinhos}>10$</Text>
              <Text style={styles.textinhos}>15$</Text>
            </View>
            </View>
            <View>
              <Text style={styles.textinhos}>Poluição</Text>
              <Text style={styles.textinhos}>3</Text>
            </View>
          </View>
        </View>
        <View style={styles.colunm}>
          <View style={styles.row3}>
            <View>
              <Image
                style={styles.logo}
                source={AgrotoxicoPremium}
              />
              <Text style={styles.textos}>Agrotóxico Premium</Text>
            </View>
            <View>
              <Text style={styles.textinhos}>Preços:</Text>
              <View style={{flexDirection:'row'}} >
              <Text style={styles.textinhos}>15$</Text>
              <Text style={styles.textinhos}>20$</Text>
              <Text style={styles.textinhos}>25$</Text>
            </View>
            </View>
            <View>
              <Text style={styles.textinhos}>Poluição</Text>
              <Text style={styles.textinhos}>2</Text>
            </View>
          </View>
        </View>
        <View style={styles.colunm}>
          <View style={styles.row3}>
            <View>
              <Image
                style={styles.logo}
                source={AgrotoxicoSuperPremium}
              />
              <Text style={styles.textos}>Agrotóxico SP</Text>
            </View>
            <View>
              <Text style={styles.textinhos}>Preços:</Text>
              <View style={{flexDirection:'row'}} >
              <Text style={styles.textinhos}>25$</Text>
              <Text style={styles.textinhos}>30$</Text>
              <Text style={styles.textinhos}>35$</Text>
            </View>
            </View>
            <View>
              <Text style={styles.textinhos}>Poluição</Text>
              <Text style={styles.textinhos}>1</Text>
            </View>
          </View>
        </View>
        <View style={styles.colunm}>
          <View style={styles.row3}>
            <View>
              <Image
                style={styles.logo}
                source={Hortalicas}
              />
              <Text style={styles.textos}>Hortaliças</Text>
            </View>
            <View>
              <Text style={styles.textinhos}>Preços:</Text>
              <View style={{flexDirection:'row'}} >
              <Text style={styles.textinhos}>5$</Text>
              <Text style={styles.textinhos}>10$</Text>
              <Text style={styles.textinhos}>15$</Text>
            </View>
            </View>
            <View>
              <Text style={styles.textinhos}>Poluição</Text>
              <Text style={styles.textinhos}>1</Text>
            </View>
          </View>
        </View>
        <View style={styles.colunm}>
          <View style={styles.row3}>
            <View>
              <Image
                style={styles.logo}
                source={Arroz}
              />
              <Text style={styles.textos}>Arroz</Text>
            </View>
            <View>
              <Text style={styles.textinhos}>Preços:</Text>
              <View style={{flexDirection:'row'}} >
              <Text style={styles.textinhos}>15$</Text>
              <Text style={styles.textinhos}>20$</Text>
              <Text style={styles.textinhos}>25$</Text>
            </View>
            </View>
            <View>
              <Text style={styles.textinhos}>Poluição</Text>
              <Text style={styles.textinhos}>2</Text>
            </View>
          </View>
        </View>
<View style={styles.colunm}>
  <View style={styles.row3}>
    <View>
      <Image
        style={styles.logo}
        source={Rice}
      />
      <Text style={styles.textos}>Soja</Text>
    </View>
    <View>
      <Text style={styles.textinhos}>Preços:</Text>
      <View style={{flexDirection:'row'}} >
      <Text style={styles.textinhos}>25$</Text>
      <Text style={styles.textinhos}>30$</Text>
      <Text style={styles.textinhos}>35$</Text>
    </View>
    </View>
    <View>
      <Text style={styles.textinhos}>Poluição</Text>
      <Text style={styles.textinhos}>3</Text>
    </View>
  </View>
</View>
      </View>
    </ScrollView>
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
    marginLeft: '1%',
    width: Tela
  },
  colunm: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: '6%',
    backgroundColor: '#FFFFFF',
    width: Tela-25,
    height: 95,
    borderRadius: 20,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.32,
    shadowRadius: 5.46,
    elevation: 7
  },
  textos: {
    fontFamily: 'Rubik_700Bold',
    fontSize: 13,
    alignSelf: 'center',
    marginTop: 7
  },
  textinhos: {
    fontFamily: 'Rubik_300Light',
    alignItems: 'center',
    textAlign: 'center',
    margin: '2%',
    fontSize: 18,
  },
  logo: {
    width: 35,
    height: 36
  },

});