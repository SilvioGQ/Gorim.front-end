import React, { useContext } from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import { GameContext } from '../../context/GameContext';


export default function FilterCenary({ type, setType }) {
	const { player } = useContext(GameContext);
	return (
		<View style={{ flexDirection: 'row', marginHorizontal: 20, width: '85%', justifyContent: 'space-between', marginVertical: 10 }}>
			{player.type === 'Agricultor' && (
				<>
					<TouchableOpacity style={[styles.buttonAgr, { backgroundColor: type == 'transfer' ? "#8ACF3A" : '#fff' }]} onPress={() => { setType('transfer') }}>
						<Text style={[styles.textSmall, { color: type == 'transfer' ? '#fff' : '#000' }]}>Transferência</Text>
					</TouchableOpacity>
					<TouchableOpacity style={[styles.buttonAgr, { backgroundColor: type == 'buy' ? "#8ACF3A" : '#fff' }]} onPress={() => { setType('buy') }}>
						<Text style={[styles.textSmall, { color: type == 'buy' ? '#fff' : '#000' }]}>Compras</Text>
					</TouchableOpacity>
					<TouchableOpacity style={[styles.buttonAgr, { backgroundColor: type == 'plantation' ? "#8ACF3A" : '#fff' }]} onPress={() => { setType('plantation') }}>
						<Text style={[styles.textSmall, { color: type == 'plantation' ? '#fff' : '#000' }]}>Plantação</Text>
					</TouchableOpacity>
				</>
			)}
			{player.type === 'Empresário' && (
				<>
					<TouchableOpacity style={[styles.buttonEmp, { backgroundColor: type == 'transfer' ? "#8ACF3A" : '#fff' }]} onPress={() => { setType('transfer') }}>
						<Text style={[styles.textSmall, { color: type == 'transfer' ? '#fff' : '#000' }]}>Transferência</Text>
					</TouchableOpacity>
					<TouchableOpacity style={[styles.buttonEmp, { backgroundColor: type == 'buy' ? "#8ACF3A" : '#fff' }]} onPress={() => { setType('buy') }}>
						<Text style={[styles.textSmall, { color: type == 'buy' ? '#fff' : '#000' }]}>Vendas</Text>
					</TouchableOpacity>
				</>
			)}
		</View>
	)
}

const styles = StyleSheet.create({
	buttonAgr: {
		width: '30%',
		height: 40,
		borderRadius: 50,
		borderWidth: 1
	},
	buttonEmp: {
		width: '44%',
		height: 40,
		borderRadius: 50,
		borderWidth: 1
	},
	textSmall: {
		textAlign: 'center',
		fontSize: 13,
		fontFamily: 'Rubik_300Light',
		marginTop: 9
	},
})