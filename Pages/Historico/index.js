import React, { useContext, useState } from 'react';
import { Text, View, StyleSheet, Image, Dimensions, ScrollView, TouchableOpacity } from 'react-native';
<<<<<<< HEAD
// import Accordion from '@dooboo-ui/native-accordion';
import { GameContext } from '../../context/GameContext';
import COLORS from '../../resources/colors';
import Rodada from '../../Components/Rodada';
import IMAGES from '../../resources/imagesIcons';
=======

import { GameContext } from '../../contexts/GameContext';
import COLORS from '../../constants/colors';
import Rodada from '../../Components/Rodada';
import IMAGES from '../../constants/imagesIcons';
import DropDownItem from 'react-native-drop-down-item';

>>>>>>> 6816eb6dfa3277757b7041caf52d007d23a344c6
const Height = Dimensions.get('screen').height;
const Tela = Dimensions.get('screen').width;
export default function Cenario({navigation}) {
  const [open5, setOpen5] = useState(false);
  const { player, logs, round } = useContext(GameContext);
  const rotateZ5 = open5 ? "180deg" : "0deg";

  state = {
    contents: [
      {
        title: 'Parcela',
        body: logs.filter((item) => {
          if (item.type == 'plantation') {
            return item
          }
        }).map((item, index) => {
          return <Text key={index}>Semente:{item.parcelLand.seed}, {item.parcelLand.pesticide ? `Agrotóxico:${item.parcelLand.pesticide.replace(/Agrotóxico /, '')},` : ''} {item.parcelLand.fertilizer ? `Fertilizante:${item.parcelLand.fertilizer.replace(/Fertilizante /, '')},` : ''} {item.parcelLand.machine ? `Maquina:${item.parcelLand.machine},` : ''} Pulverizador{item.parcelLand.spray ? 'Sim' : 'Não'} {'\n'}</Text>
        })
      },
      ,
      {
        title: 'Gastos',
        body: logs.filter((item) => {
          if (item.type == 'buy') {
            return item
          }
        }).map((item, index) => {
          return <Text key={index}>{item.ownAction ? `Você comprou ${item.product.amount} ${item.product.name} por ${item.product.price}$ cada, do empresário ${item.namePlayer} \n` : `Você vendeu ${item.product.amount} ${item.product.name} por ${item.product.price}$ cada, do empresário ${item.namePlayer} \n`}</Text>
        }),
      },
      {
        title: 'Transferências',
        body: logs.filter((item) => {
          if (item.type == 'buy') {
            return item
          }
        }).map((item, index) => {
          return <Text key={index}>{item.ownAction ? `Você comprou ${item.product.amount} ${item.product.name} por ${item.product.price}$ cada, do empresário ${item.namePlayer} \n` : `Você vendeu ${item.product.amount} ${item.product.name} por ${item.product.price}$ cada, do empresário ${item.namePlayer} \n`}</Text>
        }),
      },
      {
        title: 'Multas',
        body: ''
      },
      {
        title: 'Impostos',
        body: logs.filter((item) => {
          if (item.type == 'tax') {
            return item
          }
        }).map((item, index) => {
          return <Text key={index}>{item.percentual ? `Você pagou na ultima rodada ${item.value}$ que equivale a ${item.percentual}% da sua produtividade` : `Foram cobrados ${item.value}$ em impostos.`}</Text>
        }),
      },
    ],
  };
  return (
    <View style={{ backgroundColor: COLORS.bgColorPrimary, height: Height }}>
      <Rodada name={'Histórico'} arrow={true} onClick={()=>navigation.goBack()}/>
      <ScrollView style={{ alignSelf: 'stretch' }}>
        {/* <View style={styles.container}>
          <Text style={styles.header}>HISTÓRICO</Text>
          <Text style={styles.rodada}>RODADA {round-1}</Text>
          <View style={styles.row}>
            <Image
              style={styles.image}
              source={IMAGES[player.avatar]}
            />
            <View>
              <Text style={styles.name}>{player.name}</Text>
              <Text style={styles.subtitle}>{player.type ? player.type.slice(0, 3) : ''}{player.type === 'Empresário' ? player.specialty : ''}</Text>
              <Text style={styles.subtitle}>{player.city}</Text>
            </View>
          </View>
          {
            this.state.contents
              ? this.state.contents.map((param, i) => {
                return (
                  <Accordion
                    key={i}
                    style={styles.white}
                    contentVisible={false}
                    invisibleElement={<Image style={{width:30,height:30,position:'absolute', left:345, right:0}} source={require('../../assets/simbolos/dropUp.png')}/>}
                    visibleElement={<Image style={{width:30,height:30,position:'absolute', left:345,right:0}} source={require('../../assets/simbolos/dropdown.png')}/>}
                    header={
                      <View>
                        <Text style={styles.subtitle}>{param.title}</Text>
                      </View>
                    }
                  >
                    <Text style={[
                      styles.txt,
                      {
                        fontSize: 13,
                        fontFamily: 'Rubik_300Light'
                      }
                    ]}>
                      {param.body}
                    </Text>
                  </Accordion>
                );
              })
              : null
          }
        </View> */}
      </ScrollView>
    </View>
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
    fontSize: 18,
    marginLeft: 5,
    marginTop: 5,
  },
  subtitle: {
    fontFamily: 'Rubik_300Light',
    fontSize: 18,
    marginLeft: 5,
  },
  white: {
    width: '95%',
    borderRadius: 17,
    borderWidth: 1,
    backgroundColor: '#fff',
    marginBottom: 12,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  whiteRow: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20
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
  }
});


{/* {open && (
                            <View>
                                {logs.filter((item) => {
                                    if (item.type == 'plantation') {
                                        return item
                                    }
                                }).map((item, index) => {
                                    if (item.type === 'plantation') {
                                        return <Text key={index}> {`1º: Semente: ${item.parcelLand.seed}, Agrotóxico: Premiun
                                            Fertilizante: comum`} </Text>
                                    } else {
                                        return <HistoricosDinheiro key={index} item={item} />
                                    }
                                })
                                }
                            </View>
                        )} */}