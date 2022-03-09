import * as React from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';

const TouchScreen = () => {
  return (
      <View style={styles.container}>
          <Text style={styles.textstyle}>{ 'welcome to touchopacity:' }</Text>
      <TouchableOpacity style={styles.touchableOpacity}>
              <Image
                  style={styles.imagestyle}
          source={{
            uri: 'https://raw.githubusercontent.com/tranhonghan/images/main/plus_icon.png',
          }}
        />
      </TouchableOpacity>
    </View>
  );
};
export default TouchScreen;
const styles = StyleSheet.create({
  container: {
        padding: 10,
      flex:1,
    },
    textstyle:{
        fontSize: 24,
        fontWeight: '600',
        textAlign: 'center',
        padding:10
    },
  touchableOpacity: {
    position: 'absolute',
    height: 100,
      width: 100,
      alignContent: 'center',
      justifyContent: 'center',
    backgroundColor:'yellow'
  },
    imagestyle: {
        resizeMode:'contain',
        width: 50,
        height:50
  }
});
