import React from 'react';
import { Text, View, StyleSheet, Image, Dimensions, ScrollView } from 'react-native';
import Button from '../../../Components/Button';
import Quadrados from '../../../Components/Quadrado';
import Rodada from '../../../Components/Rodada';
const Tela = Dimensions.get('screen').width;
export default function Selo({ navigation, route }) {
  return (
      <View>
    <Rodada name={'Selo'} arrow={true} onClick={() => navigation.navigate('MenuJogador')} />
      <ScrollView>
        <View style={styles.container}>
          <View style={styles.row}>
            <Image
              style={styles.image}
              source={require('../../../assets/icons/stamp.png')}
            />
            <Text style={styles.title}>Concessão de{'\n'}selo verde</Text>
          </View>
      <Text style={styles.texto}> Destinatário:</Text>
      <Button
        onClick={() => navigation.navigate('Fiscal')}
        name='CONCEDER' />
    </View>
        </ScrollView>
    </View>

  );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        width: Tela,
        marginBottom: 65
      },
      title: {
        fontSize: 20,
        fontFamily: 'Rubik_300Light',
        marginTop: 10
      },
      row: {
        flexDirection: 'row',
        marginVertical: 10
      },
      image: {
        width: 62,
        height: 60,
      },
      texto: {
        fontFamily: 'Rubik_400Regular',
        fontSize: 20,
        textAlign: 'left',
        alignSelf: 'flex-start',
        marginVertical: 15,
        marginLeft: 20
      },
});