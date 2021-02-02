import React from 'react';
import { Text, View, StyleSheet, Image, Dimensions } from 'react-native';
import Comecar from '../../../../Components/Button';
import COLORS from '../../../../styles/Colors';

import Interrogacao from '../../../../assets/interrogacao.png';
import Pacote from '../../../../assets/agricultorIcones/pacote.png';
import Parcela from '../../../../assets/agricultorIcones/Parcela.png';

const Tela = Dimensions.get('screen').width;
export default function Aparcela({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.espaco}>
        <Image
          style={{ width: 66, height: 66, margin: '7%' }}
          source={Parcela}
        />
        <Text style={styles.header}>Aplicação {'\n'}em parcela</Text>
      </View>
      <Text style={{ fontSize: 18, marginTop: 15, fontFamily: 'Rubik_300Light', alignSelf: 'flex-start', marginLeft: '10%' }}> Nesta parcela:</Text>
      <View style={styles.coluna}>
        <View style={styles.row}>
          <Image
            style={styles.image}
            source={Interrogacao}
          />
          <View>
            <Text style={styles.superior}>Sementes</Text>
            <Text style={styles.inferior}>-</Text>
          </View>
        </View><View style={styles.row}>
          <Image
            style={styles.image}
            source={Interrogacao}
          />
          <View>
            <Text style={styles.superior}>Fertilizantes</Text>
            <Text style={styles.inferior}>-</Text>
          </View>
        </View>
        <View style={styles.row}>
          <Image
            style={[styles.image, { width: 45, height: 48 }]}
            source={Pacote}
          />
          <View>
            <Text style={styles.superior}>Máquina</Text>
            <Text style={styles.inferior}>Pacote 1</Text>
          </View>
        </View>
        <View style={styles.row}>
          <Image
            style={styles.image}
            source={Interrogacao}
          />
          <View>
            <Text style={styles.superior}>Pulverizador</Text>
            <Text style={styles.inferior}>-</Text>
          </View>
        </View>
        <View style={styles.row}>
          <Image
            style={styles.image}
            source={Interrogacao}
          />
          <View>
            <Text style={styles.superior}>Agrotóxicos</Text>
            <Text style={styles.inferior}>-</Text>
          </View>
        </View>

      </View>
      <Comecar
        onClick={() => navigation.navigate('Agricultor1')}
        name='ADICIONAR'
      />
    </View>

  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.bgColorPrimary,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 6,
    width: Tela
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
    marginRight: 78,
    marginVertical: '5%',
    width: Tela,
    flexWrap: 'wrap'
  },
  espaco: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    width: Tela
  },
  header: {
    fontFamily: 'Rubik_300Light',
    fontSize: 23,
  },
  coluna: {
    alignSelf: 'center',
    margin: '6%'
  },
  inferior: {
    fontFamily: 'Rubik_700bold',
    fontSize: 20,
  },
  superior: {
    fontFamily: 'Rubik_300Light',
    fontSize: 15,
  },
  image: {
    width: 25,
    height: 45,
    marginRight: '15%'
  }
});