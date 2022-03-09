import React from 'react';
import {Stylesheet, View, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

import MapView from 'react-native-maps';
import {Marker} from 'react-native-maps';

import active from './home';
import completed from './profile';
import settings from './contactus';
import profile from './email';

const app = ({navigation}) => {
  return (
    <NavigationContainer>
      <Tabnavigator />
    </NavigationContainer>
  );
};

const Stack = createNativeStackNavigator();
const stacknavigator = ({navigation}) => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="HOME" component={Tabnavigator} />
      <Stack.Screen name="PROFILE" component={profile} />
      <Stack.Screen name="CONTACTUS" component={contactus} />
      <Stack.Screen name="EMAIL" component={email} />
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
          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: 'tomato',
        tabBarInactiveTintColor: 'gray',
      })}>
      <Tab.Screen
        name="ACTIVE"
        component={active}
        Options={{title: 'Assigned to Me'}}
      />
      <Tab.Screen name="PROFILE" component={profile} />
      <Tab.Screen name="CONTACTUS" component={contactus} />
      <Tab.Screen name="EMAIL" component={email} />
    </Tab.Navigator>
  );
};

export default app;
