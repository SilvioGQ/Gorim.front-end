import React, { useContext, useEffect, useState } from 'react';
import { Text, View, StyleSheet, Image, TouchableOpacity } from 'react-native';
import Dropdown from 'react-native-dropdown-enhanced';
import COLORS from '../../constants/colors';
import IMAGES from '../../constants/imagesIcons';
import Modal from '../../Components/ModalInfo';
import { GameContext, suggestTax } from '../../contexts/GameContext';
export default function MultaComponent({ item, onclick,display, numero, setNumero, onClike }) {
  const { players, player, data:suggest, stage } = useContext(GameContext);
  const [modalText, setModalText] = useState('');


  useEffect(() => {
    suggestTax();
  }, []);
  
  const [sugestao, setSugestao] = useState()
  const information = () => {
    return setModalText('Tabela para aplicação de multas.\nO porra.');
  };
  const data = [
    { label: 'Nenhuma', value: 1 },
    { label: 'Baixa', value: 2 },
    { label: 'Média', value: 3 },
    { label: 'Alta', value: 4 },
  ]
  useEffect(()=>{
    console.log(Sugestão())
  }, [Sugestão])
  const Sugestão = async ()=>{
    return await suggest
  }
  return (
    <View style={styles.container}>
      <View>
        <Image style={styles.icone} source={IMAGES[item.avatar]} />
        <Text style={styles.textinhos}>{item.name}</Text>
      </View>
      <View>
        <Text style={styles.text}>Total poluição: {item.pollution.toFixed(1)} </Text>
        <View style={{ flexDirection: 'row' }}>
          <Text style={styles.text}>Multa:</Text>
          <Dropdown
            data={data}
            style={{ height: 28, width: 110, borderRadius: 17 }}
            defaultValue={1}
            onSelectedChange={({ label }) => setNumero(label)}
          />
        </View>
        <View style={styles.row}>
          <TouchableOpacity style={styles.button} onPress={onClike} activeOpacity={0.7}>
            <Text style={styles.textbutton}>CONFIRMAR</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.button, { backgroundColor: '#2D7830' }]} onPress={onclick} activeOpacity={0.7}>
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
    fontFamily: 'Rubik_300Light',
    alignItems: 'center',
    marginTop: 5
  },
  textinhos: {
    fontSize: 13,
    fontFamily: 'Rubik_300Light',
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
    height: 52,
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
});
