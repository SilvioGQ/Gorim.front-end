import React, { useState, useContext } from 'react';
import { Text, View, Image, TouchableOpacity,  } from 'react-native';
import imagesProducts from '../../constants/imagesProducts';
import { GameContext } from '../../contexts/GameContext';
import styles from './styles';

export default function Anuncio({ item, Historico, deleteAdvert }) {

  const { players } = useContext(GameContext);
  const Buyer = () => {
    let p = players.filter(i => i.id == item.idBuyer);
    return p[0].name;
  }
  return (
    <View style={styles.colunm}>
      <View style={styles.row3}>
        <Image
          style={styles.icone}
          source={imagesProducts[item.name]}
        />
        <View>
          <Text style={styles.text}>Produto:</Text>
          <Text style={styles.textBold}>{item.name}</Text>
        </View>
        <View>
          <Text style={styles.text}>Valor:</Text>
          <Text style={styles.textBold}>{item.priceType}</Text>
        </View>
        <Text style={styles.textNormal}>${item.price}</Text>
        <TouchableOpacity onPress={() => deleteAdvert(item)}  >
          <Image source={require('../../assets/agricultorIcones/FecharVermelho.png')} style={{ width: 20, height: 20 }} />
        </TouchableOpacity>
      </View>
      <View style={styles.row}>
        <Text style={styles.textCenter}> {item.idBuyer !== -1 ? `Você ofereceu ${item.amount} produto(s) para ${Buyer()}` : `Ainda restam: ${item.amount} produto(s)`}</Text>
        {item.idBuyer !== -1 ?
          null
          :
          <TouchableOpacity style={[styles.button, { backgroundColor: '#66BF00' }]} onPress={Historico}  >
            <Text style={styles.textbutton}>RESUMO</Text>
          </TouchableOpacity>
        }
      </View>
    </View>
  );
}
