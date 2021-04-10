import React from 'react';
import { Text, View, StyleSheet, Image, Dimensions } from 'react-native';
import Candidato from '../../../Components/Checkbox';
import Button from '../../../Components/Button';
import COLORS from '../../../resources/colors';

import Voto from '../../../assets/Logo/vote.png';

const Tela = Dimensions.get('screen').width
export default function Frame5({ navigation }) {

  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <Image
          style={styles.logo}
          source={Voto}
        />
        <Text style={styles.title}>Eleições em {"\n"} localização </Text>
      </View>
      <View style={styles.texto}>
        <Text style={styles.paragrafo}> Antes de começar, a cidade de Atlantis precisa de representantes e reguladores que serão responsáveis por gerir os recursos públicos em busca de alinhar lucro e meio ambiente. Você pode se candidatar à estes cargos e, logo, haverá uma votação para eleger os líderes da cidade! </Text>
      </View>
      <Candidato />
      <Button
        onClick={() => navigation.navigate('frame6')}
        name='CONTINUAR'
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    backgroundColor: COLORS.bgColorPrimary,
    alignItems: 'center',
    paddingTop: 20,
    width: Tela
  },
  row: {
    flexDirection: 'row',
  },
  logo: {
    height: 60,
    width: 60
  },
  title: {
    fontFamily: 'Rubik_300Light',
    fontSize: 23,
    lineHeight: 32,
    alignItems: 'center'
  },
  texto: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: COLORS.bgColorPrimary,
    alignItems: 'center',
    marginEnd: '4%',
    marginStart: '4%',
    marginTop: '2%'
  },
  paragrafo: {
    fontFamily: 'Rubik_300Light',
    fontSize: 18,
    lineHeight: 29,
    alignSelf: 'center',
    marginTop: '6%'
  }
});