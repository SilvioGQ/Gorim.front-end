import React, { useContext } from "react";
import {
  Text,
  View,
  StyleSheet,
  Image,
  TouchableOpacity,
  Dimensions,
} from "react-native";

import COLORS from "../../constants/colors";
const Height = Dimensions.get("screen").height;
const Tela = Dimensions.get("screen").width;
import { GameContext } from "../../contexts/GameContext";
import ICONS from "../../constants/imagesIcons";
export default function ChatGroup({ onClick, item, notification, messages }) {
  const { player, game } = useContext(GameContext);
  let lastMessage;
  if (messages.messages.length > 0) {
    lastMessage = messages.messages[messages.messages.length - 1];
  }
  return (
    // <View style={styles.margem}>
    <TouchableOpacity onPress={onClick} style={styles.margem}>
      <Image style={styles.icone} source={ICONS[item.name]} />
      <Text style={styles.textinhos}>{`${item.name}`}</Text>
      {messages.messages.length > 0 && (
        <View>
          <Text style={{ fontSize: 11, marginLeft: 70, marginVertical: 3 }}>
            {lastMessage.sender.id == player.id
              ? "Você: "
              : `${lastMessage.sender.name}: `}
            {lastMessage.message.substr(0, 50)}
          </Text>
          <Text
            style={{
              fontSize: 9,
              textAlign: "right",
              marginRight: 7,
              marginTop: -9,
            }}
          >
            {lastMessage.datetime.substr(11, 5)}
          </Text>
        </View>
      )}
      {notification && <View style={[styles.notificacao]} />}
    </TouchableOpacity>
    // </View>
  );
}

const styles = StyleSheet.create({
  icone: {
    borderWidth: 4,
    borderRadius: 17,
    borderColor: "#A8DADC",
    width: Tela > 350 ? 55 : 52,
    height: Tela > 350 ? 55 : 52,
    // marginBottom: Height > 720 && Height < 800 ? 2 : 18,
    // marginTop: 11.5,
    position: "absolute",
  },
  textinhos: {
    marginTop: 5,
    fontSize: 14,
    marginLeft: 70,
    fontFamily: "Rubik_700Bold",
  },
  margem: {
    marginTop: 5,
    marginHorizontal: 20,
    marginBottom: 40,
  },
  notificacao: {
    marginTop: 12,
    position: "absolute",
    right: 10,
    width: 18,
    height: 18,
    borderRadius: 9,
    backgroundColor: "#F19F00",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.94,
    elevation: 6,
  },
});
//alt shift f
