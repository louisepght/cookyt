import {createStackNavigator} from '@react-navigation/stack'
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

import GroceryListScreen from '../../screens/GroceryListScreen';
import GroceryListDetails from '../../screens/GroceryListDetails';
import { backgroundColor } from 'react-native/Libraries/Components/View/ReactNativeStyleAttributes';


const Stack = createNativeStackNavigator();



export default function GroceryListScreenNavigator() {
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

const styles = StyleSheet.create({})
