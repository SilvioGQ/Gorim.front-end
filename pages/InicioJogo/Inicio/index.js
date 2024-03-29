import React, { useState } from 'react';
import { Text, View, StyleSheet, Image, TouchableOpacity } from 'react-native';
import Constants from "expo-constants";
import COLORS from '../../../constants/colors';
import Button from '../../../components/Button';
import AppIntroSlider from 'react-native-app-intro-slider';
import { slides } from "./slides";
import Apresentacao from '../../../components/Apresentacao';
export default function Frame1({ navigation }) {
  const [page, setPage] = useState(2)
  return (
    <>
    {page === 1 && (
        <>
        <AppIntroSlider activeDotStyle={{backgroundColor:COLORS.successButton}} skipLabel={' '} doneLabel={' '} nextLabel={' '} prevLabel={' '} renderItem={({item, key})=> <Apresentacao item={item} setPage={setPage} />} data={slides}/>
        </>
      )}
      {page === 2 && (
        <View style={styles.container}>
      <View style={styles.row}>
        <Image
          style={styles.logo}
          source={require('../../../assets/icons/tractor.png')}
        />
        <Text style={styles.text}>Gorim</Text>
      </View>
      <Image
        style={styles.logo2}
        source={require('../../../assets/symbols/logo.png')}
      />
      <View style={{position:'absolute', bottom:105}}>
        <Button
          onClick={() => navigation.navigate('CriarPartida')}
          name='começar' />
        </View>
      <View style={{position:'absolute', bottom:40}}>
        <Button
          onClick={() => setPage(1)}
          name='Tutorial' 
          back='#fff'
          color={COLORS.successButton}/>
      </View>
      <Text style={styles.v}>v1.0.4</Text>
    </View>
      )}
    
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  buttons: {
    flex: 1,
    alignItems: 'center'
  },
  text: {
    fontSize: 60,
    color: COLORS.successButton,
  },
  row: {
    position: 'absolute',
    top: 80,
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
  v: {
    position: 'absolute',
    bottom: 15,
    right: 15,
    fontSize: 12,
    color: '#a8a8a8'
  }
});
