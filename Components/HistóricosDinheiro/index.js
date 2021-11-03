import React, { useContext } from 'react';
import { Text, View, StyleSheet, Image, Dimensions } from 'react-native';

import COLORS from '../../constants/colors';
import imagesProducts from '../../constants/imagesProducts';
import IMAGES from '../../constants/imagesIcons';
import { GameContext } from "../../contexts/GameContext";
const Tela = Dimensions.get('screen').width;

export default function HistoricosDinheiro({ item }) {
	const { player } = useContext(GameContext);

	return (
		<View style={styles.colunm}>
				<View style={styles.absolute3}>
					<Image
						style={styles.icone}
						source={item.product ? imagesProducts[item.product.name] : IMAGES[player.avatar]}
					/>
					{item.product ?
					<Text style={{position:'absolute', bottom:-18, left:-7, fontFamily:'Rubik_300Light', fontSize:12,width:85}}>{item.product.name.replace(/Fertilizante |Agrotóxico /, '')}</Text>
					:
					<Text style={{position:'absolute', bottom:-18, left:2, fontFamily:'Rubik_300Light', fontSize:12,width:85}}>{player.name}</Text>
					}
					
				</View>
				{item.value && (
					<View style={styles.absolute2}>
						<Text style={[styles.text, { marginTop: 5 }]}>${item.value}</Text>
						<Image source={require('../../assets/Arrow.png')} style={{ width: 130, height: 10, transform: item.ownAction ? [{ rotateY: "0deg" }] : [{ rotateY: "180deg" }], }} />
						<Text style={styles.text}>{item.ownAction ? 'transferido' : 'recebido'}</Text>
					</View>
				)}
				{item.product && (
					<View style={styles.absolute2}>
						<Text style={[styles.text, { marginTop: 5 }]}>{item.product.amount} por ${item.product.price} á unidade</Text>
						<Image source={require('../../assets/Arrow.png')} style={{ width: 130, height: 10 }} />
						<Text style={styles.text}>{player.type == 'Agricultor' ? 'Comprados do emp' : 'vendido(s) para'}</Text>
					</View>
				)}
				<View style={styles.absolute}>
					<Image
						style={styles.icone}
						source={IMAGES[item.avatarPlayer]}
					/>
					<Text style={styles.text}>{item.namePlayer}</Text>
				</View>
		</View>
	);
}

const styles = StyleSheet.create({
	colunm: {
		backgroundColor: COLORS.bgColorSecondary,
		borderRadius: 20,
		width: 310,
		height: 80,
		shadowColor: "#000",
		shadowOffset: {
			width: 0,
			height: 4,
		},
		shadowOpacity: 0.32,
		shadowRadius: 5.46,
		elevation: 6,
		marginVertical: 15
	},

	icone: {
		width: 35,
		height: 35,
		alignSelf: 'center',
	},
	text: {
		textAlign: 'center',
		fontSize: 12,
		
		marginBottom: 2,
	},
	absolute: {
		position:'absolute',
		top:15,
		right:20
	},
	absolute2: {
		position:'absolute',
		top:15,
		right:88
	},
	absolute3: {
		position:'absolute',
		top:15,
		left:20,
	}
});