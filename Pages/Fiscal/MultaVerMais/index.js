import React, { useState, useEffect,useContext } from 'react';
import { Text, View, StyleSheet, Image, ScrollView, TouchableOpacity, Dimensions } from 'react-native';
import Button from '../../../Components/Button';
import Rodada from '../../../Components/Rodada';
import ParcelaAgr from '../../../Components/parcelaAgr';
import { GameContext } from '../../../contexts/GameContext';
const Tela = Dimensions.get('screen').width;
export default function Multa({ navigation, route }) {
  const {client} = route.params
  const { logs } = useContext(GameContext);
  const [modalText, setModalText] = useState('');
  const [Logs, setLogs] = useState([]);
  const [backgroundColor, setBackgroundColor] = useState('#fff');
  useEffect(() => {
      setLogs(logs.find((p)=> p.id === client))
  }, [client])
  console.log('os logs', logs)
  console.log('logs do player', Logs)
  return (
    <View style={styles.container}>
      <Rodada name={'Detalhes de Parcelas'} arrow={true} onClick={() => navigation.navigate('Multa')} />
      <View style={styles.row}>
        <Image
          style={styles.image}
          source={require('../../../assets/icons/penalty.png')}
        />
        {modalText !== '' && (
          <Modal onClick={() => setModalText('')} text={modalText} />
        )}
        <Text style={styles.header}>Detalhes de{'\n'}Parcelas</Text>
        <TouchableOpacity onPress={()=>{}} activeOpacity={0.7}>
          <Image source={require('../../../assets/agricultorIcones/information.png')} style={{ width: 20, height: 20, alignSelf: 'center', marginLeft: 10, marginTop: 10 }} />
        </TouchableOpacity>
      </View>
      {Logs.length !== 0 ?
          Logs.logs.filter(i => i.type === 'plantation').map((p) => {
            // if (parcel.planted === true && !parcel.pesticide) {
              return <ParcelaAgr item={p} key={p.id} backgroundGreen={backgroundColor} display2='none'/>
            // }
          })
          :
          null
          }
      <Button
        onClick={() => navigation.navigate('Multa')}
        name='VOLTAR' />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: Tela,
    alignItems:'center',
    justifyContent:'center'
  },
  row: {
    flexDirection: 'row',
    marginVertical: 20,
    flexWrap: 'wrap',
    alignItems:'center',
    justifyContent:'center'
  },
  header: {
    fontFamily: 'Rubik_300Light',
    fontSize: 20,
  },
  image: {
    width: 60,
    height: 60,
  },
  font: {
    fontSize: 18,
    marginTop: 15,
    fontFamily: 'Rubik_300Light'
  },
});