import React, { useEffect, useContext, useState } from 'react';
import { Text, View, StyleSheet, Image, ScrollView, Dimensions, TouchableOpacity } from 'react-native';
import Button from '../../../components/Button';
import COLORS from '../../../constants/colors';
import Rodada from '../../../components/Rodada';
import { GameContext, winnersElection } from '../../../contexts/GameContext';
import ICONS from '../../../constants/imagesIcons';
const Tela = Dimensions.get('screen').width
export default function Eleitos({ navigation }) {
  const { data: elections, player, players, stage } = useContext(GameContext);
  const [mayor, setMayor] = useState();
  const [cityCouncilor, setCityCouncilor] = useState();
  const [supervisor, setSupervisor] = useState();
  useEffect(() => {
    winnersElection();
  }, []);

  useEffect(() => {
    if (stage === 'NEXTSTAGE') navigation.reset({ routes: [{ name: 'MenuPolitico' }] });
  }, [stage]);

  useEffect(() => {
    if (stage === 'WINNERSELECTION') {
      if (elections['mayor'][0]) {
        setMayor(players.find(i => i.id === elections['mayor'][0].id));
      }
      if (elections['cityCouncilor'][0]) {
        setCityCouncilor(players.find(i => i.id === elections['cityCouncilor'][0].id))
      }
      if (elections['supervisor'][0]) {
        setSupervisor(players.find(i => i.id === elections['supervisor'][0].id))
      }
    }
  }, [stage, elections]);

  return (
    <View style={styles.container}>
      <Rodada />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.self}>
          <Image
            style={styles.logo}
            source={require('../../../assets/symbols/vote.png')}
          />
          <Text style={styles.title}>Eleições em {"\n"}{player.city} </Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.resultados}>Resultados:</Text>
          <TouchableOpacity onPress={() => navigation.navigate('Detalhes')} style={styles.historico}>
            <Text style={styles.botao}>DETALHES</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.numeros}>
          {mayor && stage === 'WINNERSELECTION' && (
            <View style={styles.bloquinho}>
              <Text style={styles.texto}>Prefeito</Text>
              <Image source={ICONS[mayor.avatar]} style={styles.icone} />
              <Text style={styles.resultado}>{mayor.name}</Text>
              {elections['mayor'][0].votes === 0 ? null : <Text style={styles.resultado}>{elections['mayor'][0].votes} votos</Text>}
            </View>
          )}
          {cityCouncilor && stage === 'WINNERSELECTION' && (
            <View style={styles.bloquinho}>
              <Text style={styles.texto}>Vereador</Text>
              <Image source={ICONS[cityCouncilor.avatar]} style={styles.icone} />
              <Text style={styles.resultado}>{cityCouncilor.name}</Text>
              {elections['cityCouncilor'][0].votes === 0 ? null : <Text style={styles.resultado}>{elections['cityCouncilor'][0].votes} votos</Text>}
            </View>
          )}
          {supervisor && stage === 'WINNERSELECTION' && (
            <View style={styles.bloquinho}>
              <Text style={styles.texto}>Fiscal</Text>
              <Image source={ICONS[supervisor.avatar]} style={styles.icone} />
              <Text style={styles.resultado}>{supervisor.name}</Text>
              {elections['supervisor'][0].votes === 0 ? null : <Text style={styles.resultado}>{elections['supervisor'][0].votes} votos</Text>}
            </View>
          )}
        </View>

        {/* NÃO É PRA TER ESSE BOTÃO (?) */}
        {/* <Button
          onClick={() => navigation.navigate('MenuPolitico')}
          name='Continuar'
        /> */}
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
    width: Tela
  },
  icone: {
    height: 55,
    width: 50,
    alignSelf: 'center',
    marginTop: 20,
    marginBottom: 10,

  },
  self: {
    flexDirection: 'row',
    marginVertical: 20,
    alignItems: 'center',
    justifyContent: 'center'
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: Tela - 40,
    marginVertical: 20
  },
  title: {
    fontSize: 22,
    alignItems: 'flex-start',
    paddingLeft: 10
  },
  logo: {
    width: 60,
    height: 60
  },
  texto: {
    marginTop: 10,
    fontSize: 13,
    fontFamily: 'Rubik_700Bold',
    alignItems: 'center',
    justifyContent: 'center',
  },
  resultado: {
    fontSize: 13,
  },
  bloquinho: {
    backgroundColor: '#C8EEDE',
    width: 85,
    height: 150,
    alignItems: 'center',
    textAlign: 'center',
    borderRadius: 20,

  },
  numeros: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 40,
    width: Tela,
  },
  resultados: {
    fontSize: 20,
    color: '#58AB23',
    marginLeft: 35
  },
  historico: {
    height: 30,
    backgroundColor: '#66BF00',
    borderRadius: 20,
    paddingHorizontal: 10,
    paddingVertical: 5
  },
  botao: {
    color: '#fff',
  }
});
