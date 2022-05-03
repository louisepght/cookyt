import { StyleSheet, Text, View, StatusBar } from 'react-native'
import React from 'react'

function LibrairiesScreen() {
  console.log("LibrairiesScreen");
  return (
    <View  style={styles.librairiesScreen}>

        <Text> Librairies Screen </Text>

    </View>
  )
}

const styles = StyleSheet.create({
    librairiesScreen: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });

export default LibrairiesScreen;