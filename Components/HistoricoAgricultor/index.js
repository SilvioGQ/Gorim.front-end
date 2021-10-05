import React, { useContext, useState } from 'react';
import { Text, View, StyleSheet, Image, Dimensions, ScrollView, TouchableOpacity } from 'react-native';

import { GameContext } from '../../contexts/GameContext';
import COLORS from '../../constants/colors';
import Rodada from '../Rodada';
import IMAGES from '../../constants/imagesIcons';
const Tela = Dimensions.get('screen').width;
export default function HistoricoAgricultor({player}) {
    const [open, setOpen] = useState(false);
    const { logs, round, globalPollution, globalProduction } = useContext(GameContext);
    const rotateZ = open ? "180deg" : "0deg";
    console.log(player.logs);
    console.log(player);
    console.log(logs);
    return (
        <ScrollView>
            <View>

                {player.type === 'Agricultor' ?
                    <View style={styles.backgreen}>
                        <View style={styles.whiteRow}>
                            <Text style={[styles.subtitle, {
                                marginLeft: 10,
                                marginTop: 10
                            }]}>{player.name}</Text>
                            <TouchableOpacity onPress={() => { setOpen(!open) }}>
                                <Image style={{ width: 35, height: 35, marginRight: 5, marginTop: 5, transform: [{ rotateZ }] }} source={require('../../assets/dropdown.png')} />
                            </TouchableOpacity>
                        </View>
                        <View style={{ display: open ? 'flex' : 'none', flexDirection: 'column' }}>
                            <Text style={{ marginLeft: 5, paddingHorizontal: 5, fontFamily: 'Rubik_300Light' }}>Poluição: {player.pollution.toFixed(1)}</Text>
                            <Text style={{ marginLeft: 5, paddingHorizontal: 5, fontFamily: 'Rubik_300Light' }}>Produtividade: ${logs.totalProduction} = ({globalProduction}%)</Text>
                            <Text style={{ marginLeft: 5, paddingHorizontal: 5, fontFamily: 'Rubik_300Light' }}>Imposto pago: </Text>
                        </View>
                    </View>
                    :
                    null
                }

                
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        width: Tela,
    },
    row: {
        flexDirection: 'row',
        marginVertical: 35
    },
    image: {
        width: 80,
        height: 80
    },
    name: {
        fontFamily: 'Rubik_700Bold',
        fontSize: 18
    },
    subtitle: {
        fontFamily: 'Rubik_300Light',
        fontSize: 18
    },
    backgreen: {
        width: '80%',
        borderRadius: 17,
        backgroundColor: '#C8EEDE',
        paddingVertical: 10,
        marginVertical: 10
    },
    whiteRow: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    header: {
        fontFamily: 'Rubik_400Regular',
        fontSize: 24,
        color: '#3F5510',
        marginTop: 25
    },
    rodada: {
        fontFamily: 'Rubik_400Regular',
        fontSize: 18,
        color: '#3F5510'
    }
});