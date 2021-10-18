import React from 'react';
import { Text, View, StyleSheet, Image, TouchableOpacity } from 'react-native';
import IMAGES from '../../constants/imagesProducts';

export default function ParcelaAgr({ item, backgroundGreen='#fff', display2, vermais, onClick, pedido, color}) {
    return (
        <TouchableOpacity onPress={onClick} style={[styles.container, { backgroundColor: backgroundGreen }]}>
            <View style={{ flexDirection: 'row', marginBottom:15, marginTop:1 }}>
                {pedido ? 
                <View style={{flexDirection:'row'}}>
                <Image source={require('../../assets/symbols/Pedido.png')} style={{width:27,height:27}}/>
                <Image source={require('../../assets/icons/stamp.png')} style={{width:27,height:27}}/>
                </View>
                :
                null
                }
                <Text style={[styles.numero, {color: color}]}>Parcela: {item.parcelLand.id + 1}º</Text>
                {vermais ? 
                <View style={{ borderRadius: 17, width: 75, height: 23, backgroundColor: '#D4F15F', alignSelf: 'center', marginLeft:25 }}>
                <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
                    <Text style={{ color: '#CF0101', fontSize: 16, fontFamily: 'Rubik_400Regular', fontWeight: 'bold' }}>{item.parcelLand.pollution}</Text>
                    <Text style={{ color: '#6EBA16', fontSize: 16, fontFamily: 'Rubik_400Regular', fontWeight: 'bold' }}>{item.parcelLand.production}</Text>
                </View>
            </View>
            :
                <Text style={{ color: '#CF0101', fontSize: 14, fontFamily: 'Rubik_300Light', marginLeft:25 }}>Poluição: {item.parcelLand.pollution}</Text>
            }
                
                <TouchableOpacity style={{ position: 'absolute', left: '97%',  display:display2 }} onPress={() => { }} activeOpacity={0.7}>
                    <Image style={styles.image} source={require('../../assets/FecharPreto.png')} style={{width:20,height:20, display:display2}} />
                </TouchableOpacity>
            </View>
            <View style={{ flexDirection: 'row' }}>
                <View>
                    <Image style={styles.imagensproduto} source={IMAGES[item.parcelLand.seed]} />
                    <Text style={[styles.textproduto, {color: color}]}>{item.parcelLand.seed}</Text>
                </View>
                {item.parcelLand.fertilizer != null && (
                    <View>
                        <Image style={styles.imagensproduto} source={IMAGES[item.parcelLand.fertilizer]} />
                        <Text style={[styles.textproduto, {color: color}]}>{item.parcelLand.fertilizer.replace(/Fertilizante /, 'F.')}</Text>
                    </View>
                )}
                {item.parcelLand.pesticide != null && (
                    <View>
                        <Image style={styles.imagensproduto} source={IMAGES[item.parcelLand.pesticide]} />
                        <Text style={[styles.textproduto, {color: color}]}>{item.parcelLand.pesticide.replace(/Agrotóxico /, 'A.')}</Text>
                    </View>
                )}
                {item.parcelLand.machine != null && (
                    <View>
                        <Image style={styles.imagensproduto} source={IMAGES[item.parcelLand.machine]} />
                        <Text style={[styles.textproduto, {color: color}]}>{item.parcelLand.machine}</Text>
                    </View>
                )}
                {item.parcelLand.spray && (
                    <View>
                        <Image style={styles.imagensproduto} source={IMAGES['Pulverizador']} />
                        <Text style={[styles.textproduto, {color: color}]}>Pulverizador</Text>
                    </View>
                )}
            </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    container: {
        marginVertical: 25,
        padding: 20,
        borderRadius: 17,
        marginTop: 15,
        marginBottom: 4,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.32,
        shadowRadius: 5.46,
        elevation: 6,
    },
    imagensproduto: {
        width: 35,
        height: 35,
        marginRight: 10,
        marginLeft: 10,
        alignSelf: 'center'
    },
    textproduto: {
        fontSize: 13,
        marginRight: 10,
        marginLeft: 10
    },
    numero: {
        fontSize: 14,
        fontFamily: 'Rubik_300Light',
        marginLeft: 10
    },
});
