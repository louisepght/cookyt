import { Text, StyleSheet, View, TouchableOpacity } from 'react-native'
import React, { Component } from 'react'
//import GroceryListDetails from '../screens/GroceryListDetails'
//import { NavigationContainer } from '@react-navigation/native';
//import { createNativeStackNavigator } from '@react-navigation/native-stack';
import styles from '../Styles';

export default function GroceryList (props) {
  const  navigation  = props.navigation;
  const liste = props.liste;
  const color = props.color;
  
  let getMyColor = (color) =>{
    if(color){
      return color;
    }
    else return "#5e5";
  }

    return (
      <TouchableOpacity style={[styles.groceryListComponent, {backgroundColor:getMyColor(color)}]} 
      onPress={() => navigation.navigate('GroceryListDetails', {liste: liste})}>
        <Text style={localStyles.text}>{liste.name}</Text>
        <View style={[styles.groceryListComponentBottom]}>

        </View>
      </TouchableOpacity>
    )
  
}

const localStyles = StyleSheet.create({
    text:{
      fontSize:15,
      fontWeight:'bold',
      color:'#fff'
    }

})
