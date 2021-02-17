import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Frame1 from './InicioJogo/Frame1';
import Frame3 from './InicioJogo/Sorteio';
import Frame4 from './InicioJogo/Personagem';
import Frame5 from './InicioJogo/Candidatura';
import Frame6 from './InicioJogo/Votaçao';
import Frame7 from './InicioJogo/Eleitos';
import Agricultor1 from './Agricultor/Agricultor1';
import Espera from './Tela de Espera';
import Tranferenciaconfirmada from './Transferencias/Confirmada';
import Insumo from './Transferencias/Insumo';
import Parcela from './Agricultor/Parcelaterra';
import Agrotoxicos from './Empresario/Agrotoxicos';
import Transferindo from './Transferir';
import Empresario1 from './Empresario/Empresario1';
import Vendas from './Empresario/Vender';
import FazerTransferencia from './Transferencias/Transferencia';
import Cenario from './Cenario';
import Fiscal from './Fiscal/Fiscal1';
import Selo from './Fiscal/Selo';
import Multa from './Fiscal/Multa';
import Aparcela from './Agricultor/Parcelaterra/aparcela';
import Pacotes from '../Components/TelaDaSeta';
import Proposta from './Agricultor/Propostas';
import Analizar from './Analisar';
import Prevençao from './Prefeitura/Prevencao';
import Prefeitura from './Prefeitura/Prefeitura';
import Imposto from './Prefeitura/Imposto';
import CriarPartida from './CriarPartida';
import Lobby from './Lobby';
import MenuJogador from './MenuJogador'
const Stack = createStackNavigator();

export default function Routes() {
  return (
    <Stack.Navigator initialRouteName="MenuJogador">

      <Stack.Screen name="Gorim" component={Frame1} options={{
        headerTransparent: true,
        headerTitle: ''
      }} />
      <Stack.Screen name="frame3" component={Frame3} options={{
        headerTransparent: true,
        headerTitle: ''
      }} />
      <Stack.Screen name="frame4" component={Frame4} options={{
        headerTransparent: true,
        headerTitle: '',
        headerTitleStyle: {
          fontSize: 41,
          marginLeft: '25%',
          fontFamily: 'Rubik_300Light',
        },
        headerStyle: {
          backgroundColor: '#EBFFFD',

          height: 77
        },
      }} />
      <Stack.Screen name="frame5" component={Frame5} options={{
        headerTitle: ' Rodada 1',
        headerTitleStyle: {
          fontSize: 15,
          fontFamily: 'Rubik_300Light'
        },
        headerStyle: {
          backgroundColor: '#58AB23',
          height: 75
        },
        headerTintColor: '#fff',
      }} />
      <Stack.Screen name="frame6" component={Frame6} options={{

        headerTitle: ' Rodada 1',
        headerTitleStyle: {
          fontSize: 15,
          fontFamily: 'Rubik_300Light'
        },
        headerStyle: {
          backgroundColor: '#58AB23',
          height: 75,
        },
        headerTintColor: '#fff',
      }} />
      <Stack.Screen name="frame7" component={Frame7} options={{

        headerTitle: ' Rodada 1',
        headerTitleStyle: {
          fontSize: 15,
          fontFamily: 'Rubik_300Light'
        },
        headerStyle: {
          backgroundColor: '#58AB23',
          height: 75,
        },
        headerTintColor: '#fff',
      }} />
      <Stack.Screen name="MenuJogador" component={MenuJogador} options={{

        headerTitle: ' Rodada 1',
        headerTitleStyle: {
          fontSize: 15,
          fontFamily: 'Rubik_300Light',
        },
        headerStyle: {
          backgroundColor: '#58AB23',
          height: 75,
        },
        headerTintColor: '#fff',
      }} />
      <Stack.Screen name="Agricultor1" component={Agricultor1} options={{

        headerTitle: ' Rodada 1',
        headerTitleStyle: {
          fontSize: 15,
          fontFamily: 'Rubik_300Light',
        },
        headerStyle: {
          backgroundColor: '#58AB23',
          height: 75,
        },
        headerTintColor: '#fff',
      }} />
      <Stack.Screen name="Espera" component={Espera} options={{
        headerTransparent: true,
        headerTitle: 'Gorim',
        headerTitleStyle: {
          fontSize: 41,
          marginLeft: '25%',
          fontFamily: 'Rubik_300Light',
        },
        headerStyle: {

          backgroundColor: '#EBFFFD',
          height: 77
        },
      }} />
      <Stack.Screen name="Tranferenciaconfirmada" component={Tranferenciaconfirmada} options={{
        headerTransparent: true,
        headerTitle: 'Gorim',
        headerTitleStyle: {
          fontSize: 41,
          marginLeft: '25%',
          fontFamily: 'Rubik_300Light',
        },
        headerStyle: {
          backgroundColor: '#EBFFFD',

          height: 77
        },
      }} />
      <Stack.Screen name="insumo" component={Insumo} options={{
        headerTransparent: true,
        headerTitle: 'Gorim',
        headerTitleStyle: {
          fontSize: 41,
          fontFamily: 'Rubik_300Light',
          marginLeft: '25%',
        },
        headerStyle: {
          backgroundColor: '#EBFFFD',

          height: 677
        },
      }} />
      <Stack.Screen name="Parcela" component={Parcela} options={{
        headerTransparent: true,
        headerTitle: '',
      }} />
      <Stack.Screen name="Agrotoxicos" component={Agrotoxicos} options={{
        headerTransparent: true,
        headerTitle: '',
      }} />
      <Stack.Screen name="Transferindo" component={Transferindo} options={{
        headerTransparent: true,
        headerTitle: '',
      }} />
      <Stack.Screen name="FazerTransferencia" component={FazerTransferencia} options={{
        headerTransparent: true,
        headerTitle: '',
      }} />
      <Stack.Screen name="Empresario1" component={Empresario1} options={{
        headerTitle: ' Rodada 1',
        headerTitleStyle: {
          fontSize: 15,
          fontFamily: 'Rubik_300Light',
        },
        headerStyle: {
          backgroundColor: '#58AB23',
          height: 75,
        },
        headerTintColor: '#fff',
      }} />
      <Stack.Screen name="Vendas" component={Vendas} options={{
        headerTransparent: true,
        headerTitle: '',
      }} />
      <Stack.Screen name="Prefeitura" component={Prefeitura} options={{
        headerTitle: ' Rodada 1',
        headerTitleStyle: {
          fontSize: 15,
          fontFamily: 'Rubik_300Light',
        },
        headerStyle: {
          backgroundColor: '#58AB23',
          height: 75,
        },
        headerTintColor: '#fff',
      }} />
      <Stack.Screen name="Cenario" component={Cenario} options={{
        headerTransparent: true,
        headerTitle: '',
      }} />
      <Stack.Screen name="Fiscal" component={Fiscal} options={{
        headerTitle: ' Rodada 1',
        headerTitleStyle: {
          fontSize: 15,
          fontFamily: 'Rubik_300Light',
        },
        headerStyle: {
          backgroundColor: '#58AB23',
          height: 75,
        },
        headerTintColor: '#fff',
      }} />
      <Stack.Screen name="Selo" component={Selo} options={{
        headerTransparent: true,
        headerTitle: '',
      }} />
      <Stack.Screen name="Multa" component={Multa} options={{
        headerTransparent: true,
        headerTitle: '',
      }} />
      <Stack.Screen name="Aparcela" component={Aparcela} options={{
        headerTitle: ' Rodada 1',
        headerTitleStyle: {
          fontSize: 15,
          fontFamily: 'Rubik_300Light',
        },
        headerStyle: {
          backgroundColor: '#58AB23',
          height: 75,
        },
        headerTintColor: '#fff',
      }} />
      <Stack.Screen name="Pacotes" component={Pacotes} options={{
        headerTransparent: true,
        headerTitle: '',
      }} />
      <Stack.Screen name="Proposta" component={Proposta} options={{
        headerTransparent: true,
        headerTitle: '',
      }} />
      <Stack.Screen name="Analizar" component={Analizar} options={{
        headerTransparent: true,
        headerTitle: '',
      }} />
      <Stack.Screen name="Prevençao" component={Prevençao} options={{
        headerTransparent: true,
        headerTitle: '',
      }} />

      <Stack.Screen name="Imposto" component={Imposto} options={{
        headerTransparent: true,
        headerTitle: '',
      }} />
      <Stack.Screen name="CriarPartida" component={CriarPartida} options={{
        headerTransparent: true,
        headerTitle: '',
      }} />
      <Stack.Screen name="Lobby" component={Lobby} options={{
        headerTransparent: true,
        headerTitle: '',
      }} />
    </Stack.Navigator>
  )
}