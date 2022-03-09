import * as React from 'react';
import {View, Button, Text} from 'react-native';

const Email = () => {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Profile screen</Text>
      <Button title="Go to email" onPress={() => navigation.goBack()} />
    </View>
  );
};

export default Email;
