import React, { useContext } from 'react';
import { Text, View, StyleSheet, TouchableOpacity, Dimensions } from 'react-native';
import { GameContext } from '../../contexts/GameContext';
const Height = Dimensions.get('screen').height;

export default function FiltroVotacao({ type, setType }) {
    const { player } = useContext(GameContext);
    return (
        <View style={{ flexDirection: 'row', marginHorizontal: 20, width: '80%', justifyContent: 'space-between', marginVertical: 10 }}>
            <>
                <TouchableOpacity style={[styles.button, { backgroundColor: type == 'Prefeito' ? "#8ACF3A" : '#fff' }]} onPress={() => { setType('Prefeito') }} activeOpacity={0.7}>
                    <Text style={[styles.textSmall, { color: type == 'Prefeito' ? '#fff' : '#000' }]}>Prefeito</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.button, { backgroundColor: type == 'Vereador' ? "#8ACF3A" : '#fff' }]} onPress={() => { setType('Vereador') }} activeOpacity={0.7}>
                    <Text style={[styles.textSmall, { color: type == 'Vereador' ? '#fff' : '#000' }]}>Vereador</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.button, { backgroundColor: type == 'Fiscal' ? "#8ACF3A" : '#fff' }]} onPress={() => { setType('Fiscal') }} activeOpacity={0.7}>
                    <Text style={[styles.textSmall, { color: type == 'Fiscal' ? '#fff' : '#000' }]}>Fiscal</Text>
                </TouchableOpacity>
            </>
        </View>
    )
}

const styles = StyleSheet.create({
    button: {
        width: '33%',
        height: 40,
        borderRadius: 50,
        borderWidth: 1
    },
    textSmall: {
        textAlign: 'center',
        fontSize: Height < 780 ? 11 : 13,

        marginTop: 9
    },
})