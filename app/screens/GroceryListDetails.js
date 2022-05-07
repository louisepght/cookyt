import React from 'react'
import { StyleSheet, Text, View, StatusBar } from 'react-native'
import PropTypes from 'prop-types'
import styles from '../Styles'
import ReturnScreenButton from '../components/ReturnScreenButton'

function GroceryListDetails(props) {
  const navigation = {props}
  return (
    <View style={styles.androidSafeArea}>
      <ReturnScreenButton navigation={props.navigation}/>
      
    </View>
  )
}

//GroceryListDetails.propTypes = {}

export default GroceryListDetails
