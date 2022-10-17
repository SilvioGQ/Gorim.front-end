import React, { useCallback, useContext, useEffect, useState } from "react";
import Constants from "expo-constants";
import {
  Dimensions, View, StyleSheet
} from "react-native";
const Height = Dimensions.get("screen").height;
const Apresentacao = ({ item, key}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.cardTitle}>{item.title}</Text>
      <Logo style={{width: item.key == 1 ? Height > 950 ? '77.5%' : Height > 815 ? '97.5%' : '73%' : item.key == 2 ? Height > 950 ? '70.5%' : Height > 815 ? '97.5%' : '78%' : Height > 950 ? '77.5%' : Height > 815 ? '97.5%' : '73%', height: item.key == 1 ? Height > 950 ? '55%' : Height > 815 ? '43.5%' : '40%' : item.key == 2 ? Height > 950 ? '55%' : '48%' : Height > 950 ? '55%' : '43.5%'}} source={item.image} />
      <Text style={styles.normalText}>{item.text}</Text>
    </View>
  );
};
const styles = StyleSheet.create({
    container:{
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "space-around",
        padding: 20,
        backgroundColor: '#fff',
    },
    cardTitle:{
        textAlign: "center",
        fontSize: 24,
        lineHeight: 42,
        // font-family: "Muli",
        marginTop: 50
    },
    normalText: {
        textAlign: "center",
        alignSelf: "center",
        lineHeight: 24,
        fontSize: 14,
        marginBottom: 25,
    }
});
export default Apresentacao;