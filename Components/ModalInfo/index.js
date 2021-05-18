import React from 'react';
import { Text, View, Modal, TouchableOpacity, Image, StyleSheet, Dimensions } from 'react-native';
import COLORS from '../../resources/colors';
const Tela = Dimensions.get('screen').width;
export default function ModalInfo({ text, onClick,modalImage }) {

  return (
        <Modal
        animationType="fade"
        transparent={true}
      >
        <View style={styles.modal}> 
          <View style={styles.container}>
            <Text style={styles.loading}>{text}</Text>
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
              style={{borderRadius: 20,padding: 10,elevation: 5, backgroundColor: COLORS.successButton, alignItems:'center', width: 250}}
              onPress={onClick}
            >
              <Text style={{textAlign:'center', fontFamily:'Rubik_400Regular', fontSize:18, color:COLORS.textWhite}}>VOLTAR</Text>
            </TouchableOpacity>
          </View>
          </View>
      </Modal>
  );
}

const styles = StyleSheet.create({
  modal: {
    flex: 1,
    alignSelf: 'center',
    justifyContent: 'center',
    backgroundColor: '#000000aa',
    width: Tela,
  },
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLORS.bgColorSecondary,
    padding: 25,
    borderRadius: 30,
    shadowColor: "#000", 
    shadowOffset: {width: 0,height: 2},
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    margin: 20
  },
  loading: {
    fontFamily: 'Rubik_300Light',
    fontSize: 18,
    textAlign: "center",
    marginBottom:15,
  },
})