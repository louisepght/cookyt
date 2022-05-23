import { Text, View, SafeAreaView } from 'react-native'
import React, { Component } from 'react'
import styles from '../Styles'

export default class RecipeScreen extends Component {
  render() {
    return (
      <SafeAreaView style={styles.androidSafeArea}>
        <Text>RecipeScreen</Text>
      </SafeAreaView>
    )
  }
}