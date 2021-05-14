import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, Image, TouchableOpacity, Dimensions } from 'react-native';

import COLORS from '../../resources/colors';
import imagesProducts from '../../resources/imagesProducts';
import imagesCoins from '../../resources/imagesCoins';
import IMAGES from '../../resources/imagesIcons'
import PlayerService from '../../services/PlayerService';
import FunctionalityService from '../../services/FunctionalityService';

const Tela = Dimensions.get('screen').width;
export default function Oferta({ item, confirmOffer }) {
    const [player, setPlayer] = useState({});
    const [coin, setCoin] = useState('');
    const [count, setCount] = useState(1);

    useEffect(() => {
        PlayerService.getPlayer(item.idSeller).then(setPlayer);
        FunctionalityService.getProduct(item.product).then(resp => {
            if (item.price == resp.cheap) setCoin('Barato');
            if (item.price == resp.medium) setCoin('Médio');
            if (item.price == resp.expensive) setCoin('Caro');
        });
    }, []);
    const increaseCount = () => {setCount(count < 6 ? count + 1 : count);}
    const decreaseCount = () => {setCount(count > 1 ? count - 1 : count);}
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
                <View>
                    <Text style={styles.text}>Produto:</Text>
                    <Text style={styles.textBold}>{item.product}</Text>
                </View>
                <Image
                    style={styles.icone}
                    source={imagesProducts[item.product]}
                />
                <View>
                    <Text style={styles.text}>Preço:</Text>
                    <Text style={styles.textBold}>${item.price}</Text>
                </View>
                <Image
                    style={styles.icone}
                    source={imagesCoins[coin]}
                />
            </View>
            <View style={styles.row}>
                <TouchableOpacity style={[styles.button, { backgroundColor: '#66BF00' }]} onPress={() => confirmOffer(item, count)}>
                    <Text style={styles.textbutton}>COMPRAR</Text>
                </TouchableOpacity>
                    <Text style={styles.text}> Quantidade:</Text>
                    <View style={styles.arrows}>
                        <TouchableOpacity onPress={decreaseCount}>
                            <Text style={styles.textDecrease}>-</Text>
                        </TouchableOpacity>
                        <View style={styles.buttonAmount}>
                            <Text style={styles.textAmount}>{count}</Text>
                        </View>
                        <TouchableOpacity onPress={increaseCount}>
                        <Text style={styles.textIncrease}>+</Text>
                        </TouchableOpacity>
                    </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    colunm: {
        marginLeft: 15,
        backgroundColor: COLORS.bgColorPrimary,
        borderRadius: 20,
        width: Tela - 30,
        height: 155,
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
    button: {
        width: 110,
        borderRadius: 20,
        backgroundColor: COLORS.warningButton,
        padding: 12
    },
    textbutton: {
        color: COLORS.textWhite,
        fontSize: 12,
        textAlign: 'center',
        fontFamily: 'Rubik_400Regular'
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginVertical: 5,
    },
    row3: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginTop: 15,
        marginBottom: 5
    },
    icone: {
        width: 36,
        height: 36,
        alignSelf: 'center',
        marginTop: -30
    },
    person: {
        width: 56,
        height: 58,
    },
    textBold: {
        fontSize: 13,
        fontFamily: 'Rubik_400Regular',
        fontWeight: 'bold',
    },
    text: {
        textAlign: 'center',
        fontSize: 15,
        marginTop:5
    },
    arrows: {
        flexDirection: 'row',
        alignSelf: 'center',
        justifyContent: 'center',
      },
      buttonAmount: {
        backgroundColor: COLORS.textWhite,
        borderWidth: 1,
        borderRadius: 20,
        height: 20,
        width: 35
      },
      textAmount: {
        alignSelf: 'center',
        textAlign: 'center',
        marginTop: 2,
        fontFamily: 'Rubik_400Regular',
        fontSize: 12
      },
      textIncrease: {
        alignSelf: 'center',
        textAlign: 'center',
        marginTop: -5,
        marginLeft:7.5,
        fontFamily: 'Rubik_400Regular',
        fontSize: 25,
        color:'#FF1C1C'
      },
      textDecrease: {
        alignSelf: 'center',
        textAlign: 'center',
        marginTop: -5,
        marginRight:7.5,
        fontFamily: 'Rubik_400Regular',
        fontSize: 25,
        color:'#1F4EC8'
      }
});