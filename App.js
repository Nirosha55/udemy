import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from './screens/homeScreen';
import ComponentScreen from './screens/componentscreen';
import ListScreen from './screens/listScreen';
import ButtonScreen from './screens/buttons';
import ImageScreen from './screens/imageScreen';
import CounterScreen from './screens/counterScreen';
import ColorScreen from './screens/colorScreen';
import SquareScreen from './screens/squareScreen';
import RefreshScreen from './screens/refreshScreen';
import TouchScreen from './screens/touchOp';
import DateScreen from './screens/dateScreen';
import ModalScreen from './screens/modalScreen';
// import Navigation from './screens/navigation';
import TabNavScreen from './screens/tabnav';
const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Component" component={ComponentScreen} />
        <Stack.Screen name="List" component={ListScreen} />
        <Stack.Screen name="Button" component={ButtonScreen} />
        <Stack.Screen name="Date" component={DateScreen} />
        <Stack.Screen name="Image" component={ImageScreen} />
        <Stack.Screen name="Counter" component={CounterScreen} />
        <Stack.Screen name="Color" component={ColorScreen} />
        <Stack.Screen name="Square" component={SquareScreen} />
        <Stack.Screen name="Refresh" component={RefreshScreen} />
        <Stack.Screen name="Touchable" component={TouchScreen} />
        <Stack.Screen name="Modal" component={ModalScreen} />
        <Stack.Screen name="Navigation" component={TabNavScreen} />
       
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;

// import React from 'react';
// import {Text, View} from 'react-native';

// const Cat = props => {
//   return (
//     <View>
//       <Text>Hello, I am {props.name}!</Text>
//     </View>
//   );
// };

// const App = () => {
//   return (
//     <View>
//       <Cat name="Maru" />
//       <Cat name="Jellylorum" />
//       <Cat name="Spot" />
//     </View>
//   );
// };

// export default App;
// import React, {useState} from 'react';
// import {Button, Text, View} from 'react-native';

// const Cat = props => {
//   const [isHungry, setIsHungry] = useState(true);

//   return (
//     <View>
//       <Text>
//         I am {props.name}, and I am {isHungry ? 'hungry' : 'full'}!
//       </Text>
//       <Button
//         onPress={() => {
//           setIsHungry(false);
//         }}
//         disabled={!isHungry}
//         title={isHungry ? 'Pour me some milk, please!' : 'Thank you!'}
//       />
//     </View>
//   );
// };

// const App = () => {
//   return (
//     <>
//       <Cat name="Munkustrap" />
//       <Cat name="Spot" />
//     </>
//   );
// };

// export default App;
