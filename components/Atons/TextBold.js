import React from 'react';
import { Text } from 'react-native';


const TextBold = ({ children }) => {
  return <Text style={{ flex: 1, textAlign: 'center', fontFamily: 'Rubik_700Bold', fontSize: 18, marginVertical: 50 }}>{children}</Text>;
}

export default TextBold;
