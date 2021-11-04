import React, { useState, useContext, useEffect } from 'react';
import { Text, View, StyleSheet, ScrollView, StatusBar, Dimensions, TouchableOpacity } from 'react-native';
import { GameContext, selectAvatar, selectedAvatars } from '../../../contexts/GameContext';

import COLORS from '../../../constants/colors';
import Quadrados from '../../../Components/Quadrado'
import Button from '../../../Components/Button';
import ModalInfo from '../../../Components/ModalInfo';
const Height = Dimensions.get('screen').height;
export default function SelecaoPersonagem({ navigation }) {

  const [modalText, setModalText] = useState('');
  const [avatars, setAvatars] = useState([]);
  const { players, player, stage } = useContext(GameContext);
  const [title, setTitle] = useState(true);

  useEffect(() => {
    let isMounted = true, v = [];
    players.forEach(p => { if (p.avatar) v.push(p.avatar) });
    setAvatars(v);

    if (stage === 'NAVIGATEFORMENUPOLITIC') navigation.reset({ routes: [{ name: 'MenuPolitico' }] });
    if (stage === 'NAVIGATEFORMENU') navigation.reset({ routes: [{ name: 'MenuJogador' }] });
    if (stage === 'NAVIGATEFORLOBBY') navigation.reset({ routes: [{ name: 'Lobby' }] });
    
    if (stage === 'SELECTEDAVATARS' && isMounted) navigation.reset({ routes: [{ name: 'MenuJogador' }] });

    return () => isMounted = false;
  }, [players, stage]);

  const bgQuadrados = index => {
    let color = '#fff';

    avatars.filter(a => {
      if (a == index && player.avatar != index) color = '#CBCBCB';
    });
    if (player.avatar == index) color = '#8ACF3A';

    return color;
  }
  const startGame = () => {
    if (avatars.length < players.length) {return setTitle(false), setModalText('Aguardando outros jogadores escolherem um avatar')};
    selectedAvatars();
  }
  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Text style={styles.title}>Bem vindo ao Gorim!</Text>
        <View>
          <View>
            <View style={{ flexDirection: 'row', alignSelf: 'center', }}>
              <Text style={styles.text}>VOCÊ SERÁ</Text>
              <Text style={styles.textbold}> {player.type === 'Agricultor' ? 'AGRICULTOR' : `EMPRESÁRIO DE ${player.specialty.toUpperCase()}`}</Text>
            </View>
            {player.type === 'Agricultor' ? <TouchableOpacity onPress={() => {setTitle(true); setModalText('Você foi selecionado como agricultor, logo você será responsável por negociar o melhor preço possivel para comprar os produtos vendidos pelos empresários, utilizar as parcelas de terras para o plantio de sementes e evitar o excesso de poluição para não tomar multas. Você e todos outros jogadores têm o direito de se cadidatar a cargos políticos em época de eleições.')}} style={styles.button}  ><Text style={styles.textbutton}>VER DETALHES</Text></TouchableOpacity> :
              <TouchableOpacity onPress={() => {setTitle(true); setModalText('Você foi selecionado como empresário, logo você será responsável por anunciar os preços dos seus produtos e interagir com agricultores para renegociação do preço de alguns produtos caso necessário. Você e todos outros jogadores têm o direito de se cadidatar a cargos políticos em época de eleições.')}} style={styles.button}  ><Text style={styles.textbutton}>VER DETALHES</Text></TouchableOpacity>}
          </View>
          <Text style={styles.text}>Selecione um personagem</Text>
          {modalText !== '' && <ModalInfo onClick={() => setModalText('')} text={modalText} title={title} />}
          <View style={{ alignSelf: 'center' }}>
            <View style={{ flexDirection: 'row' }}>
              <Quadrados onClick={() => selectAvatar('Icon1')} backgroundColor={bgQuadrados('Icon1')} icon='Icon1' />
              <Quadrados onClick={() => selectAvatar('Icon2')} backgroundColor={bgQuadrados('Icon2')} icon='Icon2' />
              <Quadrados onClick={() => selectAvatar('Icon3')} backgroundColor={bgQuadrados('Icon3')} icon='Icon3' />
            </View>
            <View style={{ flexDirection: 'row' }}>
              <Quadrados onClick={() => selectAvatar('Icon4')} backgroundColor={bgQuadrados('Icon4')} icon='Icon4' />
              <Quadrados onClick={() => selectAvatar('Icon5')} backgroundColor={bgQuadrados('Icon5')} icon='Icon5' />
              <Quadrados onClick={() => selectAvatar('Icon6')} backgroundColor={bgQuadrados('Icon6')} icon='Icon6' />
            </View>
            <View style={{ flexDirection: 'row' }}>
              <Quadrados onClick={() => selectAvatar('Icon7')} backgroundColor={bgQuadrados('Icon7')} icon='Icon7' />
              <Quadrados onClick={() => selectAvatar('Icon8')} backgroundColor={bgQuadrados('Icon8')} icon='Icon8' />
              <Quadrados onClick={() => selectAvatar('Icon9')} backgroundColor={bgQuadrados('Icon9')} icon='Icon9' />
            </View>
            <View style={{ flexDirection: 'row' }}>
              <Quadrados onClick={() => selectAvatar('Icon10')} backgroundColor={bgQuadrados('Icon10')} icon='Icon10' />
              <Quadrados onClick={() => selectAvatar('Icon11')} backgroundColor={bgQuadrados('Icon11')} icon='Icon11' />
              <Quadrados onClick={() => selectAvatar('Icon12')} backgroundColor={bgQuadrados('Icon12')} icon='Icon12' />
            </View>
          </View>
        </View>
        <Text style={{ fontSize: 24, textAlign: 'center', fontFamily: 'Rubik_300Light' }}>{avatars.length} de {players.length}</Text>
        {player.host ?
          <View style={{ alignItems: 'center', marginVertical: 15 }}>
            <Button onClick={startGame} name='começar' />
          </View> :
          <Text style={{
            fontSize: 20,
            marginVertical: 40,
            textAlign: 'center',
            fontFamily: 'Rubik_300Light'
          }}>{avatars.length === players.length ? 'AGUARDANDO HOST INICIAR' : 'AGUARDANDO JOGADORES.' }</Text>
        }
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    paddingTop: StatusBar.currentHeight,
    width: '100%',
  },
  title: {
    fontSize: 20,
    marginVertical: 10,
    textAlign: 'center',
    fontFamily: 'Rubik_300Light'
  },
  subtitle: {
    fontSize: Height > 700 ? 16 : 14,
    marginVertical: 10,
    textAlign: 'center',
    
  },
  textbutton: {
    padding: 8,
    paddingHorizontal: 10,
    fontSize: Height > 700 ? 12 : 11,
    textAlign: 'center',
    fontFamily: 'Rubik_400Regular',
  },
  text: {
    fontSize: Height > 700 ? 16 : 14,
    marginVertical: 15,
    textAlign: 'center',
    fontFamily: 'Rubik_300Light'
  },
  textbold: {
    fontSize: Height > 700 ? 16 : 14,
    marginVertical: 15,
    textAlign: 'center',
    fontFamily: 'Rubik_700Bold'
  },
  button: {
    padding: 2,
    alignSelf: 'center',
    backgroundColor: COLORS.textWhite,
    borderRadius: 20,
    borderWidth: 0.7
  }
});