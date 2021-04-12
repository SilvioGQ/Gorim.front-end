import React, { useState } from 'react';
import { Text, View, StyleSheet, Image, Dimensions, TouchableOpacity } from 'react-native';

import Button from '../../../Components/Button';
import ModalInfo from '../../../Components/ModalInfo';
import COLORS from '../../../resources/colors';
import DropDown from '../../../Components/DropDown';
import Unknown from '../../../assets/unknown.png';
import Parcel from '../../../assets/agricultorIcones/Parcela.png';
import { ScrollView } from 'react-native-gesture-handler';
import FunctionalityService from '../../../services/FunctionalityService';

import IMAGES from '../../../resources/imagesProducts';

const Tela = Dimensions.get('screen').width;

export default function Parcela({ navigation, route }) {
  const [player, setPlayer] = useState(route.params.player);
  const [parcelLand, setParcelLand] = useState(route.params.parcelLand);
  const [modalText, setModalText] = useState('');
  const [dropDown, setDropDown] = useState(false);
  const [dropDown2, setDropDown2] = useState(false);
  const [dropDown3, setDropDown3] = useState(false);
  const [dropDown4, setDropDown4] = useState(false);
  const selectItem = (name, type) => {
    for (let i = 0; i < 3; i++) {

      if (type == 'seed') parcelLand.seed = name;
      if (type == 'fertilizer') parcelLand.fertilizer = name;
      if (type == 'pesticide') parcelLand.pesticide = name;
      if (type == 'machine') parcelLand.machine = name;
    }

    setDropDown(false);
    setDropDown2(false);
    setDropDown3(false);
    setDropDown4(false);
  }

  const toPlant = () => {
    if (!parcelLand.seed) return setModalText('Selecione uma semente!');
    if (!parcelLand.fertilizer) return setModalText('Selecione um fertilizante!');
    parcelLand.planted = true;
    player.inventory.forEach(e => {
      if (e.name == parcelLand.seed) e.amount = e.amount - 1;
      if (e.name == parcelLand.fertilizer) e.amount = e.amount - 1;
      if (e.name == parcelLand.pesticide) e.amount = e.amount - 1;
      if (e.name == parcelLand.machine) e.amount = e.amount - 1;
    });

    FunctionalityService.toPlant(player);
    navigation.navigate('ControleParcelas', { message: 'Seu plantio foi iniciado' });
  }

  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={styles.espaco}>
          <Image style={styles.parcel} source={Parcel} />
          <Text style={styles.header}>Aplicação {'\n'}em parcela</Text>
        </View>
        <Text style={styles.title}>Nesta parcela:</Text>
        <TouchableOpacity onPress={() => { if(!parcelLand.planted) setDropDown(!dropDown) }}>
          <View style={styles.row}>
            <Image style={[styles.image, { width: parcelLand.seed ? 35 : 25, height: parcelLand.seed ? 35 : 45 }]}
              source={parcelLand.seed ? IMAGES[parcelLand.seed] : Unknown} />
            <View>
              <Text>Sementes</Text>
              <Text style={styles.bold}>{parcelLand.seed ? parcelLand.seed : '-'}</Text>
            </View>
          </View>
        </TouchableOpacity>
        <DropDown items={player.inventory} type={'seed'} onClick={selectItem} display={dropDown ? 'flex' : 'none'} />
        <TouchableOpacity onPress={() => { if(!parcelLand.planted) setDropDown2(!dropDown2) }}>
          <View style={styles.row}>
            <Image style={[styles.image, { width: parcelLand.fertilizer ? 35 : 25, height: parcelLand.fertilizer ? 35 : 45 }]}
              source={parcelLand.fertilizer ? IMAGES[parcelLand.fertilizer] : Unknown} />
            <View>
              <Text>Fertilizantes</Text>
              <Text style={styles.bold}>{parcelLand.fertilizer ? parcelLand.fertilizer : '-'}</Text>
            </View>
          </View>
        </TouchableOpacity>
        <DropDown items={player.inventory} type={'fertilizer'} onClick={selectItem} display={dropDown2 ? 'flex' : 'none'} />
        <TouchableOpacity onPress={() => { if(!parcelLand.planted) setDropDown3(!dropDown3) }}>
          <View style={styles.row}>
            <Image style={[styles.image, { width: parcelLand.pesticide ? 35 : 25, height: parcelLand.pesticide ? 35 : 45 }]}
              source={parcelLand.pesticide ? IMAGES[parcelLand.pesticide] : Unknown} />
            <View>
              <Text>Agrotóxicos</Text>
              <Text style={styles.bold}>{parcelLand.pesticide ? parcelLand.pesticide : '-'}</Text>
            </View>
          </View>
        </TouchableOpacity>
        <DropDown items={player.inventory} type={'pesticide'} onClick={selectItem} display={dropDown3 ? 'flex' : 'none'} />
        <TouchableOpacity onPress={() => { if(!parcelLand.planted) setDropDown4(!dropDown4) }}>
          <View style={styles.row}>
            <Image style={[styles.image, { width: parcelLand.machine ? 35 : 25, height: parcelLand.machine ? 35 : 45 }]}
              source={parcelLand.machine ? IMAGES[parcelLand.machine] : Unknown} />
            <View>
              <Text>Máquinas</Text>
              <Text style={styles.bold}>{parcelLand.machine ? parcelLand.machine : '-'}</Text>
            </View>
          </View>
        </TouchableOpacity>
        <DropDown items={player.inventory} type={'machine'} onClick={selectItem} display={dropDown4 ? 'flex' : 'none'} />
        {!parcelLand.planted && (
          <Button onClick={toPlant} name='INICIAR PLANTIO' />
        )}
        {parcelLand.planted && (
          <Text style={{ fontSize: 24, textAlign: 'center', marginTop: '10%' }}>Plantio iniciado!</Text>
        )}
        {modalText !== '' && (
          <ModalInfo onClick={() => setModalText('')} text={modalText} />
        )}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: 25,
    backgroundColor: COLORS.bgColorPrimary,
  },
  parcel: {
    width: 70,
    height: 70,
    margin: '5%'
  },
  row: {
    flexDirection: 'row',
    paddingVertical: 30,
    marginLeft: Tela * 0.05 + '%'
  },
  espaco: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    width: Tela
  },
  header: {
    fontFamily: 'Rubik_300Light',
    fontSize: 23,
  },
  image: {
    marginRight: '20%'
  },
  title: {
    fontSize: 18,
    marginTop: 15,
    fontFamily: 'Rubik_300Light',
    alignSelf: 'flex-start',
    marginLeft: 60
  },
  bold: {
    fontSize: 14,
    fontFamily: 'Rubik_700Bold'
  }
});