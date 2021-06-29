// import React, { useState } from 'react';
// import { Text, View, StyleSheet, Image, ScrollView, TouchableOpacity, Dimensions, TouchableWithoutFeedback } from 'react-native';
// import Button from '../../../Components/Button';
// import Quadrados from '../../../Components/Quadrado';

// import Moeda from '../../../assets/moedas/Moeda.png';
// import Test from '../../../assets/selos/test.png';

// const Tela = Dimensions.get('screen').width;
// export default function Multa({ navigation }) {
//   const [activated, setActivated] = useState(false)
//   const [activated2, setActivated2] = useState(false)

//   return (
//     <View style={styles.container}>
//       <View style={styles.row3}>
//         <Image
//           style={styles.logo}
//           source={Moeda}
//         />
//         <Text> 000 </Text>
//       </View>
//       <View style={styles.espaco}>
//         <Image
//           style={{ width: 62, height: 62 }}
//           source={Test}
//         />
//         <Text style={styles.header}>Aplicação {"\n"}de multa</Text>
//       </View>
//       <Text style={styles.font}> Destinatário:</Text>
//       <Quadrados />
//       <Text style={styles.font}> Gravidade:</Text>
//       <View style={styles.linha}>
//         <View style={{ zIndex: 1, marginTop: -5, marginLeft: 4 }}>
//         </View>
//       </View>
//       <View style={styles.nivel}>
//         <Text styles={styles.texto}>Baixo</Text>
//         <Text styles={styles.texto}>Medio</Text>
//         <Text styles={styles.texto}>Alto</Text>
//       </View>
//       <Button
//         onClick={() => navigation.navigate('Fiscal')}
//         name='APLICAR' />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#EBFFFD',
//     padding: 6,
//     width: Tela
//   },
//   row: {
//     flexDirection: 'row',
//     alignItems: 'flex-start',
//     justifyContent: 'flex-start',
//     marginTop: 20,
//     marginLeft: 8,
//     width: Tela,
//     flexWrap: 'wrap'
//   },
//   espaco: {
//     flexDirection: 'row',
//     alignSelf: 'center',
//     justifyContent: 'center',
//     margin: 15,
//     width: Tela
//   },
//   row3: {
//     flexDirection: 'row',
//     alignSelf: 'center',
//     justifyContent: 'flex-end',
//     margin: 10,
//     width: Tela
//   },
//   row2: {
//     flexDirection: 'row',
//     alignItems: 'flex-start',
//     justifyContent: 'flex-start',
//     marginTop: 10,
//     marginLeft: 6
//   },
//   colunm: {
//     alignItems: 'center',
//     justifyContent: 'center',
//     margin: 10,
//     backgroundColor: '#FFFFFF',
//     width: 96,
//     height: 84,
//     borderRadius: 20,
//     shadowColor: "#000",
//     shadowOffset: {
//       width: 0,
//       height: 4,
//     },
//     shadowOpacity: 0.32,
//     shadowRadius: 5.46,

//     elevation: 9
//   },
//   header: {
//     fontFamily: 'Rubik_300Light',

//     fontSize: 20,
//   },
//   textinhos: {
//     fontFamily: 'Rubik_300Light',
//     fontSize: 14,
//   },
//   logo: {
//     width: 20,
//     height: 23
//   },
//   icone: {
//     width: 32,
//     height: 35,
//   },
//   font: {
//     fontSize: 18,
//     marginTop: 15,
//     fontFamily: 'Rubik_300Light'
//   },
//   linha: {
//     margin: '8%',
//     marginLeft: '5%',
//     borderWidth: 1,
//     width: '85%',
//     height: 1
//   },
//   nivel: {
//     flexDirection: 'row',
//     justifyContent: 'space-around',
//     marginRight: '5%',
//     marginTop: -10
//   },
//   traco: {
//     width: 1,
//     height: 12,
//     zIndex: 1,
//     borderWidth: 1,
//   }
// });