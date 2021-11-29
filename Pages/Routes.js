import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Selo from './Fiscal/Selo';
import Multa from './Fiscal/Multa';
import MultaVerMais from './Fiscal/MultaVerMais';
import Prevencao from './Prefeito&Vereador/Prevencao';
import Imposto from './Prefeito&Vereador/Imposto';
import Frame1 from './InicioJogo/Frame1';
import SorteioJogador from './InicioJogo/SorteioJogador';
import AguardarJogadores from './AguardarJogadores';
import SelecaoPersonagem from './InicioJogo/SelecaoPersonagem';
import Vendas from './Empresario/Vender';
import ChecarAnuncio from './Empresario/ChecarAnuncio';
import FazerTransferencia from './Transferencias/FazerTransferencia';
import ConfirmarTransferencia from './Transferencias/ConfirmarTransferencia';
import TransferenciaConfirmada from './Transferencias/Confirmada';
import Cenario from './Cenario';
import ControleParcelas from './Agricultor/ControleParcelas';
import Parcela from './Agricultor/Parcela';
import Propostas from './Agricultor/Propostas';
import AnalisarProdutos from './Agricultor/AnalisarProdutos';
import CriarPartida from './InicioJogo/CriarPartida';
import Lobby from './InicioJogo/Lobby';
import MenuJogador from './MenuJogador';
import MenuPolitico from './MenuPolitico';
import Status from './Status';
import Historico from './Historico';
import HistoricoJogadores from './Prefeito&Vereador/HistoricoJogadores';
import Sugestoes from './Prefeito&Vereador/Sugestoes';
import Eleitos from './InicioJogo/Eleitos';
import Detalhes from './InicioJogo/DetalhesEleitos';
import Candidatura from './InicioJogo/Candidatura';
import Votacao from './InicioJogo/Votacao';


import {
  setCustomText,
  setCustomTouchableOpacity
} from 'react-native-global-props';
const customTextProps = {
  style: {
    fontFamily: 'Rubik_300Light'
  }
};
const CustomTouchableOpacityProps = {
  activeOpacity: 0.7
};
setCustomText(customTextProps);
setCustomTouchableOpacity(CustomTouchableOpacityProps)
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
      <Stack.Screen name="MultaVerMais" component={MultaVerMais} />
      <Stack.Screen name="Prevencao" component={Prevencao} />
      <Stack.Screen name="Imposto" component={Imposto} />
      <Stack.Screen name="HistoricoJogadores" component={HistoricoJogadores} />
      <Stack.Screen name="Sugestoes" component={Sugestoes} />
      <Stack.Screen name="Eleitos" component={Eleitos} />
      <Stack.Screen name="Detalhes" component={Detalhes} />
      <Stack.Screen name="Candidatura" component={Candidatura} />
      <Stack.Screen name="Votacao" component={Votacao} />

    </Stack.Navigator>
  )
}