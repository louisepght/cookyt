import { StyleSheet, Text, View, StatusBar, SafeAreaView, Image, TouchableOpacity} from 'react-native'
import { Component } from "react"
import React from 'react'
import { ScrollView } from 'react-native-gesture-handler';
import styles from '../Styles'


class RecipeItemResearch extends Component{
  constructor(props){
    super(props);
  }

    render(){
        return(

          <TouchableOpacity style={{flex:1, marginLeft:0, marginEnd:0, marginBottom:0, marginTop:8}}
          onPress={() => {this.props.navigation.navigate('Recipe', {recipe: this.props.recipe})}}>
            <View style={{height:150, width: 320, backgroundColor:this.props.color, borderRadius:20}}>
                  <View style={{flex:3}}>
                    <Image source={{uri: this.props.imageUri}} style={{flex: 1, height:null,width:null, marginTop:5, marginLeft:12, marginRight:12, marginBottom:0, borderRadius:20}}></Image>
                  </View>
                  <View>
                  <Text adjustsFontSizeToFit style={{textAlign:'center', textAlignVertical:'center', marginTop:2, marginStart:10, marginEnd:10, marginBottom:5, color:"#fff"}}>{this.props.name}</Text>
                  </View>
            </View>
          </TouchableOpacity>
        )
    }
}

export default RecipeItemResearch; 