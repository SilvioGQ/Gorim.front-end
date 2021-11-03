import React from 'react';
// import 'react-native-gesture-handler';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import AppLoading from 'expo-app-loading';
import Routes from './Pages/Routes';
// import Candidato from './Pages/InicioJogo/Votaçao';
import Candidato from './Pages/InicioJogo/Eleitos';
// Text.defaultProps.style =  { fontFamily: 'Rubik_300Light' }
import { GameProvider } from './contexts/GameContext';
import { useFonts, Rubik_300Light, Rubik_400Regular, Rubik_700Bold } from '@expo-google-fonts/rubik';

export default function App() {

  let [fontsLoaded] = useFonts({
    Rubik_700Bold,
    Rubik_400Regular,
    Rubik_300Light
  });
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
        <Routes />
      </NavigationContainer>
    </GameProvider>
  );
}