import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Loading from './loading'
export default function Frame23() {
  return (
    <View style={styles.container}>
    <Text style={styles.header}> Gorim </Text>
    <Loading/>
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#EBFFFD',
    alignItems: 'center',
    padding: 10,
  },
  header: {
    fontFamily: 'Rubik_400Regular',
    fontSize: 41.1111,
    lineHeight: 49,
    alignItems: 'center',
  }
});