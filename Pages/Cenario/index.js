import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, Image, ScrollView, Dimensions } from 'react-native';
//<View style= {{zIndex: 1, marginTop: -5, marginLeft: 4}}>
//<Image style={{width: 18, height: 25}} source= {require('../../assets/emojis/feliz.png')}/>
//</View>  por isso por dntro de outra view
import Feliz from '../../assets/emojis/feliz.png';
import Meio from '../../assets/emojis/meio.png';
import Preocupado from '../../assets/emojis/preocupado.png';
import Tenso from '../../assets/emojis/tenso.png';
import Corona from '../../assets/emojis/corona.png';
import Papel from '../../assets/agricultorIcones/papel.png';
import COLORS from '../../resources/colors';
import { StatusBar } from 'react-native';
const Height = Dimensions.get('screen').height;
const Tela = Dimensions.get('screen').width
export default function Cenario({route}) {
    const { player } = route.params;
    let poluicao = 25
    let value = require('../../assets/emojis/feliz.png')
    let value2 = require('../../assets/emojis/meio.png')
    let value3 = require('../../assets/emojis/preocupado.png')
    let value4 = require('../../assets/emojis/tenso.png')
    let value5 = require('../../assets/emojis/corona.png')
    const [Image1, setImage] = useState(value)
    useEffect(() => {
        function SelectImage() {
            if (poluicao > 20) {
                setImage(value2)
            }
            if (poluicao > 40) {
                setImage(value3)
            }
            if (poluicao > 60) {
                setImage(value4)
            }
            if (poluicao > 80) {
                setImage(value5)
            }
        }
        SelectImage()
    })
    return (
        <ScrollView
            showsVerticalScrollIndicator={false}>
            <View style={styles.container}>
                <View style={styles.row}>
                    <Image
                        style={styles.image}
                        source={Papel}
                    />
                    <Text style={styles.title}>Resumo do {'\n'}Cenário</Text>
                </View>
                <Text style={styles.texto}>Nível de poluição:</Text>
                <View style={[styles.row, { backgroundColor: '#FFFFFF', marginTop: 20, borderRadius: 20, height: 90, width: 180, shadowColor: "#000", shadowOffset: { width: 0, height: 4 }, shadowOpacity: 0.32, shadowRadius: 5.46, elevation: 9 }]}>
                    <Text style={{ fontSize: 36, marginLeft: 7, textAlign: 'center', marginTop: 20 }}>{poluicao}%</Text>
                    <Image style={styles.emoji} source={Image1} />
                </View>
                <Text style={styles.texto}>Saldos:</Text>
                <View style={styles.numeros}>
                    <View style={styles.bloquinho}>
                        <Text style={styles.numero}>300</Text>
                        <Text style={styles.inferior}>anterior</Text>
                    </View>
                    <View style={styles.bloquinho}>
                        <Text style={styles.numero}>0,0</Text>
                        <Text style={styles.inferior}>recebido</Text>
                    </View>
                    <View style={styles.bloquinho}>
                        <Text style={styles.numero}>10,5</Text>
                        <Text style={styles.inferior}>transferido</Text>
                    </View>
                    <View style={styles.bloquinho}>
                        <Text style={styles.numero}>{player.coin}</Text>
                        <Text style={styles.inferior}>atual</Text>
                    </View>
                </View>
                {Height <= 780 && (
                    <>
                        <Text style={styles.texto}>Resultado da sua plantação atual:</Text>
                        <Text style={[styles.inferior, styles.italiano]}>Com base nos insumos do armazém.</Text>
                        <View style={{ flexDirection: 'row', margin: '5%' }}>
                            <View style={styles.coloridos}>
                                <Text style={styles.numero2}>400</Text>
                                <Text style={styles.inferior2}>Produtividade</Text>
                            </View>
                            <View style={[styles.coloridos, { backgroundColor: '#FF0D0D', borderColor: '#BF0000' }]}>
                                <Text style={styles.numero2}>200</Text>
                                <Text style={styles.inferior2}>Poluição</Text>
                            </View>
                        </View>
                    </>
                )}

                <Text style={styles.texto}>Histórico:</Text>
                <Text style={styles.italiano}>X rodada: </Text>
                <Text style={[styles.italiano, { fontStyle: 'normal' }]}>
                    Fazer
                </Text>
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: COLORS.bgColorPrimary,
        width: Tela,
        paddingTop: StatusBar.currentHeight
    },
    title: {
        fontSize: 20,
        fontFamily: 'Rubik_300Light',
        marginTop: 10
    },
    row: {
        flexDirection: 'row',
        marginVertical: 10
    },
    image: {
        width: 62,
        height: 60,
    },
    texto: {
        fontFamily: 'Rubik_400Regular',
        fontSize: 20,
        textAlign: 'left',
        alignSelf: 'flex-start',
        marginVertical: 15,
        marginLeft: 15
    },
    numeros: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginTop: '3%',
        width: "90%"
    },
    emoji: {
        width: 70,
        height: 70,
        alignItems: 'center',
        marginLeft: 20,
        marginTop: 10
    },
    bloquinho: {
        backgroundColor: COLORS.bgColorSecondary,
        width: 66,
        height: 84,
        alignItems: 'center',
        textAlign: 'center',
        borderRadius: 20,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.22,
        shadowRadius: 4.06,
        elevation: 4,
    },
    numero: {
        fontSize: 24,
        fontFamily: 'Rubik_300Light',
        color: '#FF9900',
        marginTop: '30%'
    },
    inferior: {
        fontSize: 10,
        fontFamily: 'Rubik_300Light'
    },
    coloridos: {
        backgroundColor: '#8ACF3A',
        opacity: 0.8,
        borderWidth: 1,
        borderColor: COLORS.successButton,
        margin: '3%',
        width: 127,
        height: 84,
        alignItems: 'center',
        textAlign: 'center',
        borderRadius: 20,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.22,
        shadowRadius: 4.06,
        elevation: 4,
    },
    numero2: {
        fontSize: 32,
        fontFamily: 'Rubik_400Regular',
        color: '#fff',
        marginTop: '13%',
    },
    inferior2: {
        fontSize: 13,
        fontFamily: 'Rubik_300Light',
        color: '#fff',
    },
    italiano: {
        fontSize: 14,
        fontStyle: 'italic',
        alignSelf: 'flex-start',
        marginLeft: '7%',
        margin: '1%',
    }
}
)
/*
let value = require('../../assets/linhas/linha20.png')
let value2 = require('../../assets/linhas/linha40.png')
let value3 = require('../../assets/linhas/linha60.png')
let value4 = require('../../assets/linhas/linha80.png')
let value5 = require('../../assets/linhas/linha100.png')
const [Image1, setImage] = useState(value)
useEffect(() => {
    function SelectImage() {
        if (poluicao > 20) {
            setImage(value2)
        }
        if (poluicao > 40) {
            setImage(value3)
        }
        if (poluicao > 60) {
            setImage(value4)
        }
        if (poluicao > 80) {
            setImage(value5)
        }
        let imagens = ['../../assets/linhas/linha20.png', '../../assets/linhas/linha40.png', '../../assets/linhas/linha60.png', '../../assets/linhas/linha80.png', '../../assets/linhas/linha100.png']
    }
    SelectImage()
})
// let value= require(image)
                <View style={styles.numeros}>
                <Text>20%</Text>
                <Text>40%</Text>
                <Text>60%</Text>
                <Text>80%</Text>
                <Text>100%</Text>
            </View>
            <View style={styles.linha}>
                <Image
                    style={styles.linha}
                    source={Image1}
                />
            </View>
            <View style={styles.numeros}>
                <Image style={styles.emoji} source={Feliz} />
                <Image style={styles.emoji} source={Meio} />
                <Image style={styles.emoji} source={Preocupado} />
                <Image style={styles.emoji} source={Tenso} />
                <Image style={styles.emoji} source={Corona} />
            </View>
                linha: {
    width: '90%',
    margin: '2%',
    marginLeft: 9.5,
    height: 14,
},numeros: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: '3%',
    width: "90%"
},
emoji: {
    width: 35,
    height: 35
},
*/