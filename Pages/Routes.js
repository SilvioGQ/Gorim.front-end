import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

// import Frame4 from './InicioJogo/Personagem';
// import Frame5 from './InicioJogo/Candidatura';
// import Frame6 from './InicioJogo/Votaçao';
// import Frame7 from './InicioJogo/Eleitos';
// import Fiscal from './Fiscal/Fiscal1';
import Selo from './Fiscal/Selo';
import Multa from './Fiscal/Multa';
// import Prevençao from './Prefeitura/Prevencao';
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
import MenuPolitico from './MenuPolitico';
import Status from './Status';
import Historico from './Historico';

const Stack = createStackNavigator();
export default function Routes() {
  return (
    <Stack.Navigator initialRouteName="Gorim" screenOptions={{headerShown: false}}>
      <Stack.Screen name="Gorim" component={Frame1}/>
      <Stack.Screen name="SorteioJogador" component={SorteioJogador}/>
      <Stack.Screen name="MenuJogador" component={MenuJogador}/>
      <Stack.Screen name="AguardarJogadores" component={AguardarJogadores}/>
      <Stack.Screen name="FazerTransferencia" component={FazerTransferencia}/>
      <Stack.Screen name="ConfirmarTransferencia" component={ConfirmarTransferencia}/>
      <Stack.Screen name="TransferenciaConfirmada" component={TransferenciaConfirmada}/>
      <Stack.Screen name="ControleParcelas" component={ControleParcelas}/>
      <Stack.Screen name="Vendas" component={Vendas}/>
      <Stack.Screen name="Cenario" component={Cenario}/>
      <Stack.Screen name="Parcela" component={Parcela}/>
      <Stack.Screen name="Propostas" component={Propostas}/>
      <Stack.Screen name="AnalisarProdutos" component={AnalisarProdutos}/>
      <Stack.Screen name="CriarPartida" component={CriarPartida}/>
      <Stack.Screen name="Lobby" component={Lobby}/>
      <Stack.Screen name="SelecaoPersonagem" component={SelecaoPersonagem}/>
      <Stack.Screen name="ChecarAnuncio" component={ChecarAnuncio}/>
      <Stack.Screen name="Historico" component={Historico}/>
      <Stack.Screen name="Status" component={Status}/>
      <Stack.Screen name="MenuPolitico" component={MenuPolitico}/>
      <Stack.Screen name="Selo" component={Selo}/>
      <Stack.Screen name="Multa" component={Multa}/>
    </Stack.Navigator>
  )
}