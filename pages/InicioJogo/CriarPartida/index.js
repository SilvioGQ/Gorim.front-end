import React, { useState, useEffect, useContext } from 'react';
import { Text, View, StyleSheet, Image, TouchableOpacity, Dimensions, TextInput } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { GameContext, addToRoom, joinToRoom } from '../../../contexts/GameContext';
import ModalInfo from '../../../components/ModalInfo';

const Tela = Dimensions.get('screen').width;
const Height = Dimensions.get('screen').height;
export default function CriarPartida({ navigation }) {

  const [modalText, setModalText] = useState('');
  const [name, setName] = useState('');
  const [room, setRoom] = useState('');
  const { player, stage } = useContext(GameContext);

  useEffect(() => {
    let isMounted = true;

    if (stage === 'ADDEDTOROOM' && isMounted) navigation.navigate('Lobby');
    if (stage === 'MAXPLAYERSTOROOM' && isMounted) setModalText('Sala atingiu número máximo de jogadores!');
    if (stage === 'NOTFOUND' && isMounted) setModalText('Sala não encontrada!');
    if (stage === 'INGAMING' && isMounted) setModalText('Sala em partida!');

    return () => isMounted = false;
  }, [stage]);

  const createRoom = () => {
    if (name === '') return setModalText('Você precisa adicionar um nome');
    addToRoom(name);
  }

  const selectRoom = () => {
    if (name === '') return setModalText('Você precisa adicionar um nome');
    if (room === '') return setModalText('Você precisa adicionar o código da sala');
    joinToRoom(name, room);
  }

  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={{ flex: 1, height: Height - 100, alignItems: 'center', width: Tela }}>
          <View style={{ flexDirection: 'row' }}>
            <TouchableOpacity style={[styles.leftArrow, { position: 'absolute', left: -40, top: 5, }]} onPress={() => navigation.reset({ routes: [{ name: 'Gorim' }] })}  >
              <Image style={styles.leftArrow} source={require('../../../assets/icons/left-arrow.png')} />
            </TouchableOpacity>
            <TextInput style={styles.input}
              maxLength={10}
              onChangeText={name => setName(name)}
              placeholder="Digite seu nome"
              value={name}
            />
          </View>
          <View style={{ alignItems: 'center', width: Tela, marginBottom: 50 }}>
            <Text style={styles.header}>HOST</Text>
            <View style={styles.line} />
            <View style={styles.row}>
              <Image style={styles.logo2} source={require('../../../assets/mulhe.png')} />
              <TouchableOpacity style={styles.button2} onPress={createRoom}   >
                <Text style={styles.botao}>CRIAR JOGO</Text>
              </TouchableOpacity>
              <Image style={[styles.arrow, { opacity: 0 }]} source={require('../../../assets/flecha.png')} />
            </View>
          </View>
          {modalText !== '' && <ModalInfo  onClick={() => setModalText('')} text={modalText} />}
          <View style={{ alignItems: 'center', width: Tela, marginVertical: 40 }}>
            <Text style={[styles.header]}>ENTRAR</Text>
            <View style={styles.line} />
            <View style={styles.row}>
              <Image style={styles.logo2} source={require('../../../assets/pessoas.png')} />
              <TextInput
                maxLength={6}
                style={[styles.button2, styles.text2]}
                autoCompleteType='off'
                autoCorrect={false}
                keyboardType='visible-password'
                onChangeText={room => setRoom(room.toUpperCase())}
                placeholder='ESCREVER CÓDIGO'
                value={room}
              >
              </TextInput>
              <TouchableOpacity onPress={selectRoom}  >
                <Image style={styles.arrow} source={require('../../../assets/flecha.png')} />
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    paddingTop: 45,
    marginLeft: 5,
    width: Tela
  },
  input: {
    height: 45,
    marginLeft: 10,
    fontSize: Tela > 350 ? 24 : 18,
    borderWidth: 1,
    width: '80%',
    textAlign: 'center',
    borderRadius: 17,
    borderColor: '#11BBA3',
    fontFamily: 'Rubik_300Light',
  },
  row: {
    flexDirection: 'row',
  },
  header: {
    fontWeight: '600',
    fontSize: 24,
    marginVertical: 10,
    marginTop: 30
  },
  logo2: {
    width: 95,
    height: 90,
    margin: 12
  },
  simbolo: {
    width: 30,
    height: 30
  },
  button2: {
    height: 45,
    borderRadius: 20,
    alignItems: 'center',
    width: Tela > 350 ? 175 : 125,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.32,
    shadowRadius: 4.46,
    elevation: 3,
    backgroundColor: '#fff',
    marginTop: 30
  },
  text: {
    fontSize: 24,
    marginTop: 5
  },
  text2: {
    textTransform: 'uppercase',
    fontSize: 16,
    textAlign: 'center',
    fontFamily: 'Rubik_300Light'
  },
  botao: {
    fontSize: Tela > 350 ? 21 : 18,
    marginTop: Tela > 350 ? 9 : 12,
  },
  arrow: {
    width: 25,
    height: 25,
    marginTop: 40,
    marginLeft: 10
  },
  leftArrow: {
    width: 25,
    height: 25,
    opacity: 0.7,
    marginLeft: 5
  },
  line: { width: '80%', borderWidth: 0.6, borderColor: '#11BBA3' }
});
