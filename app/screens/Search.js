import { StyleSheet, Text, View, StatusBar } from 'react-native'
import React from 'react'

function Search() {
  console.log("search");
  return (
    <View  style={styles.search}>

        <Text> Search Screen </Text>

    </View>
  )
}

const styles = StyleSheet.create({
    search: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });

export default Search;