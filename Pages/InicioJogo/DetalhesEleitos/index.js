import React, { useEffect, useContext, useState } from 'react';
import { Text, View, StyleSheet, Image, ScrollView, Dimensions } from 'react-native';
import Button from '../../../Components/Button';
import COLORS from '../../../constants/colors';
import Rodada from '../../../Components/Rodada';
import Voto from '../../../assets/symbols/vote.png';
import { GameContext, winnersElection } from '../../../contexts/GameContext'
import IMAGES from '../../../constants/imagesIcons';
const Tela = Dimensions.get('screen').width
export default function Detalhes({ navigation }) {
    const { data: elections, player, players, stage } = useContext(GameContext);
    const [mayor, setMayor] = useState();
    const [cityCouncilor, setCityCouncilor] = useState();
    const [supervisor, setSupervisor] = useState();

    useEffect(() => {
        winnersElection();
    }, []);

    useEffect(() => {
        if (stage === 'NEXTSTAGE') navigation.navigate('MenuPolitico');
    }, [stage]);

    useEffect(() => {
        if (stage === 'WINNERSELECTION') {
            if (elections['mayor'][0]) {
                setMayor(players.find(i => i.id === elections['mayor'][0].id));
            }
            if (elections['cityCouncilor'][0]) {
                setCityCouncilor(players.find(i => i.id === elections['cityCouncilor'][0].id))
            }
            if (elections['supervisor'][0]) {
                setSupervisor(players.find(i => i.id === elections['supervisor'][0].id))
            }
        }
    }, [stage])
    return (
        <View style={styles.container}>
            <Rodada name={'Detalhes'} />
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={styles.self}>
                    <Image
                        style={styles.logo}
                        source={Voto}
                    />
                    <Text style={styles.title}>Eleições em {"\n"}{player.city} </Text>
                </View>
                <View>
                    <Text style={styles.resultados}>Detalhes:</Text>

                </View>
                <View style={styles.numeros}>
                    <View style={{ width: 300 }} >
                        <ScrollView horizontal={true} >
                            <View style={styles.bloquinho}>
                                <Text style={[styles.texto, { alignSelf: 'center', marginTop: 20 }]}>Eleição Prefeito</Text>
                                {mayor && (elections['mayor'].map((item, index) => {
                                    return (
                                        <View key={index} style={styles.a}>
                                            <Image source={IMAGES[players.find(i => i.id === item.id).avatar]} style={styles.icone} />
                                            <Text style={styles.resultado}>{players.find(i => i.id === item.id).name} com {item.votes} votos</Text>
                                        </View>
                                    );
                                }))
                                }
                            </View>

                            <View style={styles.bloquinho}>
                                <Text style={[styles.texto, { alignSelf: 'center', marginTop: 20 }]}>Eleição Vereador</Text>
                                {cityCouncilor && (elections['cityCouncilor'].map((item, index) => {
                                    return (
                                        <View key={index} style={styles.a}>
                                            <Image source={IMAGES[players.find(i => i.id === item.id).avatar]} style={styles.icone} />
                                            <Text style={styles.resultado}>{players.find(i => i.id === item.id).name} com {item.votes} votos</Text>
                                        </View>
                                    );
                                }))
                                }
                            </View>
                            <View style={styles.bloquinho}>
                                <Text style={[styles.texto, { alignSelf: 'center', marginTop: 20 }]}>Eleição Fiscal</Text>
                                {supervisor && (elections['supervisor'].map((item, index) => {
                                    return (
                                        <View key={index} style={styles.a}>
                                            <Image source={IMAGES[players.find(i => i.id === item.id).avatar]} style={styles.icone} />
                                            <Text style={styles.resultado}>{players.find(i => i.id === item.id).name} com {item.votes} votos</Text>
                                        </View>
                                    );
                                }))
                                }
                            </View>
                        </ScrollView>
                    </View>

                </View>
                <Button
                    onClick={() => navigation.navigate('Eleitos')}
                    name='Voltar'
                />
            </ScrollView>
        </View>
    );
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: COLORS.bgColorPrimary,
        alignItems: 'center',
        width: Tela
    },
    icone: {
        height: 55,
        width: 50,
        alignSelf: 'flex-start',
        marginTop: 20,
        marginBottom: 10,
        marginLeft: 20,
        position: 'absolute'


    },
    self: {
        flexDirection: 'row',
        marginVertical: 20,
        alignItems:'center',
        justifyContent:'center'
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
        width: '90%',
        marginBottom: 20,
        marginTop: 20

    },
    title: {
        fontSize: 22,
        alignItems: 'flex-start',
        paddingLeft: 10
    },
    logo: {
        width: 60,
        height: 60
    },
    texto: {
        marginTop: 10,
        fontSize: 17,
        fontFamily: 'Rubik_700Bold',
        alignItems: 'center',
        justifyContent: 'center',
    },
    resultado: {
        fontSize: 14,
        marginLeft: 70,
        marginTop: 38.5
    },
    bloquinho: {
        backgroundColor: '#C8EEDE',
        width: 250,
        height: 300,
        alignItems: 'flex-start',
        textAlign: 'center',
        borderRadius: 20,
        marginHorizontal: 10

    },
    numeros: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: '3%',
        marginBottom: 40,
        width: "80%",
        alignSelf: 'center'
    },
    resultados: {
        fontSize: 20,
        color: '#58AB23',
        marginLeft: 40,
        marginBottom: 20
    },
    historico: {
        width: '30%',
        height: 30,
        backgroundColor: '#66BF00',
        borderRadius: 20,

    },
    botao: {
        color: '#fff',
        alignSelf: 'center',
        marginTop: 8
    },
    a: {
        paddingTop: 5,
        paddingBottom: 25,
        paddingRight: 25

    }
});