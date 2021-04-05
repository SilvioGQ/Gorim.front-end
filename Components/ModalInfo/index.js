import React from 'react';
import { Text, View, Modal, TouchableOpacity } from 'react-native';
import COLORS from '../../styles/Colors';

export default function ModalInfo({ text, onClick }) {
  return (
    <View>
        <Modal
        animationType="fade"
        transparent={true}
      >
        <View style={{flex: 1,justifyContent: "center",alignItems: "center",marginTop: 22,backgroundColor: '#000000aa',}}>
          <View style={{margin: 20,backgroundColor: "#fff",borderRadius: 20,padding: 35,alignItems: "center",shadowColor: "#000", shadowOffset: {width: 0,height: 2},shadowOpacity: 0.25,shadowRadius: 4,elevation: 5}}>
            <Text style={{marginBottom: 15,textAlign: "center", fontFamily:'Rubik_300Light', fontSize:18}}>{text}</Text>
            <TouchableOpacity
              style={{borderRadius: 20,padding: 15,elevation: 5, backgroundColor: COLORS.successButton, alignItems:'center'}}
              onPress={onClick}
            >
              <Text style={{textAlign:'center', fontFamily:'Rubik_400Regular', fontSize:18, color:COLORS.textWhite}}>Voltar</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
}