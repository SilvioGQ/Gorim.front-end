import React, { useState, useEffect, useContext } from 'react';
import { Text, View, StyleSheet, ScrollView, StatusBar } from 'react-native';
import { socketContext } from "../../context/socket";
import { playerContext } from "../../context/player";

import COLORS from '../../resources/colors';
import Quadrados from '../../Components/Quadrado'
// import ModalInfo from '../../Components/ModalInfo';
import Button from '../../Components/Button';

export default function SelecaoIcone({ navigation }) {

    // const [modalText, setModalText] = useState('');
    const [selectIcon, setSelectIcon] = useState();
    const [avatars, setAvatars] = useState([]);
    const socket = useContext(socketContext);
    const player = useContext(playerContext);

    const startGame = () => {
        // if (!selectIcon) {
        //     setModalText('Selecione uma imagem!');
        // } else {
        // PlayerService.setAvatar(icon, player.id)
        // player.avatar=icon
        navigation.reset({ routes: [{ name: 'MenuJogador' }] })
        // }
    }

    const selectAvatar = index => {
        socket.emit('selectAvatar', index, avatars => {
            setAvatars(avatars);
            setSelectIcon(index);
            player.setAvatar(index);
        });
    }

    const bgQuadrados = index => {
        let color = '#fff';

        if (avatars.indexOf(index) != -1) color = 'red';
        if (selectIcon == index) color = '#8ACF3A';

        return color;
    }
    // useEffect(() => {
    // if (route.params.player) {
    //     setPlayer(route.params.player);
    // } else {
    // }
    //     PlayerService.getPlayer(route.params.id).then(setPlayer);
    // }, []);
    return (
        <View style={styles.container}>
            <ScrollView>
                <Text style={styles.title}>Bem vindo ao Gorim!</Text>
                <View style={{ marginHorizontal: 15, marginVertical: 20 }}>
                    <Text style={styles.subtitle}>Selecionamos para você o personagem agrucultor, logo você será responsável por fazer as plantações, negociar o melhor preço possivel para os produtos com os empresários e evitar a poluição.</Text>
                    <Text style={styles.text}>Selecione um personagem</Text>
                    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                        <View style={{ marginHorizontal: 5, flexDirection: 'row' }}>
                            <Quadrados onClick={() => selectAvatar('Agricultor1')} backgroundColor={bgQuadrados('Agricultor1')} icon='Agricultor1' />
                            <Quadrados onClick={() => selectAvatar('Agricultor2')} backgroundColor={bgQuadrados('Agricultor2')} icon='Agricultor2' />
                            <Quadrados onClick={() => selectAvatar('Agricultor3')} backgroundColor={bgQuadrados('Agricultor3')} icon='Agricultor3' />
                            <Quadrados onClick={() => selectAvatar('Agricultor4')} backgroundColor={bgQuadrados('Agricultor4')} icon='Agricultor4' />
                            <Quadrados onClick={() => selectAvatar('Empresário1')} backgroundColor={bgQuadrados('Empresário1')} icon='Empresário1' />
                            <Quadrados onClick={() => selectAvatar('Empresário2')} backgroundColor={bgQuadrados('Empresário2')} icon='Empresário2' />
                            <Quadrados onClick={() => selectAvatar('Empresário3')} backgroundColor={bgQuadrados('Empresário3')} icon='Empresário3' />
                            <Quadrados onClick={() => selectAvatar('Empresário4')} backgroundColor={bgQuadrados('Empresário4')} icon='Empresário4' />
                            <Quadrados onClick={() => selectAvatar('Empresário5')} backgroundColor={bgQuadrados('Empresário5')} icon='Empresário5' />
                            <Quadrados onClick={() => selectAvatar('Empresário6')} backgroundColor={bgQuadrados('Empresário6')} icon='Empresário6' />
                        </View>
                    </ScrollView>
                </View>
                <Button onClick={startGame} name='começar' />
            </ScrollView>
            {/* {modalText !== '' && (
                <ModalInfo onClick={() => setModalText('')} text={modalText} />
            )} */}
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