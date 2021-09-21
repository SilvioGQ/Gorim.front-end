import React,{useState} from 'react';
// import 'react-native-gesture-handler';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import AppLoading from 'expo-app-loading';
import Routes from './Pages/Routes';
import { GameProvider } from './contexts/GameContext';
import { useFonts, Rubik_300Light, Rubik_400Regular, Rubik_700Bold } from '@expo-google-fonts/rubik';
import ModalInfo from './Components/ModalInfo';
export default function App() {
  let [fontsLoaded] = useFonts({
    Rubik_700Bold,
    Rubik_400Regular,
    Rubik_300Light
  });
  const [modalText, setModalText] = useState('dsadasdsa');
  //Você foi desconectado da partida, quando estiver pronto clique o botão abaixo
  if (!fontsLoaded) {
    return <AppLoading />
  }
  const MyTheme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      background : '#EBFFFD',
    },
  };
  return (
    <GameProvider>
      <NavigationContainer theme={MyTheme}>
      {modalText !== '' && (
        <ModalInfo onClick={() => setModalText('')} text={modalText} textButton={'RECONECTAR'} />
      )}
        <Routes />
      </NavigationContainer>
    </GameProvider>
  );
}