import React, { useState, useEffect, useContext } from 'react';
import { Text, View, StyleSheet, Image, Dimensions, ScrollView, FlatList } from 'react-native';
import { GameContext, getPlayersOffice, getPlayers } from "../../../../contexts/GameContext";

import ModalInfo from '../../../../Components/ModalInfo';
import Button from '../../../../Components/Button';
import Quadrados from '../../../../Components/Quadrado';
import Coin from '../../../../Components/Coin';
import CaixaDeValor from '../../../../Components/CaixaDeValor';
import Rodada from '../../../../Components/Rodada';
import FilterNew from '../../../../Components/FilterNew';
import HeaderIcons from '../../../../Components/headerIcons';
const Tela = Dimensions.get('screen').width;
export default function FazerTransferencia({ navigation }) {

  const [modalText, setModalText] = useState('');
  const [count, setCount] = useState(0);
  const [id, setId] = useState();
  const [type, setType] = useState('Agr/Emp');
  const { players, player, phase, data: players2, stage } = useContext(GameContext);

  useEffect(() => {
    if (phase === 1) {
      getPlayersOffice();
    } else {
      getPlayers();
    }
  }, []);
  const Players = () => {
    if (phase === 1) {
      return players.filter(i => i.id !== player.id)
    } else return players2
  }
  const PlayersOffice = () => {
    if (phase === 2) {
      return players.filter(i => i.id !== player.id)
    } else return players2
  }
  const confirmTransfer = () => {
    if (!id) return setModalText('Selecione o destino!');
    if (count === 0) return setModalText('Adicione um valor!');
    const destName = players.find(i => i.id === id).name
    navigation.navigate('ConfirmarTransferencia', { idDest: id, nameDest: destName, count, provider: phase === 1 ? false : true, type: type == 'Agr/Emp' ? false : true });
  }

  return (
    <View style={styles.container}>
      <Rodada name={'Fazer transferência'} arrow={true} onClick={() => navigation.goBack()} />
      <ScrollView>
        <Coin coin={phase === 1 ? player.coin : player.serviceSalary} />
        <HeaderIcons name={'Fazer \nTranferência'} icon='Fazer Transferência' />
        <Text style={styles.text}>Destinatário:</Text>
        <View style={{ alignItems: 'center' }}>
          <FilterNew nome1='Agr/Emp' nome2='Ver/Pre/Fis' type={type} setType={setType} />
        </View>
        {type === 'Agr/Emp' ?
          <View style={styles.margin}>
            <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} >
              {
                stage === 'GETPLAYERS' ?
                  Players().map((item, index) => {
                    return (
                      <Quadrados key={index} abr={item.type.slice(0, 3)} player={item} onClick={() => { setId(item.id); }} backgroundColor={id == item.id ? '#8ACF3A' : '#fff'} color={id == item.id ? '#fff' : '#000'} />
                    );
                  })
                  :
                  null
              }
            </ScrollView>
          </View>
          :
          <View style={styles.margin}>
            <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} >
              {
                stage === 'GETPLAYERS' ?
                  PlayersOffice().map((item, index) => {
                    return (
                      <Quadrados key={index} abr={item.office.slice(0, 3)} player={item} onClick={() => { setId(item.id); }} backgroundColor={id == item.id ? '#8ACF3A' : '#fff'} color={id == item.id ? '#fff' : '#000'} />
                    );
                  })
                  :
                  null
              }
            </ScrollView>
          </View>
        }

        <Text style={[styles.text, { marginBottom: 15 }]}>Valor:</Text>
        <CaixaDeValor value={count} setValue={setCount} increment={5} maxValue={phase === 1 ? player.coin : player.serviceSalary} coin={true} />
        <Button onClick={confirmTransfer} name='CONTINUAR' />
        {modalText !== '' && <ModalInfo player={player} onClick={() => setModalText('')} text={modalText} />}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginBottom: 30
  },
  header: {
    flexDirection: 'row',
    alignSelf: 'center',
    justifyContent: 'center',
    margin: 15,
    width: Tela
  },
  text: {
    fontSize: 18,
    marginTop: 30,
    marginHorizontal: 15,
  },
  textFont: {
    fontSize: 20
  },
  icon: {
    width: 63,
    height: 61
  },
  margin: {
    justifyContent: 'center',
    marginHorizontal: 15
  }
});