// import * as React from 'react';
// import { Text, View, StyleSheet, Image, ScrollView, Dimensions } from 'react-native';
// import Button from '../../../Components/Button';
// import Quadrados from '../../../Components/Quadrado';
// import COLORS from '../../../constants/colors';

// import Voto from '../../../assets/symbols/vote.png';
// import { StatusBar } from 'react-native';

// const Tela = Dimensions.get('screen').width
// export default function Frame6({ navigation }) {
//   return (
//     <View style={styles.container}>
//       <ScrollView showsVerticalScrollIndicator={false}>
//         <View style={styles.self}>
//           <Image
//             style={styles.logo}
//             source={Voto}
//           />
//           <Text style={styles.title}>Eleições em {"\n"} localização </Text>
//         </View>
//         <View style={{ marginLeft: 25 }}>
//           <Text style={[styles.texto, { marginTop: 15 }]}> Vote em um candidato à prefeito:</Text>
//           <Quadrados />
//           <Text style={styles.texto}> Vote em um candidato à vereador:</Text>
//           <Quadrados />
//           <Text style={styles.texto}> Vote em um candidato à fiscal:</Text>
//           <Quadrados />
//         </View>
//         <Button
//           onClick={() => navigation.navigate('frame7')}
//           name='VOTAR'
//         />
//       </ScrollView>
//     </View>
//   );
// }


// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     backgroundColor: COLORS.bgColorPrimary,
//     alignItems: 'center',
//     padding: 5,
//     paddingTop: StatusBar.currentHeight,
//     width: Tela
//   },
//   self: {
//     flexDirection: 'row',
//     alignSelf: 'center',
//     justifyContent: 'center',
//   },
//   row: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     flexWrap: 'wrap',
//     paddingLeft: '12%'
//   },
//   title: {
//     fontFamily: 'Rubik_300Light',
//     fontSize: 22,
//     alignItems: 'center'
//   },
//   logo: {
//     width: 60,
//     height: 60
//   },
//   texto: {
//     fontFamily: 'Rubik_300Light',
//     fontSize: 17,
//     lineHeight: 18,
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });