import React, { useState, useContext } from 'react';
import { Text, View, StyleSheet, Image, TouchableOpacity, Dimensions } from 'react-native';
import { GameContext, sendTax } from '../../../contexts/GameContext';

import Button from '../../../Components/Button';
import Rodada from '../../../Components/Rodada';
import MultaComponent from '../../../Components/Multa';
import Modal from '../../../Components/ModalInfo';

const Tela = Dimensions.get('screen').width;
export default function Multa({ navigation }) {

  const [modalText, setModalText] = useState('');
  const { players, stage, player } = useContext(GameContext);
  const [numero, setNumero] = useState(1);
  return (
    <View style={styles.container}>
      <Rodada name={'Multa'} arrow={true} onClick={() => navigation.navigate('MenuPolitico')} />
      <View style={styles.row}>
        <Image
          style={styles.image}
          source={require('../../../assets/icons/penalty.png')}
        />
        {modalText !== '' && (
          <Modal onClick={() => setModalText('')} text={modalText} image3={true} />
        )}
        <Text style={styles.header}>Aplicação{'\n'}de multa</Text>
        <TouchableOpacity onPress={() => { setModalText('Tabela de multas:') }} activeOpacity={0.7}>
          <Image source={require('../../../assets/agricultorIcones/information.png')} style={{ width: 20, height: 20, alignSelf: 'center', marginLeft: 10, marginTop: 10 }} />
        </TouchableOpacity>
      </View>
      <Text style={styles.text}>Agricultores</Text>
      {players.filter(p=>p.type === "Agricultor" && player.appliedTax.indexOf(p.id) === -1).length !== 0 ? players.filter(p=>p.type === "Agricultor" && player.appliedTax.indexOf(p.id) === -1).map(item => <MultaComponent item={item} key={item.id} numero={numero} setNumero={setNumero} onClike={() => {sendTax(item.id, numero)}} onclick={()=> navigation.navigate('MultaVerMais', {client:item})} />) 
      : 
      <Text style={{ flex: 1, textAlign: 'center', fontFamily: 'Rubik_700Bold', fontSize: 18, marginTop: 20 }}>Não há mais multas para aplicar!</Text>}
      <Text style={styles.text}>Empresário</Text>
      {players.filter(p=>p.type === "Empresário" && player.appliedTax.indexOf(p.id) === -1).length !== 0 ? players.filter(p=>p.type === "Empresário" && player.appliedTax.indexOf(p.id) === -1).map(item => <MultaComponent item={item} key={item.id} numero={numero} setNumero={setNumero} onClike={() => {sendTax(item.id, numero)}} onclick={()=> navigation.navigate('MultaVerMais', {client:item})} />)
      :
      <Text style={{ flex: 1, textAlign: 'center', fontFamily: 'Rubik_700Bold', fontSize: 18, marginVertical: 20 }}>Não há mais multas para aplicar!</Text>}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: Tela,
    alignItems: 'center',
  },
  row: {
    flexDirection: 'row',
    marginTop: 20,
    marginBottom:10,
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'center'
  },
  header: {
    fontFamily: 'Rubik_300Light',
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
  text: {
    fontFamily: 'Rubik_300Light',
    textAlign: 'center',
    fontSize: 20,
    marginVertical: 20
  },
});