import React, { useContext, useState } from 'react';
import { Text, View, StyleSheet, Image, Dimensions, ScrollView, TouchableOpacity } from 'react-native';

import { GameContext } from '../../contexts/GameContext';
import COLORS from '../../constants/colors';
import Rodada from '../../Components/Rodada';
import IMAGES from '../../constants/imagesIcons';

const Height = Dimensions.get('screen').height;
const Tela = Dimensions.get('screen').width;
export default function Cenario({ navigation }) {

    const [open, setOpen] = useState(false);
    const [open2, setOpen2] = useState(false);
    const [open3, setOpen3] = useState(false);
    const [open4, setOpen4] = useState(false);
    const [open5, setOpen5] = useState(false);
    const { player, logs, round } = useContext(GameContext);
    const rotateZ = open ? "180deg" : "0deg";
    const rotateZ2 = open2 ? "180deg" : "0deg";
    const rotateZ3 = open3 ? "180deg" : "0deg";
    const rotateZ4 = open4 ? "180deg" : "0deg";
    const rotateZ5 = open5 ? "180deg" : "0deg";

    console.log(logs);
    return (
        <View>
            <Rodada name={'Historico'} arrow={true} onClick={() => navigation.goBack()} />
            <ScrollView>
                <View style={styles.container}>
                    <Text style={styles.header}>HISTÓRICO</Text>
                    <Text style={styles.rodada}>RODADA {round - 1}</Text>
                    <View style={styles.row}>
                        <Image
                            style={styles.image}
                            source={IMAGES[player.avatar]}
                        />
                        <View>
                            <Text style={styles.name}>{player.name}</Text>
                            <Text style={styles.subtitle}>{player.type}</Text>
                            <Text style={styles.subtitle}>{player.city}</Text>
                        </View>
                    </View>
                    {player.type === 'Agricultor' ?
                        <View style={styles.white}>
                            <View style={styles.whiteRow}>
                                <Text style={[styles.subtitle, {
                                    marginLeft: 10,
                                    marginTop: 15
                                }]}>Parcela</Text>
                                <TouchableOpacity onPress={() => { setOpen(!open) }}>
                                    <Image style={{ width: 35, height: 35, marginRight: 10, marginTop: 10, transform: [{ rotateZ }] }} source={require('../../assets/dropdown.png')} />
                                </TouchableOpacity>
                            </View>
                            <View style={{display: open ? 'flex' : 'none', flexDirection:'column' }}>
                                {logs.filter((item) => {
                                    if (item.type == 'plantation') {
                                        return item
                                    }
                                }).map((item, index) => {
                                    return <Text style={{ marginLeft: 10, fontFamily: 'Rubik_300Light' }}key={index}>Semente:{item.parcelLand.seed}, {item.parcelLand.pesticide ? `Agrotóxico:${item.parcelLand.pesticide.replace(/Agrotóxico /, '')},` : ''} {item.parcelLand.fertilizer ? `Fertilizante:${item.parcelLand.fertilizer.replace(/Fertilizante /, '')},` : ''} {item.parcelLand.machine ? `Maquina:${item.parcelLand.machine},` : ''} Pulverizador{item.parcelLand.spray ? 'Sim' : 'Não'} {'\n'} </Text>
                                })
                                }</View>
                                </View>
                        :
                        null
                    }

                    <View style={styles.white}>
                        <View style={styles.whiteRow}>
                            <Text style={[styles.subtitle, {
                                marginLeft: 10,
                                marginTop: 15
                            }]}>Gastos</Text>
                            <TouchableOpacity onPress={() => { setOpen2(!open2) }}>
                                <Image style={{ width: 35, height: 35, marginRight: 10, marginTop: 10, transform: [{ rotateZ: rotateZ2 }] }} source={require('../../assets/dropdown.png')} />
                            </TouchableOpacity>
                        </View>
                        <View style={{ display: open2 ? 'flex' : 'none' }}>
                            {logs.filter((item) => {
                                if (item.type == 'buy') {
                                    return item
                                }
                            }).map((item, index) => {
                                return <Text style={{ marginLeft: 10, fontFamily: 'Rubik_300Light' }} key={index}>{item.ownAction ? `Você comprou ${item.product.amount} ${item.product.name} por ${item.product.price}$ cada, do empresário ${item.namePlayer} \n` : `Você vendeu ${item.product.amount} ${item.product.name} por ${item.product.price}$ cada, para o agricultor ${item.namePlayer} \n`}</Text>
                            })
                            }</View>


                    </View>
                    <View style={styles.white}>
                        <View style={styles.whiteRow}>
                            <Text style={[styles.subtitle, {
                                marginLeft: 10,
                                marginTop: 15
                            }]}>Transferências</Text>
                            <TouchableOpacity onPress={() => { setOpen3(!open3) }}>
                                <Image style={{ width: 35, height: 35, marginRight: 10, marginTop: 10, transform: [{ rotateZ: rotateZ3 }] }} source={require('../../assets/dropdown.png')} />
                            </TouchableOpacity>
                        </View>
                        <View style={{ display: open3 ? 'flex' : 'none' }}>
                            {logs.filter((item) => {
                                if (item.type == 'transfer') {
                                    return item
                                }
                            }).map((item, index) => {
                                return <Text style={{ marginLeft: 10, fontFamily: 'Rubik_300Light' }} key={index}>{item.ownAction ? `você tranferiu ${item.value} para o jogador ${item.namePlayer}\n` : `você recebeu ${item.value} do jogador ${item.namePlayer}\n`}</Text>
                            })
                            }</View>

                    </View>
                    <View style={styles.white}>
                        <View style={styles.whiteRow}>
                            <Text style={[styles.subtitle, {
                                marginLeft: 10,
                                marginTop: 15
                            }]}>Multas Pagas</Text>
                            <TouchableOpacity onPress={() => { setOpen4(!open4) }}>
                                <Image style={{ width: 35, height: 35, marginRight: 10, marginTop: 10, transform: [{ rotateZ: rotateZ4 }] }} source={require('../../assets/dropdown.png')} />
                            </TouchableOpacity>
                        </View>
                        <Text style={{ display: open4 ? 'flex' : 'none' }}>Não tem multas</Text>
                    </View>
                    <View style={styles.white}>
                        <View style={styles.whiteRow}>
                            <Text style={[styles.subtitle, {
                                marginLeft: 10,
                                marginTop: 15
                            }]}>Impostos</Text>
                            <TouchableOpacity onPress={() => { setOpen5(!open5) }}>
                                <Image style={{ width: 35, height: 35, marginRight: 10, marginTop: 10, transform: [{ rotateZ: rotateZ5 }] }} source={require('../../assets/dropdown.png')} />
                            </TouchableOpacity>
                        </View>
                        <View style={{ display: open5 ? 'flex' : 'none' }}>{logs.filter((item) => {
                            if (item.type == 'tax') {
                                return item
                            }
                        }).map((item, index) => {
                            return <Text style={{ marginLeft: 10, fontFamily: 'Rubik_300Light' }} key={index}>{item.percentual ? `Você pagou na ultima rodada ${item.value}$ que equivale a ${item.percentual}% da sua produtividade` : `Foram cobrados ${item.value}$ em impostos.`}</Text>
                        })}</View>
                    </View>
                </View>
            </ScrollView>
        </View>
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
    white: {
        width: '80%',
        borderRadius: 17,
        borderWidth: 1,
        backgroundColor: '#fff',
        paddingVertical: 5,
        marginVertical: 7
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


{/* {open && (
                            <View>
                                {logs.filter((item) => {
                                    if (item.type == 'plantation') {
                                        return item
                                    }
                                }).map((item, index) => {
                                    if (item.type === 'plantation') {
                                        return <Text key={index}> {`1º: Semente: ${item.parcelLand.seed}, Agrotóxico: Premiun
                                            Fertilizante: comum`} </Text>
                                    } else {
                                        return <HistoricosDinheiro key={index} item={item} />
                                    }
                                })
                                }
                            </View>
                        )} */}