import * as React from 'react';
import { Text, View, StyleSheet, Image, TouchableOpacity } from 'react-native';
export default function Conf(props) {
  return (
    <View style={styles.container}>
    <Text style={styles.header}> Gorim </Text>
    <Text style={styles.loading}> Tem certeza de que deseja solicitar o selo {'\n'} verde ao fiscal? </Text>
    <TouchableOpacity style={styles.button}> 
    <Text style={styles.buttontext}> CONFIRMAR </Text> 
    </TouchableOpacity>
    <TouchableOpacity style={[styles.button, styles.button2, styles.buttontext]} onPress= {props.Conf}> 
    <Text style={styles.buttontext}> CANCELAR </Text>
    </TouchableOpacity>
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    padding: 10,
    width: 318,
    height: 217,
    borderRadius: 30,
    shadowColor: "#000",
    shadowOffset: {
    	width: 0,
    	height: 4,
    },
    shadowOpacity: 0.32,
    shadowRadius: 5.46,
    elevation: 9,
    marginLeft: 50
  },
  header: {
    fontFamily: 'Rubik_300Light',
    fontWeight: 'normal',
    fontSize: 20,
    lineHeight: 49,
    alignSelf: 'center'
  },
  loading:{
  fontFamily: 'Rubik_300Light',
  fontSize: 14,
  lineHeight: 20,
  alignSelf: 'center',
  
  },
  button:{
    alignItems: 'center',
    width: 274,
    height: 35,
    backgroundColor: '#66BF00',
    borderRadius: 12,
    margin: 10,
        shadowColor: "#000",
    shadowOffset: {
    	width: 0,
    	height: 3,
    },
    shadowOpacity: 0.32,
    shadowRadius: 4.16,
    elevation: 4,
  },
    button2:{
    backgroundColor: '#BF0000',
  },
  buttontext: {
    alignSelf: 'center',
    textAlign: 'center',
    fontSize: 15,
    fontFamily: 'Rubik_300Light',
    color: '#fff',
    marginTop: 7
  }
});