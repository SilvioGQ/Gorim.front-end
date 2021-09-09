import React, { useState, useContext } from 'react';
import { Image, StyleSheet } from 'react-native';

export default function StyledImage({source2}) {

  return (
      <Image style={styles.container} source={source2}/>
  );
}

const styles = StyleSheet.create({
  container: {
    height:30,
    width: 30,
  },
});