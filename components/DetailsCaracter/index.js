import React, { useState, useContext, useEffect } from "react";
import {
  Text,
  View,
  StyleSheet,
  ScrollView,
  StatusBar,
  Dimensions,
  TouchableOpacity,
} from "react-native";

import COLORS from "../../constants/colors";
const Height = Dimensions.get("screen").height;
export default function DetailsCaracter({player, screen}) {
//   const { players, player, } = useContext(GameContext);
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Bem vindo ao Gorim!</Text>
      <Text style={styles.textbold}> {player.type === 'Agricultor' ? 'AGRICULTOR' : `EMPRESÁRIO DE ${player.specialty.toUpperCase()}S`}</Text>
      <View>
        {player.type === "Agricultor" ? (
          <Text>
              Você foi selecionado como agricultor, logo você será responsável por negociar o melhor preço possivel para comprar os produtos vendidos pelos empresários, utilizar as parcelas de terras para o plantio de sementes e evitar o excesso de poluição para não tomar multas. Você e todos outros jogadores têm o direito de se cadidatar a cargos políticos em época de eleições.
          </Text>
        ) : (
          <Text>
              Você foi selecionado como empresário, logo você será responsável por anunciar os preços dos seus produtos e interagir com agricultores para renegociação do preço de alguns produtos caso necessário. Você e todos outros jogadores têm o direito de se cadidatar a cargos políticos em época de eleições.
          </Text>
        )}
      </View>
      <TouchableOpacity onPress={()=>screen(false)} style={styles.button}>
        <Text style={styles.textPlayersAmount}>Próximo</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    width: "100%",
    zIndex:100,
    position: 'absolute',
    backgroundColor:COLORS.bgColorPrimary,
    height: Height
  },
  title: {
    fontSize: 20,
    marginVertical: 10,
    textAlign: "center",
  },
  subtitle: {
    fontSize: Height > 700 ? 16 : 14,
    marginVertical: 10,
    textAlign: "center",
  },
  textbutton: {
    padding: 8,
    paddingHorizontal: 10,
    fontSize: Height > 700 ? 12 : 11,
    textAlign: "center",
    fontFamily: "Rubik_400Regular",
  },
  text: {
    fontSize: Height > 700 ? 16 : 14,
    marginVertical: 15,
    textAlign: "center",
    fontFamily: "Rubik_300Light",
  },
  textbold: {
    fontSize: Height > 700 ? 16 : 14,
    marginVertical: 15,
    textAlign: "center",
    fontFamily: "Rubik_700Bold",
  },
  button: {
    padding: 5,
    alignSelf: "center",
    backgroundColor: COLORS.successButton,
    borderRadius: 20,
  },
  finalText: {
    fontSize: 20,
    marginVertical: 40,
    textAlign: "center",
    fontFamily: "Rubik_300Light",
  },
  marginButton: {
    alignItems: "center",
    marginVertical: 15,
  },
  textPlayersAmount: {
    fontSize: 15,
    textAlign: "center",
  },
  flexRow: {
    flexDirection: "row",
  },
});
