import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const BoxScreen = () => {
  return (
    <View style={styles.parentStyle}>
      <View style={styles.viewOneStyle}/>
      <View style={styles.viewTwoStyle}/>
      <View style={styles.viewThreeStyle}/>
    </View>
  );
};

const styles = StyleSheet.create({
  parentStyle: {
    borderWidth: 3,
    borderColor: 'black',
    height: 100,
    flexDirection: "row",
    justifyContent: 'space-between',

  },
  viewOneStyle: {
    backgroundColor: 'blue',
    height: 50,
    width: 50,
  },
  viewTwoStyle: {
    backgroundColor: 'red',
    height: 50,
    width: 50,
    alignSelf: "flex-end"
  },
  viewThreeStyle: {
    backgroundColor: 'green',
    height: 50,
    width: 50,
  },
});

export default BoxScreen;