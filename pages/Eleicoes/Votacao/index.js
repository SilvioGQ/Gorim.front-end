import React, { useContext, useState, useEffect } from 'react';
import { Text, View, StyleSheet, Image, Dimensions, FlatList, ScrollView } from 'react-native';
import { GameContext, addVote } from '../../../contexts/GameContext';
import Button from '../../../components/Button';
import Quadrados from '../../../components/Quadrado';
import COLORS from '../../../constants/colors';
import Rodada from '../../../components/Rodada';
import FilterNew from '../../../components/FilterNew'
import ModalAsk from '../../../components/ModalAsk';
const Tela = Dimensions.get('screen').width;
export default function Votacao({ navigation }) {
  const [type, setType] = useState('Prefeito');
  const [votes, setVotes] = useState({ mayor: '', cityCouncilor: '', supervisor: '' });
  const [voted, setVoted] = useState(false);
  const [mayor, setMayor] = useState([]);
  const [cityCouncilor, setcityCouncilor] = useState([]);
  const [supervisor, setsupervisor] = useState([]);
  const { data: elections, player, players, awaitPlayers, stage } = useContext(GameContext);
  const [modalText, setModalText] = useState();

  useEffect(() => {
    if (stage === 'INITRESULTSVOTATION') navigation.reset({ routes: [{ name: 'Eleitos' }] });
  }, [stage]);

  useEffect(() => {
    setMayor([...elections['mayor'], { id: "", votes: 0 }]);
    setcityCouncilor([...elections['cityCouncilor'], { id: "", votes: 0 }]);
    setsupervisor([...elections['supervisor'], { id: "", votes: 0 }]);
  }, []);

  const playerList = (item) => {
    if (item === '') {
      return { name: 'Voto Branco', avatar: 'VotoBranco' };
    } else {
      return players.find((i) => i.id === item)
    }
  }

  return (
    <View style={styles.container}>
      <Rodada />
      <ScrollView>
        <View style={styles.self}>
          <Image
            style={styles.logo}
            source={require('../../../assets/symbols/vote.png')}
          />
          <Text style={styles.title}>Eleições em{"\n"}{player.city}</Text>
        </View>
        <View style={{ alignItems: 'center', width: Tela, }}>
          <FilterNew nome1='Prefeito' nome2='Vereador' nome3='Fiscal' type={type} setType={setType} />
        </View>
        <View style={styles.margin}>
          {type === "Prefeito" && (
            <FlatList
              data={mayor}
              numColumns={3}
              keyExtractor={item => item.id}
              renderItem={({ item }) => <Quadrados player={playerList(item.id)} onClick={() => setVotes({ ...votes, mayor: item.id })} backgroundColor={votes.mayor == item.id ? '#8ACF3A' : '#fff'} color={votes.mayor == item.id ? '#fff' : '#000'} />}
            />
          )}
          {type === "Vereador" && (
            <FlatList
              data={cityCouncilor}
              numColumns={3}
              keyExtractor={item => item.id}
              renderItem={({ item }) => <Quadrados player={playerList(item.id)} onClick={() => setVotes({ ...votes, cityCouncilor: item.id })} backgroundColor={votes.cityCouncilor == item.id ? '#8ACF3A' : '#fff'} color={votes.cityCouncilor == item.id ? '#fff' : '#000'} />}
            />
          )}
          {type === "Fiscal" && (
            <FlatList
              data={supervisor}
              numColumns={3}
              keyExtractor={item => item.id}
              renderItem={({ item }) => <Quadrados player={playerList(item.id)} onClick={() => setVotes({ ...votes, supervisor: item.id })} backgroundColor={votes.supervisor == item.id ? '#8ACF3A' : '#fff'} color={votes.supervisor == item.id ? '#fff' : '#000'} />}
            />
          )}
        </View>
        {!voted && (
          <Button onClick={() => { setModalText(true); }} name='FINALIZAR VOTOS' />
        )}
        {awaitPlayers > 0 && (
          <Text style={styles.aviso}>{awaitPlayers} de {players.length} votaram.</Text>
        )}
        {modalText && <ModalAsk text='Deseja confirmar seu voto?' finish={() => { addVote(votes); setVoted(true); setModalText(!modalText); }} back={() => setModalText(!modalText)} />}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: COLORS.bgColorPrimary,
    alignItems: 'center',
    width: Tela,
  },
  self: {
    flexDirection: 'row',
    alignSelf: 'center',
    justifyContent: 'center',
    marginVertical: 20
  },
  title: {
    fontSize: Tela > 350 ? 22 : 16,
    alignItems: 'center',
    marginVertical: 10
  },
  logo: {
    width: Tela > 350 ? 60 : 50,
    height: Tela > 350 ? 60 : 50,
  },
  margin: {
    marginHorizontal: 15
  },
  aviso: {
    fontSize: 14,
    textAlign: 'center',
    marginVertical: 20,
    color: COLORS.warningButton
  }
});
