import React from 'react';
// import 'react-native-gesture-handler';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { GameProvider } from './contexts/GameContext';
import { useFonts } from 'expo-font';
import Routes from './pages/Routes';

const MyTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: '#EBFFFD',
  },
};

export default function App() {

  const [loaded] = useFonts({
    Rubik_300Light: require('./assets/fonts/Rubik-Light.ttf'),
    Rubik_400Regular: require('./assets/fonts/Rubik-Regular.ttf'),
    Rubik_700Bold: require('./assets/fonts/Rubik-Bold.ttf')
  });

  if (!loaded) {
    return null;
  }

  return (
    <GameProvider>
      <NavigationContainer theme={MyTheme}>
        <Routes />
      </NavigationContainer>
    </GameProvider>
  );
}