import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Selo from './Etapa2/Fiscal/Selo';
import Multa from './Etapa2/Fiscal/Multa';
import MultaVerMais from './Etapa2/Fiscal/MultaVerMais';
import Prevencao from './Etapa2/Prefeito&Vereador/Prevencao';
import Imposto from './Etapa2/Prefeito&Vereador/Imposto';
import Inicio from './InicioJogo/Inicio';
import SorteioJogador from './InicioJogo/SorteioJogador';
import AguardarJogadores from './TelasDeTransicao/AguardarJogadores';
import SelecaoPersonagem from './InicioJogo/SelecaoPersonagem';
import Vendas from './Etapa1/Empresario/Vender';
import ChecarAnuncio from './Etapa1/Empresario/ChecarAnuncio';
import FazerTransferencia from './AcoesGlobais/Transferencias/FazerTransferencia';
import Chat from './AcoesGlobais/Chat';
import ChatConversation from './AcoesGlobais/ChatConversation';
import ChatConversationGroup from './AcoesGlobais/ChatConversationGroup';
import ConfirmarTransferencia from './AcoesGlobais/Transferencias/ConfirmarTransferencia';
import TransferenciaConfirmada from './AcoesGlobais/Transferencias/Confirmada';
import Cenario from './AcoesGlobais/Cenario';
import ControleParcelas from './Etapa1/Agricultor/ControleParcelas';
import Parcela from './Etapa1/Agricultor/Parcela';
import Propostas from './Etapa1/Agricultor/Propostas';
import AnalisarProdutos from './Etapa1/Agricultor/AnalisarProdutos';
import CriarPartida from './InicioJogo/CriarPartida';
import Lobby from './InicioJogo/Lobby';
import MenuJogador from './Etapa1/MenuJogador';
import MenuPolitico from './Etapa2/MenuPolitico';
import Status from './TelasDeTransicao/Status';
import Status2 from './TelasDeTransicao/Status2';
import Historico from './AcoesGlobais/Historico';
import HistoricoJogadores from './Etapa2/Prefeito&Vereador/HistoricoJogadores';
import Sugestoes from './Etapa2/Prefeito&Vereador/Sugestoes';
import Eleitos from './Eleicoes/Eleitos';
import Detalhes from './Eleicoes/DetalhesEleitos';
import Candidatura from './Eleicoes/Candidatura';
import Votacao from './Eleicoes/Votacao';
import { setCustomText, setCustomTouchableOpacity } from 'react-native-global-props';
const Stack = createStackNavigator();
export default function Routes() {
  const customTextProps = {
    style: {
      fontFamily: 'Rubik_300Light'
    }
  };
  const CustomTouchableOpacityProps = {
    activeOpacity: 0.7
  };
  setCustomText(customTextProps);
  setCustomTouchableOpacity(CustomTouchableOpacityProps);
  return (
    <Stack.Navigator initialRouteName="Gorim" screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Gorim" component={Inicio} />
      <Stack.Screen name="SorteioJogador" component={SorteioJogador} />
      <Stack.Screen name="MenuJogador" component={MenuJogador} />
      <Stack.Screen name="AguardarJogadores" component={AguardarJogadores} />
      <Stack.Screen name="FazerTransferencia" component={FazerTransferencia} />
      <Stack.Screen name="ConfirmarTransferencia" component={ConfirmarTransferencia} />
      <Stack.Screen name="TransferenciaConfirmada" component={TransferenciaConfirmada} />
      <Stack.Screen name="ControleParcelas" component={ControleParcelas} />
      <Stack.Screen name="Vendas" component={Vendas} />
      <Stack.Screen name="Cenario" component={Cenario} />
      <Stack.Screen name="Parcela" component={Parcela} />
      <Stack.Screen name="Propostas" component={Propostas} />
      <Stack.Screen name="AnalisarProdutos" component={AnalisarProdutos} />
      <Stack.Screen name="CriarPartida" component={CriarPartida} />
      <Stack.Screen name="Lobby" component={Lobby} />
      <Stack.Screen name="SelecaoPersonagem" component={SelecaoPersonagem} />
      <Stack.Screen name="ChecarAnuncio" component={ChecarAnuncio} />
      <Stack.Screen name="Historico" component={Historico} />
      <Stack.Screen name="Status" component={Status} />
      <Stack.Screen name="Status2" component={Status2} />
      <Stack.Screen name="MenuPolitico" component={MenuPolitico} />
      <Stack.Screen name="Selo" component={Selo} />
      <Stack.Screen name="Multa" component={Multa} />
      <Stack.Screen name="MultaVerMais" component={MultaVerMais} />
      <Stack.Screen name="Prevencao" component={Prevencao} />
      <Stack.Screen name="Imposto" component={Imposto} />
      <Stack.Screen name="HistoricoJogadores" component={HistoricoJogadores} />
      <Stack.Screen name="Sugestoes" component={Sugestoes} />
      <Stack.Screen name="Eleitos" component={Eleitos} />
      <Stack.Screen name="Detalhes" component={Detalhes} />
      <Stack.Screen name="Candidatura" component={Candidatura} />
      <Stack.Screen name="Votacao" component={Votacao} />
      <Stack.Screen name="Chat" component={Chat} />
      <Stack.Screen name="ChatConversation" component={ChatConversation} />
      <Stack.Screen name="ChatConversationGroup" component={ChatConversationGroup} />
    </Stack.Navigator>
  )
}