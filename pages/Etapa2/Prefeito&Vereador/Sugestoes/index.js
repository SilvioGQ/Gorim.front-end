import React, { useState, useEffect, useContext } from 'react';
import { Text, View, StyleSheet, Dimensions, FlatList, ScrollView } from 'react-native';
import { GameContext } from "../../../../contexts/GameContext";

import Coin from '../../../../components/Coin';
import SugestoesRecebidas from '../../../../components/SugestoesRecebidas';
import SugestoesEnviadas from '../../../../components/SugestoesEnviadas';
import Rodada from '../../../../components/Rodada';
import HeaderIcons from '../../../../components/headerIcons';
const Tela = Dimensions.get('screen').width;
export default function Sugestoes({ navigation }) {
  const [modalText, setModalText] = useState('');
  const { player, suggests, disableNotifySuggests } = useContext(GameContext);

  useEffect(() => {
    disableNotifySuggests();
  }, []);

  return (
    <View style={styles.container}>
      <Rodada arrow={true} onClick={() => navigation.navigate('MenuPolitico')} />
      <Coin coin={player.serviceSalary} />
      <HeaderIcons name={'Sugestões'} icon='Sugestões' />
      {player.office === 'Prefeito' && (
        <FlatList
          showsVerticalScrollIndicator={false}
          data={suggests}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item, index }) => <SugestoesRecebidas key={index} item={item} />}
        />
      )}

      {player.office === 'Vereador' && (
        <FlatList
          showsVerticalScrollIndicator={false}
          data={suggests}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item, index }) => <SugestoesEnviadas key={index} item={item} />}
        />
      )}
      {suggests.length === 0 && (
        player.office === 'Vereador' ?
          <Text style={styles.textBold}>Você não fez sugestões!</Text>
          :
          <Text style={styles.textBold}>Não há sugestões!</Text>
      )}

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    textAlign: 'center',
    fontSize: 20,
    marginBottom: 10
  },
  text: {
    textAlign: 'center',
    fontSize: 20,
    marginVertical: 5
  },
  textSmall: {
    textAlign: 'center',
    fontSize: 13,
    marginTop: 9
  },
  textBold: {
    flex: 1.5,
    textAlign: 'center',
    fontFamily: 'Rubik_700Bold',
    fontSize: 18,
    justifyContent: 'center'
  },
  button: {
    width: '22%',
    height: 40,
    borderRadius: 50,
    borderWidth: 1
  },
  texto: {
    marginVertical: 20,

    fontSize: 22,
    textAlign: 'center'
  }
});
