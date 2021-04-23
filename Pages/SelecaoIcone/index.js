import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, Image, TouchableOpacity, Dimensions, ScrollView } from 'react-native';

import COLORS from '../../resources/colors';
import Quadrados from '../../Components/Quadrado'
import PlayerService from '../../services/PlayerService';
import FunctionalityService from '../../services/FunctionalityService';
import ModalInfo from '../../Components/ModalInfo';
import { FlatList } from 'react-native-gesture-handler';
import Button from '../../Components/Button';
const Tela = Dimensions.get('screen').width;
const Height = Dimensions.get('screen').height;
export default function SelecaoIcone({ navigation, route }) {
    const [modalText, setModalText] = useState('');
    const [icon, seticone] = useState('');
    const [player, setPlayer] = useState({});

    const [selectIcon, setselectIcon] = useState();
    const IconsAgr = [
        {
            id: 1,
            icon: require('../../assets/perfils/agricultor/Agricultor.png')
        },
        {
            id: 2,
            icon: require('../../assets/perfils/agricultor/Agricultor2.png')
        },
        {
            id: 3,
            icon: require('../../assets/perfils/agricultor/people1.png')
        },
        {
            id: 4,
            icon: require('../../assets/perfils/empresariox1/Fertilizante.png')
        },
    ]
    const IconsEmp = [
        {
            id: 1,
            icon: require('../../assets/perfils/empresariox1/Agrotoxico.png')
        },
        {
            id: 2,
            icon: require('../../assets/perfils/empresariox1/Maquina.png')
        },
        {
            id: 3,
            icon: require('../../assets/perfils/empresariox1/Semente.png')
        },
        {
            id: 4,
            icon: require('../../assets/perfils/empresariox1/EmpRuivo.png')
        },
    ]

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
                <View style={{ marginHorizontal: 15 }}>
                    <Text style={styles.subtitle}>Selecionamos para você o personagem agrucultor, logo você será responsável por fazer as plantações, negociar o melhor preço possivel para os produtos com os empresários e evitar a poluição.</Text>
                    <Text style={styles.text}>Selecione um personagem</Text>
                    <FlatList
                        numColumns={3}
                        data={IconsAgr}
                        keyExtractor={item => item.id.toString()}
                        renderItem={({ item }) => <Quadrados player={''} onClick={() => setselectIcon(item.id)} backgroundColor={selectIcon == item.id ? '#8ACF3A' : '#fff'} icon={item.icon} />}
                    />
                </View>
            )}
            {player.type === 'Empresário' && (
                <View style={{ marginHorizontal: 15 }}>
                    <Text style={styles.subtitle}>Selecionamos para você o personagem empresário, logo você será responsável por neogociar as vendas dos seus produtos para os agricultores, onde você tem que tomar muito cuidado para não causar muita poluição.</Text>
                    <Text style={styles.text}>Selecione um personagem</Text>
                    <FlatList
                        numColumns={3}
                        data={IconsEmp}
                        keyExtractor={item => item.id.toString()}
                        renderItem={({ item }) => <Quadrados player={''} onClick={() => setselectIcon(item.id) && seticone(item.icon)} backgroundColor={selectIcon == item.id ? '#8ACF3A' : '#fff'} icon={item.icon} />}
                    />
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
        paddingTop: 45,
        marginLeft: 5,
        width: '100%',
        marginHorizontal: 15
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
    }
});