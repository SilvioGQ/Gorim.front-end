import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, Dimensions, ScrollView } from 'react-native';

import COLORS from '../../resources/colors';
import Quadrados from '../../Components/Quadrado'
import PlayerService from '../../services/PlayerService';
import FunctionalityService from '../../services/FunctionalityService';
import ModalInfo from '../../Components/ModalInfo';
import Button from '../../Components/Button';
import { StatusBar } from 'react-native';
import IMAGES from '../../resources/imagesIcons'
export default function SelecaoIcone({ navigation, route }) {
    const [modalText, setModalText] = useState('');
    const [icon, seticon] = useState('');
    const [player, setPlayer] = useState({});

    const [selectIcon, setselectIcon] = useState();
    const startGame = () => {
        if (!selectIcon) {
            setModalText('Selecione uma imagem!');
        } else {
            navigation.reset({ routes: [{ name: 'MenuJogador', params: { player } }] })
        }
    }
    useEffect(() => {
        if (route.params.player) {
            setPlayer(route.params.player);
        } else {
            PlayerService.getPlayer(route.params.id).then(setPlayer);
        }
    }, []);
    return (
        <View style={styles.container}>
            <ScrollView>
                <Text style={styles.title}>Bem vindo ao Gorim!</Text>
                {player.type === 'Agricultor' && (
                    <View style={{ marginHorizontal: 15, marginVertical: 20 }}>
                        <Text style={styles.subtitle}>Selecionamos para você o personagem agrucultor, logo você será responsável por fazer as plantações, negociar o melhor preço possivel para os produtos com os empresários e evitar a poluição.</Text>
                        <Text style={styles.text}>Selecione um personagem</Text>
                        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                            <Quadrados player={''} onClick={() => { seticon('Agricultor1'); setselectIcon(1) }} backgroundColor={selectIcon == 1 ? '#8ACF3A' : '#fff'} icon={IMAGES['Agricultor1']} />
                            <Quadrados player={''} onClick={() => { seticon('Agricultor2'); setselectIcon(2) }} backgroundColor={selectIcon == 2 ? '#8ACF3A' : '#fff'} icon={IMAGES['Agricultor2']} />
                            <Quadrados player={''} onClick={() => { seticon('Agricultor3'); setselectIcon(3) }} backgroundColor={selectIcon == 3 ? '#8ACF3A' : '#fff'} icon={IMAGES['Agricultor3']} />
                            <Quadrados player={''} onClick={() => { seticon('Agricultor4'); setselectIcon(4) }} backgroundColor={selectIcon == 4 ? '#8ACF3A' : '#fff'} icon={IMAGES['Agricultor4']} />
                        </ScrollView>
                    </View>
                )}
                {player.type === 'Empresário' && (
                    <View style={{ marginHorizontal: 15, marginVertical: 20 }}>
                        <Text style={styles.subtitle}>Selecionamos para você o personagem empresário, logo você será responsável por neogociar as vendas dos seus produtos para os agricultores, onde você tem que tomar muito cuidado para não causar muita poluição.</Text>
                        <Text style={styles.text}>Selecione um personagem</Text>
                        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                            <Quadrados player={''} onClick={() => { seticon('Empresário1'); setselectIcon(1) }} backgroundColor={selectIcon == 1 ? '#8ACF3A' : '#fff'} icon={IMAGES['Empresário1']} />
                            <Quadrados player={''} onClick={() => { seticon('Empresário2'); setselectIcon(2) }} backgroundColor={selectIcon == 2 ? '#8ACF3A' : '#fff'} icon={IMAGES['Empresário2']} />
                            <Quadrados player={''} onClick={() => { seticon('Empresário3'); setselectIcon(3) }} backgroundColor={selectIcon == 3 ? '#8ACF3A' : '#fff'} icon={IMAGES['Empresário3']} />
                            <Quadrados player={''} onClick={() => { seticon('Empresário4'); setselectIcon(4) }} backgroundColor={selectIcon == 4 ? '#8ACF3A' : '#fff'} icon={IMAGES['Empresário4']} />
                        </ScrollView>
                    </View>

                )}
                <Button
                    onClick={startGame}
                    name='começar' />
            </ScrollView>
            {modalText !== '' && (
                <ModalInfo onClick={() => setModalText('')} text={modalText} />
            )}
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