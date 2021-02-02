import * as React from 'react';
import { Text, View, StyleSheet, Image, TouchableOpacity, Dimensions, Table} from 'react-native';
const Tela = Dimensions.get('screen').width
// import Api from '../Api'
export default function Inicio({ navigation }) {
  const [value, onChangeText] = React.useState('Nome');
  return (
    <Text>ola</Text>
    // <View style={styles.container}>
    //   <Text style={styles.texto}>CODIGO DA SALA</Text>
    //   <View style={{borderWidth: 1, width: 50}}/>
    //   <Text style={styles.texto2}>13KJ21</Text>
    //   <Table  
    //   headerHeight={45}
    //   rowHeight={70}>
        
    //   </Table>
    // </View>
    
      );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#EBFFFD',
    alignItems: 'center',
    padding: '1%',
    paddingTop: 45,
    width:Tela
  },
  texto:{
    fontSize:28,
    fontFamily: 'Rubik_300Light',
    textAlign: 'center',
    alignItems: 'center',
    marginTop: 5
  },
  texto2:{
    fontSize:32,
    fontFamily: 'Rubik_300Light',
    textAlign: 'center',
    alignItems: 'center',
  },
});