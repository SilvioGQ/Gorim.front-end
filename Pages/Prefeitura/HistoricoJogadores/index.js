import React, { useContext, useState, useEffect } from 'react';
import { Text, View, StyleSheet, Image, Dimensions, ScrollView, TouchableOpacity } from 'react-native';
import Quadrados from '../../../Components/Quadrado';
import HistoricoAgricultor from '../../../Components/HistoricoAgricultor';
import HistoricoEmpresario from '../../../Components/HistoricoEmpresario';
import { GameContext } from '../../../contexts/GameContext';
import { FlatList } from 'react-native-gesture-handler';
// import COLORS from '../../constants/colors';
import Rodada from '../../../Components/Rodada';
import FiltroHistoricoJogadores from '../../../Components/FiltroHistoricoJogadores'
import IMAGES from '../../../constants/imagesIcons';
const Tela = Dimensions.get('screen').width;
export default function HistoricoJogadores({ navigation }) {

    const { players, player, round, logs } = useContext(GameContext);
    const [type, setType] = useState('Agricultor');
    const [selectClient, setSelectClient] = useState(-1);

    return (
        <ScrollView>
            <View>
                <Rodada name={'HistoricoJogadores'} arrow={true} onClick={() => navigation.navigate('MenuPolitico')} />
                <View style={styles.container}>
                    <View style={styles.espaco}>
                        <Image
                            style={{ width: 62, height: 62 }}
                            source={require('../../../assets/symbols/group.png')}
                        />
                        <Text style={{ fontFamily: 'Rubik_400Regular', fontSize: 20, marginTop: 15, marginLeft: 5 }}>Histórico dos{"\n"}Jogadores</Text>
                    </View>
                    <Text style={styles.header}>Jogadores em {player.city}:</Text>
                    <View style={{alignItems: 'center'}}>
                    <FiltroHistoricoJogadores type={type} setType={setType} />
                    </View>

                    <View style={styles.whiteRow}>
                        {players.filter((p) => p.type == type).map((item) => {
                            console.log(type);
                            if (type === 'Agricultor') {
                                return <HistoricoAgricultor key={item.id} player={item} onClick={() => setSelectClient(item.id)} />
                            } else {
                                return <HistoricoEmpresario key={item.id} player={item} onClick={() => setSelectClient(item.id)} />
                            }
                        }
                        )}
                    </View>



                </View>
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
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
    whiteRow: {
        width: '90%',
        marginHorizontal: 50,
        justifyContent: 'space-between',
    },
    espaco: {
        marginTop: 20,
        flexDirection: 'row',
        alignSelf: 'center',
        justifyContent: 'center',
        width: Tela
    },
    header: {
        fontFamily: 'Rubik_400Regular',
        fontSize: 20,
        marginTop: 25,
        marginLeft: 25,
        marginBottom: 30,
    },
    rodada: {
        fontFamily: 'Rubik_400Regular',
        fontSize: 18,
        color: '#3F5510'
    }
});