import React, { useContext } from 'react';
import { Text, View, StyleSheet, Image, Dimensions } from 'react-native';

import COLORS from '../../resources/colors';
import imagesProducts from '../../resources/imagesProducts';
import IMAGES from '../../resources/imagesIcons'
import { GameContext } from "../../context/GameContext";
const Tela = Dimensions.get('screen').width;

export default function HistoricosDinheiro({ count = null, dest = null, buyer = null, amount = null, price = null, product = null }) {
    const { player } = useContext(GameContext);
    return (
        <View style={styles.colunm}>
            <View style={styles.row3}>
                {product == null && (
                    <View>
                        <Image
                            style={styles.person}
                            source={IMAGES[player.avatar]}
                        />
                        <Text style={styles.text}>{player.name}</Text>
                    </View>
                )}
                {buyer && (
                    <View>
                        <Image
                            style={styles.person}
                            source={IMAGES[buyer.avatar]}
                        />
                        <Text style={styles.text}>{buyer}</Text>
                    </View>
                )}
                {price && (
                    <View>
                        <Text style={styles.text}>{amount} por {price}$ á unidade</Text>
                        <Image source={require('../../assets/Logo/arrow.png')} style={{ width: 70, height: 10 }} />
                        <Text style={styles.textBold}>{player.type == 'Agricultor' ? 'Comprou' : 'Vendeu para'}</Text>
                    </View>
                )}
                {count && (
                    <View>
                        <Text style={styles.text}>{count}$</Text>
                        <Image source={require('../../assets/Logo/arrow.png')} style={{ width: 70, height: 10 }} />
                        <Text style={styles.textBold}>{ receved ? 'recebido' : 'transferido'}</Text>
                    </View>
                )}
                {dest && (
                    <View>
                        <Image
                            style={styles.icone}
                            source={IMAGES['Icon1']}
                        />
                        <Text style={styles.text}>{dest}</Text>
                    </View>
                )}
                {product && (
                    <View>
                        <Image
                            style={styles.icone}
                            source={imagesProducts[product]}
                        />
                        <Text style={styles.text}>{product.replace(/Fertilizante |Agrotóxico /, '')}</Text>
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
        width: '90%'
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
        fontSize: 13,
        fontFamily: 'Rubik_300Light',
        marginBottom: 2
    }
});