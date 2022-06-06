import { StyleSheet, Text, View, StatusBar, SafeAreaView, Image, TouchableOpacity } from 'react-native'
import { Component } from "react"
import React from 'react'
import { ScrollView } from 'react-native-gesture-handler';
import styles from '../Styles'


class Category extends Component{
    constructor(props){
      super(props);
    }

    render(){
        return(
            <TouchableOpacity style={{flex:1, marginLeft:10, marginEnd:10}}
            onPress={() => {this.props.navigation.navigate('Recipe', {recipe: this.props.recipe})}}>
                                        <View style={{height:130, width: 130, backgroundColor:this.props.color, borderRadius:20}}>
                                              <View style={{flex:3}}>
                                                <Image source={{uri: this.props.imageUri}} style={{flex: 1, height:null,width:null, marginTop:10, marginLeft:10, marginRight:10,marginBottom:0, borderRadius:20}}></Image>
                                              </View>
                                              <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={{flex:1}}>
                                                <View>
                                                <Text adjustsFontSizeToFit style={{textAlign:'left', textAlignVertical:'center', marginTop:5, marginStart:10, marginEnd:0, color:this.props.fontcolor}}>{this.props.name}</Text>
                                                </View>
                                              </ScrollView>
                                        </View>
                </TouchableOpacity>
        )
    }
}

export default Category; 