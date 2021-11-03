import * as React from 'react';
import { Text, View, StyleSheet, Image, ScrollView, Dimensions } from 'react-native';
import Button from '../../../Components/Button';
import Quadrados from '../../../Components/Quadrado';
import COLORS from '../../../constants/colors';
import Rodada from '../../../Components/Rodada';
import Voto from '../../../assets/symbols/vote.png';
const Tela = Dimensions.get('screen').width
export default function Votacao({ navigation }) {
  return (
    <View style={styles.container}>
      <Rodada name={'Votação'} />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.self}>
          <Image
            style={styles.logo}
            source={Voto}
          />
          <Text style={styles.title}>Eleições em {"\n"} {/*player.city*/} </Text>
        </View>
        <View style={{ marginLeft: 20 }}>
          <Text style={styles.texto}> Vote em um candidato a prefeito:</Text>
          <Quadrados />  <Quadrados />
          <Text style={styles.texto}> Vote em um candidato a vereador:</Text>
          <Quadrados />
          <Text style={styles.texto}> Vote em um candidato a fiscal:</Text>
          <Quadrados />
        </View>
        <Button
          onClick={() => navigation.navigate('frame7')}
          name='VOTAR'
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
    width: Tela,
  },
  self: {
    flexDirection: 'row',
    alignSelf: 'center',
    justifyContent: 'center',
    marginVertical:20
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    flexWrap: 'wrap',
    paddingLeft: '12%'
  },
  title: {
    
    fontSize: 22,
    alignItems: 'center',
    marginVertical: 10
  },
  logo: {
    width: 60,
    height: 60
  },
  texto: {
    
    fontSize: 17,
    lineHeight: 18,
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 10,
  },
});