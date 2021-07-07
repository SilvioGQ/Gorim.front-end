import React, { useState } from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import COLORS from '../../resources/colors';
import IMAGES from '../../resources/imagesProducts';
export default function HistoricosPlatacao({player, name1, name2, name3 }) {
    const itens= [
        {
            produto1: name1,
            produto2: name2,
            produto3: name3,
        }
    ]
    return (
        <View style={styles.container}>
            {/* <FlatList
                horizontal
                data={player.parcelLand}
                keyExtractor={item => item.id}
                renderItem={({ item }) => {
            <Image style={styles.imageParcel} source={require('../../assets/agricultorIcones/Parcela.png')} />
            <Image style={{ position: 'absolute', width: 35, height: 35, top:10, left:13 }} source={IMAGES[item.]} />
                }
            /> */}
            <Image style={styles.imageParcel} source={require('../../assets/agricultorIcones/Parcela.png')} />
            <Image style={{ position: 'absolute', width: 35, height: 35, top: 10, left: 13 }} source={require('../../assets/fertilizers/fertilizerBasic.png')} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.bgColorPrimary,
        marginVertical: 10,
    },
    imageParcel: {
        height: 60,
        width: 60,
    },
});
