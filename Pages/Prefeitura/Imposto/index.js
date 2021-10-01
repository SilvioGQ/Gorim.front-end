import React, { useState, useContext } from 'react';
import { Text, View, StyleSheet, Image, TouchableOpacity, Dimensions, ScrollView } from 'react-native';
import Button from '../../../Components/Button';
import { GameContext } from '../../../contexts/GameContext';
import Imposto2 from '../../../assets/icons/tax.png';
import Rodada from '../../../Components/Rodada';
import Coin from '../../../Components/Coin';


const Tela = Dimensions.get('screen').width;

export default function Imposto({navigation}) {

  const { player } = useContext(GameContext);
  
  return (
    <ScrollView>
    <View style={styles.container}>
      <Rodada name={'Alterar impostos'} arrow={true} onClick={() => navigation.navigate('MenuPolitico')} />
      <Coin coin={player.coin} />
      <View style={styles.espaco}>
        <Image
          style={{ width: 62, height: 48 }}
          source={Imposto2}
        />
        <Text style={styles.header}>Aplicação {"\n"}de multa</Text>
      </View>
      <Text style={styles.font}> Para produtividade nula:</Text>
      <View style={styles.view}>
        <TouchableOpacity style={styles.botao}>
          <Text style={styles.texto}>$5</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.botao}>
          <Text style={styles.texto}>$10</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.botao}>
          <Text style={styles.texto}>$15</Text>
        </TouchableOpacity>
      </View>

      <Text style={styles.font}> Para produtividade entre 1 e 200:</Text>
      <View style={styles.view}>
        <TouchableOpacity style={styles.botao}>
          <Text style={styles.texto}>%5</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.botao}>
          <Text style={styles.texto}>%10</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.botao}>
          <Text style={styles.texto}>%15</Text>
        </TouchableOpacity>
      </View>
     
      <Text style={styles.font}> Para produtividade acima de 200:</Text>
      <View style={styles.view}>
        <TouchableOpacity style={styles.botao}>
          <Text style={styles.texto}>%25</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.botao}>
          <Text style={styles.texto}>%30</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.botao}>
          <Text style={styles.texto}>%35</Text>
        </TouchableOpacity>
      </View>
     
      <Button
        onClick={() => navigation.navigate()}
        name='APLICAR' />
        <TouchableOpacity style={styles.button} activeOpacity={0.7}>
          <Text style={styles.textButton}>RETOMAR VALOR INICIAL</Text>
        </TouchableOpacity>
    </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: Tela,
  },
  espaco: {
    flexDirection: 'row',
    alignSelf: 'center',
    justifyContent: 'center',
    margin: 15,
    width: Tela
  },
  header: {
    fontFamily: 'Rubik_400Regular',
    fontSize: 22,
  },
  font: {
    marginLeft: 25,
    fontSize: 20,
    marginTop: 15,
    fontFamily: 'Rubik_300Light'
  },
  view: {
    flexDirection: 'row',
    width: '90%',
    marginHorizontal: 20,
    justifyContent: 'space-around',
    marginVertical: 10,
  },
  botao: {
    backgroundColor: '#fff',
    borderRadius: 20,
    width: 96,
    height: 38,
    alignContent: 'center',
    alignItems: 'center',
    marginBottom: 40,
    marginTop: 17,
    borderWidth: 1,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.20,
    shadowRadius: 5.00,

    elevation: 6
  },
  texto: {
    marginVertical: 7,
    fontSize: 15,
  },
  textButton: {
    color: '#fff',
    fontSize: 15,
    fontFamily: 'Rubik_400Regular',
    textAlign: 'center',
    alignItems: 'center',
    marginTop: 15
  },
  button: {
    height: 47,
    margin: '2%',
    alignSelf: 'center',
    backgroundColor: '#BF0000',
    borderRadius: 25,
    width: '80%',
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.32,
    shadowRadius: 4.46,
    elevation: 2,
  }
});