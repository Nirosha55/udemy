import React,{useState} from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';

const CounterScreen = () => {
    const [counter, setCounter] = useState(0);
  return (
    <View style={styles.container}>
          <Text>My Counter: { counter}</Text>
      <Button
        title="increase"
        onPress={() => {
        setCounter(counter + 1);
        }}
      />
      <Button
        title="decrease"
        onPress={() => {
        setCounter(counter - 1);
        }}
      />
      
    </View>
  );
};
export default CounterScreen;

const styles = StyleSheet.create({
    container:{
      
  }
});
