import { Text, StyleSheet, View, TouchableOpacity } from 'react-native'
import React, { Component } from 'react'
//import GroceryListDetails from '../screens/GroceryListDetails'
//import { NavigationContainer } from '@react-navigation/native';
//import { createNativeStackNavigator } from '@react-navigation/native-stack';
import styles from '../Styles';
import { COLORS } from '../values/colors';

export default function GroceryList (props) {
  const  navigation  = props.navigation;
  let liste = props.liste;
  const color = props.color;
  
  let getMyColor = (color) =>{
    if(color){
      return color;
    }
    else return "#5e5";
  }

    return (
      <TouchableOpacity style={[localStyles.container, {backgroundColor:getMyColor(color)}]} 
      onPress={() => navigation.navigate('GroceryListDetails', {liste: liste})}>
        <Text style={[{color:COLORS.white, justifyContent:'center'}, styles.h2]}>{liste.name}</Text>
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
    },
    container:{
      justifyContent:'center',
      height: 60, 
      width:310,
      paddingLeft:10,
      borderRadius:20, 
      marginLeft: 20, 
      marginBottom:8, 
      marginRight:20
    }
})
