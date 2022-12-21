import React, { useState, useContext, useEffect } from 'react';
import { Text, View, StyleSheet, Image, TouchableOpacity, Dimensions } from 'react-native';
import { GameContext, sendFine, suggestFine } from '../../../../contexts/GameContext';
import Rodada from '../../../../components/Rodada';
import MultaComponent from '../../../../components/Multa';
import Modal from '../../../../components/ModalInfo';
import TextBold from '../../../../components/Atons/TextBold';
import FilterNew from '../../../../components/FilterNew';
const Tela = Dimensions.get('screen').width;
export default function Multa({ navigation }) {
  const [modalText, setModalText] = useState('');
  const [type, setType] = useState('Agricultor');
  const [filterPlayers, setFilterPlayers] = useState([])
  const { player, stage, data: playersType } = useContext(GameContext);
  useEffect(() => {
    suggestFine();
  }, []);
  useEffect(()=>{
    if(stage === 'SUGGESTFINE'){
      setFilterPlayers(playersType.filter(p => p.type === type && player.appliedFine.indexOf(p.playerId) === -1 && p.city == player.city))
    }
  },[stage, type, playersType, sendFine])
  // acho que se colocar o filterPlayers nesse [] resolve o problema de não ficar atualizando.
  return (
    <View style={styles.container}>
      <Rodada arrow={true} onClick={() => navigation.navigate('MenuPolitico')} />
      <View style={styles.row}>
        <Image
          style={styles.image}
          source={require('../../../../assets/icons/penalty.png')}
        />
        {modalText !== '' && (
          <Modal onClick={() => setModalText('')} text={modalText} image3={true} />
        )}
        <Text style={styles.header}>Aplicação{'\n'}de multa</Text>
        <TouchableOpacity onPress={() => { setModalText('Tabela de multas:') }}  >
          <Image source={require('../../../../assets/agricultorIcones/information.png')} style={{ width: 20, height: 20, alignSelf: 'center', marginLeft: 10, marginTop: 10 }} />
        </TouchableOpacity>
      </View>
      <FilterNew type={type} setType={setType} nome1={'Agricultor'} nome2={'Empresário'} />
      {filterPlayers.length == 0 ?
          <TextBold>Não há mais multas para aplicar aqui!</TextBold>
          :
          filterPlayers.map(item =>
            <MultaComponent item={item} key={item.playerId} onClike={sendFine} onclick={() => navigation.navigate('MultaVerMais', { client: item })} />)
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
