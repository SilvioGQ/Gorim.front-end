import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

// import Frame4 from './InicioJogo/Personagem';
// import Frame5 from './InicioJogo/Candidatura';
// import Frame6 from './InicioJogo/Votaçao';
// import Frame7 from './InicioJogo/Eleitos';
// import Fiscal from './Fiscal/Fiscal1';
// import Selo from './Fiscal/Selo';
// import Multa from './Fiscal/Multa';
// import Prevençao from './Prefeitura/Prevencao';
// import Prefeitura from './Prefeitura/Prefeitura';
// import Imposto from './Prefeitura/Imposto';
import Frame1 from './InicioJogo/Frame1';
import SorteioJogador from './SorteioJogador';
import AguardarJogadores from './AguardarJogadores';
import SelecaoPersonagem from './SelecaoPersonagem';
import Vendas from './Empresario/Vender';
import ChecarAnuncio from './Empresario/ChecarAnuncio';
import FazerTransferencia from './Transferencias/FazerTransferencia';
import ConfirmarTransferencia from './Transferencias/ConfirmarTransferencia';
import TransferenciaConfirmada from './Transferencias/Confirmada';
//import Insumo from './Transferencias/Insumo';
import Cenario from './Cenario';
import ControleParcelas from './Agricultor/ControleParcelas';
import Parcela from './Agricultor/Parcela';
import Propostas from './Agricultor/Propostas';
import AnalisarProdutos from './Agricultor/AnalisarProdutos';
import CriarPartida from './CriarPartida';
import Lobby from './Lobby';
import MenuJogador from './MenuJogador';
import Status from './Status';
import Historico from './Historico';
const Stack = createStackNavigator();
export default function Routes() {
  return (
    <Stack.Navigator initialRouteName="Gorim">

      <Stack.Screen name="Gorim" component={Frame1} options={{
        headerTransparent: true,
        headerTitle: ''
      }} />
      <Stack.Screen name="SorteioJogador" component={SorteioJogador} options={{
        headerLeft: () => null,
        headerTransparent: true,
        headerTitle: ''
      }} />
      <Stack.Screen name="MenuJogador" component={MenuJogador} options={{
        headerLeft: () => null,
        headerTransparent: true,
        headerTitle: '',
      }} />
      <Stack.Screen name="AguardarJogadores" component={AguardarJogadores} options={{
        headerLeft: () => null,
        headerTransparent: true,
        headerTitle: ''
      }} />
      <Stack.Screen name="FazerTransferencia" component={FazerTransferencia} options={{
        headerTransparent: true,
        headerTitle: '',
        headerTintColor: 'white',
      }} />
      <Stack.Screen name="ConfirmarTransferencia" component={ConfirmarTransferencia} options={{
        headerTransparent: true,
        headerTitle: '',
        headerTintColor: 'white',
      }} />
      <Stack.Screen name="TransferenciaConfirmada" component={TransferenciaConfirmada} options={{
        headerTransparent: true,
        headerTitle: '',
      }} />
      <Stack.Screen name="ControleParcelas" component={ControleParcelas} options={{
        headerTransparent: true,
        headerTitle: '',
        headerTintColor: 'white',
      }} />
      <Stack.Screen name="Vendas" component={Vendas} options={{
        headerTransparent: true,
        headerTitle: '',
        headerTintColor: 'white',
      }} />
      <Stack.Screen name="Cenario" component={Cenario} options={{
        headerTransparent: true,
        headerTitle: '',
        headerTintColor: 'white',
      }} />
      <Stack.Screen name="Parcela" component={Parcela} options={{
        headerTransparent: true,
        headerTitle: '',
        headerTintColor: 'white',
      }} />
      <Stack.Screen name="Propostas" component={Propostas} options={{
        headerTransparent: true,
        headerTitle: '',
        headerTintColor: 'white',
      }} />
      <Stack.Screen name="AnalisarProdutos" component={AnalisarProdutos} options={{
        headerTransparent: true,
        headerTitle: '',
        headerTintColor: 'white',
      }} />
      <Stack.Screen name="CriarPartida" component={CriarPartida} options={{
        headerTransparent: true,
        headerTitle: '',
      }} />
      <Stack.Screen name="Lobby" component={Lobby} options={{
        headerLeft: () => null,
        headerTransparent: true,
        headerTitle: '',
      }} />
      <Stack.Screen name="SelecaoPersonagem" component={SelecaoPersonagem} options={{
        headerTintColor: 'white',
        headerTransparent: true,
        headerTitle: '',
      }} />
      <Stack.Screen name="ChecarAnuncio" component={ChecarAnuncio} options={{
        headerTransparent: true,
        headerTitle: '',
        headerTintColor: 'white',
      }} />
      <Stack.Screen name="Historico" component={Historico} options={{
        headerTransparent: true,
        headerTitle: '',
        headerTintColor: 'white',
      }} />
      <Stack.Screen name="Status" component={Status} options={{
        headerTransparent: true,
        headerTitle: '',
        headerLeft: () => null,
      }} />
    </Stack.Navigator>
  )
}