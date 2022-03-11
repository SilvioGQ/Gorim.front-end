
import React, { useContext } from 'react';
import { Text, View, StyleSheet, Image, Dimensions, TouchableOpacity } from 'react-native';
import { GameContext, deleteSuggest } from "../../contexts/GameContext";

import COLORS from '../../constants/colors';
import ICONS from '../../constants/imagesIcons';
import IMAGES2 from '../../constants/imagesProducts';

const Tela = Dimensions.get('screen').width;
export default function SugestoesEnviadas({ item }) {
  const { player } = useContext(GameContext);
  const status = () => {
    if (item.approved == null) {
      return 'Aguardando resposta'
    } else if (item.approved) {
      return 'Sugestão aceita';
    } else if (!item.approved) {
      return 'Sugestão recusada';
    }
  }
  return (
    <View style={styles.colunm}>
      <View>
        <View style={styles.row3}>
          <View style={{ marginLeft: 20 }}>
            <Image style={styles.person} source={ICONS[player.avatar]} />
            <Text style={styles.text}>{player.office.slice(0, 3)}/{player.name}</Text>
          </View>
          <View style={{ position: 'absolute', marginLeft: 55 }}>
            <Image style={styles.icon2} source={item.type === 'tax' ? IMAGES2['tax'] : IMAGES2[item.label]} />
          </View>
          <View style={{ marginLeft: 10 }}>
            <Text style={styles.text2}>{item.type === 'tax' ? "Alteração de imposto" : "Medida de prevenção"}</Text>
            <Text style={styles.text1}>{item.label}</Text>
            <Text style={styles.textBold}>{item.value > 0 ? `$${item.value}` : `${item.percentual}%`}</Text>
          </View>
          <TouchableOpacity onPress={() => { deleteSuggest(item) }} style={{ position: 'absolute', right: 10, top: 0, display: item.approved == null ? 'flex' : 'none' }}>
            <Image style={styles.icon} source={require('../../assets/FecharPreto.png')} />
          </TouchableOpacity>
        </View>
      </View>
      <View>
        <Text style={[styles.text3, { color: item.approved ? COLORS.successButton : '#000' }]}>{status()}</Text>
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
    width: 25,
    height: 25,
  },
  icon2: {
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
  text3: {
    textAlign: 'center',
    fontSize: 15,
    marginBottom: 10
  },
});
