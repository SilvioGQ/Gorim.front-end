import React, { useEffect, useContext, useState } from 'react';
import { Text, View, StyleSheet, Image, ScrollView, Dimensions, TouchableOpacity } from 'react-native';
import Button from '../../../Components/Button';
import COLORS from '../../../constants/colors';
import Rodada from '../../../Components/Rodada';
import { GameContext, winnersElection } from '../../../contexts/GameContext';
import IMAGES from '../../../constants/imagesIcons';
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
    if (stage === 'WINNERSELECTION') {
      if(elections['mayor'][0]){
        setMayor(players.find(i => i.id === elections['mayor'][0].id));
      }
      if(elections['cityCouncilor'][0]){
      setCityCouncilor(players.find(i => i.id === elections['cityCouncilor'][0].id))
      }
      if(elections['supervisor'][0]){
      setSupervisor(players.find(i => i.id === elections['supervisor'][0].id))
      }
    }
  }, [stage])
  console.log(elections)
  return (
    <View style={styles.container}>
      <Rodada name={'Resultados das eleições'} />
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
          {mayor && (
            <View style={styles.bloquinho}>
              <Text style={styles.texto}>Prefeito</Text>
              <Image source={IMAGES[mayor.avatar]} style={styles.icone} />
              <Text style={styles.resultado}>{mayor.name}</Text>
              <Text style={styles.resultado}>{elections['mayor'][0].votes} votos</Text>
            </View>
          )}
          {cityCouncilor && (
          <View style={styles.bloquinho}>
            <Text style={styles.texto}>Vereador</Text>
            <Image source={IMAGES[cityCouncilor.avatar]} style={styles.icone} />
            <Text style={styles.resultado}>{cityCouncilor.name}</Text>
            <Text style={styles.resultado}>{elections['cityCouncilor'][0].votes} votos</Text>
          </View>
          )}
          {supervisor && (
          <View style={styles.bloquinho}>
            <Text style={styles.texto}>Fiscal</Text>
            <Image source={IMAGES[supervisor.avatar]} style={styles.icone} />
            <Text style={styles.resultado}>{supervisor.name}</Text>
            <Text style={styles.resultado}>{elections['supervisor'][0].votes} votos</Text>
          </View>
          )}
        </View>

        <Button
          onClick={() => navigation.navigate('frame7')}
          name='Continuar'
        />
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
    padding: 5,
    width: Tela
  },
  icone: {
    height: 50,
    width: 50,
    alignSelf: 'center',
    marginTop: 20,
    marginBottom: 10,

  },
  self: {
    flexDirection: 'row',
    alignSelf: 'center',
    justifyContent: 'center',
    marginVertical: 20
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
    width: '90%',
    marginBottom: 20,
    marginTop: 20

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
    justifyContent: 'space-between',
    marginTop: '3%',
    marginBottom: 40,
    width: "80%",
    alignSelf: 'center'
  },
  resultados: {
    fontSize: 20,
    color: '#58AB23',
    marginLeft: 35
  },
  historico: {
    width: '30%',
    height: 30,
    backgroundColor: '#66BF00',
    borderRadius: 20,

  },
  botao: {
    color: '#fff',
    alignSelf: 'center',
    marginTop: 8
  }
});