import React, { useEffect, useState } from 'react';
import { Text, View, StyleSheet, Image, Dimensions, TouchableOpacity, ScrollView } from 'react-native';

import Button from '../../../Components/Button';
import COLORS from '../../../styles/Colors';
import DropDown from '../../../Components/DropDown';
import Unknown from '../../../assets/unknown.png';
import Pacote from '../../../assets/agricultorIcones/pacote.png';
import Parcel from '../../../assets/agricultorIcones/Parcela.png';
import Rice from '../../../assets/seeds/rice.png';

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

const Tela = Dimensions.get('screen').width;
const Tela2 = Dimensions.get('screen').height;

export default function Parcela({ navigation, route }) {
  const [item, setItem] = useState(route.params.item);
  const [player, setPlayer] = useState(route.params.player);
  const [icone, seticone] = useState(false);
  const [dropDown, setDropDown] = useState(false);
  const [dropDown2, setDropDown2] = useState(false);
  const [dropDown3, setDropDown3] = useState(false);
  const SelecteItem = () => {
    seticone(true)
    setDropDown(false)
  }
  const [fertilizer, setFetilizar]= useState(`../../../assets/fertilizers/${item.fertilizer}.png`)
  return (
    <View style={styles.container}>
      <ScrollView shows onPress={() => setDropDown(true)} VerticalScrollIndicator={false}>
        <View style={styles.espaco}>
          <Image style={styles.parcel} source={Parcel} />
          <Text style={styles.header}>Aplicação {'\n'}em parcela</Text>
        </View>
        <Text style={{ fontSize: 18, marginTop: 15, fontFamily: 'Rubik_300Light', alignSelf: 'flex-start', marginLeft: 60 }}>Nesta parcela:</Text>
        <View style={styles.coluna}>
          <TouchableOpacity onPress={() => setDropDown(!dropDown)}>
            <View style={styles.row}>
              <Image style={[styles.image, { width: item.seed ? 35 : 25, height: item.seed ? 35 : 45 }]}
                source={item.seed ? fertilizer : Unknown} />
              <View>
                <Text style={styles.superior}>Sementes</Text>
                <Text style={styles.inferior}>{item.seed ? translateName[item.seed] : '-'}</Text>
              </View>
            </View>
            <View style={{ justifyContent: 'center', alignItems: 'center', position: 'relative', top: -40, left: 60 }}>
              {dropDown && (
                <DropDown items={player.inventory} type={'seed'} onClick={SelecteItem} />
              )}
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => setDropDown2(!dropDown2)}>
            <View style={styles.row}>
              <Image
                style={[styles.image, { width: item.fertilizer ? 35 : 25, height: item.fertilizer ? 35 : 45 }]}
                source={item.fertilizer ? fertilizer : Unknown} />
              <View>
                <Text style={styles.superior}>Fertilizantes</Text>
                <Text style={styles.inferior}>{item.fertilizer ? translateName[item.fertilizer] : '-'}</Text>
              </View>
            </View>
          </TouchableOpacity>
          <View style={{ justifyContent: 'center', alignItems: 'center', position: 'relative', top: -40, left: 60 }}>
            {dropDown2 && (
              <DropDown items={player.inventory} type={'fertilizer'} onClick={SelecteItem} />
            )}
          </View>
          <TouchableOpacity onPress={() => setDropDown(true)}>
            <View style={styles.row}>
              <Image
                style={[styles.image, { width: 45, height: 48 }]}
                source={Pacote}
              />
              <View>
                <Text style={styles.superior}>Máquina</Text>
                <Text style={styles.inferior}>Pacote 1</Text>
              </View>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => setDropDown(true)}>
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
          </TouchableOpacity>
          <TouchableOpacity onPress={() => setDropDown3(!dropDown3)}>
            <View style={styles.row}>
              <Image
                style={[styles.image, { width: item.seed ? 35 : 25, height: item.seed ? 35 : 45 }]}
                source={item.pesticide ? fertilizer : Unknown} />
              <View>
                <Text style={styles.superior}>Agrotóxicos</Text>
                <Text style={styles.inferior}>{item.pesticide ? translateName[item.pesticide] : '-'}</Text>
              </View>
            </View>
            <View style={{ justifyContent: 'center', alignItems: 'center', position: 'relative', top: -40, left: 60 }}>
              {dropDown3 && (
                <DropDown items={player.inventory} type={'pesticide'} onClick={SelecteItem} />
              )}
            </View>
          </TouchableOpacity>
        </View>
        <Button
          onClick={() => navigation.navigate('Agricultor1')}
          name='INICIAR PLANTIO'
        />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: Tela2,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 35,
    backgroundColor: COLORS.bgColorPrimary,
    width: Tela
  },
  parcel: {
    width: 66,
    height: 66,
    margin: '7%'
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
    marginVertical: '5%',
    width: Tela,
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
  coluna: {
    alignSelf: 'center',
  },
  inferior: {
    fontSize: 20,
  },
  superior: {
    fontFamily: 'Rubik_300Light',
    fontSize: 15,
  },
  image: {
    marginRight: '15%'
  }
});