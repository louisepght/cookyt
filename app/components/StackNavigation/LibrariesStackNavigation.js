import {createStackNavigator} from '@react-navigation/stack'
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { StyleSheet, Text, View } from 'react-native';
import React from 'react';


import LibrairiesScreen from '../../screens/LibrairiesScreen';
import RecipesListScreen from '../../screens/RecipesListScreen';



const Stack = createNativeStackNavigator();



export default function LibrariesStackNavigation() {
  return (
    <Stack.Navigator screenOptions={{
        headerShown: false,
        headerTitleStyle:{
            fontSize:1,
            color:"#fff"
            
        }
      }}>
        <Stack.Screen 
        name="LibrairiesScreen"
        component={LibrairiesScreen}
        />
        <Stack.Screen 
        name="RecipesListScreen"
        component={RecipesListScreen}
        />
    </Stack.Navigator>
  )
}

const styles = StyleSheet.create({})
