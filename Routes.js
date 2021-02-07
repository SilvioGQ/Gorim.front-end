import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Frame1 from './Pages/InicioJogo/Frame1';
import Frame3 from './Pages/InicioJogo/Sorteio';
import Frame4 from './Pages/InicioJogo/Personagem';
import Frame5 from './Pages/InicioJogo/Candidatura';
import Frame6 from './Pages/InicioJogo/Votaçao';
import Frame7 from './Pages/InicioJogo/Eleitos';
import Agricultor1 from './Pages/Agricultor/Agricultor1';
import Espera from './Pages/Tela de Espera';
import Tranferenciaconfirmada from './Pages/Transferencias/Confirmada';
import Insumo from './Pages/Transferencias/Insumo';
import Parcela from './Pages/Agricultor/Parcelaterra';
import Agrotoxicos from './Pages/Empresario/Agrotoxicos';
import Transferindo from './Pages/Transferir';
import Empresario1 from './Pages/Empresario/Empresario1';
import Vendas from './Pages/Empresario/Vender';
import FazerTransferencia from './Pages/Transferencias/Transferencia';
import Cenario from './Pages/Cenario';
import Fiscal from './Pages/Fiscal/Fiscal1';
import Selo from './Pages/Fiscal/Selo';
import Multa from './Pages/Fiscal/Multa';
import Aparcela from './Pages/Agricultor/Parcelaterra/aparcela';
import Pacotes from './Components/TelaDaSeta';
import Proposta from './Pages/Agricultor/Propostas';
import Analizar from './Pages/Analisar';
import Prevençao from './Pages/Prefeitura/Prevencao';
import Prefeitura from './Pages/Prefeitura/Prefeitura';
import Imposto from './Pages/Prefeitura/Imposto';
import Frame2 from './Pages/InicioJogo/Frame2/Frame2';

const Stack = createStackNavigator();

export default function Routes() {
  return (
    <Stack.Navigator initialRouteName="Cenario">

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
      <Stack.Screen name="Frame2" component={Frame2} options={{
        headerTransparent: true,
        headerTitle: '',
      }} />
    </Stack.Navigator>
  )
}