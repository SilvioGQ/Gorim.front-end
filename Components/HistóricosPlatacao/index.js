import React, { useState } from 'react';
import { StatusBar } from 'react-native';
import { Text, View, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import COLORS from '../../../resources/colors';
export default function HistoricosPlatacao({ player }) {

    return (
        <View style={styles.container}>
            <FlatList
                horizontal
                data={player.parcelLand}
                keyExtractor={item => item.id}
                renderItem={({ item }) =>
                    <View style={styles.item}>
                        <Image style={styles.imageParcel} source={require('../../../assets/agricultorIcones/Parcela.png')} />
                        <View style={{ flexDirection: 'row', display: item.planted ? 'flex' : 'none' }}>
                            <Image style={{ position: 'absolute', width: 46, height: 77, bottom: 5, left: 5 }} source={require('../../../assets/agricultorIcones/Planted.png')} />
                        </View>
                    </View>
                }
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.bgColorPrimary,
        paddingTop: StatusBar.currentHeight
    },
    imageParcel: {
        height: 60,
        width: 60,
    },
    item: {
        marginVertical: 35,
        marginLeft: 20,
        marginRight: 20
    },
});
