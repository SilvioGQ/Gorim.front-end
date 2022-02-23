import React, { useState, useEffect, useContext } from 'react';
import { Text, View, StyleSheet, Image, TouchableOpacity, Dimensions } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { GameContext, getProducts, addAdvert } from "../../../../contexts/GameContext";
const Tela = Dimensions.get('screen').width;
import Button from '../../../../components/Button';
import Quadrados from '../../../../components/Quadrado';
import Modal from '../../../../components/ModalInfo'
import Quantidades from '../../../../components/Quantidades';
import COLORS from '../../../../constants/colors';
import Coin from '../../../../components/Coin';
import IMAGES from '../../../../constants/imagesProducts';
import IMAGESCOINS from '../../../../constants/imagesCoins';
import CaixaDeValor from '../../../../components/CaixaDeValor';
import Rodada from '../../../../components/Rodada';
import normalizeNumber from '../../../../helpers/normalizeNumber';

export default function Vendas({ navigation, route }) {

	const { name } = route.params;
	const [modalText, setModalText] = useState('');
	const [selectPrice, setSelectPrice] = useState(-1);
	const [selectClient, setSelectClient] = useState(-1);
	const [selectAmount, setSelectAmount] = useState(0);
	const { players, player, data: product, stage } = useContext(GameContext);
	const [sendAdvert, setSendAdvert] = useState(false);
	const [priceType, setPriceType] = useState("");

	useEffect(() => {
		getProducts(name);
	}, []);

	useEffect(() => {
    if (sendAdvert) {
      navigation.reset({ routes: [{ name: 'TransferenciaConfirmada', params: { text: 'Sua proposta foi enviada!' } }] });
		}

		return () => { if (sendAdvert) addAdvert(name, player.specialty, selectPrice, selectClient, selectAmount, priceType); }
	}, [sendAdvert]);

	const confirmTransfer = () => {
		if (!selectClient) return setModalText('Selecione um Cliente!');
		if (selectPrice == -1) return setModalText('Selecione o Preço!');
		if (selectAmount == -1 || selectAmount == 0) return setModalText('Selecione a quantidade!');
		if (selectPrice == product.cheap) setPriceType('Baixo');
		if (selectPrice == product.medium) setPriceType('Normal');
		if (selectPrice == product.expensive) setPriceType('Alto');

		setSendAdvert(true);
	}

	const information = () => {
		if (name == 'Pacote 1') return setModalText('Este pacote contêm semeadora.\nPoluição: ' + product?.pollutionEmp + ' por unidade');
		if (name == 'Pacote 2') return setModalText('Este pacote contêm semeadora e colheitadeira.\nPoluição: ' + product?.pollutionEmp + ' por unidade');
		if (name == 'Pacote 3') return setModalText('Este pacote contêm semeadora, colheitadeira e drone.\nPoluição: ' + product?.pollutionEmp + ' por unidade');

		return setModalText('Informações gerais do produto.\nPoluição: ' + product?.pollutionEmp + ' por unidade');
	}

	const filterPlayers = () => {
		let p = [];
		p = players.filter(i => i.id !== player.id && i.type === 'Agricultor');
		p.unshift({ name: 'Todos', avatar: 'Todos', id: -1 });

		return p;
	}
	const Price = [
		{ id: 1, nome: 'Baixo', valor: product?.cheap, icon: IMAGESCOINS["Baixo"] },
		{ id: 2, nome: 'Médio', valor: product?.medium, icon: IMAGESCOINS["Normal"] },
		{ id: 3, nome: 'Alto', valor: product?.expensive, icon: IMAGESCOINS["Alto"] },
	]
	return (
		<View style={styles.container}>
			<Rodada arrow={true} onClick={() => navigation.navigate('MenuJogador')} />
			<ScrollView showsVerticalScrollIndicator={false}>
				<Coin coin={player.coin} />
				<View style={styles.center}>
					<Image style={styles.person} source={IMAGES[name]} />
					<Text style={styles.header}>Anunciar{'\n'}{name.replace(/Fertilizante |Agrotóxico /, '')} </Text>
					<TouchableOpacity onPress={information}  >
						<Image source={require('../../../../assets/agricultorIcones/information.png')} style={{ width: 20, height: 20, alignSelf: 'center', marginLeft: 10, marginTop: 20 }} />
					</TouchableOpacity>
				</View>
				<Text style={styles.textos}> Clientes: </Text>
				<View style={styles.alignQuadrado}>
					{filterPlayers().map((item) => <Quadrados abr={false} key={item.id} player={item} onClick={() => setSelectClient(item.id)} backgroundColor={selectClient == item.id ? '#8ACF3A' : '#fff'} color={selectClient == item.id ? '#fff' : '#000'} />)}
				</View>
				{modalText !== '' && (
					<Modal onClick={() => setModalText('')} text={modalText} />
				)}
				<Text style={styles.textos}> Valor: </Text>
				<View style={styles.alignQuadrado}>
					{Price.map((item) => (
						<TouchableOpacity key={item.id} onPress={() => setSelectPrice(item.valor)}  >
							<View style={[styles.colunm, { backgroundColor: selectPrice == item.valor ? "#8ACF3A" : '#fff' }]}>
								<Image style={styles.icone} source={item.icon} />
								<Text style={[styles.categoryprice, { color: selectPrice == item.valor ? "#fff" : '#000' }]}>{item.nome}</Text>
								<Text style={[styles.price, { color: selectPrice == item.valor ? "#fff" : '#000' }]}>${normalizeNumber(item.valor)}</Text>
							</View>
						</TouchableOpacity>
					))}
				</View>
				<Text style={{ fontSize: 18, marginHorizontal: 15, marginTop: 30, marginBottom: 15 }}>Quantidade:</Text>
				{selectClient == -1 && <CaixaDeValor value={selectAmount} setValue={setSelectAmount} increment={1} />}
				{selectClient !== -1 && <Quantidades selectAmount={selectAmount} setSelectAmount={setSelectAmount} />}
				<View style={{ marginVertical: 25 }}>
					<Button onClick={confirmTransfer} name={selectClient == -1 ? 'ANUNCIAR' : 'VENDER'} />
				</View>
			</ScrollView>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
	categoryprice: {
		fontSize: 12,
		marginTop: 5
	},
	price: {
		fontSize: 12,
	},
	row: {
		flexDirection: 'row',
		marginHorizontal: 2,
		width: '95%',
		marginVertical: 15,
		justifyContent: 'space-around'
	},
	center: {
		flexDirection: 'row',
		justifyContent: 'center',
		marginTop: 5,
	},
	colunm: {
		alignItems: 'center',
		justifyContent: 'center',
		margin: 7,
		backgroundColor: COLORS.textWhite,
		width: Tela > 350 ? 90 : 80,
		height: Tela > 350 ? 78 : 68,
		borderRadius: 20,
		shadowColor: "#000",
		shadowOffset: {
			width: 0,
			height: 4,
		},
		shadowOpacity: 0.32,
		shadowRadius: 5.46,
		elevation: 6
	},
	header: {
		fontSize: 20,
		marginLeft: 10
	},
	textos: {
		fontSize: 18,
		marginHorizontal: 15,
		marginTop: 30
	},
	person: {
		width: 59,
		height: 58
	},
	icone: {
		width: 35,
		height: 35,
	},
	alignQuadrado: {
		marginHorizontal: 10,
		flexDirection: 'row',
		width: '100%',
		flexWrap: 'wrap'
	}
});