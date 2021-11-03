import React, { useContext } from 'react';
import { Text, View, StyleSheet, TouchableOpacity, Dimensions } from 'react-native';
import { GameContext } from '../../contexts/GameContext';
const Height = Dimensions.get('screen').height;

export default function FiltroTransferencias({ type, setType }) {

    const { player } = useContext(GameContext);
    return (
        <View style={{ flexDirection: 'row', marginHorizontal: 20, width: '80%', justifyContent: 'space-between', marginVertical: 10 }}>
            <>
                <TouchableOpacity style={[styles.button, { backgroundColor: type == 'Agricultor' ? "#8ACF3A" : '#fff' }]} onPress={() => { setType('Agricultor')}} activeOpacity={0.7}>
                    <Text style={[styles.textSmall, { color: type == 'Agricultor' ? '#fff' : '#000' }]}>Agr/Emp</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.button, { backgroundColor: type == 'Fiscal' ? "#8ACF3A" : '#fff' }]} onPress={() => { setType('Fiscal')}} activeOpacity={0.7}>
                    <Text style={[styles.textSmall, { color: type == 'Fiscal' ? '#fff' : '#000' }]}>Ver/Pre/Fis</Text>
                </TouchableOpacity>
            </>
        </View>
    )
}

const styles = StyleSheet.create({
    button: {
        width: '44%',
        height: 40,
        borderRadius: 50,
        borderWidth: 1
    },
    textSmall: {
        textAlign: 'center',
        fontSize: Height < 780 ? 11 : 13,
        fontFamily: 'Rubik_300Light',
        marginTop: 9
    },
})