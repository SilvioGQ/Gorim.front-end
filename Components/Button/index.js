import * as React from 'react';
import { Text, View, StyleSheet, TouchableOpacity, Dimensions } from 'react-native';
const Tela = Dimensions.get('screen').width
export default function Comecar(props){
  return (
    <View style={styles.container}>
    <TouchableOpacity
        style={styles.button}
        onPress= {props.onClick}
        >
        <Text style= {styles.texto}>{props.name}</Text>
    </TouchableOpacity>
    
    </View>
  );
}
  
  const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#EBFFFD',
    alignItems:'center',
    width: Tela
  },
  button:{
    height: 45,
    margin: '2%',
    alignItems:'center',
    backgroundColor:"#66BF00",
    color:"#FFFFFF",
    borderRadius: 25 ,
    width: '80%',
    shadowColor: "#000",
    shadowOffset: {
    	width: 0,
    	height: 4,
    },
    shadowOpacity: 0.32,
    shadowRadius: 4.46,
    
    elevation: 6,
  },
  texto:{
    color:'#FFFFFF',
    fontSize:15,
    fontFamily: 'Rubik_400Regular',
    textAlign: 'center',
    alignItems: 'center',
    marginTop: 15
  }
  });
