import React, { useState, useEffect, useContext } from 'react';
import { Text, View, StyleSheet, Dimensions, FlatList, ScrollView } from 'react-native';
import { GameContext, getSuggestTax } from "../../../contexts/GameContext";

import Coin from '../../../Components/Coin';
import SugestoesRecebidas from '../../../Components/SugestoesRecebidas';
import SugestoesEnviadas from '../../../Components/SugestoesEnviadas';
import Rodada from '../../../Components/Rodada';

const Tela = Dimensions.get('screen').width;
export default function Sugestoes({ navigation }) {
    const [modalText, setModalText] = useState('');
    const { player, data: suggest, stage } = useContext(GameContext);

    useEffect(() => {
        getSuggestTax();
    }, []);

    useEffect(() => {
        if (stage === 'GETSUGGESTTAX') console.log(suggest);
    }, [stage]);

    // const confirmPurchase = (item, amount = null) => {
    //     if (amount) {
    //         if (player.coin >= item.price * amount) {
    //             confirmOffer(item, amount);
    //         } else {
    //             setModalText('Você não possui dinheiro suficiente para esta compra.');
    //         }
    //     } else if (player.coin >= item.price * item.amount) {
    //         confirmOffer(item);
    //     } else {
    //         setModalText('Você não possui dinheiro suficiente para esta compra.');
    //     }
    // }

    // const selectType = () => {
    //     if (type !== '') {
    //         return offers.all.filter(i => i.type == type);
    //     } else {
    //         return offers.all;
    //     }
    // }

    return (
        <View style={styles.container}>
            <Rodada name={'Sugestões'} arrow={true} onClick={() => navigation.navigate('MenuPolitico')} />
            <Coin coin={player.serviceSalary} />
            <Text style={styles.texto}>Sugestões:</Text>
            {player.office === 'Prefeito' && (
                // flatlist

            //     <FilterType type={type} setType={setType} />
            //     {!offers.all || offers.all.length === 0 ?
            //     <Text style={{ flex: 1, textAlign: 'center', fontFamily: 'Rubik_700Bold', fontSize: 18, marginVertical: 50 }}>Você não tem nada!</Text>
            //     : <FlatList
            //         showsVerticalScrollIndicator={false}
            //         data={selectType()}
            //         keyExtractor={(item, index) => index.toString()}
            //         renderItem={({ item, index }) => <OfertaGeral key={index} item={item} confirmOffer={confirmPurchase} />}
            //     />
            // }
            <SugestoesRecebidas/>
            
            )}

            {player.office === 'Vereador' && (
            <SugestoesEnviadas/>
            )}

{/* 
            {player.office === 'Vereador' && (

            )} */}


            {/* {modalText !== '' && <Modal onClick={() => setModalText('')} text={modalText} />}
            <View style={{ flex: 1.50 }}>
                <Text style={styles.text}>Anúncios</Text>
                <FilterType type={type} setType={setType} />
                {!offers.all || offers.all.length === 0 ?
                    <Text style={{ flex: 1, textAlign: 'center', fontFamily: 'Rubik_700Bold', fontSize: 18, marginVertical: 50 }}>Você não tem nada!</Text>
                    : <FlatList
                        showsVerticalScrollIndicator={false}
                        data={selectType()}
                        keyExtractor={(item, index) => index.toString()}
                        renderItem={({ item, index }) => <OfertaGeral key={index} item={item} confirmOffer={confirmPurchase} />}
                    />
                }
            </View>
            <View style={{ flex: 1 }}>
                <Text style={styles.text}>Negociação individual</Text>
                {!offers.individual || offers.individual.length === 0 ?
                    <Text style={{ flex: 1, textAlign: 'center', fontFamily: 'Rubik_700Bold', fontSize: 18, marginVertical: 50 }}>Você não tem nada!</Text>
                    : <FlatList
                        showsVerticalScrollIndicator={false}
                        data={offers.individual}
                        keyExtractor={(item, index) => index.toString()}
                        renderItem={({ item, index }) => <Oferta item={item} key={index} confirmOffer={confirmPurchase} rejectOffer={rejectOffer} />}
                    />
                }
            </View> */}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    header: {
        fontFamily: 'Rubik_300Light',
        textAlign: 'center',
        fontSize: 20,
        marginBottom: 10
    },
    text: {
        fontFamily: 'Rubik_300Light',
        textAlign: 'center',
        fontSize: 20,
        marginVertical: 5
    },
    textSmall: {
        textAlign: 'center',
        fontSize: 13,
        fontFamily: 'Rubik_300Light',
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
        fontFamily: 'Rubik_300Light',
        fontSize: 22,
        textAlign: 'center'
    }
});