import React from 'react';
import { StyleSheet, Text, View, FlatList, Dimensions, StatusBar } from 'react-native';
import carsData from './helpers/fake-data';
import CarItem from './components/carItem/CarItem';


export default function App() {

  const renderItem = ({ imageUrl, mainActionButtonText, subActionButtonText, subTitleText, titleText }) => {
    return (<CarItem
      backgroundSource={imageUrl}
      mainActionButtonText={mainActionButtonText}
      subActionButtonText={subActionButtonText}
      subTitleText={subTitleText}
      titleText={titleText}
    />)
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={carsData}
        keyExtractor={(Element, index) => Element.titleText}
        renderItem={({item})=>renderItem(item)}
        snapToAlignment={'start'}
        decelerationRate={'normal'}
        snapToInterval={Dimensions.get('window').height}
        showsVerticalScrollIndicator={false}
        disableIntervalMomentum={true} 
      />
      <StatusBar/>
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
