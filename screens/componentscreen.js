import * as React from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';

const ComponentScreen = ({navigation}) => {
  const Niru = 'hii niruuu';
  const greeting = <Text style={{color: 'red'}}>{'nirosha good morning'}</Text>;
  const name = 'KHAMMAM';

  return (
    <View style={styles.container}>
      <Text style={{fontSize: 30, color: 'blue'}}>{'nirosha'}</Text>
      <Text style={{color: 'green'}}>{Niru}</Text>
      {greeting}
      <Text style={{color: 'yellow'}}>{'My name is Nirosha'}</Text>
      <Text style={{color: 'cyan'}}>
        {'Im from'} {name}
      </Text>
      <Button title="Flatlist" onPress={() => navigation.navigate('List')} />
      <Button
        title="Buttoncomp"
        onPress={() => navigation.navigate('Button')}
      />
      <Button
        title="Image+Samplelist"
        onPress={() => navigation.navigate('Image')}
      />

      {/* <Button title="Nisha" onPress={() => navigation.navigate('Date')} /> */}
    </View>
  );
};

export default ComponentScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
