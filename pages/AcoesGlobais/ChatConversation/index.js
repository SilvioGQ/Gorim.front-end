import React, { useState, useContext } from 'react';
import { Text, View, StyleSheet, Dimensions, FlatList, Image, TextInput } from 'react-native';
import { GameContext, deleteAdvert } from "../../../contexts/GameContext";
import Coin from '../../../components/Coin';
import FilterNew from '../../../components/FilterNew';
import ChatPerson from '../../../components/ChatPerson';
import COLORS from '../../../constants/colors';
import Modal from '../../../components/ModalInfo';
import Rodada from '../../../components/Rodada';
import TextBold from '../../../components/Atons/TextBold';
import HeaderIcons from '../../../components/headerIcons';
import ICONS from '../../../constants/imagesIcons'


const Tela = Dimensions.get('screen').width;
export default function ChatConversation({ navigation }) {
  const { player, players } = useContext(GameContext);
  // Essa tela pode ficar genericona por enquanto.
  return (
    <View style={styles.container}>
      <Rodada arrow={true} onClick={() => navigation.navigate('Chat')} />
      <View style={styles.margem}>
        <Image
          style={styles.icone}
          source={ICONS[player.avatar]}
        />
        <Text style={styles.textinhos}>EmpMaquinas/Silvio</Text>
      </View>
      <View style={styles.line} />
      <TextInput
        maxLength={100}
        style={[styles.button2, styles.text2]}
        autoCompleteType='off'
        autoCorrect={false}
        keyboardType='visible-password'
        // onChangeText={room => setRoom(room.toUpperCase())}
        placeholder='Mensagem'
      // value={room}
      >
      </TextInput>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: Tela,
  },
  line: {
    width: '100%',
    borderWidth: 0.2,
    borderColor: '#AAAAAA',
    marginVertical: 10
  },
  icone: {
    borderWidth: 4,
    borderRadius: 17,
    borderColor: '#A8DADC',
    width: Tela > 350 ? 60 : 52,
    height: Tela > 350 ? 60 : 52,
    // marginBottom: Height > 720 && Height < 800 ? 2 : 5,
    // marginTop: 8,
    position: 'absolute',

  },
  textinhos: {
    marginTop: 20,
    fontSize: 16,
    marginLeft: 65,
    fontFamily: 'Rubik_700Bold',
  },
  margem: {
    //  marginTop: 10,
    marginHorizontal: 20,
    marginVertical: 20
  },
  text2: {
    fontSize: Tela > 350 ? 18 : 16,
    textAlign: 'left',
    color: '#000',
    paddingLeft: 20
  },
  button2: {

    backgroundColor: '#c2e0e4',
    // opacity: '50%',
    height: 60,
    alignSelf: 'center',
    borderRadius: 93,
    alignItems: 'flex-start',
    width: '90%',
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.32,
    shadowRadius: 4.46,
    elevation: 3,
    
  },
});
