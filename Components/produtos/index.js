import React, {useState} from 'react';
import { Text, View, StyleSheet, Image, Dimensions, ScrollView } from 'react-native';
const Tela = Dimensions.get('screen').width
export default function Produtos() {
  return (
    <ScrollView  showsVerticalScrollIndicator= {false}>
    <View style={styles.container}>
    <View style= {styles.colunm}>
    <View style={styles.row3}>
        <View>
        <Image style= {styles.icone} source={require('../../assets/agricultorIcones/fertilizanteComum.png')}/>
        <Text style= {styles.textos}>Fertilizante comum</Text>
        </View>
        <View>
            <Text style= {styles.textinhos}>Preço</Text>
            <Text style= {styles.textinhos}>80$</Text>
        </View>
        <View>
            <Text style= {styles.textinhos}>Poluição</Text>
            <Text style= {styles.textinhos}>9</Text>
        </View>
    </View>
    </View>
    <View style= {styles.colunm}>
    <View style={styles.row3}>
        <View>
        <Image style= {styles.icone} source={require('../../assets/agricultorIcones/fertilizantePremium.png')}/>
        <Text style= {styles.textos}>Fertilizante Premium</Text>
        </View>
        <View>
            <Text style= {styles.textinhos}>Preço</Text>
            <Text style= {styles.textinhos}>85$</Text>
        </View>
        <View>
            <Text style= {styles.textinhos}>Poluição</Text>
            <Text style= {styles.textinhos}>6</Text>
        </View>
    </View>
    </View>
    <View style= {styles.colunm}>
    <View style={styles.row3}>
        <View>
        <Image style= {styles.icone} source={require('../../assets/agricultorIcones/fertilizanteSuperPremium.png')}/>
        <Text style= {styles.textos}>Fertilizante SP</Text>
        </View>
        <View>
            <Text style= {styles.textinhos}>Preço</Text>
            <Text style= {styles.textinhos}>90$</Text>
        </View>
        <View>
            <Text style= {styles.textinhos}>Poluição</Text>
            <Text style= {styles.textinhos}>3</Text>
        </View>
    </View>
    </View>
    <View style= {styles.colunm}>
    <View style={styles.row3}>
        <View>
        <Image style= {styles.icone} source={require('../../assets/agricultorIcones/agrotoxicoComum.png')}/>
        <Text style= {styles.textos}>Agrotóxico comum</Text>
        </View>
        <View>
            <Text style= {styles.textinhos}>Preço</Text>
            <Text style= {styles.textinhos}>80$</Text>
        </View>
        <View>
            <Text style= {styles.textinhos}>Poluição</Text>
            <Text style= {styles.textinhos}>0</Text>
        </View>
    </View>
    </View>
    <View style= {styles.colunm}>
    <View style={styles.row3}>
        <View>
        <Image style= {styles.icone} source={require('../../assets/agricultorIcones/agrotoxicoPremium.png')}/>
        <Text style= {styles.textos}>Agrotóxico Premium</Text>
        </View>
        <View>
            <Text style= {styles.textinhos}>Preço</Text>
            <Text style= {styles.textinhos}>85$</Text>
        </View>
        <View>
            <Text style= {styles.textinhos}>Poluição</Text>
            <Text style= {styles.textinhos}>0</Text>
        </View>
    </View>
    </View>
    <View style= {styles.colunm}>
    <View style={styles.row3}>
        <View>
        <Image style= {styles.icone} source={require('../../assets/agricultorIcones/agrotoxicoSuperPremium.png')}/>
        <Text style= {styles.textos}>Agrotóxico SP</Text>
        </View>
        <View>
            <Text style= {styles.textinhos}>Preço</Text>
            <Text style= {styles.textinhos}>90$</Text>
        </View>
        <View>
            <Text style= {styles.textinhos}>Poluição</Text>
            <Text style= {styles.textinhos}>0</Text>
        </View>
    </View>
    </View>
    <View style= {styles.colunm}>
    <View style={styles.row3}>
        <View>
        <Image style= {styles.icone} source={require('../../assets/agricultorIcones/rice.png')}/>
        <Text style= {styles.textos}>Soja</Text>
        </View>
        <View>
            <Text style= {styles.textinhos}>Preço</Text>
            <Text style= {styles.textinhos}>80$</Text>
        </View>
        <View>
            <Text style= {styles.textinhos}>Poluição</Text>
            <Text style= {styles.textinhos}>0</Text>
        </View>
    </View>
    </View>
    <View style= {styles.colunm}>
    <View style={styles.row3}>
        <View>
        <Image style= {styles.icone} source={require('../../assets/agricultorIcones/arroz.png')}/>
        <Text style= {styles.textos}>Arroz</Text>
        </View>
        <View>
            <Text style= {styles.textinhos}>Preço</Text>
            <Text style= {styles.textinhos}>85$</Text>
        </View>
        <View>
            <Text style= {styles.textinhos}>Poluição</Text>
            <Text style= {styles.textinhos}>0</Text>
        </View>
    </View>
    </View>
    <View style= {styles.colunm}>
    <View style={styles.row3}>
        <View>
        <Image style= {styles.icone} source={require('../../assets/agricultorIcones/hortaliças.png')}/>
        <Text style= {styles.textos}>Hortaliças</Text>
        </View>
        <View>
            <Text style= {styles.textinhos}>Preço</Text>
            <Text style= {styles.textinhos}>90$</Text>
        </View>
        <View>
            <Text style= {styles.textinhos}>Poluição</Text>
            <Text style= {styles.textinhos}>0</Text>
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
  row3:{
    flexDirection: 'row',
    alignSelf: 'flex-start',
    justifyContent: 'space-around',
    margin: '1%',
    width: Tela
  },
  colunm:{
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: '6%',
    backgroundColor: '#FFFFFF',
    width: Tela,
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
  header: {
    fontFamily: 'Rubik_400Regular',
    fontSize: 24,
    paddingTop: 10
  },
  textos: {
    fontFamily: 'Rubik_700Bold',
    fontSize: 16,
    alignSelf: 'center',
    marginTop: 7
  },
    textinhos: {
    fontFamily: 'Rubik_300Light',
    alignItems: 'center',
    alignSelf: 'center',
    margin: '4%',
    fontSize: 20,
  },
  logo:{
    width: 20,
    height: 23
  },
  person:{
    width: 46,
    height: 50,
    marginRight: '5%'
  },
  icone:{
    width: 42,
    height: 42,
  },
    map:{
    width: 50,
    height: 50,
    marginRight: '8%'
  },
  vermelho: {
    backgroundColor: '#FF7F7E'
  },
  candidato: {
    fontFamily: 'Rubik_300Light',
    fontSize: 18
  }
});