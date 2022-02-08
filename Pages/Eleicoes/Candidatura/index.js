import React, {useContext, useState, useEffect} from 'react';
import { Text, View, StyleSheet, Image, Dimensions } from 'react-native';
import Cargos from '../../../Components/Cargos';
import Button from '../../../Components/Button';
import Rodada from '../../../Components/Rodada';
import Modal from '../../../Components/ModalInfo';

import { addCandidature, GameContext } from '../../../contexts/GameContext';
import COLORS from '../../../constants/colors';
const Tela = Dimensions.get('screen').width;
export default function Candidatura({ navigation }) {
  const { players, player, awaitPlayers, stage } = useContext(GameContext);
  const [isSelected, setSelection] = useState(false);
  const [modalVisible, setModalVisible] = useState('');

	useEffect(() => {
    if (stage === 'INITVOTATION') navigation.navigate('Votacao');
  }, [stage]);
  
  return (
    <View style={styles.container}>
      <Rodada name={'Candidatura'} />
      <View style={styles.row}>
        <Image
          style={styles.logo}
          source={require('../../../assets/symbols/vote.png')}
        />
        <Text style={styles.title}>Eleições em {"\n"}{player.city}</Text>
      </View>
      {modalVisible !== '' && (
        <Modal onClick={() => setModalVisible('')} text={modalVisible} />
      )}
      <View style={styles.texto}>
        <Text style={styles.paragrafo}>Antes de começar, a cidade de {player.city} precisa de representantes e reguladores que serão responsáveis por gerir os recursos públicos em busca de alinhar lucro e meio ambiente. Você pode se candidatar à estes cargos e, logo, haverá uma votação para eleger os líderes da cidade! </Text>
      </View>
      <View>
          <Cargos isSelected={isSelected} setSelection={setSelection} />
      </View>
      <Button
        onClick={() => { isSelected !== false ? addCandidature(isSelected) : setModalVisible('Selecione alguma opção');   }  }
        name='CANDIDATAR'
      />
      <Text style={{ fontSize: 14, textAlign: 'center', marginTop: 10, marginBottom:20, color:COLORS.warningButton}}>{awaitPlayers} de {players.length} se candidataram</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    marginBottom: 30,
  },
  row: {
    flexDirection: 'row',
    marginVertical:20
  },
  logo: {
    width:  Tela > 350 ? 60 : 50,
    height: Tela > 350 ? 60 : 50,
  },
  title: {
    fontSize: Tela > 350 ? 23 : 16,
    marginTop: 15,
    alignItems: 'center'
  },
  texto: {
    marginEnd: '4%',
    marginStart: '4%',
    marginTop: '2%'
  },
  paragrafo: {
    fontSize:Tela > 350 ? 18 : 13,
    // lineHeight: 30,
    textAlign:'justify',
    marginHorizontal:10,
    marginBottom:15
  }
});