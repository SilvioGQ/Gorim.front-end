import React, { useState, useContext } from 'react';
import { Text, View, StyleSheet, Image, Dimensions, ScrollView, FlatList } from 'react-native';
import { GameContext } from "../../../contexts/GameContext";

import ModalInfo from '../../../Components/ModalInfo';
import Button from '../../../Components/Button';
import Quadrados from '../../../Components/Quadrado';
import Coin from '../../../Components/Coin';
import CaixaDeValor from '../../../Components/CaixaDeValor';
import Rodada from '../../../Components/Rodada';
import FiltroTransferencias from '../../../Components/FiltroTransferencias';

const Tela = Dimensions.get('screen').width;
export default function FazerTransferencia({ navigation }) {

  const [modalText, setModalText] = useState('');
  const [count, setCount] = useState(0);
  const [id, setId] = useState();
  const [type, setType] = useState('Agricultor');
  const { players, player, phase } = useContext(GameContext);

  const confirmTransfer = () => {
    if (!id) return setModalText('Selecione o destino!');
    if (count === 0) return setModalText('Adicione um valor!');

    navigation.navigate('ConfirmarTransferencia', { idDest: id, count, provider: phase === 1 ? false : true, type: type == 'Agricultor' || type == "Empresário" ? false : true });
  }

  return (
    <View style={styles.container}>
      <Rodada name={'Fazer transferência'} arrow={true} onClick={() => navigation.goBack()} />
      <ScrollView>
        <Coin coin={phase === 1 ? player.coin : player.serviceSalary} />
        <View style={styles.header}>
          <Image source={require('../../../assets/icons/coin.png')} style={styles.icon} />
          <Text style={styles.textFont}>Fazer {'\n'}transferência</Text>
        </View>
        <Text style={styles.text}>Destinatário:</Text>
        <View style={{ alignItems: 'center' }}>
          <FiltroTransferencias type={type} setType={setType} />
        </View>
        {type === 'Agricultor' ?
          <View style={styles.margin}>
            {phase === 1 ?
              <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} >
                {
                  players.filter(i => i.id !== player.id).map((item, index) => {
                    return (
                      <Quadrados key={index} abr={item.type.slice(0, 3)} player={item} onClick={() => { setId(item.id); }} backgroundColor={id == item.id ? '#8ACF3A' : '#fff'} color={id == item.id ? '#fff' : '#000'} />
                    );
                  })
                }
              </ScrollView>
              :
              <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} >
                {
                  players.filter(i => i.office).map((item, index) => {
                    return (
                      <Quadrados key={index} abr={item.type.slice(0, 3)} player={item} onClick={() => { setId(item.id); }} backgroundColor={id == item.id ? '#8ACF3A' : '#fff'} color={id == item.id ? '#fff' : '#000'} />
                    );
                  })
                }
              </ScrollView>

            }
          </View>
          :
          <View style={styles.margin}>
            {phase === 2 ?
              <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} >
                {
                  players.filter(i => i.id !== player.id).map((item, index) => {
                    return (
                      <Quadrados key={index} abr={item.office.slice(0, 3)} player={item} onClick={() => { setId(item.id); }} backgroundColor={id == item.id ? '#8ACF3A' : '#fff'} color={id == item.id ? '#fff' : '#000'} />
                    );
                  })
                }
              </ScrollView>
              :
              <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} >
                {
                  players.filter(i => i.office).map((item, index) => {
                    return (
                      <Quadrados key={index} abr={item.office.slice(0, 3)} player={item} onClick={() => { setId(item.id); }} backgroundColor={id == item.id ? '#8ACF3A' : '#fff'} color={id == item.id ? '#fff' : '#000'} />
                    );
                  })
                }
              </ScrollView>

            }
          </View>
        }

        <Text style={[styles.text, { marginBottom: 15 }]}>Valor:</Text>
        <CaixaDeValor value={count} setValue={setCount} increment={5} maxValue={phase === 1 ? player.coin : player.serviceSalary} coin={true} />
        <Button onClick={confirmTransfer} name='CONTINUAR' />
        {modalText !== '' && <ModalInfo onClick={() => setModalText('')} text={modalText} />}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginBottom:30
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
    marginHorizontal:15
  }
});