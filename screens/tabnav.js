// // import React, {useState} from 'react';
// // import {Text, View, TextInput} from 'react-native';

// // const Practice = () => {
// //   const [text, setText] = useState('');
// //   return (
// //     <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
// //       <Text>NIROSHA VINOD! 🎉🎉🎉🎉🎉🎉🎉🎉</Text>
// //       <Text>{'🎉🎉🎉🎉🎉🎉🎉🎉'}</Text>
// //       <TextInput
// //         style={{
// //           height: 40,
// //           borderWidth: 1,
// //           margin: 10,
// //           borderRadius: 6,
// //           padding: 10,
// //           height: 60,
// //         }}
// //         placeholder="Type here to translate!"
// //         onChangeText={text => setText(text)}
// //         defaultValue={text}
// //       />
// //     </View>
// //   );
// // };

// // export default Practice;

// // import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';

// // const Tab = createMaterialTopTabNavigator();

// // function MyTabs() {
// //   return (
// //     <Tab.Navigator>
// //       <Tab.Screen name="Home" component={HomeScreen} />
// //       <Tab.Screen name="Settings" component={SettingsScreen} />
// //     </Tab.Navigator>
// //   );
// // }
// import * as React from 'react';
// import {View, Button, Text, Animated} from 'react-native';
// // import {NavigationContainer} from '@react-navigation/native';
// import { NavigationContainer } from '@react-navigation/native';
// // import { createStackNavigator } from '@react-navigation/stack';
// import { createStackNavigator } from '@react-navigation/native-stack';
// import Home from './home';
// import Profile from './profile';

// const forFade = ({current, next}) => {
//   const opacity = Animated.add(
//     current.progress,
//     next ? next.progress : 0,
//   ).interpolate({
//     inputRange: [0, 1, 2],
//     outputRange: [0, 1, 0],
//   });

//   return {
//     leftButtonStyle: {opacity},
//     rightButtonStyle: {opacity},
//     titleStyle: {opacity},
//     backgroundStyle: {opacity},
//   };
// };

// const Stack = createStackNavigator();

// function MyStack() {
//   return (
//     <Stack.Navigator>
//       <Stack.Screen
//         name="Home"
//         component={Home}
//         options={{
//           headerTintColor: 'white',
//           headerStyle: {backgroundColor: 'tomato'},
//         }}
//       />
//       <Stack.Screen
//         name="Profile"
//         component={Profile}
//         options={{headerStyleInterpolator: forFade}}
//       />
//     </Stack.Navigator>
//   );
// }

// export default function Navigation() {
//   return (
//     <NavigationContainer>
//       <MyStack />
//     </NavigationContainer>
//   );
// }
import React from 'react';
import {Stylesheet, View, Text} from 'react-native';
// import {NavigationContainer} from '@react-navigation/native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
// import Ionicons from 'react-native-vector-icons/Ionicons';
import Icon from 'react-native-vector-icons/FontAwesome';

import Home from './home';
import Profile from './profile';
import Contactus from './contactus';
import Email from './email';

const TabNavScreen = ({navigation}) => {
  return (
    <NavigationContainer independent={true}>
      <Tabnavigator />
    </NavigationContainer>
  );
};

const Stack = createNativeStackNavigator();
const stacknavigator = ({navigation}) => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="HOME" component={Tabnavigator} />
      <Stack.Screen name="PROFILE" component={Profile} />
      <Stack.Screen name="CONTACTUS" component={Contactus} />
      <Stack.Screen name="EMAIL" component={Email} />
    </Stack.Navigator>
  );
};

const Tab = createBottomTabNavigator();
const Tabnavigator = ({navigation}) => {
  return (
    <Tab.Navigator
      initialRouteName="HOME"
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, color, size}) => {
          let iconName;

          if (route.name === 'HOME') {
            iconName = focused
              ? 'ios-information-circle'
              : 'ios-information-circle-outline';
          } else if (route.name === 'Settings') {
            iconName = focused ? 'ios-list-box' : 'ios-list';
          }

          // You can return any component that you like here!
          return <Icon name="home" size={30} color="#900" />;
        },
        tabBarActiveTintColor: 'tomato',
        tabBarInactiveTintColor: 'gray',
        tabBarOptions: {
          showIcon: true,
        },
      })}>
      <Tab.Screen
        name="HOME"
        component={Home}
        Options={{title: 'Assigned to Me'}}
        Icon
        name="home"
        size={30}
        color="#900"
      />

      <Tab.Screen name="PROFILE" component={Profile} />
      <Tab.Screen name="CONTACTUS" component={Contactus} />
      <Tab.Screen name="EMAIL" component={Email} />
    </Tab.Navigator>
  );
};

export default TabNavScreen;
