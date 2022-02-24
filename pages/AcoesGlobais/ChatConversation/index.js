import React, { useState, useContext } from 'react';
import { Text, View, StyleSheet, Dimensions, FlatList } from 'react-native';
import Coin from '../../../components/Coin';
import FilterNew from '../../../components/FilterNew';
import ChatPerson from '../../../components/ChatPerson';
import COLORS from '../../../constants/colors';
import Modal from '../../../components/ModalInfo';
import Rodada from '../../../components/Rodada';
import TextBold from '../../../components/Atons/TextBold';
import HeaderIcons from '../../../components/headerIcons';
const Tela = Dimensions.get('screen').width;
export default function ChatConversation({ navigation }) {
  // Essa tela pode ficar genericona por enquanto.
  return (
    <View style={styles.container}>
      <Rodada arrow={true} onClick={() => navigation.navigate('Chat')} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: Tela,
  },
});
