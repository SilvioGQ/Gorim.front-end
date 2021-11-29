import React, {useContext, useState} from 'react';
import { Text, View, StyleSheet, Image, Dimensions } from 'react-native';
import Cargos from '../../../Components/Cargos';
import Button from '../../../Components/Button';
import Rodada from '../../../Components/Rodada';
import { addCandidature, GameContext, getElections } from '../../../contexts/GameContext';
import { useEffect } from 'react';
const Tela = Dimensions.get('screen').width
export default function Candidatura({ navigation }) {
  const { players, player, stage } = useContext(GameContext);
  useEffect(()=>{
    // navigation.navigate('Votacao')
  },[stage])
  const [isSelected, setSelection] = useState(false);
  return (
    <View style={styles.container}>
      <Rodada name={'Cadidatura'} />
      <View style={styles.row}>
        <Image
          style={styles.logo}
          source={require('../../../assets/symbols/vote.png')}
        />
        <Text style={styles.title}>Eleições em {"\n"}{player.city}</Text>
      </View>
      <View style={styles.texto}>
        <Text style={styles.paragrafo}>Antes de começar, a cidade de {player.city} precisa de representantes e reguladores que serão responsáveis por gerir os recursos públicos em busca de alinhar lucro e meio ambiente. Você pode se candidatar à estes cargos e, logo, haverá uma votação para eleger os líderes da cidade! </Text>
      </View>
      <View>
          <Cargos isSelected={isSelected} setSelection={setSelection} />
      </View>
      <Button
        onClick={() => {addCandidature(isSelected);  }  }
        name='CANDIDATAR'
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  row: {
    flexDirection: 'row',
    marginVertical:20
  },
  logo: {
    height: 60,
    width: 60
  },
  title: {
    fontSize: 23,
    marginTop: 15,
    alignItems: 'center'
  },
  texto: {
    marginEnd: '4%',
    marginStart: '4%',
    marginTop: '2%'
  },
  paragrafo: {
    fontSize: 18,
    // lineHeight: 30,
    textAlign:'justify',
    marginHorizontal:10,
    marginBottom:15
  }
});