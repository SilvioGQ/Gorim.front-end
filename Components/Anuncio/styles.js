import {StyleSheet, Dimensions } from 'react-native';
import COLORS from '../../constants/colors';
const Tela = Dimensions.get('screen').width;
const styles = StyleSheet.create({
    colunm: {
      marginLeft: 15,
      backgroundColor: COLORS.bgColorSecondary,
      borderRadius: 20,
      width: Tela - 30,
      height: 130,
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 4,
      },
      shadowOpacity: 0.32,
      shadowRadius: 5.46,
      elevation: 6,
      marginVertical: 15
    },
    button: {
      width: 100,
      borderRadius: 20,
      backgroundColor: COLORS.warningButton,
      padding: 12
    },
    textbutton: {
      color: COLORS.textWhite,
      fontSize: 12,
      textAlign: 'center',
      fontFamily: 'Rubik_400Regular'
    },
    row: {
      flexDirection: 'row',
      justifyContent: 'space-around',
      marginVertical: 5,
    },
    row3: {
      flexDirection: 'row',
      justifyContent: 'space-around',
      marginTop: 15,
      marginBottom: 5
    },
    icone: {
      width: 50,
      height: 50,
      alignSelf: 'center',
      marginTop: -5
    },
    textBold: {
      fontSize: 13,
      fontFamily: 'Rubik_400Regular',
      fontWeight: 'bold',
    },
    textNormal: {
      fontSize: 24,
      fontFamily: 'Rubik_300Light',
    },
    text: {
      textAlign: 'center',
      fontSize: 15,
      marginBottom: 2
    },
    textCenter: {
      textAlign: 'center',
      fontSize: 15,
      marginTop: 8
    }
  });

  export default styles;