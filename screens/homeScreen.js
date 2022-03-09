import * as React from 'react';
import {View, Text, StyleSheet, Button, TextInput} from 'react-native';

const HomeScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Text style={{paddingLeft: 10}}>{'USERNAME:'}</Text>
      <TextInput
        style={styles.inputTextStyle}
        placeholder="Employee ID"
        editable={true}
      />
      <Text style={{paddingLeft: 10}}>{'PASSWORD:'}</Text>
      <TextInput
        style={styles.inputTextStyle}
        placeholder="Password"
        editable={true}
        secureTextEntry={true}
      />
      <Text style={styles.text1Style}>Forgot Password?</Text>
      <View style={{ padding: 20 }}></View>
        <Button title="Nirosha" onPress={() => navigation.navigate('Component')} />
    </View>
  );
};

export default HomeScreen;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: 'gray',
    paddingTop: 210,
  },
  inputTextStyle: {
    borderWidth: 1,
    margin: 10,
    borderRadius: 6,
    padding: 10,
    height: 60,
  },
  text1Style: {
    color: 'black',
    marginLeft: 240,
  },
});
