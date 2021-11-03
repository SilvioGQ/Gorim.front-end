import * as React from 'react';
import { Text, View, StyleSheet, Image, ScrollView, Dimensions } from 'react-native';
import Button from '../../../Components/Button';
import COLORS from '../../../constants/colors';
import Rodada from '../../../Components/Rodada';
import Voto from '../../../assets/symbols/vote.png';

const Tela = Dimensions.get('screen').width
export default function Votacao({ navigation }) {
  return (
    <View style={styles.container}>
      <Rodada name={'Eleitos'} />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.self}>
          <Image
            style={styles.logo}
            source={Voto}
          />
          <Text style={styles.title}>Eleições em {"\n"} {/*player.city*/} </Text>
        </View>
        <View style={{ marginLeft: 15 }}>
          <Text style={styles.resultado}> Resultados:</Text>
          <Text style={styles.texto}>Eleito para prefeito com X votos: </Text>
          <Image source={require('../../../assets/avatars/Icon1.png')} style={[styles.imagem]} />
          <Text style={styles.texto}>Eleito para vereador com X votos: </Text>
          <Image source={require('../../../assets/avatars/Icon1.png')} style={[styles.imagem]} />
          <Text style={styles.texto}>Eleito para fiscal com X votos: </Text>
          <Image source={require('../../../assets/avatars/Icon1.png')} style={[styles.imagem]} />
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
    alignItems: 'center'
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
  },
  resultado: {
    color: '#FFB800',
    fontSize: 23,
    marginVertical: 20
  },
  imagem: {
    height: 100, 
    width: 90, 
    alignSelf: 'center', 
    marginVertical: 30
  }
});