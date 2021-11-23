import React, { useState, useContext } from 'react';
import { Text, View, StyleSheet, Dimensions, FlatList } from 'react-native';
import { GameContext, deleteAdvert } from "../../../contexts/GameContext";

import Coin from '../../../Components/Coin';
import FilterNew from '../../../Components/FilterNew';
import Anuncio from '../../../Components/Anuncio';
import COLORS from '../../../constants/colors';
import Modal from '../../../Components/ModalInfo';
import Rodada from '../../../Components/Rodada';
import TextBold from '../../../Components/Atons/TextBold';

const Tela = Dimensions.get('screen').width;
export default function ChecarAnuncio({ navigation }) {

  const [modalText, setModalText] = useState('');
  const [type, setType] = useState('propaganda');
  const { player } = useContext(GameContext);
  return (
    <View style={styles.container}>
      <Rodada name={'Checar anúncios'} arrow={true} onClick={() => navigation.navigate('MenuJogador')} />
      <Coin coin={player.coin} />
      <Text style={styles.header}>Anúncios</Text>
      {modalText !== '' && <Modal onClick={() => setModalText('')} text={modalText} />}
      <FilterNew type={type} setType={setType} nome1={'propaganda'} nome2={'individual'}/>
      {
        type === 'propaganda' ? 
        player.offers.filter(offer => offer.idBuyer === -1).length === 0 ?
          <TextBold>Você não fez propagandas</TextBold> 
          :
          <FlatList
            showsVerticalScrollIndicator={false}
            data={player.offers.filter(offer => offer.idBuyer === -1)}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({ item, index }) => <Anuncio key={index} item={item} Historico={() => navigation.navigate('Cenario')} deleteAdvert={id => deleteAdvert(id)} />}
          />
        :
        player.offers.filter(offer => offer.idBuyer !== -1).length === 0 ?
          <TextBold>Você não fez ofertas individuais</TextBold> 
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