import {React, useEffect} from 'react';
import { Text, View, StyleSheet, Image, Dimensions} from 'react-native';
const Tela = Dimensions.get('screen').width
export default function Frame8(navigation) {
  useEffect(() => {
    setTimeout(() => {
      ()=> navigation.reset({
        routes: [{ name: 'frame5'}]
      })
    }, 5000);
  }, []);
  return (
    <View style={styles.container}>
    <Text style={styles.header}> Gorim </Text>
    <View style={styles.container}>
    <Image style={styles.logo} source={require('../../../assets/Logo/Animação.png')}/>
    <Text style={styles.loading}> Inicía-se agora a 1ª {"\n"} parte da xª rodada. </Text>
    </View>
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#EBFFFD',
    alignItems: 'center',
    padding: 10,
    width: Tela
  },
  header: {
    fontFamily: 'Rubik_300Light',
    fontWeight: 'normal',
    fontSize: 41.1111,
    lineHeight: 49,
    alignItems: 'center'
  },
  logo:{
  width: 223,
  height: 252
  },
  loading:{
  fontFamily: 'Rubik_300Light',
  fontSize: 22,
  lineHeight: 32,
  alignItems: 'center',
  
  }
});