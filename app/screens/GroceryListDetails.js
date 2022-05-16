import React from 'react'
import { StyleSheet, Text, View, StatusBar } from 'react-native'
import PropTypes from 'prop-types'
import styles from '../Styles'
import ReturnScreenButton from '../components/ReturnScreenButton'

function GroceryListDetails({route, navigation}) {
  let {name} = route.params;
  return (
    <View style={ [styles.androidSafeArea, localStyles.mainContainer]}>
      <ReturnScreenButton navigation={navigation}/>
      <View style={localStyles.mainContainer}>

        <View style={localStyles.titleContainer}>
          <Text style={localStyles.titleText}>
            {name}
          </Text>
        </View>

        <View style={localStyles.sharingContainer}>
          <Text style={localStyles.shareText}>
            Partagé avec
          </Text>
          <View style={localStyles.sharingcontainer}>

          </View>
        </View>
      </View>
    </View>
  )
}

const localStyles = StyleSheet.create({
  mainContainer:{
    paddingLeft:"5%",
    paddingRight:"5%"
  },
  titleContainer:{
    marginBottom:10,
  },
  titleText:{
    fontSize:22,
  },
  shareText:{
    fontSize:18,
  },
  sharingcontainer:{

  }
})
export default GroceryListDetails
