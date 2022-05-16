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
      <View style={styles.groceryListComponent} 
      onStartShouldSetResponder={() => navigation.navigate('GroceryListDetails', {name: name})}>
        <Text style={localStyles.text}>{name}</Text>
        <View style={styles.groceryListComponentBottom}>

        </View>
      </View>
    )
  
}

const localStyles = StyleSheet.create({
    text:{
      fontSize:15,
    }

})
