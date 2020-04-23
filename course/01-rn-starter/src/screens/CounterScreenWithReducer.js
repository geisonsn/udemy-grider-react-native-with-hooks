import React, { useReducer } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

const reducer = (state, action) => {
  if (action.type == 'increment') {
      return state + action.payload;
  } else if (action.type == 'decrement') {
    return state - action.payload;
  }
  return state;
};

const CounterScreenWithReducer = () => {

  const [ state, dispatch ] = useReducer(reducer, 0);

  return (
    <View>  
      <Button 
        title="Increase"
        onPress={() => {
          dispatch({ type: 'increment', payload: 1 })
        }}
      />
      <Button 
        title="Decrease"
        onPress={() => {
          dispatch({ type: 'decrement', payload: 1 });
        }}
      />
      <Text>Current Count: {state}</Text>
    </View>
  );
};

const styles = StyleSheet.create({});

export default CounterScreenWithReducer;