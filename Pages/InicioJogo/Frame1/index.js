import React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';
import COLORS from '../../../constants/colors';
import Button from '../../../Components/Button';
export default function Frame1({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <Image
          style={styles.logo}
          source={require('../../../assets/icons/tractor.png')}
        />
        <Text style={styles.text}>Gorim 1.0.1</Text>
      </View>
      <Image
        style={styles.logo2}
        source={require('../../../assets/symbols/logo.png')}
      />
      <View style={styles.container}>
        <Button
          onClick={() => navigation.navigate('CriarPartida')}
          name='começar' />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center'
  },
  text: {
    fontSize: 60,
    color: COLORS.successButton,
  },
  row: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center'
  },
  logo: {
    height: 40,
    width: 45,
  },
  logo2: {
    height: 280,
    width: 280
  },
});
