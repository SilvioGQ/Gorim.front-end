import React, { useEffect, useState } from "react";
import {
  Text,
  View,
  Modal,
  TouchableOpacity,
  Image,
  StyleSheet,
  Dimensions,
  ActivityIndicator,
} from "react-native";
export default function WaitingRecconection({ exit }) {
  const [button, setButton] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setButton(true);
    }, 35000);
  }, []);

  return (
    <Modal animationType="fade" transparent={true}>
      <View style={styles.modal}>
        <Text style={styles.title}>
          Um jogador foi desconectado. Por favor aguarde a reconexão...
        </Text>
        <ActivityIndicator
          style={{ height: 120, width: 120 }}
          size={"large"}
          color={"#fff"}
        />
        {button && (
          <TouchableOpacity style={styles.button} onPress={exit}>
            <Text style={styles.textButton}>Sair do jogo</Text>
          </TouchableOpacity>
        )}
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  modal: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#000000aa",
  },
  button: {
    paddingVertical: 10,
    paddingHorizontal: 10,
    borderColor: "#fff",
    borderWidth: 1,
    borderRadius: 10,
  },
  textButton: {
    color: "#fff",
  },
  title: {
    color: "#fff",
    fontSize: 21,
    fontWeight: "bold",
    textAlign:'center',
    alignSelf:"center"
  },
});
