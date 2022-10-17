import React from 'react';
import { Text, View, StyleSheet, Image, TouchableOpacity } from 'react-native';
import Constants from "expo-constants";
import COLORS from '../../../constants/colors';
import Button from '../../../components/Button';
import AppIntroSlider from 'react-native-app-intro-slider';
import { slides } from "./slides";
export default function Frame1({ navigation }) {
  
  return (
    <>
    {page === 1 && (
        <>
        <AppIntroSlider skipLabel={' '} doneLabel={' '} nextLabel={' '} prevLabel={' '} renderItem={({item, key})=> <Apresentation item={item} />} data={slides}/>
        <TouchableOpacity onPress={()=>{setPage(2)}}><Text>Skip</Text></TouchableOpacity>
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
      <View style={styles.container}>
        <Button
          onClick={() => navigation.navigate('CriarPartida')}
          name='começar' />
      </View>
      <Text style={styles.v}>v{Constants.manifest.version}</Text>
    </View>
      )}
    
    </>
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
  v: {
    position: 'absolute',
    bottom: 15,
    right: 15,
    fontSize: 12,
    color: '#a8a8a8'
  }
});
