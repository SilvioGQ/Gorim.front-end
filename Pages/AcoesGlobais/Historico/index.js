import React, { useContext, useState } from 'react';
import { Text, View, StyleSheet, Image, Dimensions, ScrollView, TouchableOpacity } from 'react-native';
import { GameContext } from '../../../contexts/GameContext';
import Rodada from '../../../Components/Rodada';
import ICONS from '../../../constants/imagesIcons';
const Tela = Dimensions.get('screen').width;
export default function Cenario({ navigation }) {

  const [open, setOpen] = useState(false);
  const [open2, setOpen2] = useState(false);
  const [open3, setOpen3] = useState(false);
  const [open4, setOpen4] = useState(false);
  const [open5, setOpen5] = useState(false);
  const [open6, setOpen6] = useState(false);
  const [open7, setOpen7] = useState(false);

  const { player, game, oldLogs } = useContext(GameContext);
  const rotateZ = open ? "180deg" : "0deg";
  const rotateZ2 = open2 ? "180deg" : "0deg";
  const rotateZ3 = open3 ? "180deg" : "0deg";
  const rotateZ4 = open4 ? "180deg" : "0deg";
  const rotateZ5 = open5 ? "180deg" : "0deg";
  const rotateZ6 = open6 ? "180deg" : "0deg";
  const rotateZ7 = open7 ? "180deg" : "0deg";

  // console.log(
  //   oldLogs.find(p => p.id === player.id).logs.filter((item) => {
  //       return item;
  //   }));
  // console.log(oldLogs);

  return (
    <ScrollView>
      <View>
        <Rodada name={'Historico'} arrow={true} onClick={() => navigation.goBack()} />
        <View style={styles.container}>
          <Text style={styles.header}>HISTÓRICO</Text>
          <Text style={styles.rodada}>RODADA {game.round - 1}</Text>
          <View style={styles.row}>
            <Image
              style={styles.image}
              source={ICONS[player.avatar]}
            />
            <View>
              <Text style={styles.name}>{player.name}</Text>
              <Text style={styles.subtitle}>{game.phase === 1 ? player.type : player.office ? player.office : 'cidadão'}</Text>
              <Text style={styles.subtitle}>{player.city}</Text>
            </View>
          </View>
          {game.phase === 1 ?
            <>
              <View style={styles.backgreen}>
                <View style={styles.whiteRow}>
                  <Text style={[styles.subtitle, {
                    marginLeft: 10,
                    marginTop: 10
                  }]}>Infos Gerais</Text>
                  <TouchableOpacity onPress={() => { setOpen6(!open6) }}>
                    <Image style={{ width: 35, height: 35, marginRight: 10, marginTop: 5, transform: [{ rotateZ: rotateZ6 }] }} source={require('../../../assets/dropdown.png')} />
                  </TouchableOpacity>
                </View>
                <View style={{ display: open6 ? 'flex' : 'none' }}>
                  {oldLogs.find(p => p.id === player.id).logs.filter((item) => {
                    if (item.type == 'info') {
                      return item
                    }
                  }).map((item, index) => {
                    return <Text style={[styles.texto]} key={index}>{`Você poluiu ${item.pollution}, e produziu $${item.production < 0 ? 0 : item.production}.`}</Text>
                  })}
                </View>
              </View>
              {player.type === 'Agricultor' ?
                <><View style={styles.backgreen}>
                  <View style={styles.whiteRow}>
                    <Text style={[styles.subtitle, {
                      marginLeft: 10,
                      marginTop: 10
                    }]}>Parcela</Text>
                    <TouchableOpacity onPress={() => { setOpen(!open); } }>
                      <Image style={{ width: 35, height: 35, marginRight: 10, marginTop: 5, transform: [{ rotateZ7 }] }} source={require('../../../assets/dropdown.png')} />
                    </TouchableOpacity>
                  </View>
                  <View style={{ display: open ? 'flex' : 'none', flexDirection: 'column' }}>
                    {oldLogs.find(p => p.id === player.id).logs.filter((item) => item.type == 'plantation').length > 0 ? oldLogs.find(p => p.id === player.id).logs.filter((item) => item.type == 'plantation').map((item, index) => {
                      return <Text style={[styles.texto]} key={index}>Parcela {item.parcelLand.id + 1}{'\n'}Semente: {item.parcelLand.seed},{item.parcelLand.pesticide ? ` Agrotóxico: ${item.parcelLand.pesticide.replace(/Agrotóxico /, '')},` : ''}{item.parcelLand.fertilizer ? ` Fertilizante: ${item.parcelLand.fertilizer.replace(/Fertilizante /, '')},` : ''}{item.parcelLand.machine ? ` Máquina: ${item.parcelLand.machine},` : ''} Pulverizador:{item.parcelLand.spray ? ' Sim' : ' Não'}{'\n'}</Text>;
                    })
                      :
                      <Text style={[styles.textonao]}>Você não plantou</Text>}
                      </View>
                </View>
                <View style={styles.backgreen}>
                    <View style={styles.whiteRow}>
                      <Text style={[styles.subtitle, {
                        marginLeft: 10,
                        marginTop: 10
                      }]}>Selos</Text>
                      <TouchableOpacity onPress={() => { setOpen7(!open7); } }>
                        <Image style={{ width: 35, height: 35, marginRight: 10, marginTop: 5, transform: [{ rotateZ: rotateZ7 }] }} source={require('../../../assets/dropdown.png')} />
                      </TouchableOpacity>
                    </View>
                    <View style={{ display: open7 ? 'flex' : 'none' }}>
                      {oldLogs.find(p => p.id === player.id).logs.filter((item) => item.type == 'stamp').length > 0 ? oldLogs.find(p => p.id === player.id).logs.filter((item) => item.type == 'stamp').map((item, index) => {
                        return <Text style={[styles.texto]} key={index}>{`A sua parcela ${item.parcelId+1} recebeu um selo`}</Text>;
                      })
                        :
                        <Text style={[styles.textonao]}>Você não recebeu selos</Text>}
                    </View>
                  </View></>
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
                    <Image style={{ width: 35, height: 35, marginRight: 10, marginTop: 5, transform: [{ rotateZ: rotateZ2 }] }} source={require('../../../assets/dropdown.png')} />
                  </TouchableOpacity>
                </View>
                <View style={{ display: open2 ? 'flex' : 'none' }}>
                  {oldLogs.find(p => p.id === player.id).logs.filter((item) => item.type == 'buy').length > 0 ? oldLogs.find(p => p.id === player.id).logs.filter((item) => item.type == 'buy').map((item, index) => {
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
                    <Image style={{ width: 35, height: 35, marginRight: 10, marginTop: 5, transform: [{ rotateZ: rotateZ3 }] }} source={require('../../../assets/dropdown.png')} />
                  </TouchableOpacity>
                </View>
                <View style={{ display: open3 ? 'flex' : 'none' }}>
                  {oldLogs.find(p => p.id === player.id).logs.filter((item) => item.type == 'transfer').length > 0 ? oldLogs.find(p => p.id === player.id).logs.filter((item) => item.type == 'transfer').map((item, index) => {
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
                    <Image style={{ width: 35, height: 35, marginRight: 10, marginTop: 5, transform: [{ rotateZ: rotateZ4 }] }} source={require('../../../assets/dropdown.png')} />
                  </TouchableOpacity>
                </View>
                <View style={{ display: open4 ? 'flex' : 'none' }}>
                  {oldLogs.find(p => p.id === player.id).logs.filter((item) => item.type == 'fine').length > 0 ? oldLogs.find(p => p.id === player.id).logs.filter((item) => item.type == 'fine').map((item, index) => {
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
                    <Image style={{ width: 35, height: 35, marginRight: 10, marginTop: 5, transform: [{ rotateZ: rotateZ5 }] }} source={require('../../../assets/dropdown.png')} />
                  </TouchableOpacity>
                </View>
                <View style={{ display: open5 ? 'flex' : 'none' }}>
                  {oldLogs.find(p => p.id === player.id).logs.filter((item) => {
                    if (item.type == 'tax') {
                      return item
                    }
                  }).map((item, index) => {
                    return <Text style={[styles.texto]} key={index}>{item.percentual ? `Você pagou $${item.value} na última rodada, o que equivale a ${item.percentual}% da sua produtividade` : `Foram cobrados $${item.value} em impostos.`}</Text>
                  })}</View>
              </View>
            </>
            :
            <>
              {player.office === 'Fiscal' ?
                <>
                  <View style={styles.backgreen}>
                    <View style={styles.whiteRow}>
                      <Text style={[styles.subtitle, {
                        marginLeft: 10,
                        marginTop: 10
                      }]}>Selos</Text>
                      <TouchableOpacity onPress={() => { setOpen3(!open3) }}>
                        <Image style={{ width: 35, height: 35, marginRight: 10, marginTop: 5, transform: [{ rotateZ: rotateZ3 }] }} source={require('../../../assets/dropdown.png')} />
                      </TouchableOpacity>
                    </View>
                    <View style={{ display: open3 ? 'flex' : 'none' }}>
                      {oldLogs.find(p => p.id === player.id).logsOffice.filter((item) => item.type == 'stamp').length > 0 ? oldLogs.find(p => p.id === player.id).logsOffice.filter((item) => item.type == 'stamp').map((item, index) => {
                        return <Text style={[styles.texto]} key={index}>{`Você concedeu ${item.amount} selo(s),para o ${item.namePlayer}`}</Text>
                      })
                        :
                        <Text style={[styles.textonao]}>Você não concedeu selos</Text>
                      }
                    </View>
                  </View>
                  <View style={styles.backgreen}>
                    <View style={styles.whiteRow}>
                      <Text style={[styles.subtitle, {
                        marginLeft: 10,
                        marginTop: 10
                      }]}>Multas</Text>
                      <TouchableOpacity onPress={() => { setOpen2(!open2) }}>
                        <Image style={{ width: 35, height: 35, marginRight: 10, marginTop: 5, transform: [{ rotateZ: rotateZ2 }] }} source={require('../../../assets/dropdown.png')} />
                      </TouchableOpacity>
                    </View>
                    <View style={{ display: open2 ? 'flex' : 'none' }}>
                      {oldLogs.find(p => p.id === player.id).logsOffice.filter((item) => item.type == 'fine').length > 0 ? oldLogs.find(p => p.id === player.id).logsOffice.filter((item) => item.type == 'fine').map((item, index) => {
                        return <Text style={[styles.texto]} key={index}>{`Você aplicou multa de $${item.value} com gravidade "${item.gravity}" para o jogador ${item.namePlayer}`}</Text>
                      })
                        :
                        <Text style={[styles.textonao]}>Você não aplicou multas</Text>
                      }
                    </View>
                  </View>
                </>
                :
                <>
                  {player.office === "Prefeito" && (
                    <View style={styles.backgreen}>
                      <View style={styles.whiteRow}>
                        <Text style={[styles.subtitle, {
                          marginLeft: 10,
                          marginTop: 10
                        }]}>Arrecadação</Text>
                        <TouchableOpacity onPress={() => { setOpen(!open) }}>
                          <Image style={{ width: 35, height: 35, marginRight: 10, marginTop: 5, transform: [{ rotateZ: rotateZ }] }} source={require('../../../assets/dropdown.png')} />
                        </TouchableOpacity>
                      </View>
                      <View style={{ display: open ? 'flex' : 'none' }}>
                        {oldLogs.find(p => p.id === player.id).logsOffice.filter((item) => {
                          if (item.type == 'arrecadation') {
                            return item
                          }
                        }).map((item, index) => {
                          return <Text style={[styles.texto]} key={index}>{`Foram arrecadados $${item.value} de impostos nessa rodada.`}</Text>
                        })}
                      </View>
                    </View>
                  )}
                  <View style={styles.backgreen}>
                    <View style={styles.whiteRow}>
                      <Text style={[styles.subtitle, {
                        marginLeft: 10,
                        marginTop: 10
                      }]}>{player.office === 'Vereador' ? 'Impostos aplicados' : 'Impostos aplicados'}</Text>
                      <TouchableOpacity onPress={() => { setOpen4(!open4) }}>
                        <Image style={{ width: 35, height: 35, marginRight: 10, marginTop: 5, transform: [{ rotateZ: rotateZ4 }] }} source={require('../../../assets/dropdown.png')} />
                      </TouchableOpacity>
                    </View>
                    {player.office === 'Vereador' ?
                      <View style={{ display: open4 ? 'flex' : 'none' }}>
                        {!!oldLogs.find(p => p.office === 'Prefeito' && p.city === player.city) && oldLogs.find(p => p.office === 'Prefeito' && p.city === player.city).logsOffice.filter((item) => item.type == 'tax').length > 0 ? oldLogs.find(p => p.office === 'Prefeito' && p.city === player.city).logsOffice.filter((item) => item.type == 'tax').map((item, index) => {
                          return <Text style={[styles.texto]} key={index}>{`O prefeito aplicou imposto ${item.value > 0 ? `$${item.value}` : `${item.percentual}%`} para ${item.label}`}</Text>
                        })
                          :
                          <Text style={[styles.textonao]}>O prefeito não aplicou imposto</Text>
                        }
                      </View>
                      :
                      <View style={{ display: open4 ? 'flex' : 'none' }}>
                        {!!oldLogs.find(p => p.office === 'Prefeito' && p.city === player.city) && oldLogs.find(p => p.id === player.id).logsOffice.filter((item) => item.type == 'tax').length > 0 ? oldLogs.find(p => p.id === player.id).logsOffice.filter((item) => item.type == 'tax').map((item, index) => {
                          return <Text style={[styles.texto]} key={index}>{`Você aplicou imposto ${item.value > 0 ? `$${item.value} para ${item.label}` : `${item.percentual}%`} para ${item.label}`}</Text>
                        })
                          :
                          <Text style={[styles.textonao]}>Não aplicou imposto</Text>
                        }
                      </View>

                    }
                  </View>
                  <View style={styles.backgreen}>
                    <View style={styles.whiteRow}>
                      <Text style={[styles.subtitle, {
                        marginLeft: 10,
                        marginTop: 10
                      }]}>{player.office === 'Vereador' ? 'Prevenção' : 'Prevenção'}</Text>
                      <TouchableOpacity onPress={() => { setOpen5(!open5) }}>
                        <Image style={{ width: 35, height: 35, marginRight: 10, marginTop: 5, transform: [{ rotateZ: rotateZ5 }] }} source={require('../../../assets/dropdown.png')} />
                      </TouchableOpacity>
                    </View>
                    {player.office === "Vereador" ?
                      <View style={{ display: open5 ? 'flex' : 'none' }}>
                        {oldLogs.find(p => p.office === 'Prefeito' && p.city === player.city).logsOffice.filter((item) => item.type == 'prevention').length > 0 ? oldLogs.find(p => p.office === 'Prefeito' && p.city === player.city).logsOffice.filter((item) => item.type == 'prevention').map((item, index) => {
                          return <Text style={[styles.texto]} key={index}>{`O prefeito aplicou ${item.label}`}</Text>
                        })
                          :
                          <Text style={[styles.textonao]}>O prefeito não aplicou medida de prevenção</Text>
                        }
                      </View>
                      :
                      <View style={{ display: open5 ? 'flex' : 'none' }}>
                        {oldLogs.find(p => p.id === player.id).logsOffice.filter((item) => item.type == 'prevention').length > 0 ? oldLogs.find(p => p.id === player.id).logsOffice.filter((item) => item.type == 'prevention').map((item, index) => {
                          return <Text style={[styles.texto]} key={index}>{`Você aplicou ${item.label}`}</Text>
                        })
                          :
                          <Text style={[styles.textonao]}>Você não aplicou medida de prevenção.</Text>
                        }
                      </View>
                    }
                  </View>
                </>
              }
              <View style={styles.backgreen}>
                <View style={styles.whiteRow}>
                  <Text style={[styles.subtitle, {
                    marginLeft: 10,
                    marginTop: 10
                  }]}>Transferências</Text>
                  <TouchableOpacity onPress={() => { setOpen6(!open6) }}>
                    <Image style={{ width: 35, height: 35, marginRight: 10, marginTop: 5, transform: [{ rotateZ: rotateZ6 }] }} source={require('../../../assets/dropdown.png')} />
                  </TouchableOpacity>
                </View>
                <View style={{ display: open6 ? 'flex' : 'none' }}>
                  {oldLogs.find(p => p.id === player.id).logsOffice.filter((item) => item.type == 'transfer').length > 0 ? oldLogs.find(p => p.id === player.id).logsOffice.filter((item) => item.type == 'transfer').map((item, index) => {
                    return <Text style={[styles.texto]} key={index}>{item.ownAction ? `Você transferiu $${item.value} para o jogador ${item.namePlayer}\n` : `Você recebeu $${item.value} do jogador ${item.namePlayer}\n`}</Text>
                  })
                    :
                    <Text style={[styles.textonao]}>Você não fez transferências</Text>
                  }</View>

              </View>
            </>
          }
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