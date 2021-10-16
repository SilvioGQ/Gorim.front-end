import React, { useState, useContext } from 'react';
import { Text, View, StyleSheet, Image, Dimensions, TouchableOpacity, ScrollView } from 'react-native';
import { GameContext, applyPrevention } from '../../../contexts/GameContext';

import Button from '../../../Components/Button';
import Rodada from '../../../Components/Rodada';
import Coin from '../../../Components/Coin';
import Modal from '../../../Components/ModalInfo';
const Tela = Dimensions.get('screen').width;
export default function Prevencao({ navigation }) {

  const [selectMedida, setSelectMedida] = useState({});
  const { player } = useContext(GameContext);
  const [modalVisible, setModalVisible] = useState('');
  return (
    <View style={styles.container}>
        <Rodada name={player.office === 'Vereador' ? 'Sugerir Medidas' : 'Aplicar Medidas'} arrow={true} onClick={() => navigation.navigate('MenuPolitico')} />
        <ScrollView>
        <Coin coin={player.serviceSalary} />
        <View style={styles.espaco}>
          <Image
            style={{ width: 62, height: 62 }}
            source={require('../../../assets/icons/water.png')}
          />
          <Text style={{ fontFamily: 'Rubik_300Light', fontSize: 20, marginTop: 15, marginLeft: 5 }}>{player.office === 'Vereador' ? 'Sugerir Medidas de\nPrevenção' : 'Medidas de\nPrevenção'}</Text>
        </View>
        <Text style={styles.header}>{player.office === 'Vereador' ? 'Sugerir mudanças na cidade' : 'Medidas à aplicar na cidade:'}</Text>
        {modalVisible !== '' && (
        <Modal onClick={() => setModalVisible('')} text={modalVisible} />
      )}
        <View style={styles.row}>
          <View style={styles.quadrados}>
            <TouchableOpacity style={[styles.fundo, { backgroundColor: selectMedida.id == 1 ? "#8ACF3A" : '#fff' }]} onPress={() => setSelectMedida({ id: 1, value: 800, preventionPercentual: 0.05 })} activeOpacity={0.7}>
              <Image style={{ width: 50, height: 50, marginTop: 15, marginBottom: 10, marginLeft: 20, position: 'absolute' }} source={require('../../../assets/icons/water.png')} />
              <Text style={[styles.texto, { color: selectMedida.id == 1 ? "#fff" : '#000' }]}>Tratamento de água</Text>
              <Text style={[styles.textomenor, { color: selectMedida.id == 1 ? "#fff" : '#000' }]}>Reduz a poluição em 5%</Text>
              <Text style={[styles.textopreco, { color: selectMedida.id == 1 ? "#fff" : '#000' }]}>Preços: $800</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.quadrados}>
            <TouchableOpacity style={[styles.fundo, { backgroundColor: selectMedida.id == 2 ? "#8ACF3A" : '#fff' }]} onPress={() => setSelectMedida({ id: 2, value: 1600, preventionPercentual: 0.1 })} activeOpacity={0.7}>
              <Image style={{ width: 45, height: 45, marginTop: 20, marginBottom: 10, marginLeft: 20, position: 'absolute' }} source={require('../../../assets/icons/sewer.png')} />
              <Text style={[styles.texto, { color: selectMedida.id == 2 ? "#fff" : '#000' }]}>Tratamento de esgoto</Text>
              <Text style={[styles.textomenor, { color: selectMedida.id == 2 ? "#fff" : '#000' }]}>Reduz a poluição em 10%</Text>
              <Text style={[styles.textopreco, { color: selectMedida.id == 2 ? "#fff" : '#000' }]}>Preços: $1600</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.quadrados}>
            <TouchableOpacity style={[styles.fundo, { backgroundColor: selectMedida.id == 3 ? "#8ACF3A" : '#fff' }]} onPress={() => setSelectMedida({ id: 3, value: 2400, preventionPercentual: 0.15 })} activeOpacity={0.7}>
              <Image style={{ width: 50, height: 50, marginTop: 15, marginBottom: 10, marginLeft: 20, position: 'absolute' }} source={require('../../../assets/icons/trash.png')} />
              <Text style={[styles.texto, { color: selectMedida.id == 3 ? "#fff" : '#000' }]}>Tratamento de lixo</Text>
              <Text style={[styles.textomenor, { color: selectMedida.id == 3 ? "#fff" : '#000' }]}>Reduz a poluição em 15%</Text>
              <Text style={[styles.textopreco, { color: selectMedida.id == 3 ? "#fff" : '#000' }]}>Preços: $2400</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={{ marginBottom: 25 }}>
          <Button
            onClick={() =>{if(player.serviceSalary < selectMedida.value) return setModalVisible('Saldo insuficiente'); else {applyPrevention(selectMedida); navigation.reset({ routes: [{ name: 'TransferenciaConfirmada', params: { text: 'Medida aplicada!' } }] });};} }
            name='APLICAR' />
        </View>
    </ScrollView>
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: Tela
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'center',
    justifyContent: 'center',
    marginTop: 20,
    marginBottom: 40,
    width: Tela,
    flexWrap: 'wrap'
  },
  quadrados: {
    marginTop: 10,
  },
  texto: {
    marginTop: 18,
    fontSize: 16,
    marginLeft: 80,
    fontFamily: 'Rubik_700Bold',
  },
  textomenor: {
    fontSize: 13,
    marginLeft: 80,
  },
  textopreco: {
    marginTop: 13,
    fontSize: 20,
    marginLeft: 20,
  },
  fundo: {
    backgroundColor: "#fff",
    width: 330,
    height: 110,
    borderRadius: 20,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.32,
    shadowRadius: 5.46,

    elevation: 6
  },
  espaco: {
    flexDirection: 'row',
    alignSelf: 'center',
    justifyContent: 'center',
    width: Tela
  },
    header: {
    fontFamily: 'Rubik_300Light',
    fontSize: 20,
    marginTop: 25,
    marginLeft: 25
  },
});