import React from 'react';
import { Text, View, Modal, TouchableOpacity, Image } from 'react-native';
import COLORS from '../../resources/colors';

export default function ModalInfo({ text, onClick,modalImage }) {

  return (
    <View>
        <Modal
        animationType="fade"
        transparent={true}
      >
        <View style={{flex: 1,justifyContent: "center",alignItems: "center",marginTop: 22,backgroundColor: '#000000aa',}}>
          <View style={{margin: 20,backgroundColor: "#fff",borderRadius: 20,padding: 35,alignItems: "center",shadowColor: "#000", shadowOffset: {width: 0,height: 2},shadowOpacity: 0.25,shadowRadius: 4,elevation: 5}}>
            <Text style={{marginBottom: 15,textAlign: "center", fontFamily:'Rubik_300Light', fontSize:18}}>{text}</Text>
            {modalImage && (
              <>
              <View style={{flexDirection:'row'}}>
              <Image source={require('../../assets/agricultorIcones/Barril.png')} style={{width:25,height:25}}/>
              <Text style={{fontSize: 23,fontFamily: 'Rubik_400Regular',color:'#FF0000'}}>6</Text>
              <Text style={{marginBottom: 15,textAlign: "center", fontFamily:'Rubik_300Light', fontSize:18}}> Indica quanto o produto polui</Text>
              </View>
              </>
            )}
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