import * as React from 'react';
import { Text, View, StyleSheet, Image, ScrollView, Dimensions } from 'react-native';
import { TextInput } from 'react-native-paper';
import Button from '../../../Components/Button';
import COLORS from '../../../resources/colors';

import agricultorFundo from '../../../assets/perfils/Agricultor.png';
import bag from '../../../assets/simbolos/bag.png';
import mapsAndLocation from '../../../assets/simbolos/maps-and-location.png';
import name from '../../../assets/simbolos/name.png';
import dislike from '../../../assets/simbolos/dislike.png';
import letter from '../../../assets/simbolos/letter.png';

const Tela = Dimensions.get('screen').width
export default function Frame4({ navigation }) {
  const [value, onChangeText] = React.useState('Fale sobre você');

  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.branco}>
          <Text style={styles.subheader}>Sobre você</Text>
          <Image
            style={styles.logo2}
            source={agricultorFundo}
          />
        </View>
        <View style={styles.row}>
          <Image
            style={styles.simbolo}
            source={bag}
          />
          <View style={{ paddingHorizontal: '15%', paddingRight: '5%' }}>
            <Text style={styles.superior}>Profissão</Text>
            <Text style={styles.inferior}>Profissão</Text>
          </View>
        </View>
        <View style={styles.row}>
          <Image
            style={styles.simbolo}
            source={mapsAndLocation}
          />
          <View style={{ paddingHorizontal: '15%', paddingRight: '5%' }}>
            <Text style={styles.superior}>Localização</Text>
            <Text style={styles.inferior}>Localização</Text>
          </View>
        </View>
        <View style={styles.row}>
          <Image
            style={styles.simbolo}
            source={name}
          />
          <View style={{ paddingHorizontal: '15%', paddingRight: '5%' }}>
            <Text style={styles.superior}>Nome</Text>
            <Text style={styles.inferior}>Nome</Text>
          </View>
        </View>
        <View style={styles.row}>
          <Image
            style={styles.simbolo}
            source={dislike}
          />
          <View style={{ paddingHorizontal: '15%', paddingRight: '5%' }}>
            <Text style={styles.superior}>Fraquezas</Text>
            <Text style={styles.inferior}>Fraquezas</Text>
          </View>
        </View>
        <View style={styles.row}>
          <Image 
            style={styles.simbolo}
            source={letter}
          />
          <View style={{ paddingHorizontal: '15%', paddingRight: '5%' }}>
            <Text style={styles.superior}>Mais sobre você</Text>
            <TextInput
              style={styles.input}
              onChangeText={text => onChangeText(text)}
              value={value.sobre}
              backgroundColor='#EBFFFD'
              placeholder='Fale sobre você'
            />
          </View>
        </View>
        <Button
          onClick={() => navigation.navigate('frame5')}
          name='CONTINUAR'
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
    paddingTop: 45
  },
  branco: {
    backgroundColor: COLORS.bgColorPrimary,
    width: Tela,
    alignItems: 'center',
    paddingTop: 25
  },
  input: {
    height: 30,
    fontSize: 15,
    color: '#A1A1A1',
    width: '100%',
    textDecorationColor: COLORS.warningButton
  },
  row: {
    flexDirection: 'row',
    marginVertical: '6%',
    paddingLeft: '15%'
  },
  subheader: {
    fontFamily: 'Rubik_400Regular',
    fontSize: 24,
    alignItems: 'center',
    margin: '5%'
  },
  logo2: {
    width: 80,
    height: 95,
  },
  simbolo: {
    width: 45,
    height: 45,
  },
  superior: {
    fontSize: 15,
  },
  inferior: {
    fontSize: 20,
    fontWeight: 'bold',
  },

});