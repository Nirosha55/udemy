import * as React from 'react';
import {View, Text, StyleSheet, Button, Image} from 'react-native';

const ImageDetails = ({imageSource, title, score}) => {
  return (
    <View>
      <Image source={imageSource} style={styles.img} />
      <Text>{title}</Text>
      <Text>My score is-{score}</Text>
    </View>
  );
};
export default ImageDetails;

const styles = StyleSheet.create({
  img: {
    height: 50,
    width: 100,
  },
});
