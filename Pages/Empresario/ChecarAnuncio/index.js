import React, { useState, useEffect, useContext } from 'react';
import { Text, View, StyleSheet, Dimensions, FlatList, StatusBar } from 'react-native';

import Coin from '../../../Components/Coin';

import Anuncio from '../../../Components/Anuncio';
import COLORS from '../../../resources/colors';
import FunctionalityService from '../../../services/FunctionalityService';
import Modal from '../../../Components/ModalInfo'
import { socketContext } from "../../../context/socket";
import { playerContext } from "../../../context/player";
const Tela = Dimensions.get('screen').width;
export default function Proposta({ route, navigation }) {
    const [offersAll, setOffersAll] = useState([]);
    const socket = useContext(socketContext);
    const [modalText, setModalText] = useState('');

    useEffect(() => {
        FunctionalityService.getOffers(-1, player.room).then(setOffersAll);
    }, []);
    return (
        <View style={styles.container}>
            <Coin coin={player.coin} />
            <Text style={styles.header}>Anúncios</Text>
            {modalText !== '' && (
                <Modal onClick={() => setModalText('')} text={modalText} />
            )}
            <Text style={styles.text}>Oferta para todos</Text>
            {offersAll.length === 0 && (
                <Text style={{ flex: 1, textAlign: 'center', fontFamily: 'Rubik_700Bold', fontSize: 18, marginVertical: 50 }}>Você não tem nada!</Text>
            )}
            <FlatList
                showsVerticalScrollIndicator={false}
                data={offersAll}
                keyExtractor={(index) => index.toString()}
                renderItem={({ item }) => <Anuncio item={item} Historico={()=>navigation.navigate('Cenario')} />}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.bgColorPrimary,
        width: Tela,
        paddingTop: StatusBar.currentHeight
    },
    header: {
        fontFamily: 'Rubik_300Light',
        textAlign: 'center',
        fontSize: 32,
        marginBottom: 35
    },
    text: {
        fontFamily: 'Rubik_300Light',
        textAlign: 'center',
        fontSize: 22,
        paddingTop: 10
    }
});