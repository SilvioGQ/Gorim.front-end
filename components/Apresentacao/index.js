import React, { useCallback, useContext, useEffect, useState } from "react";
import Constants from "expo-constants";
import {
  Dimensions, View, StyleSheet, Image, Text, TouchableOpacity
} from "react-native";
import COLORS from "../../constants/colors";
const Height = Dimensions.get("screen").height;
const Apresentacao = ({ item, setPage}) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={{position:'absolute', top:60, right:20, backgroundColor:COLORS.successButton, padding:8, paddingHorizontal:16, borderRadius:50}} onPress={()=>{setPage(2)}}><Text style={{color:'#fff'}}>Skip</Text></TouchableOpacity>
      <Image source={item.image} />
      <Text style={styles.cardTitle}>{item.title}</Text>
      <Text style={styles.normalText}>{item.text}</Text>
    </View>
  );
};
const styles = StyleSheet.create({
    container:{
        flex:1,
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: 20,
    },
    cardTitle:{
        textAlign: "center",
        fontSize: 24,
        lineHeight: 42,
        color:COLORS.headerColor,
        fontFamily: "Rubik_700Bold",
        marginTop: 50
    },
    normalText: {
        textAlign: "center",
        alignSelf: "center",
        lineHeight: 24,
        fontSize: 13,
        marginBottom: 10,
    }
});
export default Apresentacao;