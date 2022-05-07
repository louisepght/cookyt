import { Text, StyleSheet, View } from 'react-native'
import React, { Component } from 'react'
import GroceryListDetails from '../screens/GroceryListDetails'
//import { NavigationContainer } from '@react-navigation/native';
//import { createNativeStackNavigator } from '@react-navigation/native-stack';
import styles from '../Styles';

export default function GroceryList (props) {
  const  navigation  = props.navigation;
  const name = props.name;
  
    return (
      <View style={styles2.groceryList} 
      onStartShouldSetResponder={() => navigation.navigate('GroceryListDetails')}>
        <Text>Une liste de course nommée {name}</Text>
      </View>
    )
  
}

const styles2 = StyleSheet.create({
    groceryList:{
        backgroundColor:'#22aa55',
        width:'80%',
        padding:20,
        //height:85,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 20,
      }
})
