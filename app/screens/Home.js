import { StyleSheet, Text, View, StatusBar } from 'react-native'
import React from 'react'

function Home(navigation) {
  console.log("home");
  return (
    <View  style={styles.homeScreen}>

        <Text
        onPress={() => navigation.navigate('Home')}
        > Home Screen </Text>

    </View>
  )
}

const styles = StyleSheet.create({
    homeScreen: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });

export default Home;