import React, { useContext, useState } from 'react';
import { Text, View, StyleSheet, Image, Dimensions, ScrollView, TouchableOpacity } from 'react-native';
import { GameContext } from '../../context/GameContext';
import COLORS from '../../resources/colors';
import Rodada from '../../Components/Rodada';
import IMAGES from '../../resources/imagesIcons'
const Height = Dimensions.get('screen').height;
const Tela = Dimensions.get('screen').width;
export default function Cenario() {
    const [open, setOpen] = useState(false)
    const { player, logs, round } = useContext(GameContext);
    const rotateZ = open ? "180deg" : "0deg"
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
                    <View style={[styles.white, { height: open ? 250 : 57 }]}>
                        <Text style={[styles.subtitle, {
                            marginLeft: 10,
                            marginTop: 16
                        }]}>Parcela</Text>
                        <TouchableOpacity onPress={() => { setOpen(!open) }}>
                            <Image style={{ width: 35, height: 35, marginRight: 10, marginTop: 10, transform: [{ rotateZ }] }} source={require('../../assets/simbolos/dropdown.png')} />
                        </TouchableOpacity>
                        {open && (
                            <View>
                                {logs.filter((item) => {
                                    if (item.type == 'plantation') {
                                        return item
                                    }
                                }).map((item, index) => {
                                    if (item.type === 'plantation') {
                                        return <Text key={index}> {`1º: Semente: ${item.product.seed}, Agrotóxico: Premiun
                                            Fertilizante: comum`} </Text>
                                    } else {
                                        return <HistoricosDinheiro key={index} item={item} />
                                    }
                                })
                                }
                            </View>
                        )}
                    </View>
                    <View style={[styles.white, { height: open ? 250 : 57 }]}>
                        <Text style={[styles.subtitle, {
                            marginLeft: 10,
                            marginTop: 16
                        }]}>Gastos</Text>
                        <TouchableOpacity>
                            <Image style={{ width: 35, height: 35, marginRight: 10, marginTop: 10 }} source={require('../../assets/simbolos/dropdown.png')} />
                        </TouchableOpacity>
                    </View>
                    <View style={[styles.white, { height: open ? 250 : 57 }]}>
                        <Text style={[styles.subtitle, {
                            marginLeft: 10,
                            marginTop: 16
                        }]}>Transferências</Text>
                        <TouchableOpacity>
                            <Image style={{ width: 35, height: 35, marginRight: 10, marginTop: 10 }} source={require('../../assets/simbolos/dropdown.png')} />
                        </TouchableOpacity>
                    </View>
                    <View style={[styles.white, { height: open ? 250 : 57 }]}>
                        <Text style={[styles.subtitle, {
                            marginLeft: 10,
                            marginTop: 16
                        }]}>Multas Pagas</Text>
                        <TouchableOpacity>
                            <Image style={{ width: 35, height: 35, marginRight: 10, marginTop: 10 }} source={require('../../assets/simbolos/dropdown.png')} />
                        </TouchableOpacity>
                    </View>
                    <View style={[styles.white, { height: open ? 250 : 57 }]}>
                        <Text style={[styles.subtitle, {
                            marginLeft: 10,
                            marginTop: 16
                        }]}>Impostos</Text>
                        <TouchableOpacity>
                            <Image style={{ width: 35, height: 35, marginRight: 10, marginTop: 10 }} source={require('../../assets/simbolos/dropdown.png')} />
                        </TouchableOpacity>
                    </View>
                    {/* {logs.filter((item) => {
            if (item.type == type) {
              return item
            }
          }).map((item, index) => {
            if (item.type === 'plantation') {
              return <HistoricosPlatacao key={index} item={item} />
            } else {
              return <HistoricosDinheiro key={index} item={item} />
            }
          })
          } */}
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
