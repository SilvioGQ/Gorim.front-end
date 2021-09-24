import React, { useState } from 'react';
import { Text, View, StyleSheet, Image, TouchableOpacity } from 'react-native';
import Dropdown from 'react-native-dropdown-enhanced';
import COLORS from '../../constants/colors';
import IMAGES from '../../constants/imagesIcons';
import Modal from '../../Components/ModalInfo'
export default function MultaComponent({ item, player }) {
    const [modalText, setModalText] = useState('');
    const information = () => {
        return setModalText('Tabela para aplicação de multas.\nO porra.');
    };
    const data= [
        {label: 'Baixo', value: 1},
        {label: 'Medio', value: 2},
        {label: 'Alto', value: 3},
        {label: 'Nenhum', value: 4},
    ]
    return (
        <View style={styles.container}>
            <View>
                <Image style={styles.icone} source={IMAGES['Icon3']} />
                <Text style={styles.textinhos}>{'nome kjdsklfa'}</Text>
            </View>
            <View>
                <Text style={styles.text}>Total poluição</Text>
                <View style={{flexDirection:'row'}}>
                <Text style={styles.text}>Gravidade: </Text>
                <Dropdown
                    data={data}
                    style={{height:28, width:110, borderRadius:17}}
                    defaultValue={2}
                    onSelectedChange={({ label }) => console.log(label)}
                />
                </View>
                <View style={styles.row}>
                    <TouchableOpacity style={styles.button} onPress={() => { }} activeOpacity={0.7}>
                        <Text style={styles.textbutton}>CONFIRMAR</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={[styles.button, { backgroundColor: '#2D7830' }]} onPress={() => { }} activeOpacity={0.7}>
                        <Text style={styles.textbutton}>VER MAIS</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        backgroundColor: '#fff',
        marginVertical: 25,
        padding: 15,
        borderRadius: 17,
        marginTop: 15,
        marginBottom: 4,
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 4,
        },
        shadowOpacity: 0.32,
        shadowRadius: 5.46,
        elevation: 6,
        marginHorizontal:20
    },
    text: {
        fontSize: 16,
        fontFamily: 'Rubik_300Light',
        alignItems:'center'
    },
    textinhos: {
        fontSize: 13,
        fontFamily: 'Rubik_300Light',
        textAlign:'center'
    },
    row: {
        flexDirection: 'row',
        marginVertical: 5
    },
    image: {
        width: 62,
        height: 60,
    },
    icone: {
        width: 52,
        height: 52,
        marginTop:15,
        marginHorizontal:10
    },
    button: {
        width: 108,
        borderRadius: 20,
        backgroundColor: '#66BF00',
        padding: 12
    },
    textbutton: {
        color: COLORS.textWhite,
        fontSize: 12,
        textAlign: 'center',
        fontFamily: 'Rubik_400Regular'
    },
});
