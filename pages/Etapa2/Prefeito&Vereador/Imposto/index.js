import React, { useState, useContext, useEffect } from 'react';
import { Text, View, StyleSheet, Image, TouchableOpacity, Dimensions, ScrollView } from 'react-native';
import { GameContext, applyTax, getCityTax, suggestTax } from '../../../../contexts/GameContext';

import Button from '../../../../components/Button';
import Rodada from '../../../../components/Rodada';
import Coin from '../../../../components/Coin';
import IMAGES from '../../../../constants/imagesMenu/index'
import normalizeNumber from '../../../../helpers/normalizeNumber';

const Tela = Dimensions.get('screen').width;

export default function Imposto({ navigation }) {
  const [selectImposto, setSelectImposto] = useState(-1);
  const [selectImposto2, setSelectImposto2] = useState(-1);
  const [selectImposto3, setSelectImposto3] = useState(-1);
  const { player, stage, data: tax } = useContext(GameContext);
  const [executeAction, setExecuteAction] = useState(false);

  useEffect(() => {
    getCityTax();
  }, []);

  useEffect(() => {
    if (stage === 'GETCITYTAX') {
      setSelectImposto(tax.lowProduction);
      setSelectImposto2(tax.mediumProduction);
      setSelectImposto3(tax.highProduction);
    }
  }, [stage, tax]);

  useEffect(() => {
    if (executeAction) navigation.reset({ routes: [{ name: 'TransferenciaConfirmada', params: { text: player.office === 'Prefeito' ? 'Imposto Aplicado!' : 'Imposto Sugerido!' } }] });

    return () => {
      if (executeAction) player.office === 'Prefeito' ? applyTax({ lowProduction: selectImposto, mediumProduction: selectImposto2, highProduction: selectImposto3 }) : suggestTax({ lowProduction: selectImposto, mediumProduction: selectImposto2, highProduction: selectImposto3 }); }
  }, [executeAction]);

  return (
    <View style={styles.container}>
      <Rodada arrow={true} onClick={() => navigation.navigate('MenuPolitico')} />
      <ScrollView>
        <Coin coin={player.serviceSalary} />
        <View style={styles.espaco}>
          <Image
            style={{ width: 62, height: 48 }}
            source={IMAGES['Alteração de impostos']}
          />
          <Text style={styles.header}>{player.office === 'Vereador' ? 'Sugerir alteração de\nimpostos' : 'Alteração\nde impostos'}</Text>
        </View>
        <Text style={styles.font}> Para produtividade nula:</Text>
        <View style={styles.view}>
          <TouchableOpacity style={[styles.botao, { backgroundColor: selectImposto == "Baixo" ? "#8ACF3A" : '#fff' }]} onPress={() => setSelectImposto("Baixo")}  >
            <Text style={[styles.texto, { color: selectImposto == "Baixo" ? "#fff" : '#000' }]}>${normalizeNumber(5)}</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.botao, { backgroundColor: selectImposto == "Médio" ? "#8ACF3A" : '#fff' }]} onPress={() => setSelectImposto("Médio")}  >
            <Text style={[styles.texto, { color: selectImposto == "Médio" ? "#fff" : '#000' }]}>${normalizeNumber(10)}</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.botao, { backgroundColor: selectImposto == "Alto" ? "#8ACF3A" : '#fff' }]} onPress={() => setSelectImposto("Alto")}  >
            <Text style={[styles.texto, { color: selectImposto == "Alto" ? "#fff" : '#000' }]}>${normalizeNumber(15)}</Text>
          </TouchableOpacity>
        </View>

        <Text style={styles.font}> Para produtividade entre 1 e 200:</Text>
        <View style={styles.view}>
          <TouchableOpacity style={[styles.botao, { backgroundColor: selectImposto2 == "Baixo" ? "#8ACF3A" : '#fff' }]} onPress={() => setSelectImposto2("Baixo")}  >
            <Text style={[styles.texto, { color: selectImposto2 == "Baixo" ? "#fff" : '#000' }]}>{normalizeNumber(5)}%</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.botao, { backgroundColor: selectImposto2 == "Médio" ? "#8ACF3A" : '#fff' }]} onPress={() => setSelectImposto2("Médio")}  >
            <Text style={[styles.texto, { color: selectImposto2 == "Médio" ? "#fff" : '#000' }]}>{normalizeNumber(10)}%</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.botao, { backgroundColor: selectImposto2 == "Alto" ? "#8ACF3A" : '#fff' }]} onPress={() => setSelectImposto2("Alto")}  >
            <Text style={[styles.texto, { color: selectImposto2 == "Alto" ? "#fff" : '#000' }]}>{normalizeNumber(15)}%</Text>
          </TouchableOpacity>
        </View>

        <Text style={styles.font}> Para produtividade acima de 200:</Text>
        <View style={styles.view}>
          <TouchableOpacity style={[styles.botao, { backgroundColor: selectImposto3 == "Baixo" ? "#8ACF3A" : '#fff' }]} onPress={() => setSelectImposto3("Baixo")}  >
            <Text style={[styles.texto, { color: selectImposto3 == "Baixo" ? "#fff" : '#000' }]}>{normalizeNumber(25)}%</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.botao, { backgroundColor: selectImposto3 == "Médio" ? "#8ACF3A" : '#fff' }]} onPress={() => setSelectImposto3("Médio")}  >
            <Text style={[styles.texto, { color: selectImposto3 == "Médio" ? "#fff" : '#000' }]}>{normalizeNumber(30)}%</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.botao, { backgroundColor: selectImposto3 == "Alto" ? "#8ACF3A" : '#fff' }]} onPress={() => setSelectImposto3("Alto")}  >
            <Text style={[styles.texto, { color: selectImposto3 == "Alto" ? "#fff" : '#000' }]}>{normalizeNumber(35)}%</Text>
          </TouchableOpacity>
        </View>

        <Button
          onClick={() => setExecuteAction(true)}
          name={player.office === 'Vereador' ? 'SUGERIR' : 'APLICAR'} />
        {player.office === 'Prefeito' && (
          <TouchableOpacity style={styles.button} onPress={() => { setSelectImposto("Médio"); setSelectImposto2("Médio"); setSelectImposto3("Médio") }}>
            <Text style={styles.textButton}>RETOMAR VALOR INICIAL</Text>
          </TouchableOpacity>
        )}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: Tela,
  },
  espaco: {
    flexDirection: 'row',
    alignSelf: 'center',
    justifyContent: 'center',
    margin: 15,
    width: Tela
  },
  header: {

    fontSize: 20,
  },
  font: {
    marginLeft: 25,
    marginRight: 25,
    fontSize: 20,
    marginTop: 15,
    fontFamily: 'Rubik_300Light'
  },
  view: {
    flexDirection: 'row',
    width: '90%',
    marginHorizontal: 20,
    justifyContent: 'space-around',
    marginVertical: 10,
  },
  botao: {
    backgroundColor: '#fff',
    borderRadius: 20,
    width: 96,
    height: 38,
    alignContent: 'center',
    alignItems: 'center',
    marginBottom: 40,
    marginTop: 17,
    borderWidth: 1,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.20,
    shadowRadius: 5.00,

    elevation: 6
  },
  texto: {
    marginVertical: 7,
    fontSize: 15,
  },
  textButton: {
    color: '#fff',
    fontSize: 15,
    fontFamily: 'Rubik_400Regular',
    textAlign: 'center',
    alignItems: 'center',
    marginTop: 15
  },
  button: {
    height: 47,
    margin: '2%',
    alignSelf: 'center',
    backgroundColor: '#BF0000',
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
