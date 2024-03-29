import React, { useState, useContext, useEffect } from 'react';
import { Text, View, StyleSheet, Image, Dimensions, TouchableOpacity, ScrollView } from 'react-native';
import { GameContext, toPlant, addSprayParcel, requestStamp } from "../../../../contexts/GameContext";

import Button from '../../../../components/Button';
import COLORS from '../../../../constants/colors';
import DropDown from '../../../../components/DropDown';
import Conf from '../../../../components/Selo-Verde-Confirmacao';
import ModalInfo from '../../../../components/ModalInfo';
import IMAGES from '../../../../constants/imagesProducts';
import IMAGESMENU from '../../../../constants/imagesMenu';
import Rodada from '../../../../components/Rodada';
import HeaderIcons from '../../../../components/headerIcons';
const Tela = Dimensions.get('screen').width;
export default function Parcela({ route, navigation }) {

  const [parcelLand, setParcelLand] = useState(route.params.parcelLand);
  const [modalText, setModalText] = useState('');
  const [modalText2, setModalText2] = useState('');
  const [dropDown, setDropDown] = useState(false);
  const [dropDown2, setDropDown2] = useState(false);
  const [dropDown3, setDropDown3] = useState(false);
  const [dropDown4, setDropDown4] = useState(false);
  const { player } = useContext(GameContext);

  useEffect(() => {
    if (player.parcelLand[parcelLand.id] !== parcelLand) setParcelLand(player.parcelLand[parcelLand.id]);
  }, [player]);

  const selectItem = (name, type) => {
    for (let i = 0; i < 3; i++) {

      if (type == 'Semente') setParcelLand({ ...parcelLand, seed: name });
      if (type == 'Fertilizante') setParcelLand({ ...parcelLand, fertilizer: name });
      if (type == 'Agrotóxico') setParcelLand({ ...parcelLand, pesticide: name });
      if (type == 'Máquina') setParcelLand({ ...parcelLand, machine: name });
    }
    setDropDown(false);
    setDropDown2(false);
    setDropDown3(false);
    setDropDown4(false);
  }

  const selectItems = () => {
    if (!parcelLand.seed) return setModalText2('Selecione uma semente!');
    if (parcelLand.pesticide && parcelLand.machine) return setModalText2('Não pode utilizar agrotóxico e máquinas ao mesmo tempo!');

    toPlant(parcelLand);
  }

  const toPulverize = () => {
    if (!parcelLand.planted) return setModalText2('Você deve plantar na parcela primeiro!');

    let found = false;
    player.inventory.forEach(e => {
      if (e.name == 'Pulverizador' && e.amount > 0) found = true;
    });
    if (!found) return setModalText2('Você não possuí um pulverizador!');

    addSprayParcel(parcelLand);
  }

  return (
    <View style={styles.container}>
      <Rodada arrow={true} onClick={() => navigation.goBack()} />
      <ScrollView>
        <HeaderIcons name={'Aplicação \nem parcela'} icon='Aplicação em parcela' />
        {parcelLand.planted && !parcelLand.requestStamp && parcelLand.pesticide === null && (
          <TouchableOpacity style={styles.button2} onPress={() => setModalText('Tem certeza de que deseja solicitar o selo verde ao fiscal?')}   >
            <Text style={styles.buttonText}>PEDIR SELO VERDE</Text>
            <Image source={IMAGESMENU["Pedir selo verde"]} style={styles.pulverize} />
          </TouchableOpacity>
        )}
        {parcelLand.requestStamp && <Text style={[styles.textparcel]}>Selo requisitado!</Text>}
        <Text style={styles.title}>Nesta parcela:</Text>

        <TouchableOpacity onPress={() => { if (!parcelLand.planted) setDropDown(!dropDown) }}  >
          <View style={styles.row}>
            <Image style={[styles.image, { width: parcelLand.seed ? 35 : 25, height: parcelLand.seed ? 35 : 45 }]}
              source={parcelLand.seed ? IMAGES[parcelLand.seed] : IMAGES['Desconhecido']} />
            <View>
              <Text>Sementes</Text>
              <Text style={styles.bold}>{parcelLand.seed ? parcelLand.seed : '-'}</Text>
            </View>
            {parcelLand.seed && !parcelLand.planted && (
              <TouchableOpacity style={styles.estilo} onPress={() => setParcelLand({ ...parcelLand, seed: null })}  >
                <Image source={require('../../../../assets/agricultorIcones/FecharVermelho.png')} style={styles.imagem} />
              </TouchableOpacity>
            )}
          </View>
        </TouchableOpacity>
        <DropDown items={player.inventory} type={'Semente'} onClick={selectItem} display={dropDown ? 'flex' : 'none'} />

        <TouchableOpacity onPress={() => { if (!parcelLand.planted) setDropDown2(!dropDown2) }}  >
          <View style={styles.row}>
            <Image style={[styles.image, { width: parcelLand.fertilizer ? 35 : 25, height: parcelLand.fertilizer ? 35 : 45 }]}
              source={parcelLand.fertilizer ? IMAGES[parcelLand.fertilizer] : IMAGES['Desconhecido']} />
            <View>
              <Text>Fertilizantes</Text>
              <Text style={styles.bold}>{parcelLand.fertilizer ? parcelLand.fertilizer.replace(/Fertilizante /, '') : '-'}</Text>
            </View>
            {parcelLand.fertilizer && !parcelLand.planted && (
              <TouchableOpacity style={styles.estilo} onPress={() => setParcelLand({ ...parcelLand, fertilizer: null })}  >
                <Image source={require('../../../../assets/agricultorIcones/FecharVermelho.png')} style={styles.imagem} />
              </TouchableOpacity>
            )}
          </View>
        </TouchableOpacity>
        <DropDown items={player.inventory} type={'Fertilizante'} onClick={selectItem} display={dropDown2 ? 'flex' : 'none'} />

        <TouchableOpacity onPress={() => { if (!parcelLand.planted) setDropDown3(!dropDown3) }}  >
          <View style={styles.row}>
            <Image style={[styles.image, { width: parcelLand.pesticide ? 35 : 25, height: parcelLand.pesticide ? 35 : 45 }]}
              source={parcelLand.pesticide ? IMAGES[parcelLand.pesticide] : IMAGES['Desconhecido']} />
            <View>
              <Text>Agrotóxicos</Text>
              <Text style={styles.bold}>{parcelLand.pesticide ? parcelLand.pesticide.replace(/Agrotóxico /, '') : '-'}</Text>
            </View>
            {parcelLand.pesticide && !parcelLand.planted && (
              <TouchableOpacity style={styles.estilo} onPress={() => setParcelLand({ ...parcelLand, pesticide: null })}  >
                <Image source={require('../../../../assets/agricultorIcones/FecharVermelho.png')} style={styles.imagem} />
              </TouchableOpacity>
            )}
          </View>
        </TouchableOpacity>
        <DropDown items={player.inventory} type={'Agrotóxico'} onClick={selectItem} display={dropDown3 ? 'flex' : 'none'} />

        <TouchableOpacity onPress={() => { if (!parcelLand.planted) setDropDown4(!dropDown4) }}  >
          <View style={styles.row}>
            <Image style={[styles.image, { width: parcelLand.machine ? 35 : 25, height: parcelLand.machine ? 35 : 45 }]}
              source={parcelLand.machine ? IMAGES[parcelLand.machine] : IMAGES['Desconhecido']} />
            <View>
              <Text>Máquinas</Text>
              <Text style={styles.bold}>{parcelLand.machine ? parcelLand.machine : '-'}</Text>
            </View>
            {parcelLand.machine && !parcelLand.planted && (
              <TouchableOpacity style={styles.estilo} onPress={() => setParcelLand({ ...parcelLand, machine: null })}  >
                <Image source={require('../../../../assets/agricultorIcones/FecharVermelho.png')} style={styles.imagem} />
              </TouchableOpacity>
            )}
          </View>
        </TouchableOpacity>
        <DropDown items={player.inventory} type={'Máquina'} onClick={selectItem} display={dropDown4 ? 'flex' : 'none'} />

        {parcelLand.spray && <Text style={[styles.textparcel]}>Pulverizador ativo</Text>}
        {!parcelLand.spray && (
          <TouchableOpacity style={styles.button} onPress={toPulverize}  >
            <Text style={styles.buttonText}>PULVERIZAR</Text>
            <Image source={require('../../../../assets/agricultorIcones/Pulverize.png')} style={styles.pulverize} />
          </TouchableOpacity>
        )
        }
        {parcelLand.planted ?
          <Text style={{ fontSize: 22, textAlign: 'center', marginTop: '10%', fontFamily: 'Rubik_300Light' }}>Plantio iniciado!</Text> :
          <Button onClick={selectItems} name='INICIAR PLANTIO' />
        }
        {modalText !== '' && <Conf confirm={() => { requestStamp(parcelLand); setModalText('') }} text={modalText} denied={() => setModalText('')} />}
        {modalText2 !== '' && <ModalInfo  onClick={() => setModalText2('')} text={modalText2} />}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  parcel: {
    width: 70,
    height: 70,
    margin: '5%'
  },
  row: {
    flexDirection: 'row',
    paddingVertical: 30,
    marginLeft: Tela * 0.05 + '%',
    marginRight: 20
  },
  rowX: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  espaco: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    width: Tela
  },
  header: {

    fontSize: 20,
  },
  image: {
    marginRight: '20%'
  },
  title: {
    fontSize: 18,
    marginTop: 15,

    alignSelf: 'flex-start',
    marginLeft: 60
  },
  bold: {
    fontSize: 14,
    fontFamily: 'Rubik_700Bold',
  },
  button: {
    flexDirection: 'row',
    height: 45,
    margin: '2%',
    marginLeft: 40,
    alignItems: 'center',
    justifyContent: 'center',
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
  },

  buttonText: {
    textTransform: 'uppercase',
    color: COLORS.textWhite,
    fontSize: 15,
    fontFamily: 'Rubik_400Regular',
    marginLeft: 15,
    textAlign: 'center'
  },
  pulverize: {
    marginLeft: 15,
    width: 30,
    height: 30
  },
  button2: {
    flexDirection: 'row',
    height: 45,
    margin: '2%',
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: COLORS.successButton,
    borderRadius: 25,
    width: '65%',
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.32,
    shadowRadius: 4.46,
    elevation: 2,
  },
  estilo: {
    position: 'absolute',
    right: 25,
    bottom: 40
  },
  imagem: {
    width: 20,
    height: 20,
    paddingVertical: 5,
    paddingLeft: 10,
    paddingRight: 5
  },
  textparcel: {
    fontSize: 18,
    textAlign: 'center',
    fontFamily: 'Rubik_700Bold'
  }
});
