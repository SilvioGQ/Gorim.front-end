
import React, { useContext, useState } from 'react';
import { Text, View, StyleSheet, Image, TouchableOpacity, Dimensions } from 'react-native';
import { GameContext, toggleApprovedSuggest } from "../../contexts/GameContext";
import ModalInfo from '../../components/ModalInfo';
import COLORS from '../../constants/colors';
import ICONS from '../../constants/imagesIcons';
import IMAGES2 from '../../constants/imagesProducts';
import normalizeNumber from '../../helpers/normalizeNumber';

const Tela = Dimensions.get('screen').width;
export default function SugestoesRecebidas({ item }) {
  const { player, players } = useContext(GameContext);
  const Buyer = () => {
    let p = players.find(i => i.office == 'Vereador' && i.city === player.city);
    return p;
  }
  const [modalText, setModalText] = useState('');
  return (
    <View style={styles.colunm}>
      <View style={styles.row3}>
        <View style={{ marginLeft: 20 }}>
          <Image style={styles.person} source={ICONS[Buyer().avatar]} />
          <Text style={styles.text}>{Buyer().office.slice(0, 3)}/{Buyer().name}</Text>
        </View>
        <View style={{ position: 'absolute', marginLeft: 55 }}>
          <Image style={styles.icon} source={item.type === 'tax' ? IMAGES2['tax'] : IMAGES2[item.label]} />
        </View>
        {modalText !== '' && <ModalInfo player={player} onClick={() => setModalText('')} text={modalText} />}
        <View style={{ marginLeft: 10 }}>
          <Text style={styles.text2}>{item.type === 'tax' ? "Alteração de imposto" : "Medida de prevenção"}</Text>
          <Text style={styles.text1}>{item.label}</Text>
          <Text style={styles.textBold}>{item.value > 0 ? `$${normalizeNumber(item.value)}` : `${normalizeNumber(item.percentual)}%`}</Text>
        </View>
      </View>
      <View style={styles.row}>
        <TouchableOpacity style={[styles.button, { backgroundColor: '#66BF00' }]} onPress={() => { if (item.value > player.serviceSalary && item.type !== 'tax') return setModalText('Saldo insuficiente'); else return toggleApprovedSuggest(item, true) }} activeOpacity={0.7}>
          <Text style={styles.textbutton}>Aceitar</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => toggleApprovedSuggest(item, false)} activeOpacity={0.7}>
          <Text style={styles.textbutton}>Recusar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  colunm: {
    marginLeft: 20,
    backgroundColor: '#fff',
    borderRadius: 20,
    width: Tela - 40,
    paddingVertical: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.32,
    shadowRadius: 5.46,
    elevation: 6,
    marginVertical: 10
  },
  button: {
    width: 120,
    borderRadius: 20,
    backgroundColor: COLORS.warningButton,
    padding: 12,
    marginTop: 5
  },
  textbutton: {
    color: COLORS.textWhite,
    fontSize: 15,
    textAlign: 'center',
    fontFamily: 'Rubik_400Regular'
  },
  row3: {
    flexDirection: 'row',
    marginTop: 15,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  person: {
    width: 48,
    height: 49,
  },
  icon: {
    width: 22,
    height: 21,
    marginTop: 30,
  },
  textBold: {
    fontSize: 15,
    fontFamily: 'Rubik_400Regular',
    fontWeight: 'bold',
  },
  text: {
    fontSize: 13,
    marginVertical: 5,
    marginRight: 5
  },
  text2: {
    fontSize: 15,
  },
  text1: {
    fontSize: 13,
  },
});
