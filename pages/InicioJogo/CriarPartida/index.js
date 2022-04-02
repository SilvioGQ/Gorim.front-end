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
            <TextInput style={[styles.input, styles.text3]}
              maxLength={10}
              onChangeText={name => setName(name)}
              placeholder="Digite seu nome"
              value={name}
              placeholderTextColor="#457B9D"

            />
          </View>
          < View style={{ marginTop: 40 }}>
            <View style={styles.line} />
            <View style={styles.row}>
              <Image style={styles.logo2} source={require('../../../assets/mulhe.png')} />
              <Text style={styles.header}>HOST</Text>
              <TouchableOpacity style={styles.button2} onPress={createRoom}   >
                <Text style={styles.botao}>CRIAR JOGO</Text>
              </TouchableOpacity>
            </View>
          </View>
          {modalText !== '' && <ModalInfo player={player} onClick={() => setModalText('')} text={modalText} />}
          < View style={{marginBottom: 50}}>
            <View style={styles.line} />
            <View style={styles.row}>
              <Image style={styles.logo2} source={require('../../../assets/pessoas.png')} />
              <Text style={[styles.header]}>ENTRAR</Text>
              <View style={styles.borda}>
                <TextInput
                  maxLength={6}
                  style={[styles.text2]}
                  autoCompleteType='off'
                  autoCorrect={false}
                  keyboardType='visible-password'
                  onChangeText={room => setRoom(room.toUpperCase())}
                  placeholder='ESCREVER CÓDIGO'
                  value={room}
                  placeholderTextColor = "#457B9D"

                >
                </TextInput>
                <TouchableOpacity onPress={selectRoom}  >
                  <Image style={styles.arrow} source={require('../../../assets/flecha.png')} />
                </TouchableOpacity>
              </View>
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
    width: Tela
  },
  input: {
    height: 45,
    width: '80%',
    borderWidth: 2,
    borderRadius: 20,
    borderColor: '#C8EEEA',

  },
  row: {
    flexDirection: 'row',
    marginTop: 20,
    width: Tela, marginBottom: 50
  },
  borda: {
    marginTop: 65,
    flexDirection: 'row',
    borderRadius: 20,
    borderWidth: 2,
    borderColor: '#C8EEEA',
    height: 45,
    width: Tela > 350 ? 215 : 125,
  },
  header: {
    fontWeight: '600',
    fontSize: Tela > 350 ? 24 : 18,
    marginLeft: 150,
    marginTop: 30,
    position: 'absolute'
  },
  logo2: {
    width: Tela > 350 ? 110 : 90,
    height: Tela > 350 ? 105 : 85,
    margin: 10,
    marginLeft: '6%',
    // position: 'relative'
  },
  simbolo: {
    width: 30,
    height: 30
  },
  button2: {
    borderRadius: 20,
    alignItems: 'center',
    height: 45,
    width: Tela > 350 ? 215 : 115,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.32,
    shadowRadius: 4.46,
    elevation: 3,
    backgroundColor: '#fff',
    marginTop: 65,

  },

  text: {
    fontSize: 24,
    marginTop: 5
  },
  text2: {
    textTransform: 'uppercase',
    fontSize: Tela > 350 ? 18 : 16,
    width: '80%',
    fontFamily: 'Rubik_300Light',
    marginTop: 4,
    alignSelf: 'center',
    marginLeft: 15,
  },
  text3: {
    textAlign: 'center',
    fontFamily: 'Rubik_300Light',
    marginLeft: 10,
    fontSize: Tela > 350 ? 24 : 18,
  },
  botao: {
    fontSize: Tela > 350 ? 24 : 18,
    marginTop: Tela > 350 ? 7 : 12,
  },
  arrow: {
    width: 25,
    height: 25,
    marginTop: 8,
    marginRight: 5
  },
  leftArrow: {
    width: 25,
    height: 25,
    opacity: 0.7,
    marginLeft: 5
  },
  line: { width: '85%', alignSelf: 'center', borderWidth: 0.2, borderColor: '#D6E8E6' }
});
