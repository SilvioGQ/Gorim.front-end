import React, { useState, useEffect, useContext } from 'react';
import { Text, View, StyleSheet, Image, Dimensions, ScrollView, FlatList } from 'react-native';
import { GameContext, getPlayersOffice, getPlayers } from "../../../../contexts/GameContext";

import ModalInfo from '../../../../components/ModalInfo';
import Button from '../../../../components/Button';
import Quadrados from '../../../../components/Quadrado';
import Coin from '../../../../components/Coin';
import CaixaDeValor from '../../../../components/CaixaDeValor';
import Rodada from '../../../../components/Rodada';
import FilterNew from '../../../../components/FilterNew';
import HeaderIcons from '../../../../components/headerIcons';
const Tela = Dimensions.get('screen').width;
export default function FazerTransferencia({ navigation }) {

  const [modalText, setModalText] = useState('');
  const [count, setCount] = useState(0);
  const [id, setId] = useState();
  const [type, setType] = useState('Agr/Emp');
  const { players, player, game, data: players2, stage } = useContext(GameContext);

  useEffect(() => {
    if (game.phase === 1) {
      getPlayersOffice();
    } else {
      getPlayers();
    }
  }, []);

  const Players = () => {
    if (game.phase === 1) {
      return players.filter(i => i.id !== player.id)
    } else return players2
  }
  const PlayersOffice = () => {
    if (game.phase === 2) {
      return players.filter(i => i.id !== player.id)
    } else return players2
  }
  const confirmTransfer = () => {
    if (!id) return setModalText('Selecione o destino!');
    if (count === 0) return setModalText('Adicione um valor!');
    const destName = players.find(i => i.id === id).name
    navigation.navigate('ConfirmarTransferencia', { idDest: id, nameDest: destName, count, provider: game.phase === 1 ? false : true, type: type == 'Agr/Emp' ? false : true });
  }

  return (
    <View style={styles.container}>
      <Rodada arrow={true} onClick={() => navigation.goBack()} />
      <ScrollView>
        <Coin coin={game.phase === 1 ? player.coin : player.serviceSalary} />
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
                  PlayersOffice().filter(i=>i.office).map((item, index) => {
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
        <CaixaDeValor value={count} setValue={setCount} increment={5} maxValue={game.phase === 1 ? player.coin : player.serviceSalary} coin={true} />
        <Button onClick={confirmTransfer} name='CONTINUAR' />
        {modalText !== '' && <ModalInfo  onClick={() => setModalText('')} text={modalText} />}
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
