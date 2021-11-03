import React, { useContext } from 'react';
import { Text, View, StyleSheet, TouchableOpacity, Dimensions } from 'react-native';
import { GameContext } from '../../contexts/GameContext';
const Height = Dimensions.get('screen').height;

export default function FiltroHistoricoJogadores({ type, setType }) {
    const { player } = useContext(GameContext);
    return (
        <View style={{ flexDirection: 'row', marginHorizontal: 20, width: '80%', justifyContent: 'space-between', marginVertical: 10 }}>
                <>
                    <TouchableOpacity style={[styles.buttonAgr, { backgroundColor: type == 'Agricultor' ? "#8ACF3A" : '#fff' }]} onPress={() => { setType('Agricultor') }}  >
                        <Text style={[styles.textSmall, { color: type == 'Agricultor' ? '#fff' : '#000' }]}>Agricultor</Text>
                    </TouchableOpacity>
                <TouchableOpacity style={[styles.buttonAgr, { backgroundColor: type == 'Empresário' ? "#8ACF3A" : '#fff' }]} onPress={() => { setType('Empresário') }}  >
                        <Text style={[styles.textSmall, { color: type == 'Empresário' ? '#fff' : '#000' }]}>Empresário</Text>
                    </TouchableOpacity>
                </>
        </View>
    )
}

const styles = StyleSheet.create({
    buttonAgr: {
        width: '44%',
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