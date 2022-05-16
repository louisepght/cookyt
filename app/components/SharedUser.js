import { Text, StyleSheet, View, TouchableOpacity } from 'react-native'
import React, { Component } from 'react'
//import { NavigationContainer } from '@react-navigation/native';
//import { createNativeStackNavigator } from '@react-navigation/native-stack';
import styles from '../Styles';
import { COLORS } from "../values/colors";

export default function GroceryList (props) {
  const  navigation  = props.navigation;
  const name = props.name;
  


    return (
      <TouchableOpacity style={[localStyles.container]}>
        <Text numberOfLines={2} ellipsizeMode='tail' style={localStyles.text}>{name}</Text>
      </TouchableOpacity>
    )
  
}


const localStyles = StyleSheet.create({
    container:{
        backgroundColor:COLORS.kaki,
        //flex:1,  //je sais pas si c'est mieu ou pas de le mettre honetement
        alignItems:'center',
        justifyContent:'center',
        alignContent:'center',
        borderRadius:15,
        padding:8,
        flexDirection: 'row',
        maxWidth:"40%",
        minWidth:"25%",
        marginHorizontal:5,
        marginVertical:3
    },

    text:{
        textAlign: 'center',
        fontSize:14,
        fontWeight:'bold',
        color:'#fff',
        justifyContent: 'center',
        alignItems: 'center'
    }

})
