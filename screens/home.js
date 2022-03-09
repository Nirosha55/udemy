import * as React from 'react';
import { View, Button, Text } from 'react-native';


const Home = ({navigation})=> {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Home screen</Text>
      <Button title="Go to Home" onPress={() => navigation.goBack()} />
    </View>
  );
}

export default Home;