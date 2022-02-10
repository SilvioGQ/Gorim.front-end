import React, { useContext } from 'react';
import { Text, View, StyleSheet, Image, Dimensions } from 'react-native';

import COLORS from '../../constants/colors';
import imagesProducts from '../../constants/imagesProducts';
import ICONS from '../../constants/imagesIcons';
import { GameContext } from "../../contexts/GameContext";
const Tela = Dimensions.get('screen').width;

export default function HistoricoPolitico({ item }) {
    const { player } = useContext(GameContext);
    let quantidade = player.logsOffice.filter((item) => item.type === 'stamp').length;
    // console.log(item.length)
    
    
    return (
        <View style={styles.colunm}>
            <View style={styles.row3}>
                {player.office === 'Fiscal' ?
                    <>
                        <View>
                            <Image
                                style={styles.icone}
                                source={imagesProducts[item.type]}
                                />
                            <Text style={styles.text}>{item.type == 'fine' ? 'Multa' : 'Selo'}</Text>
                        </View>

                        <View>
                            <Text style={[styles.text, { marginTop: 5 }]}>{item.type === 'stamp' ? `${quantidade} selos ` : `$${item.value}`} </Text>
                            <Image source={require('../../assets/Arrow.png')} style={{ width: 120, height: 10, transform: item.ownAction ? [{ rotateY: "0deg" }] : [{ rotateY: "180deg" }], }} />
                            <Text style={styles.text}>{item.type === 'stamp' ? `concedidos` : `${item.gravity}`}</Text>
                        </View>
                        <View>
                            <Image
                                style={styles.icone}
                                source={ICONS[item.avatarPlayer]}
                            />
                            <Text style={styles.text}>{item.namePlayer}</Text>
                        </View>
                    </> :
                    <>
                        <View>
                            <Image
                                style={styles.icone}
                                source={ICONS[item.avatarPlayer]}
                            />
                            <Text style={styles.text}>{item.namePlayer}</Text>
                        </View>
                        <View>
                            <Text style={[styles.text, { marginTop: 5 }]}>{item.type === 'prevention' ? `$${item.value}` : `${item.label}`} </Text>
                            <Image source={require('../../assets/Arrow.png')} style={{ width: 130, height: 10, transform: item.ownAction ? [{ rotateY: "0deg" }] : [{ rotateY: "180deg" }], }} />
                            <Text style={styles.text}>Aplicou</Text>
                        </View>
                        <View>
                            <Image
                                style={styles.icone}
                                source={imagesProducts[item.type === 'prevention' ? item.label : item.type]}
                            />
                            <Text style={styles.text}>{item.type === 'prevention' ? item.label.replace(/Tratamento /, 'Trat ') : item.value > 0 ? `$${item.value}` : `${item.percentual}%`}</Text>
                        </View>
                    </>
                }
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
        fontSize: 11,
        
        marginBottom: 2
    }
});