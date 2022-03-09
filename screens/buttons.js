import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Alert,
  Modal,
  Pressable,
  Image,
  SafeAreaView
} from 'react-native';
import {Dimensions} from 'react-native';
import {IconButton} from 'react-native-paper';
const windowWidth = Dimensions.get('window').width;

const ButtonScreen = ({navigation}) => {
  const [modalVisible, setModalVisible] = useState(false);

  const CallPopup = () => {
    // navigation.navigate("POPUP");
    setModalVisible(true);
  };
  return (
    <SafeAreaView style={styles.container}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert('Popup has bees closed.');
          setModalVisible(!modalVisible);
          justifyContent: 'center';
        }}>
        <View style={styles.centeredView}>
          <View
            style={{
              width: 370,
              height: 300,
              backgroundColor: '#ffffff',
              paddingBottom: 10,
              borderColor: 'black',
              borderRadius: 10,
            }}>
            <View style={{backgroundColor: '#e9edf5'}}>
              <Text style={styles.modalText}>CHOOSE OPTION FROM BELOW</Text>
            </View>
            <View style={{padding: 10}}></View>
            <View style={{paddingLeft: 20}}>
              {/* <View style={{flexDirection:'column',justifyContent:'space-between',alignItems:''}}> */}
                <Text
                  style={{
                    color: 'black',
                    fontSize: 20,
                    marginLeft: 10,
                  }}>
                  Assigned to me
                </Text>
                <IconButton
                  icon="camera"
                  color={'gray'}
                  size={20}
                  onPress={() => console.log('Pressed')}
                />
              {/* </View> */}
              <View style={styles.lineStyle}></View>
              <View style={{padding: 10}}></View>
              <Text
                style={{
                  color: 'black',
                  fontSize: 20,
                  marginLeft: 10,
                }}>
                Priority
              </Text>
            </View>

            <View style={styles.lineStyle}></View>
            <View style={{padding: 10}}></View>
            <Text
              style={{
                color: 'black',
                fontSize: 20,
                marginLeft: 30,
              }}>
              Unassigned
            </Text>

            <View style={styles.lineStyle}></View>
            <View style={{padding: 10}}></View>
            <Text
              style={{
                color: 'black',
                fontSize: 20,
                marginLeft: 30,
              }}>
              Everything
            </Text>

            <View style={styles.lineStyle}></View>
          </View>
        </View>
      </Modal>
      <View>
        <Pressable onPress={CallPopup}>
          <Image
            style={styles.ImageStyle}
            source={{
              uri: 'https://image.flaticon.com/icons/png/512/901/901120.png',
            }}
          />
        </Pressable>
        <Text>{'hii good morning alll'}</Text>
      </View>
    </SafeAreaView>
  );
};

export default ButtonScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#bcbec2',
  },
  centeredView: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 225,
    padding: 10,
  },
  ImageStyle: {
    height: 15,
    width: 15,
    marginTop: 60,
    marginEnd: 15,
    marginLeft: 100,
  },
  modalText: {
    fontSize: 15,
    marginRight: -20,
    marginTop: 20,
    marginLeft: 30,
    fontWeight: '400',
    padding: 5,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 15,
  },
  lineStyle: {
    borderWidth: 0.8,
    borderColor: '#e9edf5',
    // margin: 5,
    width: '90%',
    marginLeft: 20,
    marginTop: 10,
  },
  closeStyle: {
    position: 'absolute',
    marginTop: 10,
    right: 20,
  },
});

{
  /* <TouchableOpacity onPress={() => console.log('touch pressed')}>
        <Text>{'Touchable clicked'}</Text>
        <Text>{'Touchable clicked'}</Text>
        <Text>{'Touchable clicked'}</Text>
      </TouchableOpacity> */
}
