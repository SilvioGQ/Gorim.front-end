import React, { useEffect, useState } from 'react';
import { Text, View, StyleSheet, TouchableOpacity, Dimensions, Image } from 'react-native';

import IMAGES from '../../resources/imagesProducts';

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
        return (
          <TouchableOpacity key={index} onPress={() => onClick(item.name, type)} style={styles.item}>
            <Image style={styles.icone} source={IMAGES[item.name]} />
            <Text style={styles.text}>{item.name}</Text>
          </TouchableOpacity>
        );
      })}
      { inventory.length === 0 && (
        <TouchableOpacity style={styles.item}>
          <Text style={styles.text}>Sem itens</Text>
        </TouchableOpacity>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    // flex:1,
    // left: 200,
    width: 230,
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