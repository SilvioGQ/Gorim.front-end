import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Frame1 from './InicioJogo/Frame1';
import SorteioJogador from './SorteioJogador';
import Frame4 from './InicioJogo/Personagem';
import Frame5 from './InicioJogo/Candidatura';
import Frame6 from './InicioJogo/Votaçao';
import Frame7 from './InicioJogo/Eleitos';
import Espera from './Tela de Espera';
import Insumo from './Transferencias/Insumo';
import Vendas from './Empresario/Vender';
import FazerTransferencia from './Transferencias/FazerTransferencia';
import ConfirmarTransferencia from './Transferencias/ConfirmarTransferencia';
import TransferenciaConfirmada from './Transferencias/Confirmada';
import Cenario from './Cenario';
import Fiscal from './Fiscal/Fiscal1';
import Selo from './Fiscal/Selo';
import Multa from './Fiscal/Multa';
import ControleParcelas from './Agricultor/ControleParcelas';
import Parcela from './Agricultor/Parcela';
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
    <Stack.Navigator initialRouteName="Gorim">

      <Stack.Screen name="Gorim" component={Frame1} options={{
        headerTransparent: true,
        headerTitle: ''
      }} />
      <Stack.Screen name="SorteioJogador" component={SorteioJogador} options={{
        headerTransparent: true,
        headerTitle: ''
      }} />
      <Stack.Screen name="frame4" component={Frame4} options={{
        headerTransparent: true,
        headerTitle: ''
      }} />
      <Stack.Screen name="frame5" component={Frame5} options={{
        headerTransparent: true,
        headerTitle: '',
      }} />
      <Stack.Screen name="frame6" component={Frame6} options={{
        headerTransparent: true,
        headerTitle: '',

      }} />
      <Stack.Screen name="frame7" component={Frame7} options={{
        headerTransparent: true,
        headerTitle: '',

      }} />
      <Stack.Screen name="MenuJogador" component={MenuJogador} options={{
        headerTransparent: true,
        headerTitle: '',
      }} />
      <Stack.Screen name="Espera" component={Espera} options={{
        headerTransparent: true,
        headerTitle: ''
      }} />
      <Stack.Screen name="FazerTransferencia" component={FazerTransferencia} options={{
        headerTransparent: true,
        headerTitle: '',
      }} />
      <Stack.Screen name="ConfirmarTransferencia" component={ConfirmarTransferencia} options={{
        headerTransparent: true,
        headerTitle: ''
      }} />
      <Stack.Screen name="TransferenciaConfirmada" component={TransferenciaConfirmada} options={{
        headerTransparent: true,
        headerTitle: '',
      }} />
      <Stack.Screen name="insumo" component={Insumo} options={{
        headerTransparent: true,
        headerTitle: ''
      }} />
      <Stack.Screen name="ControleParcelas" component={ControleParcelas} options={{
        headerTransparent: true,
        headerTitle: '',
      }} />
      <Stack.Screen name="Vendas" component={Vendas} options={{
        headerTransparent: true,
        headerTitle: '',
      }} />
      <Stack.Screen name="Prefeitura" component={Prefeitura} options={{
        headerTransparent: true,
        headerTitle: '',
      }} />
      <Stack.Screen name="Cenario" component={Cenario} options={{
        headerTransparent: true,
        headerTitle: '',
      }} />
      <Stack.Screen name="Fiscal" component={Fiscal} options={{
        headerTransparent: true,
        headerTitle: '',
      }} />
      <Stack.Screen name="Selo" component={Selo} options={{
        headerTransparent: true,
        headerTitle: '',
      }} />
      <Stack.Screen name="Multa" component={Multa} options={{
        headerTransparent: true,
        headerTitle: '',
      }} />
      <Stack.Screen name="Parcela" component={Parcela} options={{
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