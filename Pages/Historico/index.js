import React, { useContext, useState } from 'react';
import { Text, View, StyleSheet, Image, Dimensions, ScrollView, TouchableOpacity } from 'react-native';

import { GameContext } from '../../context/GameContext';
import COLORS from '../../resources/colors';
import Rodada from '../../Components/Rodada';
import IMAGES from '../../resources/imagesIcons';

const Height = Dimensions.get('screen').height;
const Tela = Dimensions.get('screen').width;
export default function Cenario() {

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
        <View style={{ backgroundColor: COLORS.bgColorPrimary, height: Height }}>
            <Rodada name={'Histórico'} />
            <ScrollView>
                <View style={styles.container}>
                    <Text style={styles.header}>HISTÓRICO</Text>
                    <Text style={styles.rodada}>RODADA {round}</Text>
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
                    <View style={[styles.white,{height: open ? 250 : 57 }]}>
                    <View style={styles.whiteRow}>
                        <Text style={[styles.subtitle, {
                            marginLeft: 10,
                            marginTop: 16
                        }]}>Parcela</Text>
                        <TouchableOpacity onPress={() => { setOpen(!open) }}>
                            <Image style={{ width: 35, height: 35, marginRight: 10, marginTop: 10, transform: [{ rotateZ }] }} source={require('../../assets/simbolos/dropdown.png')} />
                        </TouchableOpacity>
                        </View>
                        <Text style={{marginLeft: 10, fontFamily:'Rubik_300Light'}}>
                            {logs.filter((item) => {
                                    if (item.type == 'plantation') {
                                        return item
                                    }
                                }).map((item, index) => {
                                        return <Text key={index}> Semente:{item.parcelLand.seed}, {item.parcelLand.pesticide ? `Agrotóxico:${item.parcelLand.pesticide.replace(/Agrotóxico /, '')},`: '' } {item.parcelLand.fertilizer ? `Fertilizante:${item.parcelLand.fertilizer.replace(/Fertilizante /, '')},`: '' } {item.parcelLand.machine ? `Maquina:${item.parcelLand.machine},`: '' } Pulverizador{item.parcelLand.spray ?  'Sim': 'Não'} {'\n'}</Text>
                                })
                                }</Text>

                    </View>
                    <View style={[styles.white,{height: open2 ? 250 : 57 }]}>
                    <View style={styles.whiteRow}>
                        <Text style={[styles.subtitle, {
                            marginLeft: 10,
                            marginTop: 16
                        }]}>Gastos</Text>
                        <TouchableOpacity onPress={() => { setOpen2(!open2) }}>
                            <Image style={{ width: 35, height: 35, marginRight: 10, marginTop: 10, transform: [{ rotateZ:rotateZ2 }] }} source={require('../../assets/simbolos/dropdown.png')} />
                        </TouchableOpacity>
                        </View>
                        <Text style={{marginLeft: 10, fontFamily:'Rubik_300Light'}}>
                            {logs.filter((item) => {
                                    if (item.type == 'buy') {
                                        return item
                                    }
                                }).map((item, index) => {
                                        return <Text key={index}>{item.ownAction ?  `Você comprou ${item.product.amount} ${item.product.name} por ${item.product.price}$ cada, do empresário ${item.namePlayer} \n` : `Você vendeu ${item.product.amount} ${item.product.name} por ${item.product.price}$ cada, do empresário ${item.namePlayer} \n`}</Text>
                                })
                                }</Text>


                    </View>
                    <View style={[styles.white,{height: open3 ? 250 : 57 }]}>
                    <View style={styles.whiteRow}>
                        <Text style={[styles.subtitle, {
                            marginLeft: 10,
                            marginTop: 16
                        }]}>Transferências</Text>
                        <TouchableOpacity onPress={() => { setOpen3(!open3) }}>
                            <Image style={{ width: 35, height: 35, marginRight: 10, marginTop: 10, transform: [{ rotateZ:rotateZ3 }] }} source={require('../../assets/simbolos/dropdown.png')} />
                        </TouchableOpacity>
                        </View>
                        <Text style={{marginLeft: 10, fontFamily:'Rubik_300Light'}}>
                            {logs.filter((item) => {
                                    if (item.type == 'transfer') {
                                        return item
                                    }
                                }).map((item, index) => {
                                        return <Text key={index}>{item.ownAction ? `você tranferiu ${item.value} para o jogador ${item.namePlayer}\n`: `você recebeu ${item.value} do jogador ${item.namePlayer}\n`}</Text>
                                })
                                }</Text>

                    </View>
                    <View style={[styles.white,{height: open4 ? 250 : 57 }]}>
                    <View style={styles.whiteRow}>
                        <Text style={[styles.subtitle, {
                            marginLeft: 10,
                            marginTop: 16
                        }]}>Multas Pagas</Text>
                        <TouchableOpacity onPress={() => { setOpen4(!open4) }}>
                            <Image style={{ width: 35, height: 35, marginRight: 10, marginTop: 10, transform: [{ rotateZ:rotateZ4 }] }} source={require('../../assets/simbolos/dropdown.png')} />
                        </TouchableOpacity>
                        </View>
                        <Text style={{marginLeft: 10, fontFamily:'Rubik_300Light'}}>Parcela toppen toppen</Text>

                    </View>
                    <View style={[styles.white,{height: open5 ? 250 : 57 }]}>
                    <View style={styles.whiteRow}>
                        <Text style={[styles.subtitle, {
                            marginLeft: 10,
                            marginTop: 16
                        }]}>Impostos</Text>
                        <TouchableOpacity onPress={() => { setOpen5(!open5) }}>
                            <Image style={{ width: 35, height: 35, marginRight: 10, marginTop: 10, transform: [{ rotateZ:rotateZ5 }] }} source={require('../../assets/simbolos/dropdown.png')} />
                        </TouchableOpacity>
                        </View>
                        <Text style={{marginLeft: 10, fontFamily:'Rubik_300Light'}}>Parcela toppen toppen</Text>

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
        marginBottom: 12
    },
    whiteRow: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 20
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