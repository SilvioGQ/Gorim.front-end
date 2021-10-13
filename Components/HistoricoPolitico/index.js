import React, { useContext } from 'react';
import { Text, View, StyleSheet, Image, Dimensions } from 'react-native';

import COLORS from '../../constants/colors';
import imagesProducts from '../../constants/imagesProducts';
import IMAGES from '../../constants/imagesIcons';
import { GameContext } from "../../contexts/GameContext";
const Tela = Dimensions.get('screen').width;

export default function HistoricosDinheiro({ item }) {
    const data = [
        { label: 'Nenhuma', value: 1 },
        { label: 'Baixa', value: 2 },
        { label: 'Média', value: 3 },
        { label: 'Alta', value: 4 },
      ];
    return (
        <View style={styles.colunm}>
            <View style={styles.row3}>
                    <View>
                        <Image
                            style={styles.icone}
                            source={imagesProducts[item.type]}
                        />
                        <Text style={styles.text}>{item.type == 'fine' ? 'Multa' : 'Selo'}</Text>
                    </View>

                    <View>
                        <Text style={[styles.text, { marginTop: 5 }]}>{item.type === 'stamp'?  `${item.amount} selos ` : `$${item.value}`} </Text>
                        <Image source={require('../../assets/Arrow.png')} style={{ width: 120, height: 10, transform: item.ownAction ? [{ rotateY: "0deg" }] : [{ rotateY: "180deg" }], }} />
                        <Text style={styles.text}>{item.type === 'stamp'?  `concedidos` : `${item.gravity}`}</Text>
                    </View>
                <View>
                    <Image
                        style={styles.icone}
                        source={IMAGES[item.avatarPlayer]}
                    />
                    <Text style={styles.text}>{item.namePlayer}</Text>
                </View>

            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    colunm: {
        alignSelf: 'center',
        backgroundColor: COLORS.bgColorSecondary,
        borderRadius: 20,
        width: 255,
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
        width: '100%'
    },
    icone: {
        width: 35,
        height: 35,
        alignSelf: 'center',
    },
    text: {
        textAlign: 'center',
        fontSize: 12,
        fontFamily: 'Rubik_300Light',
        marginBottom: 2
    }
});