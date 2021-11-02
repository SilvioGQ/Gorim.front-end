import React from 'react';
import { Text, View, StyleSheet, Image, Dimensions } from 'react-native';
import CheckBox from '../../../Components/Checkbox';
import Button from '../../../Components/Button';
import Rodada from '../../../Components/Rodada';
import COLORS from '../../../constants/colors';
const Tela = Dimensions.get('screen').width
export default function Frame5({ navigation }) {
  const data = [
    { title: 'Me candidato a prefeito!', value: 1 },
    { title: 'Me candidato a vereador!', value: 2 },
    { title: 'Me candidato a fiscal!', value: 3 },
  ];
  const handleValueChange = (socialMediaName, checkboxId) => {
    // do what ever you want with this two
  };
  return (
    <View style={styles.container}>
      <Rodada name={'Cadidatura'} />
      <View style={styles.row}>
        <Image
          style={styles.logo}
          source={require('../../../assets/symbols/vote.png')}
        />
        <Text style={styles.title}>Eleições em {"\n"} {/*player.city*/} </Text>
      </View>
      <View style={styles.texto}>
        <Text style={styles.paragrafo}>Antes de começar, a cidade de {/*player.city*/} precisa de representantes e reguladores que serão responsáveis por gerir os recursos públicos em busca de alinhar lucro e meio ambiente. Você pode se candidatar à estes cargos e, logo, haverá uma votação para eleger os líderes da cidade! </Text>
      </View>
        <CheckBox />
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
    alignItems: 'center',
    width: Tela
  },
  row: {
    flexDirection: 'row',
    marginVertical:30
  },
  logo: {
    height: 60,
    width: 60
  },
  title: {
    fontFamily: 'Rubik_300Light',
    fontSize: 23,
    marginTop: 25,
    alignItems: 'center'
  },
  texto: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginEnd: '4%',
    marginStart: '4%',
    marginTop: '2%'
  },
  paragrafo: {
    fontFamily: 'Rubik_300Light',
    fontSize: 18,
    lineHeight: 30,
    textAlign:'justify',
    marginHorizontal:10,
    marginBottom:15
  }
});