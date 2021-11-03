import React, {useContext} from 'react';
import { Text, View, StyleSheet, Image, TouchableOpacity, Dimensions, ScrollView, } from 'react-native';
import { GameContext, makeTransfer } from "../../../contexts/GameContext";

import Button from '../../../Components/Button';
import COLORS from '../../../constants/colors';
import Rodada from '../../../Components/Rodada';

const Tela = Dimensions.get('screen').width;
export default function ConfirmarTransferencia({ navigation, route }) {

  const { count, idDest, type, provider } = route.params;
  const { phase } = useContext(GameContext);
  const make = () => {
    makeTransfer(count, idDest, provider, type);
    navigation.reset({ routes: [{ name: 'TransferenciaConfirmada', params: { text: 'Sua transferência foi concluída!' } }] });
  }
  return (
    <View style={styles.container}>
      <Rodada name={'Fazer transferência'} arrow={true} onClick={()=>navigation.goBack()}/>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Text style={styles.text}>Fazer transferência</Text>
        <Image style={styles.logo} source={require('../../../assets/symbols/transfer.png')} />
        <Text style={styles.text}> Deseja confirmar a transação?</Text>
        <Text style={styles.text2}>${JSON.stringify(count)} </Text>
        <View style={{ marginVertical: 10 }}>
          <Button onClick={make} name='CONTINUAR' />
          <TouchableOpacity onPress={() => navigation.reset({ routes: [{ name: phase === 1 ? 'MenuJogador' : 'MenuPolitico' }] })} style={styles.button}  >
            <Text style={styles.textButton}>CANCELAR</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    width: Tela,
  },
  logo: {
    height: 140,
    width: 140,
    alignSelf: 'center',
    marginVertical: 50
  },
  text: {
    fontFamily: 'Rubik_400Regular',
    fontSize: 24,
    textAlign: 'center',
    marginVertical: 10,
  },
  text2: {
    
    fontSize: 48,
    textAlign: 'center',
    marginVertical: 20
  },
  textButton: {
    color: COLORS.textWhite,
    fontSize: 15,
    fontFamily: 'Rubik_400Regular',
    textAlign: 'center',
    alignItems: 'center',
    marginTop: 15
  },
  button: {
    height: 45,
    margin: '2%',
    alignSelf: 'center',
    backgroundColor: COLORS.warningButton,
    borderRadius: 25,
    width: '80%',
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.32,
    shadowRadius: 4.46,
    elevation: 2,
  }
});
