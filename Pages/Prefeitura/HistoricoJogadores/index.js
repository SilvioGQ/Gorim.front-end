import React, { useContext, useState } from 'react';
import { Text, View, StyleSheet, Image, Dimensions, ScrollView, TouchableOpacity } from 'react-native';
import Quadrados from '../../../Components/Quadrado';
import Jogadores from '../../../Components/HistoricoJogadores';
import { GameContext } from '../../../contexts/GameContext';
import { FlatList } from 'react-native-gesture-handler';
// import COLORS from '../../constants/colors';
import Rodada from '../../../Components/Rodada';

import IMAGES from '../../../constants/imagesIcons';
const Tela = Dimensions.get('screen').width;
export default function HistoricoJogadores({ navigation }) {
    const [open, setOpen] = useState(false);
    const [open2, setOpen2] = useState(false);
    const [open3, setOpen3] = useState(false);
    const [open4, setOpen4] = useState(false);
    const [open5, setOpen5] = useState(false);
    const { players, player, round } = useContext(GameContext);
    const rotateZ = open ? "180deg" : "0deg";
    const rotateZ2 = open2 ? "180deg" : "0deg";
    const rotateZ3 = open3 ? "180deg" : "0deg";
    const rotateZ4 = open4 ? "180deg" : "0deg";
    const rotateZ5 = open5 ? "180deg" : "0deg";
    const [selectClient, setSelectClient] = useState(-1);
    const [modalText, setModalText] = useState('');
    const [count, setCount] = useState(0);
    const [id, setId] = useState();
    const filterPlayers = () => {
        let p = [];
        p = players.filter(i => i.id !== player.id);
        

        return p;
    }
    return (
        <ScrollView>
            <View>
                <Rodada name={'HistoricoJogadores'} arrow={true} onClick={() => navigation.navigate('MenuJogador')} />
                <View style={styles.container}>
                    <Text style={styles.header}>HISTÓRICO Jogadores</Text>
                    <Text style={styles.rodada}>RODADA {round - 1}</Text>
                    <View style={styles.row}>
                        <Image
                            style={styles.image}
                            source={IMAGES[player.avatar]}
                        />
                        <View>
                            <Text style={styles.name}>{player.name}</Text>
                            <Text style={styles.subtitle}>{player.type}</Text>
                            <Text style={styles.subtitle}>{player.city}</Text>
                        </View>
                    </View>
                   
                        {filterPlayers().map((item) => <Jogadores key={item.id} player={item} onClick={() => setSelectClient(item.id)} />)}



                </View>
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        width: Tela,
    },
    row: {
        flexDirection: 'row',
        marginVertical: 35
    },
    image: {
        width: 80,
        height: 80
    },
    name: {
        fontFamily: 'Rubik_700Bold',
        fontSize: 18
    },
    subtitle: {
        fontFamily: 'Rubik_300Light',
        fontSize: 18
    },
    backgreen: {
        width: '80%',
        borderRadius: 17,
        backgroundColor: '#C8EEDE',
        paddingVertical: 10,
        marginVertical: 10
    },
    whiteRow: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    header: {
        fontFamily: 'Rubik_400Regular',
        fontSize: 24,
        color: '#3F5510',
        marginTop: 25
    },
    rodada: {
        fontFamily: 'Rubik_400Regular',
        fontSize: 18,
        color: '#3F5510'
    }
});