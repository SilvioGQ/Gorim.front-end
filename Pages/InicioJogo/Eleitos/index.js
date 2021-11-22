import React, { useEffect, useContext, Fragment, useState } from 'react';
import { Text, View, StyleSheet, Image, ScrollView, Dimensions, TouchableOpacity } from 'react-native';
import Button from '../../../Components/Button';
import COLORS from '../../../constants/colors';
import Rodada from '../../../Components/Rodada';
import Voto from '../../../assets/symbols/vote.png';

const Tela = Dimensions.get('screen').width
export default function Eleitos({ navigation }) {
  return (
    <View style={styles.container}>
      <Rodada name={'Resultados das eleições'} />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.self}>
          <Image
            style={styles.logo}
            source={Voto}
          />
          <Text style={styles.title}>Eleições em {"\n"} {/*player.city*/} </Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.resultados}>Resultados:</Text>
           <TouchableOpacity onPress={() => navigation.navigate('Detalhes')} style={styles.historico}>
              <Text style={styles.botao}>DETALHES</Text>
            </TouchableOpacity>
        </View>
        <View style={styles.numeros}>
          <View style={styles.bloquinho}>
            <Text style={styles.texto}>Prefeito</Text>
            <Image source={require('../../../assets/avatars/Icon4.png')} style={styles.icone} />
            <Text style={styles.resultado}>Alan</Text>
            <Text style={styles.resultado}>4 votos</Text>

          </View>
          <View style={styles.bloquinho}>
            <Text style={styles.texto}>Vereador</Text>
            <Image source={require('../../../assets/avatars/Icon2.png')} style={styles.icone} />
            <Text style={styles.resultado}>Alan</Text>
            <Text style={styles.resultado}>4 votos</Text>
          </View>
          <View style={styles.bloquinho}>
            <Text style={styles.texto}>Fiscal</Text>
            <Image source={require('../../../assets/avatars/Icon3.png')} style={styles.icone} />
            <Text style={styles.resultado}>Alan</Text>
            <Text style={styles.resultado}>4 votos</Text>
          </View>
        </View>
        <Button
          onClick={() => navigation.navigate('frame7')}
          name='Continuar'
        />
      </ScrollView>
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: COLORS.bgColorPrimary,
    alignItems: 'center',
    padding: 5,
    width: Tela
  },
  icone: {
    height: 50,
    width: 50,
    alignSelf: 'center',
    marginTop: 20,
    marginBottom: 10,

  },
  self: {
    flexDirection: 'row',
    alignSelf: 'center',
    justifyContent: 'center',
    marginVertical: 20
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
    width: '90%',
    marginBottom: 20,
    marginTop: 20

  },
  title: {
    fontSize: 22,
    alignItems: 'flex-start',
    paddingLeft: 10
  },
  logo: {
    width: 60,
    height: 60
  },
  texto: {
    marginTop: 10,
    fontSize: 13,
    fontFamily: 'Rubik_700Bold',
    alignItems: 'center',
    justifyContent: 'center',
  },
  resultado: {
    fontSize: 13,
  },
  bloquinho: {
    backgroundColor: '#C8EEDE',
    width: 85,
    height: 150,
    alignItems: 'center',
    textAlign: 'center',
    borderRadius: 20,

  },
  numeros: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: '3%',
    marginBottom: 40,
    width: "80%",
    alignSelf: 'center'
  },
  resultados: {
    fontSize: 20,
    color: '#58AB23',
    marginLeft: 35
  },
  historico: {
    width: '30%',
    height: 30,
    backgroundColor: '#66BF00',
    borderRadius: 20,
  
  },
  botao:{
    color: '#fff',
    alignSelf: 'center',
    marginTop: 8
  }
});