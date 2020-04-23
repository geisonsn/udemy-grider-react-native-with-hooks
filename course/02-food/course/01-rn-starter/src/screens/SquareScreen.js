import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import ColorCounter from '../components/ColorCounter';

const COLOR_INCREMENT = 15;

const SquareScreen = () => {

  const [ red, setRed ] = useState(0);
  const [ green, setGreen ] = useState(0);
  const [ blue, setBlue ] = useState(0);

  const setColor = (value, changeValue) => {
    if (value >= 0 && value <= 255) {
      changeValue(value);
    };
  };

  console.log('red ... ' + red);
  console.log('green ... ' + green);
  console.log('blue ... ' + blue);

  return (
    <View>
      <ColorCounter 
        onIncrease={() => {
            setColor(red + COLOR_INCREMENT, setRed);
        }} 
        onDecrease={() => {
            setColor(red - COLOR_INCREMENT, setRed);
        }}  
        color="Red"
      />
      <ColorCounter 
        onIncrease={() => {
            setColor(green + COLOR_INCREMENT, setGreen);
        }}
        onDecrease={() => {
            setColor(green - COLOR_INCREMENT, setGreen);
        }}  
        color="Green"
      />
      <ColorCounter 
        onIncrease={() => {
          setColor(blue + COLOR_INCREMENT, setBlue);
        }} 
        onDecrease={() => {
          setColor(blue - COLOR_INCREMENT, setBlue);
        }}  
        color="Blue"
      />
      <View 
        style={{ height: 150, width: 150, backgroundColor: `rgb(${red}, ${green}, ${blue})` }}
      />
    </View>
  );
};

const styles = StyleSheet.create({});

export default SquareScreen;