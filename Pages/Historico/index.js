import React, { useContext, useEffect, useState } from 'react';
import { Text, View, StyleSheet, Image, Dimensions, ScrollView, TouchableOpacity } from 'react-native';

import { GameContext } from '../../contexts/GameContext';
import COLORS from '../../constants/colors';
import Rodada from '../../Components/Rodada';
import IMAGES from '../../constants/imagesIcons';
const Tela = Dimensions.get('screen').width;
export default function Cenario({ navigation }) {

  const [open, setOpen] = useState(false);
  const [open2, setOpen2] = useState(false);
  const [open3, setOpen3] = useState(false);
  const [open4, setOpen4] = useState(false);
  const [open5, setOpen5] = useState(false);
  const { player, round } = useContext(GameContext);
  const rotateZ = open ? "180deg" : "0deg";
  const rotateZ2 = open2 ? "180deg" : "0deg";
  const rotateZ3 = open3 ? "180deg" : "0deg";
  const rotateZ4 = open4 ? "180deg" : "0deg";
  const rotateZ5 = open5 ? "180deg" : "0deg";

  console.log(player)
  return (
      <ScrollView>
    <View>
      <Rodada name={'Historico'} arrow={true} onClick={() => navigation.goBack()} />
        <View style={styles.container}>
          <Text style={styles.header}>HISTÓRICO</Text>
          <Text style={styles.rodada}>RODADA {round - 1}</Text>
          <View style={styles.row}>
            <Image
              style={styles.image}
              source={IMAGES[player.avatar]}
            />
            <View>
              <Text style={styles.name}>{player.name}</Text>
              <Text style={styles.subtitle}>{player.type}</Text>
              <Text style={styles.subtitle}>{player.city}</Text>
            </View>
          </View>
          {/* <View style={styles.backgreen}>
            <Text style={[styles.texto]}>Poluição: {player.pollution.toFixed(1)}</Text>
          </View>
          <View style={styles.backgreen}>
            <Text style={[styles.texto]}>Produtividade: ${player.production < 0 ? '0' : player.production}</Text>
          </View> */}
          {player.type === 'Agricultor' ?
            <View style={styles.backgreen}>
              <View style={styles.whiteRow}>
                <Text style={[styles.subtitle, {
                  marginLeft: 10,
                  marginTop: 10
                }]}>Parcela</Text>
                <TouchableOpacity onPress={() => { setOpen(!open) }}>
                  <Image style={{ width: 35, height: 35, marginRight: 10, marginTop: 5, transform: [{ rotateZ }] }} source={require('../../assets/dropdown.png')} />
                </TouchableOpacity>
              </View>
              <View style={{ display: open ? 'flex' : 'none', flexDirection: 'column' }}>
                {player.logs.filter((item) =>item.type == 'plantation').length > 0 ? player.logs.filter((item) =>item.type == 'plantation').map((item, index) => {
                  return <Text style={[styles.texto]} key={index}>Parcela {item.parcelLand.id + 1}{'\n'}Semente: {item.parcelLand.seed},{item.parcelLand.pesticide ? ` Agrotóxico: ${item.parcelLand.pesticide.replace(/Agrotóxico /, '')},` : ''}{item.parcelLand.fertilizer ? ` Fertilizante: ${item.parcelLand.fertilizer.replace(/Fertilizante /, '')},` : ''}{item.parcelLand.machine ? ` Máquina: ${item.parcelLand.machine},` : ''} Pulverizador:{item.parcelLand.spray ? ' Sim' : ' Não'}{'\n'}</Text>
                })
                :
                <Text style={[styles.textonao]}>Você não plantou</Text>
                }</View>
            </View>
            :
            null
          }
          <View style={styles.backgreen}>
            <View style={styles.whiteRow}>
              <Text style={[styles.subtitle, {
                marginLeft: 10,
                marginTop: 10
              }]}>{player.type === 'Agricultor' ? 'Gastos' : 'Vendas'}</Text>
              <TouchableOpacity onPress={() => { setOpen2(!open2) }}>
                <Image style={{ width: 35, height: 35, marginRight: 10, marginTop: 5, transform: [{ rotateZ: rotateZ2 }] }} source={require('../../assets/dropdown.png')} />
              </TouchableOpacity>
            </View>
            <View style={{ display: open2 ? 'flex' : 'none' }}>
              {player.logs.filter((item)=>item.type == 'buy').length > 0 ? player.logs.filter((item)=>item.type == 'buy').map((item, index) => {
                return <Text style={[styles.texto]} key={index}>{item.ownAction ? `Você comprou ${item.product.amount} ${item.product.name} por $${item.product.price} cada, do empresário ${item.namePlayer} \n` : `Você vendeu ${item.product.amount} ${item.product.name} por $${item.product.price} cada, para o agricultor ${item.namePlayer} \n`}</Text>
              })
              :
              <Text style={[styles.textonao]}>Você não {player.type === 'Agricultor' ? 'teve gastos' : 'fez vendas'}</Text>
              }

              </View>


          </View>
          <View style={styles.backgreen}>
            <View style={styles.whiteRow}>
              <Text style={[styles.subtitle, {
                marginLeft: 10,
                marginTop: 10
              }]}>Transferências</Text>
              <TouchableOpacity onPress={() => { setOpen3(!open3) }}>
                <Image style={{ width: 35, height: 35, marginRight: 10, marginTop: 5, transform: [{ rotateZ: rotateZ3 }] }} source={require('../../assets/dropdown.png')} />
              </TouchableOpacity>
            </View>
            <View style={{ display: open3 ? 'flex' : 'none' }}>
              {player.logs.filter((item) =>item.type == 'transfer').length > 0 ? player.logs.filter((item) =>item.type == 'transfer').map((item, index) => {
                return <Text style={[styles.texto]} key={index}>{item.ownAction ? `Você transferiu $${item.value} para o jogador ${item.namePlayer}\n` : `Você recebeu $${item.value} do jogador ${item.namePlayer}\n`}</Text>
              })
              :
              <Text style={[styles.textonao]}>Você não fez transferências</Text>
              }</View>

          </View>
          <View style={styles.backgreen}>
            <View style={styles.whiteRow}>
              <Text style={[styles.subtitle, {
                marginLeft: 10,
                marginTop: 10
              }]}>Multas Pagas</Text>
              <TouchableOpacity onPress={() => { setOpen4(!open4) }}>
                <Image style={{ width: 35, height: 35, marginRight: 10, marginTop: 5, transform: [{ rotateZ: rotateZ4 }] }} source={require('../../assets/dropdown.png')} />
              </TouchableOpacity>
            </View>
            <View style={{ display: open4 ? 'flex' : 'none' }}>
              {player.logs.filter((item) =>item.type == 'fine').length > 0 ? player.logs.filter((item) =>item.type == 'fine').map((item, index) => {
                return <Text style={[styles.texto]} key={index}>{item.gravity !== 'Nenhuma' ? `Você pagou uma multa de $${item.value} a taxa "${item.gravity}"` : "O fiscal não te aplicou multas"}</Text>
              })
              :
              <Text style={[styles.textonao]}>Fiscal não te aplicou multa</Text>
              }</View>
          </View>
          <View style={styles.backgreen}>
            <View style={styles.whiteRow}>
              <Text style={[styles.subtitle, {
                marginLeft: 10,
                marginTop: 10
              }]}>Impostos</Text>
              <TouchableOpacity onPress={() => { setOpen5(!open5) }}>
                <Image style={{ width: 35, height: 35, marginRight: 10, marginTop: 5, transform: [{ rotateZ: rotateZ5 }] }} source={require('../../assets/dropdown.png')} />
              </TouchableOpacity>
            </View>
            <View style={{ display: open5 ? 'flex' : 'none' }}>
              {player.logs.filter((item)=> {
              if (item.type == 'tax') {
                return item
              }
            }).map((item, index) => {
              return <Text style={[styles.texto]} key={index}>{item.percentual ? `Você pagou $${item.value} na última rodada, o que equivale a ${item.percentual}% da sua produtividade` : `Foram cobrados $${item.value} em impostos.`}</Text>
            })}</View>
          </View>
        </View>
    </View>
      </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    width: Tela,
  },
  row: {
    flexDirection: 'row',
    marginVertical: 35
  },
  image: {
    width: 70,
    height: 75
  },
  name: {
    fontFamily: 'Rubik_700Bold',
    fontSize: 18
  },
  subtitle: {
    
    fontSize: 18
  },
  backgreen: {
    width: '80%',
    borderRadius: 17,
    backgroundColor: '#C8EEDE',
    paddingVertical: 10,
    marginVertical: 10
  },
  whiteRow: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  header: {
    fontFamily: 'Rubik_400Regular',
    fontSize: 24,
    color: '#3F5510',
    marginTop: 25
  },
  rodada: {
    fontFamily: 'Rubik_400Regular',
    fontSize: 18,
    color: '#3F5510'
  },
  texto: {
    marginLeft: 5, 
    paddingHorizontal: 5, 
    fontFamily: 'Rubik_300Light'
  },
  textonao: {
    marginLeft: 10, 
    fontFamily: 'Rubik_300Light'
  }
});