import React, { useState, useContext, useEffect } from 'react';
import { Text, View, StyleSheet, Dimensions, FlatList } from 'react-native';
import { GameContext, deleteAdvert, getMessages } from "../../../contexts/GameContext";

import Coin from '../../../components/Coin';
import FilterNew from '../../../components/FilterNew';
import ChatPerson from '../../../components/ChatPerson';
import COLORS from '../../../constants/colors';
import Modal from '../../../components/ModalInfo';
import Rodada from '../../../components/Rodada';
import TextBold from '../../../components/Atons/TextBold';
import HeaderIcons from '../../../components/headerIcons';
const Tela = Dimensions.get('screen').width;
export default function Chat({ navigation }) {

  const [modalText, setModalText] = useState('');
  const [type, setType] = useState('Pessoas');
  const { player, players, messages, notify } = useContext(GameContext);

  useEffect(() => {
    getMessages();
  }, []);
  return (
    <View style={styles.container}>
      <Rodada arrow={true} onClick={() => navigation.navigate('MenuJogador')} />
      <Coin coin={player.coin} />
      <HeaderIcons name={'Chat'} icon='Chat' />
      {modalText !== '' && <Modal onClick={() => setModalText('')} text={modalText} />}
      <FilterNew type={type} setType={setType} nome1={'Pessoas'} nome2={'Grupos'} />
      {
        type === 'Pessoas' ?
        <FlatList
        showsVerticalScrollIndicator={false}
        data={players.filter(i=>i.id !== player.id)}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item, index }) => <ChatPerson key={index} player2={item} onClick={() => navigation.navigate('ChatConversation', {player2: item})} messages={messages} notification={notify.messages.filter(i=>i === item.id).length > 0 ? true : false} />}
      />
          :
          null
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
