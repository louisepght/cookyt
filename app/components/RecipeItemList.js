import { StyleSheet, Text, View, StatusBar, SafeAreaView, Image, Dimensions } from 'react-native'
import { Component } from "react"
import React from 'react'
import { ScrollView } from 'react-native-gesture-handler';
import styles from '../Styles'


const { height, width } = Dimensions.get('window')


class RecipeItemList extends Component{
    render(){
        return(
            <View style={{flexDirection:'row', justifyContent:'center',backgroundColor:this.props.backgroundColor, width: width/2.3, height: 60, borderRadius:20, marginLeft: 5, marginBottom:5}}>
  
                 <View style={{justifyContent:'center', flex: 1, marginLeft:10}}>
                  <Image style={{width: 50, height: 50, borderRadius:20,justifyContent:'center'}} source={this.props.imageUri}></Image>
                  </View>
                  
                  <View style={{justifyContent:'center',width:145, marginLeft:5, flex:2}}>
                    <Text style={{color:this.props.fontcolor }}>{this.props.text}</Text>
                  </View>
                </View>
        )

    }
}

export default RecipeItemList; 