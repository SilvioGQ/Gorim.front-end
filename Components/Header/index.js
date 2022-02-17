import React, { useContext } from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';
import ICONS from '../../constants/imagesIcons'
import Coin from '../Coin';
import { GameContext } from "../../contexts/GameContext";
import normalizeNumber from '../../helpers/normalizeNumber';

export default function Header({ typeMenu = 'player' }) {
  const { player, game } = useContext(GameContext);
	
  const mudarcor = (valor) => {
    if (valor >= 0 && valor <= 50) return '#FF0000';
    if (valor > 50 && valor <= 80) return '#A50000';
    if (valor > 80 && valor <= 100) return '#000000';
  }

  const getTypeMenu = () => {
    if (typeMenu == 'player') {
      return `${player.type ? player.type.slice(0, 3) : ''}${player.type === 'Empresário' ? player.specialty[0] : ''}`;
    } else {
      return `${player.office ? player.office.slice(0, 3) : 'cid'}`;
    }
  }

  return (
    <View style={styles.container}>
      <View style={styles.row}>
      <Image style={styles.person} source={ICONS[player.avatar]} />
      <Text style={styles.header}>{`${getTypeMenu()}/${player.name}\nem ${player.city}`}</Text>
      </View>
      <View>
        <View style={styles.row}>
          <Image
            style={styles.pollution}
            source={require('../../assets/agricultorIcones/Barril.png')}
          />
					<Text style={{ color: mudarcor(game.globalPollution), fontSize: 19, fontFamily: 'Rubik_400Regular', marginLeft: 3 }}>{normalizeNumber(game.globalPollution)}%</Text>
        </View>
        {player.office ? <Coin coin={typeMenu === 'player' ? player.coin : player.serviceSalary} /> : game.phase === 1 ? <Coin coin={player.coin} /> : null}
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignSelf: 'flex-start',
    justifyContent:'space-between',
    marginVertical: 10,
    marginLeft: 20,
    width: '90%'
  },
  row:{
    flexDirection: 'row'
  },
  header: {
    fontFamily: 'Rubik_400Regular',
    fontSize: 18,
  },
  pollution: {
    width: 18,
    height: 18,
    marginTop: 2
  },
  person: {
    width: 46,
    height: 50,
    marginRight: 10
  }
})