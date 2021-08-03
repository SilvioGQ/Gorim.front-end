import React, { useState, useEffect, useContext } from 'react';
import { Text, View, StyleSheet, Image, Dimensions } from 'react-native';

import COLORS from '../../resources/colors';
import Button from '../../Components/Button';

export default function Status({ navigation }) {

    return (

        <View style={styles.container}>
            <View style={styles.containerescuro}>
                <Text style={styles.text}>RESUMO DA ETAPA</Text>
                <Image source={require('./assets/perfils/Icon1.png')} style={styles.img} />
                <Text style={styles.text2}>Pre/AlanCarlos</Text>
                <View style={styles.circulo}>
                    <Text style={styles.text3}>Seu dinheiro: 300</Text>
                </View>
                <View style={styles.circulo}>
                    <Text style={styles.text3}>Poluição Mundial: 50%</Text>
                </View>
                <View style={styles.circulo}>
                    <Text style={styles.text3}>Produtividade: 400</Text>
                </View>
                <View style={styles.circulo}>
                    <Text style={styles.text3}>Poluição: 200</Text>
                </View>
                <View style={styles.circulo}>
                    <Text style={styles.text3}>Imposto pago: 10%</Text>
                </View>
                <View style={styles.circulo}>
                    <Text style={styles.text3}>Multa a pagar: sem multa</Text>
                </View>
                <View style={styles.circulo}>
                    <Text style={styles.text3}>Produtividade global: 70%</Text>
                </View>
                <View style={styles.botao}>
                    <Button onClick={() => { navigation.navigate('') }} name={'AVANÇAR'} />
                </View>
            </View>
        </View>
    )
}



const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.bgColorPrimary,
        alignItems: 'center',
        paddingVertical: 30,
    },
    containerescuro: {
        flex: 1,
        backgroundColor: '#C8EEEA',
        alignItems: 'center',
        borderRadius: 17,
        marginHorizontal: 100,
        width: '90%'
    },
    text: {
        fontSize: 24,
        fontFamily: 'Rubik_400Regular',
        marginVertical: 32,
        color: '#3F5510',
        fontWeight: 'bold'
    },
    text2: {
        fontSize: 20,
        fontFamily: 'Rubik_700Bold',
        marginTop: 10,
        marginBottom: 25
    },
    text3: {
        marginLeft: 20,
        marginTop: 12,
        fontSize: 20,
        fontFamily: 'Rubik_300Light',
    },
    img: {
        height: 85,
        width: 79,
        alignItems: 'center'
    },
    circulo: {
        backgroundColor: '#fff',
        marginVertical: 2,
        borderRadius: 17,
        width: 275,
        height: 51,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.20,
        shadowRadius: 4.46,
        elevation: 2,
    },
    botao: {
        marginVertical: 25
    }
})