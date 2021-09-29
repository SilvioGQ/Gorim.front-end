import React, { useState } from 'react';
import { Text, View, StyleSheet, Image, TouchableOpacity } from 'react-native';
import COLORS from '../../constants/colors';
import IMAGES from '../../constants/imagesProducts';

export default function ParcelaAgr({ item,backgroundGreen }) {
    return (
        <View style={[styles.container,{backgroundColor: backgroundGreen}]}>
            <View style={{ flexDirection: 'row' }}>
                <Text style={styles.numero}>Parcela: {item.parcelLand.id + 1}º</Text>
                <View style={{ borderRadius: 17, width: 75, height: 23, backgroundColor: '#D4F15F', alignSelf: 'center'}}>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
                        <Text style={{ color: '#CF0101', fontSize: 16, fontFamily: 'Rubik_400Regular', fontWeight: 'bold' }}>{item.parcelLand.pollution}</Text>
                        <Text style={{ color: '#6EBA16', fontSize: 16, fontFamily: 'Rubik_400Regular', fontWeight: 'bold' }}>{item.parcelLand.production}</Text>
                    </View>
                </View>
                <TouchableOpacity style={{ position:'absolute',left:'95%' }} onPress={() => {}} activeOpacity={0.7}>
                    <Image style={styles.image} source={require('../../assets/FecharPreto.png')} />
                </TouchableOpacity>
            </View>
            <View style={{flexDirection:'row'}}>
            <View>
                <Image style={styles.imagensproduto} source={IMAGES[item.parcelLand.seed]} />
                <Text style={styles.textproduto}>{item.parcelLand.seed}</Text>
            </View>
            {item.parcelLand.fertilizer != null && (
                <View>
                    <Image style={styles.imagensproduto} source={IMAGES[item.parcelLand.fertilizer]} />
                    <Text style={styles.textproduto}>{item.parcelLand.fertilizer.replace(/Fertilizante /, '')}</Text>
                </View>
            )}
            {item.parcelLand.pesticide != null && (
                <View>
                    <Image style={styles.imagensproduto} source={IMAGES[item.parcelLand.pesticide]} />
                    <Text style={styles.textproduto}>{item.parcelLand.pesticide.replace(/Agrotóxico /, '')}</Text>
                </View>
            )}
            {item.parcelLand.machine != null && (
                <View>
                    <Image style={styles.imagensproduto} source={IMAGES[item.parcelLand.machine]} />
                    <Text style={styles.textproduto}>{item.parcelLand.machine}</Text>
                </View>
            )}
            {item.parcelLand.spray && (
                <View>
                    <Image style={styles.imagensproduto} source={IMAGES['Pulverizador']} />
                    <Text style={styles.textproduto}>Pulverizador</Text>
                </View>
            )}
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        marginVertical: 25,
        padding: 20,
        borderRadius: 17,
        marginTop: 15,
        marginBottom: 4,
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 4,
        },
        shadowOpacity: 0.32,
        shadowRadius: 5.46,
        elevation: 6,
    },
    imagensproduto: {
        width: 35,
        height: 35,
        marginRight: 10,
        marginLeft: 10,
        alignSelf: 'center'
    },
    textproduto: {
        fontSize: 13,
        marginRight: 10,
        marginLeft: 10
    },
    numero: {
        fontSize: 14,
        fontFamily: 'Rubik_300Light',
        marginRight:10
    },
    image: {
        width: 25,
        height: 27,
      },
});
