import * as React from 'react';
import {View, Text, StyleSheet, Button, Image} from 'react-native';
import ImageDetails from '../Components/imageDetails';

const ImageScreen = ({navigation}) => {
  return (
    <View>
      <ImageDetails
        title="Vanshu"
        imageSource={require('../assets/vanshu.jpeg')}
        style={styles.img1}
        score={12}
      />
      <ImageDetails
        title="Chinnu"
        imageSource={require('../assets/chinnu.png')}
        style={styles.img2}
        score={1}
      />
      <ImageDetails
        title="snoopy"
        imageSource={require('../assets/Snoopy.png')}
        style={styles.img3}
        score={2}
      />
      <Button
        title="Counter pressed"
        onPress={() => navigation.navigate('Counter')}
      />
      <Button
        title="Color Screen"
        onPress={() => navigation.navigate('Color')}
      />
      <Button
        title="Square Screen"
        onPress={() => navigation.navigate('Square')}
      />
      <Button
        title="Refresh Screen"
        onPress={() => navigation.navigate('Refresh')}
      />
      <Button
        title="Touch Screen"
        onPress={() => navigation.navigate('Touchable')}
      />
      <Button
        title="Modal Screen"
        onPress={() => navigation.navigate('Modal')}
      />
      <Button
        title="Navigation Screen"
        onPress={() => navigation.navigate('Navigation')}
      />
     
    </View>
  );
};
export default ImageScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  img1: {
    width: 30,
    height: 50,
  },
  img2: {
    width: 30,
    height: 50,
  },
  img3: {
    width: 30,
    height: 50,
  },
});
