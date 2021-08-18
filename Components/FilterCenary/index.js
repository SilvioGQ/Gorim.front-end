import React, { useContext } from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import { GameContext } from '../../context/GameContext';


export default function FilterCenary({ type, setType }) {
	const { player } = useContext(GameContext);
	return (
		<View style={{ flexDirection: 'row', marginHorizontal: 20, width: '90%', justifyContent: 'space-between', marginVertical: 10 }}>
			{player.type === 'Agricultor' && (
				<>
					<TouchableOpacity style={[styles.buttonAgr, { backgroundColor: type == 'transfer' ? "#8ACF3A" : '#fff' }]} onPress={() => { setType('transfer') }} activeOpacity={0.7}>
						<Text style={[styles.textSmall, { color: type == 'transfer' ? '#fff' : '#000' }]}>Transferência</Text>
					</TouchableOpacity>
					<TouchableOpacity style={[styles.buttonAgr, { backgroundColor: type == 'buy' ? "#8ACF3A" : '#fff' }]} onPress={() => { setType('buy') }} activeOpacity={0.7}>
						<Text style={[styles.textSmall, { color: type == 'buy' ? '#fff' : '#000' }]}>Compras</Text>
					</TouchableOpacity>
					<TouchableOpacity style={[styles.buttonAgr, { backgroundColor: type == 'plantation' ? "#8ACF3A" : '#fff' }]} onPress={() => { setType('plantation') }} activeOpacity={0.7}>
						<Text style={[styles.textSmall, { color: type == 'plantation' ? '#fff' : '#000' }]}>Plantação</Text>
					</TouchableOpacity>
					<TouchableOpacity style={[styles.buttonAgr, { backgroundColor: type == 'Multa' ? "#8ACF3A" : '#fff' }]} onPress={() => { setType('Multa') }} activeOpacity={0.7}>
						<Text style={[styles.textSmall, { color: type == 'Multa' ? '#fff' : '#000' }]}>Multa</Text>
					</TouchableOpacity>
				</>
			)}
			{player.type === 'Empresário' && (
				<>
					<TouchableOpacity style={[styles.buttonEmp, { backgroundColor: type == 'transfer' ? "#8ACF3A" : '#fff' }]} onPress={() => { setType('transfer') }} activeOpacity={0.7}>
						<Text style={[styles.textSmall, { color: type == 'transfer' ? '#fff' : '#000' }]}>Transferência</Text>
					</TouchableOpacity>
					<TouchableOpacity style={[styles.buttonEmp, { backgroundColor: type == 'buy' ? "#8ACF3A" : '#fff' }]} onPress={() => { setType('buy') }} activeOpacity={0.7}>
						<Text style={[styles.textSmall, { color: type == 'buy' ? '#fff' : '#000' }]}>Vendas</Text>
					</TouchableOpacity>
					<TouchableOpacity style={[styles.buttonEmp, { backgroundColor: type == 'Multa' ? "#8ACF3A" : '#fff' }]} onPress={() => { setType('Multa') }} activeOpacity={0.7}>
						<Text style={[styles.textSmall, { color: type == 'Multa' ? '#fff' : '#000' }]}>Multa</Text>
					</TouchableOpacity>
				</>
			)}
		</View>
	)
}

const styles = StyleSheet.create({
	buttonAgr: {
		width: '24%',
		height: 36,
		borderRadius: 50,
		borderWidth: 1,
	},
	buttonEmp: {
		width: '30%',
		height: 40,
		borderRadius: 50,
		borderWidth: 1
	},
	textSmall: {
		textAlign: 'center',
		fontSize: 12,
		fontFamily: 'Rubik_300Light',
		marginTop: 9
	},
})