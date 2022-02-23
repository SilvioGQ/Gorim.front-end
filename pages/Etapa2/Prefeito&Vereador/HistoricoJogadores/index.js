import React, { useContext, useEffect, useState } from 'react';
import { Text, View, StyleSheet, Image, Dimensions, ScrollView } from 'react-native';
import HistoricoPlayers from '../../../../components/HistoricoPlayers';
import { GameContext, getPlayers } from '../../../../contexts/GameContext';
// import COLORS from '../../constants/colors';
import Rodada from '../../../../components/Rodada';
import FilterNew from '../../../../components/FilterNew'
import { Fragment } from 'react';
const Tela = Dimensions.get('screen').width;
export default function HistoricoJogadores({ navigation }) {
  const { player, stage, data:playersType } = useContext(GameContext);
  const [type, setType] = useState('Agricultor');
  useEffect(()=>{
    getPlayers()
  },[stage])
  return (
    <Fragment>
      <Rodada arrow={true} onClick={() => navigation.navigate('MenuPolitico')} />
      <View style={styles.container}>
        <View style={styles.espaco}>
          <Image
            style={styles.icon}
            source={require('../../../../assets/symbols/group.png')}
          />
          <Text style={styles.text}>Histórico dos{"\n"}Jogadores</Text>
        </View>
        <Text style={styles.header}>Jogadores em {player.city}:</Text>
        <View style={{ alignItems: 'center' }}>
        <FilterNew nome1='Agricultor' nome2='Empresário' type={type} setType={setType} />
        </View>

        <ScrollView>
          <View style={styles.whiteRow}>
            {stage === 'GETPLAYERS' &&
            playersType.filter((p) => p.type == type && p.city == player.city).map((item) => {
              return <HistoricoPlayers key={item.id} player={item} />
            }
            )}
          </View>
        </ScrollView>
      </View>
    </Fragment>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  row: {
    flexDirection: 'row',
    marginVertical: 35
  },
  image: {
    width: 80,
    height: 80
  },
  name: {
    fontFamily: 'Rubik_700Bold',
    fontSize: 18
  },
  subtitle: {
    fontSize: 18
  },
  icon: {
    width: 62,
    height: 62
  },
  whiteRow: {
    width: '90%',
    marginHorizontal: 50,
    justifyContent: 'space-between',
  },
  espaco: {
    marginTop: 20,
    flexDirection: 'row',
    alignSelf: 'center',
    justifyContent: 'center',
    width: Tela
  },
  header: {
    fontFamily: 'Rubik_400Regular',
    fontSize: 20,
    marginTop: 25,
    marginLeft: 25,
    marginBottom: 30,
  },
  rodada: {
    fontFamily: 'Rubik_400Regular',
    fontSize: 18,
    color: '#3F5510'
  },
  text: {
    fontFamily: 'Rubik_400Regular',
    fontSize: 20,
    marginTop: 15,
  }
});