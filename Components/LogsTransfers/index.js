import React, { useContext } from 'react';
import { Text, View, StyleSheet, Image, Dimensions } from 'react-native';

import COLORS from '../../constants/colors';
import imagesProducts from '../../constants/imagesProducts';
import IMAGES from '../../constants/imagesIcons';
import { GameContext } from "../../contexts/GameContext";
const Tela = Dimensions.get('screen').width;

export default function LogsTransfer({ item }) {
    const { player } = useContext(GameContext);

    return (
        <View style={styles.colunm}>
            <View style={styles.row3}>
                <Text style={{fontSize: 13, fontFamily: 'Rubik_300Light'}}>Item vendido {item.product.amount} vezes</Text>
                <Text style={{fontSize: 13, fontFamily: 'Rubik_300Light', color:COLORS.warningButton, marginLeft:10}}>Poluição:</Text>
            </View>
            <View>
                <Image
                    style={styles.icone}
                    source={imagesProducts[item.product.name]}
                />
                <Text style={styles.text}>{item.product.name.replace(/Fertilizante |Agrotóxico /, '')}</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    colunm: {
        alignSelf: 'center',
        backgroundColor: COLORS.bgColorSecondary,
        borderRadius: 20,
        height: 100,
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
        marginVertical: 15,
        marginHorizontal:10
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