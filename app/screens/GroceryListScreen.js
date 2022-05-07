import { StyleSheet, Text, View, StatusBar } from 'react-native'
import React from 'react'
import GroceryList from '../components/GroceryList';
import styles from '../Styles'

function GroceryListScreen(props) {
  console.log("grocery");
  return (
    <View style={styles.androidSafeArea}> 
      <GroceryList navigation={props.navigation} name="MaListe" />
    </View>
  )
}

const styles2 = StyleSheet.create({
    container1: {
      //flex: 1,
      backgroundColor: '#f71',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });

export default GroceryListScreen;