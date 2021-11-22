import React, { useEffect, useContext, Fragment, useState } from 'react';
import { Text, View, StyleSheet, Image, ScrollView, Dimensions, TouchableOpacity } from 'react-native';
import Button from '../../../Components/Button';
import COLORS from '../../../constants/colors';
import Rodada from '../../../Components/Rodada';
import Voto from '../../../assets/symbols/vote.png';

const Tela = Dimensions.get('screen').width
export default function Detalhes({ navigation }) {
    return (
        <View style={styles.container}>
            <Rodada name={'Detalhes'} />
            <ScrollView showsVerticalScrollIndicator={false}>

                <View style={styles.self}>
                    <Image
                        style={styles.logo}
                        source={Voto}
                    />
                    <Text style={styles.title}>Eleições em {"\n"} {/*player.city*/} </Text>
                </View>
                <View>
                    <Text style={styles.resultados}>Detalhes:</Text>

                </View>
                <View style={styles.numeros}>
                    <View style={{ width: 300 }} >
                        <ScrollView horizontal={true} >

                            <View style={styles.bloquinho}>
                                <Text style={[styles.texto, { alignSelf: 'center', marginTop: 20 }]}>Eleição Prefeito</Text>
                                <View style={styles.a}>
                                    <Image source={require('../../../assets/avatars/Icon4.png')} style={styles.icone} />
                                    <Text style={styles.resultado}>Alan com x votos</Text>
                                </View>
                                <View style={styles.a}>
                                    <Image source={require('../../../assets/avatars/Icon4.png')} style={styles.icone} />
                                    <Text style={styles.resultado}>Alan com x votos</Text>
                                </View>
                                <View style={styles.a}>
                                    <Image source={require('../../../assets/avatars/Icon4.png')} style={styles.icone} />
                                    <Text style={styles.resultado}>Alan com x votos</Text>
                                </View>

                            </View>
                            <View style={styles.bloquinho}>
                                <Text style={[styles.texto, { alignSelf: 'center', marginTop: 20 }]}>Eleição Vereador</Text>
                                <View style={styles.a}>
                                    <Image source={require('../../../assets/avatars/Icon4.png')} style={styles.icone} />
                                    <Text style={styles.resultado}>Alan com x votos</Text>
                                </View>
                                <View style={styles.a}>
                                    <Image source={require('../../../assets/avatars/Icon4.png')} style={styles.icone} />
                                    <Text style={styles.resultado}>Alan com x votos</Text>
                                </View>
                                <View style={styles.a}>
                                    <Image source={require('../../../assets/avatars/Icon4.png')} style={styles.icone} />
                                    <Text style={styles.resultado}>Alan com x votos</Text>
                                </View>

                            </View>
                            <View style={styles.bloquinho}>
                                <Text style={[styles.texto, { alignSelf: 'center', marginTop: 20 }]}>Eleição Fiscal</Text>
                                <View style={styles.a}>
                                    <Image source={require('../../../assets/avatars/Icon4.png')} style={styles.icone} />
                                    <Text style={styles.resultado}>Alan com x votos</Text>
                                </View>
                                <View style={styles.a}>
                                    <Image source={require('../../../assets/avatars/Icon4.png')} style={styles.icone} />
                                    <Text style={styles.resultado}>Alan com x votos</Text>
                                </View>
                                <View style={styles.a}>
                                    <Image source={require('../../../assets/avatars/Icon4.png')} style={styles.icone} />
                                    <Text style={styles.resultado}>Alan com x votos</Text>
                                </View>

                            </View>
                        </ScrollView>
                    </View>

                </View>
                <Button
                    onClick={() => navigation.navigate('Eleitos')}
                    name='Voltar'
                />
            </ScrollView>
        </View>
    );
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: COLORS.bgColorPrimary,
        alignItems: 'center',
        padding: 5,
        width: Tela
    },
    icone: {
        height: 50,
        width: 50,
        alignSelf: 'flex-start',
        marginTop: 20,
        marginBottom: 10,
        marginLeft: 20,
        position: 'absolute'


    },
    self: {
        flexDirection: 'row',
        alignSelf: 'center',
        justifyContent: 'center',
        marginVertical: 20
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
        width: '90%',
        marginBottom: 20,
        marginTop: 20

    },
    title: {
        fontSize: 22,
        alignItems: 'flex-start',
        paddingLeft: 10
    },
    logo: {
        width: 60,
        height: 60
    },
    texto: {
        marginTop: 10,
        fontSize: 17,
        fontFamily: 'Rubik_700Bold',
        alignItems: 'center',
        justifyContent: 'center',
    },
    resultado: {
        fontSize: 18,
        marginLeft: 75,
        marginTop: 30
    },
    bloquinho: {
        backgroundColor: '#C8EEDE',
        width: 250,
        height: 300,
        alignItems: 'flex-start',
        textAlign: 'center',
        borderRadius: 20,
        marginHorizontal: 10

    },
    numeros: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: '3%',
        marginBottom: 40,
        width: "80%",
        alignSelf: 'center'
    },
    resultados: {
        fontSize: 20,
        color: '#58AB23',
        marginLeft: 40,
        marginBottom: 20
    },
    historico: {
        width: '30%',
        height: 30,
        backgroundColor: '#66BF00',
        borderRadius: 20,

    },
    botao: {
        color: '#fff',
        alignSelf: 'center',
        marginTop: 8
    },
    a: {
        paddingTop: 5,
        paddingBottom: 25,
        paddingRight: 25

    }
});