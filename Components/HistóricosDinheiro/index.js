import React, { useContext } from 'react';
import { Text, View, StyleSheet, Image, Dimensions } from 'react-native';

import COLORS from '../../resources/colors';
import imagesProducts from '../../resources/imagesProducts';
import IMAGES from '../../resources/imagesIcons'
import { GameContext } from "../../context/GameContext";
const Tela = Dimensions.get('screen').width;

export default function HistoricosDinheiro({ item }) {
	const { player } = useContext(GameContext);

	return (
		<View style={styles.colunm}>
			<View style={styles.row3}>
				{item.product && (
					<View>
						<Image
							style={styles.icone}
							source={imagesProducts[item.product.name]}
						/>
						<Text style={styles.text}>{item.product.name.replace(/Fertilizante |Agrotóxico /, '')}</Text>
					</View>
				)}
				{item.product == null && (
					<View>
						<Image
							style={styles.icone}
							source={IMAGES[player.avatar]}
						/>
						<Text style={styles.text}>{player.name}</Text>
					</View>
				)}
				{item.value && (
					<View>
						<Text style={[styles.text, { marginTop: 5 }]}>{item.value}$</Text>
						<Image source={require('../../assets/Logo/Arrow.png')} style={{ width: 120, height: 10, transform: item.ownAction ? [{ rotateY: "0deg" }] : [{ rotateY: "180deg" }], }} />
						<Text style={styles.text}>{item.ownAction ? 'transferido' : 'recebido'}</Text>
					</View>
				)}
				{item.price && (
					<View>
						<Text style={[styles.text, { marginTop: 5 }]}>{item.amount} por {item.price}$ á unidade</Text>
						<Image source={require('../../assets/Logo/Arrow.png')} style={{ width: 120, height: 10 }} />
						<Text style={styles.text}>{player.type == 'Agricultor' ? 'Comprados do emp' : 'vendido(s) para'}</Text>
					</View>
				)}
				{item.idPlayer && (
					<View>
						<Image
							style={styles.icone}
							source={IMAGES[item.idPlayer.avatar]}
						/>
						<Text style={styles.text}>{item.idPlayer.name}</Text>
					</View>
				)}

			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	colunm: {
		alignSelf: 'center',
		backgroundColor: COLORS.bgColorSecondary,
		borderRadius: 20,
		width: '75%',
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
	row3: {
		flexDirection: 'row',
		justifyContent: 'space-around',
		marginTop: 15,
		width: '100%'
	},
	icone: {
		width: 35,
		height: 35,
		alignSelf: 'center',
	},
	text: {
		textAlign: 'center',
		fontSize: 13,
		fontFamily: 'Rubik_300Light',
		marginBottom: 2
	}
});