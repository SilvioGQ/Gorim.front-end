import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, Image, TouchableOpacity, Dimensions } from 'react-native';

import COLORS from '../../resources/colors';
import imagesProducts from '../../resources/imagesProducts';
import imagesCoins from '../../resources/imagesCoins';
import IMAGES from '../../resources/imagesIcons'

const Tela = Dimensions.get('screen').width;
export default function HistoricosDinheiro({ count = null, player, dest = null, amount = null, price = null, product = null }) {
    return (
        <View style={styles.colunm}>
        <View style={styles.row3}>
            <View>
                <Image
                    style={styles.person}
                    source={IMAGES[player.avatar]}
                />
                <Text style={styles.text}>{player.name}</Text>
            </View>
            {price && (
                <View>
                    <Text style={styles.text}>{amount} por {price}$ á unidade</Text>
                    <Text style={styles.textBold}>{player.type == 'Agricultor' ? 'Comprou' : 'Vendeu para'}</Text>
                </View>
            )}
            {count && (
                <View>
                    <Text style={styles.text}>{count}$</Text>
                    <Text style={styles.textBold}>transferiu</Text>
                </View>
            )}
            {dest && (
                <View>
                    {/* <Image
                        style={styles.icone}
                        source={IMAGES[dest.avatar]}
                    /> */}
                    <Text style={styles.text}>{dest.name}</Text>
                </View>
            )}
            {product && (
                <View>
                    <Image
                        style={styles.icone}
                        source={imagesProducts[product]}
                    />
                    <Text style={styles.text}>{product.replace(/Fertilizante |Agrotóxico /,'')}</Text>
                </View>
            )}

        </View>
    </View>
);
}

const styles = StyleSheet.create({
    colunm: {
        backgroundColor: COLORS.bgColorPrimary,
        borderRadius: 20,
        width: '60%',
        height: 80,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.32,
        shadowRadius: 5.46,
        elevation: 6,
        marginVertical: 15
    },
    row3: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginTop: 15,
        marginBottom: 5,
        width:'90%'
    },
    icone: {
        width: 35,
        height: 35,
        alignSelf: 'center',
    },
    person: {
        width: 35,
        height: 35,
        alignSelf: 'center',
    },
    text: {
        textAlign: 'center',
        fontSize: 12,
        marginBottom: 2
    }
});