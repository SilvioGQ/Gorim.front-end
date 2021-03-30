import React, { useEffect, useState } from 'react';
import { Text, View, StyleSheet, TouchableOpacity, Dimensions, Image } from 'react-native';

const translateName = {
  'rice': 'Arroz',
  'soy': 'Soja',
  'greenery': 'Hortiça',
  'fertilizerBasic': 'Fertilizante Normal',
  'fertilizerMedium': 'Fertilizante Premium',
  'fertilizerStandard': 'Fertilizante Super Premium',
  'pesticideBasic': 'Agrotóxico Normal',
  'pesticideMedium': 'Agrotóxico Premium',
  'pesticideStandard': 'Agrotóxico Super Premium'
};

const images = {
  'soy': require('../../assets/seeds/soy.png'),
  'rice': require('../../assets/seeds/rice.png'),
  'greenery': require('../../assets/seeds/greenery.png'),
  'pesticideBasic': require('../../assets/pesticides/pesticideBasic.png'),
  'pesticideMedium': require('../../assets/pesticides/pesticideMedium.png'),
  'pesticideStandard': require('../../assets/pesticides/pesticideStandard.png'),
  'fertilizerBasic': require('../../assets/fertilizers/fertilizerBasic.png'),
  'fertilizerMedium': require('../../assets/fertilizers/fertilizerMedium.png'),
  'fertilizerStandard': require('../../assets/fertilizers/fertilizerStandard.png'),
};

const Tela = Dimensions.get('screen').width;

export default function DropDown({ items, type, onClick, display }) {
  const [inventory, setInventory] = useState([]);

  useEffect(() => {
    setInventory(items.filter(item => {
      return item.type === type && item.amount > 0;
    }));
  }, []);

  return (
    <View style={[styles.container, { display: display }]}>
      { inventory.map((item, index) => {
        return(
          <TouchableOpacity key={index} onPress={() => onClick(item.name, type)} style={styles.item}>
            <Image style={styles.icone} source={images[item.name]} />
            <Text style={styles.text}>{translateName[item.name]}</Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
  }

  const styles = StyleSheet.create({
    container: {
      width: 200,
      margin: 'auto',
      elevation: 4,
      borderWidth: 1,
      marginLeft: Tela * 0.05 + '%',
      borderColor: "#20232a",
      borderRadius: 5,
    },
    item: {
      padding: 20,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#4E7E4D',
    },
    icone: {
      width: 30,
      height: 30,
    },
    text: {
      fontFamily: 'Rubik_300Light',
      fontSize: 15,
      marginLeft: 15
    }
  });