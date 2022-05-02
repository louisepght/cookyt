import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function MenuBar() {
  return (
    <View  style={styles.menuBar}>
      <Text>MenuBar</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    menuBar:{
        width : '100%',
        height : 25,

        backgroundColor:'#e5e',
        alignItems: 'flex-end',
        justifyContent: 'center',
        bottom:10
    }
})