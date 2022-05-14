import { StyleSheet, Text, View, StatusBar, SafeAreaView, Image, Dimensions } from 'react-native'
import { Component } from "react"
import React from 'react'
import { ScrollView } from 'react-native-gesture-handler';
import styles from '../Styles'


const { height, width } = Dimensions.get('window')


class AstuceduJour extends Component{
    render(){
        return(
            <View style={{flexDirection:'row', justifyContent:'center',backgroundColor:this.props.backgroundColor,borderRadius:20, marginLeft: 10, marginBottom:5, marginRight:10}}>
                 <View style={{justifyContent:'center', flex: 1, margin:10, height:200, width:200, borderRadius:20}}>
                  <Image style={{borderRadius:20,justifyContent:'center',height:200, width:200}} source={this.props.imageUri}></Image>
                  </View>
                  
                  <View style={{justifyContent:'flex-end', marginLeft:30, flex:1, marginBottom:10}}>
                    <Text style={{color:this.props.fontcolor, textAlignVertical:'bottom' }}>{this.props.text}</Text>
                  </View>
                </View>
        )

    }
}

export default AstuceduJour; 