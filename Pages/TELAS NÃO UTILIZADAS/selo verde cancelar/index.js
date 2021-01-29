import * as React from 'react';
import { Text, View, StyleSheet, Image, TouchableOpacity } from 'react-native';
export default function Canc() {
  return (
    <View style={styles.flex}>
    <View style={styles.container}>
    <Text style={styles.header}> Gorim </Text>
    <Text style={styles.loading}> Tem certeza que deseja cancelar a solicitação de selo verde ao fiscal? </Text>
    </View> 
    <TouchableOpacity style={styles.button}> 
    <Text style={styles.buttontext}> CONFIRMAR </Text>
        
    </TouchableOpacity>
    <TouchableOpacity style={styles.button2}> 
    <Text style={styles.buttontext}> CANCELAR </Text>
    </TouchableOpacity>

    </View>
  );
}


const styles = StyleSheet.create({
  flex: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#FFFFFF',
  },
  container: {
    backgroundColor: '#EBFFFD',
    padding: 10,
    width: 318,
    height: 217,
    borderRadius: 30,
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
    alignSelf: 'center',
    width: 274,
    height: 25,
    backgroundColor: '#66BF00',
    padding: 2,
    borderRadius: 12,
    margin: 10,
        shadowColor: "#000",
    shadowOffset: {
    	width: 0,
    	height: 4,
    },
    shadowOpacity: 0.32,
    shadowRadius: 5.46,
    
    elevation: 9,
  },
    button2:{
    alignSelf: 'center',
    width: 274,
    height: 25,
    backgroundColor: '#BF0000',
    padding: 2,
    borderRadius: 12,
        shadowColor: "#000",
    shadowOffset: {
    	width: 0,
    	height: 4,
    },
    shadowOpacity: 0.32,
    shadowRadius: 5.46,
    
    elevation: 9,
  },
  buttontext: {
    alignSelf: 'center'
  }
});