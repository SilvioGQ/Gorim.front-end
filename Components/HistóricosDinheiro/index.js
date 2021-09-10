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
			<View style={styles.row3}>
				<View>
					<Image
						style={styles.icone}
						source={item.product ? imagesProducts[item.product.name] : IMAGES[player.avatar]}
					/>
					<Text style={styles.text}>{item.product ? item.product.name.replace(/Fertilizante |Agrotóxico /, '') : player.name}</Text>
				</View>
				{item.value && (
					<View>
						<Text style={[styles.text, { marginTop: 5 }]}>${item.value}</Text>
						<Image source={require('../../assets/Arrow.png')} style={{ width: 120, height: 10, transform: item.ownAction ? [{ rotateY: "0deg" }] : [{ rotateY: "180deg" }], }} />
						<Text style={styles.text}>{item.ownAction ? 'transferido' : 'recebido'}</Text>
					</View>
				)}
				{item.product && (
					<View>
						<Text style={[styles.text, { marginTop: 5 }]}>{item.product.amount} por ${item.product.price} á unidade</Text>
						<Image source={require('../../assets/Arrow.png')} style={{ width: 120, height: 10 }} />
						<Text style={styles.text}>{player.type == 'Agricultor' ? 'Comprados do emp' : 'vendido(s) para'}</Text>
					</View>
				)}
				<View>
					<Image
						style={styles.icone}
						source={IMAGES[item.avatarPlayer]}
					/>
					<Text style={styles.text}>{item.namePlayer}</Text>
				</View>

			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	colunm: {
		alignSelf: 'center',
		backgroundColor: COLORS.bgColorSecondary,
		borderRadius: 20,
		width: 255,
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
		fontSize: 12,
		fontFamily: 'Rubik_300Light',
		marginBottom: 2
	}
});