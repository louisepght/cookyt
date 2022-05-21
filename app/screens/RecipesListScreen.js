import React, {useState} from 'react';
import { StyleSheet, Text, View, KeyboardAvoidingView, Keyboard, Platform, TextInput, TouchableOpacity, Image  } from 'react-native'
import LibrairiesScreen from './LibrairiesScreen';
import { ScrollView } from 'react-native-gesture-handler';

function RecipesListScreen({navigation}) {
 
  return (
    <View >
        <Text>Hello world</Text>
      
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
