import React, { useEffect, useState }  from 'react';
import { Text, View, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';

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
            <Image style={styles.icone} source={require(`../../assets/${item.type}s/${item.name}.png`)} />
            <Text style={styles.text}>{translateName[item.name]}</Text>
          </TouchableOpacity>
        }
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    alignItems: 'center',
    borderRadius: 5,
    width: '50%'
  },
  Item: {
    height: 69,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#61CA65',
    width: '100%',
  },
  icone: {
    width: 30,
    height: 30,
    marginRight: 15,
  },
  text: {
    fontFamily: 'Rubik_300Light',
    fontSize: 15,
    marginRight: 15
  }
})
