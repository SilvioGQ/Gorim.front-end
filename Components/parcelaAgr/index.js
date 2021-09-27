import React, { useState } from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';
import COLORS from '../../constants/colors';
import IMAGES from '../../constants/imagesProducts';

export default function parcelaAgr({ item }) {

    return (
        <View style={styles.container}>
            <View style={{ flexDirection: 'row', }}>
                <Text style={styles.numero}>Parcela: {item.id + 1}º</Text>
                <View style={{ borderRadius: 17, width: 75, height: 23, backgroundColor: '#D4F15F', alignSelf: 'center', marginTop: 2 }}>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
                        <Text style={{ color: '#CF0101', fontSize: 16, fontFamily: 'Rubik_400Regular', fontWeight: 'bold' }}>{item.polution}</Text>
                        <Text style={{ color: '#6EBA16', fontSize: 16, fontFamily: 'Rubik_400Regular', fontWeight: 'bold' }}>{item.production}</Text>
                    </View>
                </View>
                <TouchableOpacity style={{ alignSelf: 'flex-end' }} onPress={() => setModalVisible(!modalVisible)} activeOpacity={0.7}>
                    <Image style={styles.image} source={require('../../assets/FecharPreto.png')} />
                </TouchableOpacity>
            </View>
            <View>
                <Image style={styles.imagensproduto} source={IMAGES[item.seed]} />
                <Text style={styles.textproduto}>{item.seed}</Text>
            </View>
            {item.fertilizer != null && (
                <View>
                    <Image style={styles.imagensproduto} source={IMAGES[item.fertilizer]} />
                    <Text style={styles.textproduto}>{item.fertilizer.replace(/Fertilizante /, '')}</Text>
                </View>
            )}
            {item.pesticide != null && (
                <View>
                    <Image style={styles.imagensproduto} source={IMAGES[item.pesticide]} />
                    <Text style={styles.textproduto}>{item.pesticide.replace(/Agrotóxico /, '')}</Text>
                </View>
            )}
            {item.machine != null && (
                <View>
                    <Image style={styles.imagensproduto} source={IMAGES[item.machine]} />
                    <Text style={styles.textproduto}>{item.machine}</Text>
                </View>
            )}
            {item.spray && (
                <View>
                    <Image style={styles.imagensproduto} source={IMAGES['Pulverizador']} />
                    <Text style={styles.textproduto}>Pulverizador</Text>
                </View>
            )}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        backgroundColor: '#fff',
        borderWidth:1,
        marginVertical: 25,
        padding: 15,
        borderRadius: 17,
        marginTop: 15,
        marginBottom: 4
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
        fontFamily: 'Rubik_300Light'
    },
    image: {
        width: 25,
        height: 27,
      },
});
