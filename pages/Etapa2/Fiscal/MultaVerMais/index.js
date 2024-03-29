import React, { useState, useEffect, useContext } from 'react';
import { Text, View, StyleSheet, Image, ScrollView, TouchableOpacity, Dimensions } from 'react-native';
import Button from '../../../../components/Button';
import Rodada from '../../../../components/Rodada';
import ParcelaAgr from '../../../../components/parcelaAgr';
import LogsTransfer from '../../../../components/LogsTransfers';
const Tela = Dimensions.get('screen').width;
export default function Multa({ navigation, route }) {
  const { client } = route.params
  const [modalText, setModalText] = useState('');

  return (
    <View style={styles.container}>
      <Rodada arrow={true} onClick={() => navigation.navigate('Multa')} />
      {client.type == 'Agricultor' ?
        <View>
          <View style={styles.row}>
            <Image
              style={styles.image}
              source={require('../../../../assets/icons/penalty.png')}
            />
            {modalText !== '' && (
              <Modal onClick={() => setModalText('')} text={modalText} />
            )}
            <Text style={styles.header}>Detalhes de{'\n'}Parcelas</Text>
          </View>
          <ScrollView>
          {client.length !== 0 &&
            client.logs.filter(i => i.type === 'plantation').map((p) => {
              // if (parcel.planted === true && !parcel.pesticide) {
              return <ParcelaAgr item={p} key={p.id} vermais={false} display2='none' pedido={false} />
              // }
            })
          }
          </ScrollView>
        </View>
        :
        <View>
          <View style={styles.row}>
            <Image
              style={styles.image}
              source={require('../../../../assets/icons/penalty.png')}
            />
            {modalText !== '' && (
              <Modal onClick={() => setModalText('')} text={modalText} />
            )}
            <Text style={styles.header}>Detalhes de{'\n'}Empresário</Text>
          </View>
          <ScrollView>
          {client.length !== 0 &&
            client.logs.filter(i => i.type === 'buy').map((p) => {
              // if (parcel.planted === true && !parcel.pesticide) {
              return <LogsTransfer item={p} key={p.id} />
              // }
            })
          }
          </ScrollView>
        </View>
      }

      <Button
        onClick={() => navigation.navigate('Multa')}
        name='VOLTAR' />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: Tela,
    alignItems: 'center',
    justifyContent: 'center'
  },
  row: {
    flexDirection: 'row',
    marginVertical: 20,
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'center'
  },
  header: {

    fontSize: 20,
  },
  image: {
    width: 60,
    height: 60,
  },
  font: {
    fontSize: 18,
    marginTop: 15,
    fontFamily: 'Rubik_300Light'
  },
});