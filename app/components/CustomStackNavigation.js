import {createStackNavigator} from '@react-navigation/stack'
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

import GroceryListScreen from '../screens/GroceryListScreen';
import GroceryListDetails from '../screens/GroceryListDetails';

import HomeScreen from '../screens/HomeScreen';
import RecipeScreen from '../screens/RecipeScreen';

const Stack = createNativeStackNavigator();



function GroceryListScreenNavigator() {
  return (
    <Stack.Navigator screenOptions={{
        headerShown: false,
        headerTitleStyle:{
            fontSize:1,
            color:"#fff"
            
        }
      }}>
        <Stack.Screen 
        name="GroceryListScreen"
        component={GroceryListScreen}
        />
        <Stack.Screen 
        name="GroceryListDetails"
        component={GroceryListDetails}
        />
    </Stack.Navigator>
  )
}


function HomeScreenNavigator() {
  return (
    <Stack.Navigator screenOptions={{
        headerShown: false,
        headerTitleStyle:{
            fontSize:1,
            color:"#fff"
            
        }
      }}>
        <Stack.Screen 
        name="Home"
        component={HomeScreen}
        />
        <Stack.Screen 
        name="Recipe"
        component={RecipeScreen}
        />
    </Stack.Navigator>
  )
}

const styles = StyleSheet.create({})

export {GroceryListScreenNavigator, HomeScreenNavigator};
