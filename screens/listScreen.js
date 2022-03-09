import * as React from 'react';
import {View, Text, StyleSheet, SafeAreaView,FlatList} from 'react-native';

const ListScreen = () => {
  const Profile = [
    {
      name: 'friend 1',id:'1234'
    },
     {name: 'friend 2',id:'5678'} ,
     { name: 'friend 3', id:'0022'
    },
  ];
return (
  <FlatList
    keyExtractor={friend => friend.name}
    data={Profile}
    renderItem={({item}) => {
      return <Text style={{ padding: 20 }}>{item.name}-{ item.id}</Text>
    }}
  />
);
};
export default ListScreen;


const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});