import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, FlatList, Image } from 'react-native';
import yelp from '../api/yelp';

const ResultsShowScreen = ({ navigation }) => {
  const [result, setResult] = useState(null);
  const id = navigation.getParam('id');

  const getResult = async id => {
    const response = await yelp.get(`/${id}`); 
    setResult(response.data);
  };

  useEffect(() => {
    getResult(id);
  }, []);

  if (!result) {
    return null;
  }

  return (
    <>
      <Text style={styles.title}>{result.name}</Text>
      <Text style={styles.phone}>Phone: {result.display_phone}</Text>
      <Text style={styles.rating}>Price: {result.price} | Rating: {result.rating}</Text>
      <FlatList
        data={result.photos}
        keyExtractor={(photo) => photo}
        renderItem={({ item }) => {
          return <Image style={styles.image} source={{ uri: item }} /> 
        }}
      />
    </>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: 10,
    marginTop: 10,
  },
  phone: {
    marginLeft: 10,
  },
  rating: {
    marginLeft: 10,
    marginBottom:10,
  },
  image: {
    height: 220,
    width: 300,
    marginBottom: 10,
    marginLeft: 10
  }
});

export default ResultsShowScreen; 