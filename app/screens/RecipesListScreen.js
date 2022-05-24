import React, {useState} from 'react';
import { StyleSheet, Text, View, KeyboardAvoidingView, Keyboard, Platform, TextInput, TouchableOpacity, Image  } from 'react-native'
import LibrairiesScreen from './LibrairiesScreen';
import { ScrollView } from 'react-native-gesture-handler';
import ReturnScreenButton from '../components/ReturnScreenButton';
import * as data from '../lists/recipelibraries.json'

function RecipesListScreen({route,navigation}) {
    let {liste} = route.params; 


 
    return (
        <View style={ [styles.androidSafeArea, localStyles.mainContainer]}>
          <ReturnScreenButton navigation={navigation}/>
          <View style={localStyles.mainContainer}>
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
    flexDirection:'row',
    flexGrow:1,
    flex:1,
    flexWrap:'wrap',
    alignItems:'center',
  },
  itemsContainer:{
    alignItems:'center',
    marginVertical:8
  }
})
export default RecipesListScreen
