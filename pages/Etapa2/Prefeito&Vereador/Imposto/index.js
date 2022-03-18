import React, { useState, useContext, useEffect } from 'react';
import { Text, View, StyleSheet, Image, TouchableOpacity, Dimensions, ScrollView, FlatList } from 'react-native';
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

  const getTaxActive = (label) => {
    let filterLabel = tax.filter(t => t.label === label);

    return filterLabel.find(lp => lp?.selected);
  }

  const orderTaxs = (label) => {
    let filterLabel = tax.filter(t => t.label === label);
    
    return filterLabel.sort((a, b) => a.value - b.value);
  }

  const getGravity = (label, tax) => {
    let filterLabel = orderTaxs(label);

    let gravity = 0;
    filterLabel.forEach((l, index) => {
      if (l === tax) gravity = index;
    });

    return gravity === 0 ? "Baixo" : gravity === 1 ? "Médio" : "Alto";
  }

  useEffect(() => {
    getCityTax();
  }, []);

  useEffect(() => {
    if (stage === 'GETCITYTAX') {
      setSelectImposto(getTaxActive("Produtividade nula"));
      setSelectImposto2(getTaxActive("Produtividade entre 1 e 200"));
      setSelectImposto3(getTaxActive("Produtividade acima de 200"));
    }
  }, [stage, tax]);

  useEffect(() => {
    if (executeAction) navigation.reset({ routes: [{ name: 'TransferenciaConfirmada', params: { text: player.office === 'Prefeito' ? 'Imposto Aplicado!' : 'Imposto Sugerido!' } }] });

    return () => {
      if (executeAction) player.office === 'Prefeito' ? 
        applyTax({ lowProduction: getGravity("Produtividade nula", selectImposto), mediumProduction: getGravity("Produtividade entre 1 e 200", selectImposto2), highProduction: getGravity("Produtividade acima de 200", selectImposto3) })
        : suggestTax({ lowProduction: getGravity("Produtividade nula", selectImposto), mediumProduction: getGravity("Produtividade entre 1 e 200", selectImposto2), highProduction: getGravity("Produtividade acima de 200", selectImposto3) });
    }
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
          {stage === 'GETCITYTAX' && (
            <FlatList
              data={tax.filter(i => i.label === 'Produtividade nula')}
              horizontal
              keyExtractor={(item) => item.value.toString()}
              renderItem={({ item }) => (
                <TouchableOpacity style={[styles.botao, { backgroundColor: selectImposto === item ? "#8ACF3A" : "#fff" }]} onPress={() => setSelectImposto(item)} >
                  <Text style={[styles.texto, { color: selectImposto == item ? "#fff" : '#000' }]}>{!item.percentual && "$"}{item.value}{item.percentual && "%"}</Text>
                </TouchableOpacity>
              )}
            />
          )}
        </View>

        <Text style={styles.font}> Para produtividade entre 1 e 200:</Text>
        <View style={styles.view}>
          {stage === 'GETCITYTAX' && (
            <FlatList
              data={tax.filter(i => i.label === 'Produtividade entre 1 e 200')}
              horizontal
              keyExtractor={(item) => item.value.toString()}
              renderItem={({ item }) => (
                <TouchableOpacity style={[styles.botao, { backgroundColor: selectImposto2 === item ? "#8ACF3A" : "#fff" }]} onPress={() => setSelectImposto2(item)} >
                  <Text style={[styles.texto, { color: selectImposto2 == item ? "#fff" : '#000' }]}>{!item.percentual && "$"}{item.value}{item.percentual && "%"}</Text>
                </TouchableOpacity>
              )}
            />
          )}
        </View>

        <Text style={styles.font}> Para produtividade acima de 200:</Text>
        <View style={styles.view}>
          {stage === 'GETCITYTAX' && (
            <FlatList
              data={tax.filter(i => i.label === 'Produtividade acima de 200')}
              horizontal
              keyExtractor={(item) => item.value.toString()}
              renderItem={({ item }) => (
                <TouchableOpacity style={[styles.botao, { backgroundColor: selectImposto3 === item ? "#8ACF3A" : "#fff" }]} onPress={() => setSelectImposto3(item)} >
                  <Text style={[styles.texto, { color: selectImposto3 == item ? "#fff" : '#000' }]}>{!item.percentual && "$"}{item.value}{item.percentual && "%"}</Text>
                </TouchableOpacity>
              )}
            />
          )}
        </View>

        <Button
          onClick={() => setExecuteAction(true)}
          name={player.office === 'Vereador' ? 'SUGERIR' : 'APLICAR'} />
        {player.office === 'Prefeito' && (
          <TouchableOpacity style={styles.button} onPress={() => { setSelectImposto(orderTaxs("Produtividade nula")[1]); setSelectImposto2(orderTaxs("Produtividade entre 1 e 200")[1]); setSelectImposto3(orderTaxs("Produtividade acima de 200")[1]); }}>
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
    marginRight: 20,
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
