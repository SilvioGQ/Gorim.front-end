import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'react-native';
import { AppLoading } from 'expo';
import Routes from './Pages/Routes';
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
  return (
    <NavigationContainer>
      <Routes />
    </NavigationContainer>
  );
}