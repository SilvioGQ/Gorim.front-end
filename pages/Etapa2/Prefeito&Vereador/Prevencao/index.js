import React, { useState, useContext, useEffect } from 'react';
import { Text, View, StyleSheet, Image, Dimensions, TouchableOpacity, ScrollView, FlatList } from 'react-native';
import { GameContext, applyPrevention, suggestPrevention, getPreventions } from '../../../../contexts/GameContext';

import Button from '../../../../components/Button';
import Rodada from '../../../../components/Rodada';
import Coin from '../../../../components/Coin';
import Modal from '../../../../components/ModalInfo';
import IMAGES from '../../../../constants/imagesProducts';
import normalizeNumber from '../../../../helpers/normalizeNumber';

const Tela = Dimensions.get('screen').width;
export default function Prevencao({ navigation }) {

  const [selectMedida, setSelectMedida] = useState({});
  const { player, stage, data: preventions } = useContext(GameContext);
  const [modalVisible, setModalVisible] = useState('');
  const [executeAction, setExecuteAction] = useState(false);

  useEffect(() => {
    getPreventions();
  }, []);

  useEffect(() => {
    if (executeAction) navigation.reset({ routes: [{ name: 'TransferenciaConfirmada', params: { text: player.office === 'Prefeito' ? 'Medida aplicada!' : 'Medida Sugerida!' } }] });

    return () => { if (executeAction) player.office === 'Prefeito' ? applyPrevention(selectMedida) : suggestPrevention(selectMedida); }
  }, [executeAction]);

  const apply = () => {
    if (player.serviceSalary < selectMedida.value && player.office !== 'Vereador') return setModalVisible('Saldo insuficiente');
    if (Object.keys(selectMedida).length !== 0) {
      setExecuteAction(true);
    } else return setModalVisible('Selecione alguma medida preventiva');
  }


  return (
    <View style={styles.container}>
      <Rodada arrow={true} onClick={() => navigation.navigate('MenuPolitico')} />
      <ScrollView>
      <Coin coin={player.serviceSalary} />
      <View style={styles.espaco}>
        <Image
          style={{ width: 62, height: 62 }}
          source={require('../../../../assets/icons/water.png')}
        />
        <Text style={{ fontSize: 20, marginTop: 15, marginLeft: 5 }}>{player.office === 'Vereador' ? 'Sugerir Medidas de\nPrevenção' : 'Medidas de\nPrevenção'}</Text>
      </View>
      <Text style={styles.header}>{player.office === 'Vereador' ? 'Sugerir mudanças na cidade' : 'Medidas a aplicar na cidade:'}</Text>
      {modalVisible !== '' && (
        <Modal onClick={() => setModalVisible('')} text={modalVisible} />
      )}
      <View style={styles.row}>
        <FlatList
          data={preventions}
          scrollEnabled={true}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <View style={styles.quadrados}>
              <TouchableOpacity style={[styles.fundo, { backgroundColor: selectMedida.id == item.id ? "#8ACF3A" : '#fff' }]} onPress={() => setSelectMedida({ id: item.id, value: item.value, preventionPercentual: item.pollutionReduction, label: item.label })}  >
                <Image style={styles.image} source={IMAGES[item.label]} />
                <Text style={[styles.texto, { color: selectMedida.id == item.id ? "#fff" : '#000' }]}>{item.label}</Text>
                <Text style={[styles.textomenor, { color: selectMedida.id == item.id ? "#fff" : '#000' }]}>Reduz a poluição em {normalizeNumber(item.pollutionReduction * 100)}%</Text>
                <Text style={[styles.textopreco, { color: selectMedida.id == item.id ? "#fff" : '#000' }]}>Preço: ${normalizeNumber(item.value)}</Text>
              </TouchableOpacity>
            </View>
          )
          } />
      </View>
      <View style={{ marginBottom: 25 }}>
        <Button
          onClick={() => apply()}
          name={player.office === 'Vereador' ? 'SUGERIR' : 'APLICAR'} />
      </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: Tela
  },
  image: {
    width: 50,
    height: 50,
    marginTop: 15,
    marginBottom: 10,
    marginLeft: 20,
    position: 'absolute'
  },
  row: {
    flexDirection: 'row',
    marginTop: 20,
    marginBottom: 40,
    width: Tela,
    flexWrap: 'wrap'
  },
  quadrados: {
    marginVertical: 10,
    marginHorizontal: Tela > 350 ? 20 : 16,
  },
  texto: {
    marginTop: 18,
    fontSize: 16,
    marginLeft: 80,
    fontFamily: 'Rubik_700Bold',
  },
  textomenor: {
    fontSize: 13,
    marginLeft: 80,
  },
  textopreco: {
    marginTop: 13,
    fontSize: 20,
    marginLeft: 20,
  },
  fundo: {
    backgroundColor: "#fff",
    width: 330,
    height: 110,
    borderRadius: 20,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.32,
    shadowRadius: 5.46,

    elevation: 6
  },
  espaco: {
    flexDirection: 'row',
    alignSelf: 'center',
    justifyContent: 'center',
    width: Tela
  },
  header: {
    fontSize: 20,
    marginTop: 25,
    marginLeft: 20
  },
});
