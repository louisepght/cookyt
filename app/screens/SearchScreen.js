import { StyleSheet, Text, View, StatusBar } from 'react-native'
import React from 'react'
import styles from "../Styles"

function SearchScreen() {
  console.log("search");
  return (
    <View style={styles.androidSafeArea}> 
      <View style={styles.titleContainer}>
        <Text style={styles.titleText}>
          Recherche
        </Text>
      </View>
      <View>
        <Text>
          Insert content here
        </Text>
      </View>
    </View>

  )
}


export default SearchScreen;