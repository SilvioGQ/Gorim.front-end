import React, { useContext, useEffect, useState } from 'react';
import { Text, View, StyleSheet, Image, TouchableOpacity, Picker } from 'react-native';
import { GameContext, suggestFine } from '../../contexts/GameContext';
import COLORS from '../../constants/colors';
import ICONS from '../../constants/imagesIcons';
import Modal from '../../Components/ModalInfo';

export default function MultaComponent({ item, onclick, display, onClike }) {
  const { data: suggest, stage } = useContext(GameContext);
  const [numero, setNumero] = useState();
  console.log(item)
  console.log(suggest)
  return (
    <View style={styles.container}>
      <View>
        <Image style={styles.icone} source={ICONS[item.avatar]} />
        <Text style={styles.textinhos}>{item.name}</Text>
      </View>
      <View>
        <Text style={styles.text}>Total poluição: {item.pollution} </Text>
        <View style={{ flexDirection: 'row', marginVertical:5 }}>
          <Text style={styles.text}>Multa:</Text>
          {stage === 'SUGGESTFINE' && (
          <Picker
            selectedValue={item.gravity}
            style={styles.picker}
            onValueChange={(itemValue) => setNumero(itemValue)}
            mode='dropdown'
          >
            <Picker.Item label="Nenhuma" value={"Nenhuma"} />
            <Picker.Item label="Baixa" value={"Baixa"} />
            <Picker.Item label="Média" value={"Média"} />
            <Picker.Item label="Alta" value={"Alta"} />
          </Picker>
          )}
        </View>
        <View style={styles.row}>
          <TouchableOpacity style={styles.button} onPress={() => onClike(item.id, numero)}  >
            <Text style={styles.textbutton}>CONFIRMAR</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.button, { backgroundColor: '#2D7830' }]} onPress={onclick}  >
            <Text style={styles.textbutton}>VER MAIS</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    marginVertical: 15,
    padding: 15,
    borderRadius: 17,
    marginVertical: 10,
    marginBottom: 4,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.32,
    shadowRadius: 5.46,
    elevation: 6,
    marginHorizontal: 20
  },
  text: {
    fontSize: 16,
    
    alignItems: 'center',
    marginTop: 5
  },
  textinhos: {
    fontSize: 13,
    
    textAlign: 'center'
  },
  row: {
    flexDirection: 'row',
    marginVertical: 5
  },
  image: {
    width: 62,
    height: 60,
  },
  icone: {
    width: 52,
    height: 55,
    marginTop: 15,
    marginHorizontal: 10
  },
  button: {
    width: 108,
    borderRadius: 20,
    backgroundColor: '#66BF00',
    padding: 12
  },
  textbutton: {
    color: COLORS.textWhite,
    fontSize: 12,
    textAlign: 'center',
    fontFamily: 'Rubik_400Regular'
  },
  picker: {
    height: 28, 
    width: 155, 
    borderWidth: 1,
  }
});
