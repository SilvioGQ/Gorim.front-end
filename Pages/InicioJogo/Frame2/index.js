import React from 'react';
import { Text, View, StyleSheet, Image, TouchableOpacity, Dimensions, TextInput } from 'react-native';
import COLORS from '../../../styles/Colors';

import Group28 from '../../../assets/Group28.png';
import Group29 from '../../../assets/Group29.png';
import rightArrow from '../../../assets/right-arrow.png';

const Tela = Dimensions.get('screen').width
export default function Frame2({ navigation }) {
  const [name, setName] = React.useState();

  return (
    <View style={styles.container}>
      <TextInput style={styles.input}
        onChangeText={name => setName(name)}
        placeholder="Digite seu nome"
        value={name}
      >
      </TextInput>
      <Text style={styles.header}>HOST</Text>
      <View style={styles.line} />
      <View style={styles.row}>
        <Image
          style={styles.logo2}
          source={Group28}
        />
        <TouchableOpacity
          style={styles.button2}
          onPress={() => navigation.navigate('frame3')}
        >
          <Text style={styles.text}>CRIAR JOGO</Text>
        </TouchableOpacity>
      </View>
      <Text style={[styles.header]}>ENTRAR</Text>
      <View style={styles.line} />
      <View style={styles.row}>
        <Image 
          style={styles.logo2}
          source={Group29}
        />
        <TextInput 
          style={[styles.button2, styles.text2]}
          placeholder='ESCREVER CÓDIGO'
        >
        </TextInput>
        <TouchableOpacity >
          <Image
            style={styles.arrow}
            source={rightArrow}
          />
        </TouchableOpacity>
      </View>
    </View>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'center',
    backgroundColor: COLORS.bgColorPrimary,
    alignItems: 'center',
    paddingTop: 60,
    width: Tela
  },
  input: {
    height: 45,
    fontSize: 24,
    borderWidth: 1,
    width: '80%',
    textAlign: 'center',
    borderRadius: 20
  },
  row: {
    flex: 1,
    flexDirection: 'row',
    // alignSelf: 'space-between',
    // alignItems: 'space-between',
    // justifyContent: 'space-between',
    // margin: '4%',
  },
  header: {
    fontFamily: 'Rubik_300Light',
    fontSize: 24,
    lineHeight: 40,
    // alignSelf: 'center',
    marginTop: 40
  },
  logo2: {
    width: 85,
    height: 80,
    margin: 12
  },
  simbolo: {
    width: 30,
    height: 30
  },
  button2: {
    height: 45,
    borderRadius: 20,
    // margin: '2%',
    alignItems: 'center',
    width: 175,
    borderWidth: 1,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.32,
    shadowRadius: 4.46,

    elevation: 6,
    marginTop: 30
  },
  text: {
    fontSize: 24,
    fontFamily: 'Rubik_300Light',
    textAlign: 'center',
    // alignItems: 'center',
    marginTop: 5
  },
  text2: {
    fontSize: 18,
    fontFamily: 'Rubik_300Light',
    textAlign: 'center',
    // alignItems: 'center',
  },
  arrow: {
    width: 25,
    height: 25,
    marginTop: 32,
    marginLeft: 10
  },
  line: { width: '80%', borderWidth: 1 }
});