import React, { useState } from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';
import COLORS from '../../constants/colors';
import IMAGES from '../../constants/imagesProducts';
import Modal from '../../../Components/ModalInfo'
export default function Multa({ item, player }) {
    const [modalText, setModalText] = useState('');
    const information = () => {
        return setModalText('Tabela para aplicação de multas.\nO porra.');
    }
    return (
        <View style={styles.container}>
            <View>
                <Image style={styles.icone} source={IMAGES[player.avatar]} />
                <Text style={styles.textinhos}>{player.name}</Text>
            </View>
            <View>
                <Text>Total poluição</Text>
                <Text>Gravidade: </Text>
                <View style={styles.row}>
                    <TouchableOpacity style={styles.button} onPress={() => {}} activeOpacity={0.7}>
                        <Text style={styles.textbutton}>CONFIRMAR</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={[styles.button,{backgroundColor:'#2D7830'}]} onPress={() =>{}} activeOpacity={0.7}>
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
        marginBottom: 4
    },
    numero: {
        fontSize: 14,
        fontFamily: 'Rubik_300Light'
    },
    row: {
        flexDirection: 'row',
        marginVertical: 5
    },
    image: {
        width: 62,
        height: 60,
    },
    button: {
        width: 120,
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
