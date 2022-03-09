import React, {useState} from 'react';
import {View, Text, StyleSheet, Button, FlatList} from 'react-native';

const ColorScreen = () => {
  const [colors, setColors] = useState([]);
  // console.log(colors);
  return (
    <View>
      <Button
        title={'add colors'}
        onPress={() => {
          setColors([...colors, randomRgb()]);
        }}
      />
      <FlatList
        data={colors}
        keyExtractor={item => item}
        renderItem={({item}) => {
          return (
            <View
              style={{height: 100, width: 100, backgroundColor: item}}></View>
          );
        }}
      />
    </View>
  );
};
const randomRgb = () => {
  const red = Math.floor(Math.random() * 256);
  const green = Math.floor(Math.random() * 256);
  const blue = Math.floor(Math.random() * 256);
  return `rgb(${red},${green},${blue})`;
};
export default ColorScreen;
const styles = StyleSheet.create({});
