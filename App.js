import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput, FlatList } from 'react-native';
import CarItem from './components/carItem/CarItem';

export default function App() {

  const renderItem = ({ item }) => (<View key={item.id}><Text>{item.value}</Text></View>);
  return (
    <View style={styles.container}>
      <CarItem
      backgroundSource={require('./assets/t1.jpg')}
      mainActionButtonText='Custom Order'
      subActionButtonText='Existing inventory'
      subTitleText="Starting at $73,320"
      titleText="Model S"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
