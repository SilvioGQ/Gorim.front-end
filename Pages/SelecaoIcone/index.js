import React, { useState, useContext } from 'react';
import { Text, View, StyleSheet, ScrollView, StatusBar } from 'react-native';
import { socketContext } from "../../context/socket";
import { playerContext } from "../../context/player";

import COLORS from '../../resources/colors';
import Quadrados from '../../Components/Quadrado'
import Button from '../../Components/Button';

export default function SelecaoIcone({ navigation }) {

    const [avatars, setAvatars] = useState([]);
    const socket = useContext(socketContext);
    const player = useContext(playerContext);

    socket.on('newSelection', a => setAvatars(a));

    const selectAvatar = index => {
        socket.emit('selectAvatar', index, () => player.setAvatar(index));
    }

    const bgQuadrados = index => {
        let color = '#fff';

        avatars.filter(a => {
            if (a == index && player.getAvatar() != index) color = 'red';
        });
        if (player.getAvatar() == index) color = '#8ACF3A';

        return color;
    }
    
    return (
        <View style={styles.container}>
            <ScrollView>
                <Text style={styles.title}>Bem vindo ao Gorim!</Text>
                <View style={{ marginHorizontal: 15, marginVertical: 20 }}>
                    <Text style={styles.subtitle}>{player.getType()}Selecionamos para você o personagem agrucultor, logo você será responsável por fazer as plantações, negociar o melhor preço possivel para os produtos com os empresários e evitar a poluição.</Text>
                    <Text style={styles.text}>Selecione um personagem</Text>
                    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                        <View style={{ marginHorizontal: 5, flexDirection: 'row' }}>
                            <Quadrados onClick={() => selectAvatar('Icon1')} backgroundColor={bgQuadrados('Icon1')} icon='Icon1' />
                            <Quadrados onClick={() => selectAvatar('Icon2')} backgroundColor={bgQuadrados('Icon2')} icon='Icon2' />
                            <Quadrados onClick={() => selectAvatar('Icon3')} backgroundColor={bgQuadrados('Icon3')} icon='Icon3' />
                            <Quadrados onClick={() => selectAvatar('Icon4')} backgroundColor={bgQuadrados('Icon4')} icon='Icon4' />
                            <Quadrados onClick={() => selectAvatar('Icon5')} backgroundColor={bgQuadrados('Icon5')} icon='Icon5' />
                            <Quadrados onClick={() => selectAvatar('Icon6')} backgroundColor={bgQuadrados('Icon6')} icon='Icon6' />
                            <Quadrados onClick={() => selectAvatar('Icon7')} backgroundColor={bgQuadrados('Icon7')} icon='Icon7' />
                            <Quadrados onClick={() => selectAvatar('Icon8')} backgroundColor={bgQuadrados('Icon8')} icon='Icon8' />
                            <Quadrados onClick={() => selectAvatar('Icon9')} backgroundColor={bgQuadrados('Icon9')} icon='Icon9' />
                            <Quadrados onClick={() => selectAvatar('Icon10')} backgroundColor={bgQuadrados('Icon10')} icon='Icon10' />
                        </View>
                    </ScrollView>
                </View>
                <Text style={{ fontSize: 24, textAlign: 'center' }}>{avatars.length}/</Text>
                { player.getHost() && <Button onClick={() => navigation.navigate('MenuJogador')} name='começar' /> }
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.bgColorPrimary,
        alignItems: 'center',
        paddingTop: StatusBar.currentHeight,
        marginLeft: 5,
        width: '100%',
    },
    title: {
        fontSize: 24,
        marginVertical: 15,
        textAlign: 'center',
        fontFamily: 'Rubik_300Light'
    },
    subtitle: {
        fontSize: 18,
        marginVertical: 15,
        textAlign: 'center',
        fontFamily: 'Rubik_300Light'
    },
    text: {
        fontSize: 16,
        marginVertical: 25,
        textAlign: 'center',
        fontFamily: 'Rubik_300Light'
    },
    items: {
        width: '100%',
        flexDirection: 'row',
        flexWrap: 'wrap'
    },
});