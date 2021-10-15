
import React, { useState, useEffect, useContext } from 'react';
import { Text, View, StyleSheet, Image, TouchableOpacity, Dimensions } from 'react-native';
import { GameContext } from "../../contexts/GameContext";

import COLORS from '../../constants/colors';
import IMAGES from '../../constants/imagesIcons';

const Tela = Dimensions.get('screen').width;
export default function SugestoesEnviadas({ item }) {
    const { player } = useContext(GameContext);
    return (
        <View style={styles.colunm}>
            <View>
                <View style={styles.row3}>
                    <View>
                        <Image style={styles.person} source={IMAGES[player.avatar]} />
                        <View>
                            <Text style={styles.text2}> Alteração de imposto:</Text>
                            <Text style={styles.text1}> Para produtividade acima de 200</Text>
                            <Text style={styles.textBold}> 15%</Text>
                            <Text style={styles.text}>{player.type.slice(0, 3)}/{player.name}</Text>
                        </View>
                    </View>
                    {/* <Image
                        style={styles.person}
                        source={IMAGES[item.avatarSeller]}
                    /> */}
                </View>
            </View>
            <View style={styles.row}>
                <Text style={styles.text3}> Aguardando resposta...</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    colunm: {
        marginLeft: 10,
        backgroundColor: '#fff',
        borderRadius: 20,
        width: Tela - 20,
        paddingVertical: 10,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.32,
        shadowRadius: 5.46,
        elevation: 6,
        marginVertical: 10
    },
    button: {
        width: 120,
        borderRadius: 20,
        backgroundColor: COLORS.warningButton,
        padding: 12,
        marginTop: 8
    },
    textbutton: {
        color: COLORS.textWhite,
        fontSize: 12,
        textAlign: 'center',
        fontFamily: 'Rubik_400Regular'
    },
    row3: {
        flexDirection: 'row',
        marginTop: 15,
        alignContent: 'flex-start'
    },
    icone: {
        width: 36,
        height: 36,
        alignSelf: 'center',
        marginTop: -25
    },
    person: {
        position: 'absolute',
        marginLeft: 30,
        width: 56,
        height: 56,
    },
    textBold: {
        marginLeft: 90,
        fontSize: 15,
        fontFamily: 'Rubik_400Regular',
        fontWeight: 'bold',
    },
    text: {
        fontSize: 13,
        marginLeft: 25,
        marginVertical: 5
    },
    text2: {
        marginLeft: 90,
        fontSize: 15,
    },
    text1: {
        marginLeft: 90,
        fontSize: 13,
    },
    text3: {
        textAlign: 'center',
        fontSize: 17,
        marginBottom: 10
    },
    textos: {
        alignContent: 'flex-start',

    },
});