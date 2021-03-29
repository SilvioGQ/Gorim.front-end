import React, { useState } from 'react';
import { Text, View, StyleSheet, Image, Dimensions, TouchableOpacity, ScrollView } from 'react-native';

import Button from '../../../Components/Button';
import COLORS from '../../../styles/Colors';
import DropDown from '../../../Components/DropDown';
import Unknown from '../../../assets/unknown.png';
import Pacote from '../../../assets/agricultorIcones/pacote.png';
import Parcel from '../../../assets/agricultorIcones/Parcela.png';

const translateName = {
  "rice": 'Arroz',
  "soy": 'Soja',
  "greenery": 'Hortiça',
  "fertilizerBasic": 'Fertilizante Normal',
  "fertilizerMedium": 'Fertilizante Premium',
  "fertilizerStandard": 'Fertilizante Super Premium',
  "pesticideBasic": 'Agrotóxico Normal',
  "pesticideMedium": 'Agrotóxico Premium',
  "pesticideStandard": 'Agrotóxico Super Premium'
};

const images = {
  'soy': require('../../../assets/seeds/soy.png'),
  'rice': require('../../../assets/seeds/rice.png'),
  'greenery': require('../../../assets/seeds/greenery.png'),
  'pesticideBasic': require('../../../assets/pesticides/pesticideBasic.png'),
  'pesticideMedium': require('../../../assets/pesticides/pesticideMedium.png'),
  'pesticideStandard': require('../../../assets/pesticides/pesticideStandard.png'),
  'fertilizerBasic': require('../../../assets/fertilizers/fertilizerBasic.png'),
  'fertilizerMedium': require('../../../assets/fertilizers/fertilizerMedium.png'),
  'fertilizerStandard': require('../../../assets/fertilizers/fertilizerStandard.png'),
};

const Tela = Dimensions.get('screen').width;
const Tela2 = Dimensions.get('screen').height;

export default function Parcela({ navigation, route }) {
  const [item, setItem] = useState(route.params.item);
  const [player, setPlayer] = useState(route.params.player);
  const [icone, seticone] = useState(false);
  const [dropDown, setDropDown] = useState(false);
  const [dropDown2, setDropDown2] = useState(false);
  const [dropDown3, setDropDown3] = useState(false);
  const [dropDown4, setDropDown4] = useState(false);
  const SelecteItem = () => {
    setDropDown(false)
  }
  const [fertilizer, setFetilizar] = useState(images[item.fertilizer]);
  return (
    <View style={styles.container}>
      <View style={styles.espaco}>
        <Image style={styles.parcel} source={Parcel} />
        <Text style={styles.header}>Aplicação {'\n'}em parcela</Text>
      </View>
      <Text style={{ fontSize: 18, marginTop: 15, fontFamily: 'Rubik_300Light', alignSelf: 'flex-start', marginLeft: 60 }}>Nesta parcela:</Text>
        <TouchableOpacity onPress={() => setDropDown(!dropDown)}>
          <View style={styles.row}>
            <Image style={[styles.image, { width: item.seed ? 35 : 25, height: item.fertilizer ? 35 : 45 }]}
              source={item.seed ? fertilizer : Unknown} />
            <View>
              <Text style={styles.superior}>Sementes</Text>
              <Text style={styles.inferior}>{item.seed ? translateName[item.seed] : '-'}</Text>
            </View>
          </View>
        </TouchableOpacity>
          <DropDown items={player.inventory} type={'seed'} onClick={SelecteItem} display={dropDown ? 'flex' : 'none'} />
        <TouchableOpacity onPress={() => setDropDown2(!dropDown2)}>
          <View style={styles.row}>
            <Image style={[styles.image, { width: item.fertilizer ? 35 : 25, height: item.fertilizer ? 35 : 45 }]}
              source={item.fertilizer ? fertilizer : Unknown} />
            <View>
              <Text style={styles.superior}>Fertilizantes</Text>
              <Text style={styles.inferior}>{item.fertilizer ? translateName[item.fertilizer] : '-'}</Text>
            </View>
          </View>
        </TouchableOpacity>
          <DropDown items={player.inventory} type={'fertilizer'} onClick={SelecteItem} display={dropDown2 ? 'flex' : 'none'} />
        {/* <TouchableOpacity onPress={() => setDropDown(true)}>
          <View style={styles.row}>
            <Image
              style={[styles.image, { width: 45, height: 48 }]}
              source={Pacote}
            />
            <View>
              <Text style={styles.superior}>Máquina</Text>
              <Text style={styles.inferior}>Pacote </Text>
            </View>
          </View>
        </TouchableOpacity> */}
        {/* <TouchableOpacity onPress={() => setDropDown(true)}>
            <View style={styles.row}>
              <Image
                style={[styles.image, { width: item.seed ? 35 : 25, height: item.seed ? 35 : 45 }]}
                source={Unknown}
              />
              <View>
                <Text style={styles.superior}>Pulverizador</Text>
                <Text style={styles.inferior}>-</Text>
              </View>
            </View>
          </TouchableOpacity> */}
        <TouchableOpacity onPress={() => setDropDown3(!dropDown3)}>
          <View style={styles.row}>
            <Image
              style={[styles.image, { width: item.pesticide ? 35 : 25, height: item.fertilizer ? 35 : 45 }]}
              source={item.pesticide ? fertilizer : Unknown} />
            <View>
              <Text style={styles.superior}>Agrotóxicos</Text>
              <Text style={styles.inferior}>{item.pesticide ? translateName[item.pesticide] : '-'}</Text>
            </View>
          </View>
        </TouchableOpacity>
          <DropDown items={player.inventory} type={'pesticide'} onClick={SelecteItem} display={dropDown3 ? 'flex' : 'none'} />
        <TouchableOpacity onPress={() => setDropDown4(!dropDown4)}>
          <View style={styles.row}>
            <Image
              style={[styles.image, { width: item.pesticide ? 35 : 25, height: item.fertilizer ? 35 : 45 }]}
              source={item.pesticide ? fertilizer : Unknown} />
            <View>
              <Text style={styles.superior}>Maquina</Text>
              <Text style={styles.inferior}>{item.pesticide ? translateName[item.pesticide] : '-'}</Text>
            </View>
          </View>
        </TouchableOpacity>
          <DropDown items={player.inventory} type={'pesticide'} onClick={SelecteItem} display={dropDown4 ? 'flex' : 'none'} />
      <Button
        onClick={() => navigation.navigate('Agricultor1')}
        name='INICIAR PLANTIO'
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 25,
    backgroundColor: COLORS.bgColorPrimary,
    width: Tela
  },
  parcel: {
    width: 66,
    height: 66,
    margin: '5%'
  },
  row: {
    flexDirection: 'row',
    paddingVertical: 30,
    justifyContent: 'center',
    left: '-20%',
    // width: Tela,
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
  // inferior: {
  //   fontSize: 20,
  // }

  // superior: {
  //   fontFamily: 'Rubik_300Light',
  //   fontSize: 15,
  // },
  image: {
    marginRight: '20%'
  }
});