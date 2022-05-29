import { StyleSheet, Text, View, StatusBar, SafeAreaView, Image, Dimensions, TouchableOpacity } from 'react-native'
import { Component } from "react"
import React from 'react'
import styles from '../Styles'


const { height, width } = Dimensions.get('window')


function ListComponent (props){
  const navigation = props.navigation;
  const backgroundColor = props.backgroundColor; 
  const fontcolor = props.fontcolor; 
  const liste = props.liste;

        return(
          <TouchableOpacity onPress={()=> navigation.navigate('RecipesListScreen',{liste: liste})} style={{width: 350}}>
            <View style={{flexDirection:'row', justifyContent:'center',backgroundColor:backgroundColor, height: 60, borderRadius:20, marginLeft: 20, marginBottom:5, marginRight:20}}>
                  <View style={{justifyContent:'center',width:145, marginLeft:10, flex:1}}>
                    <Text style={[{color:fontcolor, justifyContent:'center'}, styles.h2]} >{liste.libraryname}</Text>
                  </View>
                </View>
           </TouchableOpacity>
        )

    
}

export default ListComponent; 