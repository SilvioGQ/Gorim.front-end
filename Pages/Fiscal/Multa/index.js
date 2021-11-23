import React, { useState, useContext } from 'react';
import { Text, View, StyleSheet, Image, TouchableOpacity, Dimensions } from 'react-native';
import { GameContext, sendFine } from '../../../contexts/GameContext';

import Button from '../../../Components/Button';
import Rodada from '../../../Components/Rodada';
import MultaComponent from '../../../Components/Multa';
import Modal from '../../../Components/ModalInfo';
import TextBold from '../../../Components/Atons/TextBold';
import FilterNew from '../../../Components/FilterNew';

const Tela = Dimensions.get('screen').width;
export default function Multa({ navigation }) {

  const [modalText, setModalText] = useState('');
  const [type, setType] = useState('Agricultores');
  const { players, stage, player } = useContext(GameContext);

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
        <TouchableOpacity onPress={() => { setModalText('Tabela de multas:') }}  >
          <Image source={require('../../../assets/agricultorIcones/information.png')} style={{ width: 20, height: 20, alignSelf: 'center', marginLeft: 10, marginTop: 10 }} />
        </TouchableOpacity>
      </View>
      <FilterNew type={type} setType={setType} nome1={'Agricultores'} nome2={'Empresario'}/>
      {type === 'Agricultores' ? 
      players.filter(p => p.type === "Agricultor" && player.appliedFine.indexOf(p.id) === -1 && p.city == player.city).length === 0 ? 
      <TextBold>Não há mais multas para aplicar em agricultores!</TextBold>
      :
      players.filter(p => p.type === "Agricultor" && player.appliedFine.indexOf(p.id) === -1 && p.city == player.city).map(item => 
      <MultaComponent item={item} key={item.id} onClike={sendFine} onclick={() => navigation.navigate('MultaVerMais', { client: item })} />)
      :
      players.filter(p => p.type === "Empresário" && player.appliedFine.indexOf(p.id) === -1 && p.city == player.city).length === 0 ? 
      <TextBold>Não há mais multas para aplicar empresários!</TextBold>
      :
      players.filter(p => p.type === "Empresário" && player.appliedFine.indexOf(p.id) === -1 && p.city == player.city).map(item => 
      <MultaComponent item={item} key={item.id} onClike={sendFine} onclick={() => navigation.navigate('MultaVerMais', { client: item })} />)
    }
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
    marginBottom: 10,
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
  text: {

    textAlign: 'center',
    fontSize: 20,
    marginVertical: 20
  },
});