import React, { useEffect, useState }  from 'react';
import { Text, View, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';

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

export default function DropDown({ items, type, onClick }) {
  const [inventory, setInventory] = useState({});

  useEffect(() => {
    setInventory(items.filter(item => {
      return item.type === type && item.amount > 0;
    }));
  }, []);

  return (
    <View style={styles.container}>
      <FlatList
        numColumns={1}
        data={inventory}
        keyExtractor={item => item.name}
        renderItem={({ item }) =>
          <TouchableOpacity onPress={onClick} style={[styles.Item, { backgroundColor: '#4E7E4D' }]}>
            <Image style={styles.icone} source={images[item.name]} />
            <Text style={styles.text}>{translateName[item.name]}</Text>
          </TouchableOpacity>
        }
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    borderWidth: 1,
    borderRadius: 5,
  },
  Item: {
    padding: 20,
    maxWidth: 180,
    flexDirection: 'row',
    backgroundColor: '#61CA65',
  },
  icone: {
    width: 30,
    height: 30,
    marginRight: 30
  },
  text: {
    fontFamily: 'Rubik_300Light',
    fontSize: 15,
  }
});