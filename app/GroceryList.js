import { StyleSheet, Text, View, StatusBar, SafeAreaView } from 'react-native'
import React from 'react'
import MenuBar from './MenuBar';

function GroceryList() {
  console.log("grocery");
  return (
    <SafeAreaView  style={{
        flex:1,
        backgroundColor: '#f71',
        alignItems: 'center',
        justifyContent: 'center'
    }}>
        <View style = {styles.container1}>
            <Text>GroceryList</Text>
        </View>
        <StatusBar style="auto" />
      
        <MenuBar/>

    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
    container1: {
      //flex: 1,
      backgroundColor: '#f71',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });

export default GroceryList;