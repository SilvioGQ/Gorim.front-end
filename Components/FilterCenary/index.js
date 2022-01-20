import React, { useContext } from 'react';
import { Text, View, StyleSheet, TouchableOpacity, Dimensions } from 'react-native';
import { GameContext } from '../../contexts/GameContext';
const Height = Dimensions.get('screen').height;

export default function FilterCenary({ type, setType }) {
	const { player,game } = useContext(GameContext);
	return (
		<View style={{ flexDirection: 'row', marginHorizontal: 20, width: '80%', justifyContent: 'space-between', marginVertical: 10 }}>
			{player.type === 'Agricultor' &&game.phase=== 1 && (
				<>
					<TouchableOpacity style={[styles.geral, { backgroundColor: type == 'transfer' ? "#8ACF3A" : '#fff' }]} onPress={() => { setType('transfer') }}>
						<Text style={[styles.textSmall, { color: type == 'transfer' ? '#fff' : '#000' }]}>Transferência</Text>
					</TouchableOpacity>
					<TouchableOpacity style={[styles.geral, { backgroundColor: type == 'buy' ? "#8ACF3A" : '#fff' }]} onPress={() => { setType('buy') }}>
						<Text style={[styles.textSmall, { color: type == 'buy' ? '#fff' : '#000' }]}>Compras</Text>
					</TouchableOpacity>
					<TouchableOpacity style={[styles.geral, { backgroundColor: type == 'plantation' ? "#8ACF3A" : '#fff' }]} onPress={() => { setType('plantation') }}>
						<Text style={[styles.textSmall, { color: type == 'plantation' ? '#fff' : '#000' }]}>Plantação</Text>
					</TouchableOpacity>
				</>
			)}
			{player.office === 'Fiscal' &&game.phase=== 2 && (
				<>
					<TouchableOpacity style={[styles.geral, { backgroundColor: type == 'transfer' ? "#8ACF3A" : '#fff' }]} onPress={() => { setType('transfer') }}>
						<Text style={[styles.textSmall, { color: type == 'transfer' ? '#fff' : '#000' }]}>Transferência</Text>
					</TouchableOpacity>
					<TouchableOpacity style={[styles.geral, { backgroundColor: type == 'stamp' ? "#8ACF3A" : '#fff' }]} onPress={() => { setType('stamp') }}>
						<Text style={[styles.textSmall, { color: type == 'stamp' ? '#fff' : '#000' }]}>Selos</Text>
					</TouchableOpacity>
					<TouchableOpacity style={[styles.geral, { backgroundColor: type == 'fine' ? "#8ACF3A" : '#fff' }]} onPress={() => { setType('fine') }}>
						<Text style={[styles.textSmall, { color: type == 'fine' ? '#fff' : '#000' }]}>Multas</Text>
					</TouchableOpacity>
				</>
			)}
			{player.office === 'Prefeito' &&game.phase=== 2 && (
				<>
					<TouchableOpacity style={[styles.geral, { backgroundColor: type == 'transfer' ? "#8ACF3A" : '#fff' }]} onPress={() => { setType('transfer') }}>
						<Text style={[styles.textSmall, { color: type == 'transfer' ? '#fff' : '#000' }]}>Transferência</Text>
					</TouchableOpacity>
					<TouchableOpacity style={[styles.geral, { backgroundColor: type == 'tax' ? "#8ACF3A" : '#fff' }]} onPress={() => { setType('tax') }}>
						<Text style={[styles.textSmall, { color: type == 'tax' ? '#fff' : '#000' }]}>Imposto</Text>
					</TouchableOpacity>
					<TouchableOpacity style={[styles.geral, { backgroundColor: type == 'prevention' ? "#8ACF3A" : '#fff' }]} onPress={() => { setType('prevention') }}>
						<Text style={[styles.textSmall, { color: type == 'prevention' ? '#fff' : '#000' }]}>Prevenção</Text>
					</TouchableOpacity>
				</>
			)}
			{player.office === 'Vereador' &&game.phase=== 2 && (
				<>
					<TouchableOpacity style={[styles.geral, { backgroundColor: type == 'transfer' ? "#8ACF3A" : '#fff' }]} onPress={() => { setType('transfer') }}>
						<Text style={[styles.textSmall, { color: type == 'transfer' ? '#fff' : '#000' }]}>Transferência</Text>
					</TouchableOpacity>
					<TouchableOpacity style={[styles.geral, { backgroundColor: type == 'tax' ? "#8ACF3A" : '#fff' }]} onPress={() => { setType('tax') }}>
						<Text style={[styles.textSmall, { color: type == 'tax' ? '#fff' : '#000' }]}>pre/Imposto</Text>
					</TouchableOpacity>
					<TouchableOpacity style={[styles.geral, { backgroundColor: type == 'prevention' ? "#8ACF3A" : '#fff' }]} onPress={() => { setType('prevention') }}>
						<Text style={[styles.textSmall, { color: type == 'prevention' ? '#fff' : '#000' }]}>pre/Prevenção</Text>
					</TouchableOpacity>
				</>
			)}
			{!player.office &&game.phase=== 2 && (
				<>
					<TouchableOpacity style={[styles.buttonEmp, { backgroundColor: type == 'tax' ? "#8ACF3A" : '#fff' }]} onPress={() => { setType('tax') }}>
						<Text style={[styles.textSmall, { color: type == 'tax' ? '#fff' : '#000' }]}>pre/Imposto</Text>
					</TouchableOpacity>
					<TouchableOpacity style={[styles.buttonEmp, { backgroundColor: type == 'prevention' ? "#8ACF3A" : '#fff' }]} onPress={() => { setType('prevention') }}>
						<Text style={[styles.textSmall, { color: type == 'prevention' ? '#fff' : '#000' }]}>pre/Prevenção</Text>
					</TouchableOpacity>
				</>
			)}
			{player.type === 'Empresário' &&game.phase=== 1 && (
				<>
					<TouchableOpacity style={[styles.buttonEmp, { backgroundColor: type == 'transfer' ? "#8ACF3A" : '#fff' }]} onPress={() => { setType('transfer') }}  >
						<Text style={[styles.textSmall, { color: type == 'transfer' ? '#fff' : '#000' }]}>Transferência</Text>
					</TouchableOpacity>
					<TouchableOpacity style={[styles.buttonEmp, { backgroundColor: type == 'buy' ? "#8ACF3A" : '#fff' }]} onPress={() => { setType('buy') }}  >
						<Text style={[styles.textSmall, { color: type == 'buy' ? '#fff' : '#000' }]}>Vendas</Text>
					</TouchableOpacity>
				</>
			)}
		</View>
	)
}

const styles = StyleSheet.create({
	geral: {
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
		fontSize: Height < 780 ? 11 : 13,

		marginTop: 9
	},
})