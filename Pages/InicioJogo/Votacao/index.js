import React, { useContext, useState, useEffect } from 'react';
import { Text, View, StyleSheet, Image, Dimensions, FlatList } from 'react-native';
import Button from '../../../Components/Button';
import Quadrados from '../../../Components/Quadrado';
import COLORS from '../../../constants/colors';
import Rodada from '../../../Components/Rodada';
import FilterNew from '../../../Components/FilterNew'
import ModalAsk from '../../../Components/ModalAsk';
import { GameContext, addVote } from '../../../contexts/GameContext';
const Tela = Dimensions.get('screen').width
export default function Votacao({ navigation }) {
  const [type, setType] = useState('Prefeito');
  const [votes, setVotes] = useState({ mayor: '', cityCouncilor: '', supervisor: '' });
  const [voted, setVoted] = useState(false);
  const [mayor, setMayor] = useState([])
  const [cityCouncilor, setcityCouncilor] = useState([])
  const [supervisor, setsupervisor] = useState([])
  const { data: elections, player, players, awaitPlayers, stage } = useContext(GameContext);
  const [modalText, setModalText] = useState();
  useEffect(() => {
    if (stage === 'INITRESULTSVOTATION') navigation.navigate('Eleitos');
    setMayor([...elections['mayor'], { id: "", votes: 0 }])
    setcityCouncilor([...elections['cityCouncilor'], { id: "", votes: 0 }])
    setsupervisor([...elections['supervisor'], { id: "", votes: 0 }])

  }, [stage]);
  console.log(mayor)
  const playerList = (item) => {
    if (item==='') {
      return { name: 'Voto Branco' };
    } else {
      return players.find((i) => i.id === item)
    }
  }
  return (
    <View style={styles.container}>
      <Rodada name={'Votação'} />
      <View style={styles.self}>
        <Image
          style={styles.logo}
          source={require('../../../assets/symbols/vote.png')}
        />
        <Text style={styles.title}>Eleições em{"\n"}{player.city}</Text>
      </View>
      {modalText && <ModalAsk text='Deseja confirmar seu voto?' finish={() => { addVote(votes); setVoted(true); setModalText(!modalText); }} back={() => setModalText(!modalText)} />}
      <View style={{ alignItems: 'center', width: Tela, }}>
        <FilterNew nome1='Prefeito' nome2='Vereador' nome3='Fiscal' type={type} setType={setType} />
      </View>
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
      {!voted && (
        <Button onClick={() => { setModalText(true); }} name='FINALIZAR VOTOS' />
      )}
      {awaitPlayers > 0 && (
        <Text style={{ fontSize: 14, textAlign: 'center', marginTop: 10, marginBottom: 20, color: COLORS.warningButton }}>{awaitPlayers} de {players.length} votaram.</Text>
      )}
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
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    flexWrap: 'wrap',
    paddingLeft: '12%'
  },
  title: {

    fontSize: 22,
    alignItems: 'center',
    marginVertical: 10
  },
  logo: {
    width: 60,
    height: 60
  },
  texto: {

    fontSize: 17,
    lineHeight: 18,
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 10,
  },
});