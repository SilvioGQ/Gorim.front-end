import React, { useState, useContext } from 'react';
import { Text, View, StyleSheet, Image, TouchableOpacity, Dimensions } from 'react-native';
import { GameContext } from '../../../contexts/GameContext';

import Button from '../../../Components/Button';
import Rodada from '../../../Components/Rodada';
import MultaComponent from '../../../Components/Multa';
import Modal from '../../../Components/ModalInfo';

const Tela = Dimensions.get('screen').width;
export default function Multa({ navigation }) {

  const [modalText, setModalText] = useState('');
  const { players, player } = useContext(GameContext);

  console.log(player.appliedTax)
  return (
    <View style={styles.container}>
      <Rodada name={'Multa'} arrow={true} onClick={() => navigation.navigate('MenuPolitico')} />
      <View style={styles.row}>
        <Image
          style={styles.image}
          source={require('../../../assets/icons/penalty.png')}
        />
        {modalText !== '' && (
          <Modal onClick={() => setModalText('')} text={modalText} />
        )}
        <Text style={styles.header}>Aplicação{'\n'}de multa</Text>
        <TouchableOpacity onPress={() => { }} activeOpacity={0.7}>
          <Image source={require('../../../assets/agricultorIcones/information.png')} style={{ width: 20, height: 20, alignSelf: 'center', marginLeft: 10, marginTop: 10 }} />
        </TouchableOpacity>
      </View>

      {players.map(item => <MultaComponent item={item} key={item.id} onclick={()=> navigation.navigate('MultaVerMais', {client:item.id})} />)}
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
    marginVertical: 20,
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
});