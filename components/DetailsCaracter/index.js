import React, { useState, useContext, useEffect } from "react";
import { Text, View, StyleSheet, ScrollView, StatusBar, Dimensions, TouchableOpacity, Image } from "react-native";

import DETALHES from "../../constants/imagesDetalhes";
import COLORS from "../../constants/colors";
const Height = Dimensions.get("screen").height;
export default function DetailsCaracter({ player, screen }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Você foi escolhido como...</Text>
      <Text style={styles.textbold}> {player.type === 'Agricultor' ? 'Agricultor' : `Empresário de ${player.specialty}s`}</Text>

      {player.type === 'Agricultor' ? <Image source={DETALHES["Agricultor"]} style={styles.img} /> : <Image source={DETALHES[player.specialty]} style={styles.img} />}
      <View>
        {player.type === "Agricultor" ? (
          <Text style={styles.paragrafo}>
            Você será responsável por plantar! Compre e negocie os produtos necessários para a sua plantação, vendidos pelos empresários. Não gostou do preço? Chame o empresário para uma conversa! Evite também o excesso de poluição para não tomar multas.
          </Text>
        ) : (
          <Text style={styles.paragrafo}>
            Você será responsável por vender {player.specialty.toLowerCase()}s, escolher seus preços e realizar negociações! Mas cuidado ao vender as coisas muito caras, ouça os seus clientes e faça a melhor decisão possível!
          </Text>
        )}
      </View>
      <TouchableOpacity onPress={() => screen(false)} style={styles.button}>
        <Text style={styles.textPlayersAmount}>Próximo</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    width: "100%",
    zIndex: 1,
    backgroundColor: COLORS.bgDetalhes,
    height: Height
  },
  paragrafo: {
    paddingTop: '10%',
    marginHorizontal: '9%',
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 15
  },
  img: {
    alignSelf: 'center',
    width: Height > 700 ? 300 : 200,
    height: Height > 700 ? 305: 205,
    marginTop: 30
  },
  title: {
    fontSize: 14,
    marginTop: '10%',
    textAlign: "center",
  },

  textbold: {
    fontSize: Height > 700 ? 30 : 10,
    marginVertical: 5,
    textAlign: "center",
    fontFamily: "Rubik_400Regular",
    color: "#447808",
    marginHorizontal: 50
  },
  button: {
    marginTop: '10%',
    padding: 10,
    alignSelf: "center",
    backgroundColor: COLORS.successButton,
    borderRadius: 20,
  },

  textPlayersAmount: {
    fontSize: 15,
    textAlign: "center",
    color: '#fff'
  },

});
