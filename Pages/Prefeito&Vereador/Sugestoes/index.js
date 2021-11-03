import React, { useState, useEffect, useContext } from 'react';
import { Text, View, StyleSheet, Dimensions, FlatList, ScrollView } from 'react-native';
import { GameContext } from "../../../contexts/GameContext";

import Coin from '../../../Components/Coin';
import SugestoesRecebidas from '../../../Components/SugestoesRecebidas';
import SugestoesEnviadas from '../../../Components/SugestoesEnviadas';
import Rodada from '../../../Components/Rodada';

const Tela = Dimensions.get('screen').width;
export default function Sugestoes({ navigation }) {
    const [modalText, setModalText] = useState('');
    const { player, suggests } = useContext(GameContext);
    return (
        <View style={styles.container}>
            <Rodada name={'Sugestões'} arrow={true} onClick={() => navigation.navigate('MenuPolitico')} />
            <Coin coin={player.serviceSalary} />
            <Text style={styles.texto}>Sugestões:</Text>
            {player.office === 'Prefeito' && (
                <FlatList
                    showsVerticalScrollIndicator={false}
                    data={suggests}
                    keyExtractor={(item, index) => index.toString()}
                    renderItem={({ item, index }) => <SugestoesRecebidas key={index} item={item} />}
                />
            )}

            {player.office === 'Vereador' && (
                <FlatList
                    showsVerticalScrollIndicator={false}
                    data={suggests}
                    keyExtractor={(item, index) => index.toString()}
                    renderItem={({ item, index }) => <SugestoesEnviadas key={index} item={item} />}
                />
            )}
            {suggests.length === 0 && (
                <Text style={{ flex: 1.5, textAlign: 'center', fontFamily: 'Rubik_700Bold', fontSize: 18, justifyContent: 'center' }}>Você não fez sugestões!</Text>
            )}

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    header: {
        
        textAlign: 'center',
        fontSize: 20,
        marginBottom: 10
    },
    text: {
        
        textAlign: 'center',
        fontSize: 20,
        marginVertical: 5
    },
    textSmall: {
        textAlign: 'center',
        fontSize: 13,
        
        marginTop: 9
    },
    button: {
        width: '22%',
        height: 40,
        borderRadius: 50,
        borderWidth: 1
    },
    texto: {
        marginVertical: 20,
        
        fontSize: 22,
        textAlign: 'center'
    }
});