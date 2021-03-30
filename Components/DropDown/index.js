import React, { useEffect, useState } from 'react';
import { VirtualizedList } from 'react-native';
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

export default function DropDown({ items, type, onClick, display }) {
  const [inventory, setInventory] = useState([]);

  useEffect(() => {
    setInventory(items.filter(item => {
      return item.type === type && item.amount > 0;
    }));
  }, []);

  const getItem = (data, index) => (inventory[index]);

  const getItemCount = () => inventory.length;

  return (
    <View style={[styles.container, { display: display }]}>
      {/* <FlatList
        numColumns={1}
        data={inventory}
        keyExtractor={item => item.name}
        renderItem={({ item }) =>
          <TouchableOpacity onPress={onClick} style={styles.item}>
            <Image style={styles.icone} source={images[item.name]} />
            <Text style={styles.text}>{translateName[item.name]}</Text>
          </TouchableOpacity>
        }
      /> */}
      { inventory.map(item => {
        return(
          <TouchableOpacity key={item.id} onPress={onClick} style={styles.item}>
            <Image style={styles.icone} source={images[item.name]} />
            <Text style={styles.text}>{translateName[item.name]}</Text>
          </TouchableOpacity>
        );
      })}
      {/* <VirtualizedList
        data={inventory}
        initialNumToRender={4}
        keyExtractor={item => item.name}
        renderItem={({ item }) =>
          <TouchableOpacity onPress={onClick} style={styles.item}>
            <Image style={styles.icone} source={images[item.name]} />
            <Text style={styles.text}>{translateName[item.name]}</Text>
          </TouchableOpacity>
        }
        getItemCount={getItemCount}
        getItem={getItem}
      /> */}
    </View>
  );
  }

  const styles = StyleSheet.create({
    container: {
      // flex:1,
      // left: 200,
      width: 230,
      margin: 'auto',
      // maxWidth: 200,
      // zIndex: 2,
      elevation: 4,
      justifyContent: 'center',
      borderWidth: 1,
      borderColor: "#20232a",
      borderRadius: 5,
      left:120
    },
    item: {
      padding: 20,
      // paddingVertical: 20,
      // maxWidth: 200,
      flexDirection: 'row',
      alignItems: 'center',
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