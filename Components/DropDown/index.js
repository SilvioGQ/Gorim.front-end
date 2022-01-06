import React, { useEffect, useState } from 'react';
import { Text, View, StyleSheet, TouchableOpacity, Dimensions, Image } from 'react-native';

import imagesProducts from '../../constants/imagesProducts';

const Tela = Dimensions.get('screen').width;

export default function DropDown({ items, type, onClick, display }) {
  const [inventory, setInventory] = useState([]);

  useEffect(() => {
    setInventory(items.filter(item => {
      if (item.type === 'Maquina') {
        return item.type === type && item.amount > 0 && item.name !== 'Pulverizador';
      } else {
        return item.type === type && item.amount > 0;
      }
    }));
  }, []);

  return (
    <View style={[styles.container, { display: display }]}>
      {inventory.map((item, index) => {
        return (
          <TouchableOpacity key={index} onPress={() => onClick(item.name, type)} style={styles.item}  >
            <Image style={styles.icone} source={imagesProducts[item.name]} />
            <Text style={styles.text}>{item.name.replace(/Fertilizante|Agrotóxico/, '')} restante: {item.amount}</Text>
          </TouchableOpacity>
        );
      })}
      {inventory.length === 0 && (
        <TouchableOpacity style={styles.item}  >
          <Text style={styles.text}>Sem itens</Text>
        </TouchableOpacity>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
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
    color:'#fff',
    fontSize: 15,
    marginLeft: 15
  }
});