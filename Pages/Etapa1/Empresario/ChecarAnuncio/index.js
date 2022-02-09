import React, { useState, useContext } from 'react';
import { Text, View, StyleSheet, Dimensions, FlatList } from 'react-native';
import { GameContext, deleteAdvert } from "../../../../contexts/GameContext";

import Coin from '../../../../Components/Coin';
import FilterNew from '../../../../Components/FilterNew';
import Anuncio from '../../../../Components/Anuncio';
import COLORS from '../../../../constants/colors';
import Modal from '../../../../Components/ModalInfo';
import Rodada from '../../../../Components/Rodada';
import TextBold from '../../../../Components/Atons/TextBold';
import HeaderIcons from '../../../../Components/headerIcons';
const Tela = Dimensions.get('screen').width;
export default function ChecarAnuncio({ navigation }) {

  const [modalText, setModalText] = useState('');
  const [type, setType] = useState('Todos');
  const { player } = useContext(GameContext);
  return (
    <View style={styles.container}>
      <Rodada arrow={true} onClick={() => navigation.navigate('MenuJogador')} />
      <Coin coin={player.coin} />
      <HeaderIcons name={'Checar \nAnúncios'} icon='Checar Anúncios'/>
      {modalText !== '' && <Modal onClick={() => setModalText('')} text={modalText} />}
      <FilterNew type={type} setType={setType} nome1={'Todos'} nome2={'Individual'}/>
      {
        type === 'Todos' ? 
        player.offers.filter(offer => offer.idBuyer === -1).length === 0 ?
          <TextBold>Não há anúncios gerais ativos.</TextBold> 
          :
          <FlatList
            showsVerticalScrollIndicator={false}
            data={player.offers.filter(offer => offer.idBuyer === -1)}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({ item, index }) => <Anuncio key={index} item={item} Historico={() => navigation.navigate('Cenario')} deleteAdvert={id => deleteAdvert(id)} />}
          />
        :
        player.offers.filter(offer => offer.idBuyer !== -1).length === 0 ?
          <TextBold>Não há anúncios individuais ativos.</TextBold> 
          :
          <FlatList
            showsVerticalScrollIndicator={false}
            data={player.offers.filter(offer => offer.idBuyer !== -1)}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({ item, index }) => <Anuncio key={index} item={item} Historico={() => navigation.navigate('Cenario')} deleteAdvert={id => deleteAdvert(id)} />}
          />
      }
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: Tela,
  },
  header: {
    
    textAlign: 'center',
    fontSize: 20,
    marginBottom: 25
  },
  text: {
    flex: 1, 
    textAlign: 'center', 
    fontFamily: 'Rubik_700Bold', 
    fontSize: 18, 
    marginVertical: 20
  }
});