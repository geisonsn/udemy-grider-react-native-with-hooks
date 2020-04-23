import React from "react";
import { Text, StyleSheet, View, Button, TouchableOpacity } from "react-native";

const HomeScreen = ({ navigation }) => {

  return (
    <View>
      <Text style={styles.text}>Hi, there!</Text>
      <Button
        onPress={() => navigation.navigate('Components')} 
        title="Go to Components Demo" 
      />
      <Button 
        onPress={() => navigation.navigate('List')}
        title="Got to List Demo"
      />
      <Button 
        onPress={() => navigation.navigate('Image')}
        title="Got to Image Demo"
      />
      <Button 
        onPress={() => navigation.navigate('Counter')}
        title="Got to Counter Demo"
      />
      <Button 
        onPress={() => navigation.navigate('CounterWithReducer')}
        title="Got to Counter with Reducer Demo"
      />
      <Button 
        onPress={() => navigation.navigate('Color')}
        title="Got to Color Demo"
      />
      <Button 
        onPress={() => navigation.navigate('Square')}
        title="Got to Square Demo"
      />
      <Button 
        onPress={() => navigation.navigate('SquareWithReducer')}
        title="Got to Square with Reducer Demo"
      />
      <Button 
        onPress={() => navigation.navigate('Text')}
        title="Got to Text Demo"
      />
      <Button 
        onPress={() => navigation.navigate('Box')}
        title="Got to Box Demo"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30
  }
});

export default HomeScreen;
