import { StyleSheet, Text, View, StatusBar, SafeAreaView, Image, Dimensions } from 'react-native'
import { Component } from "react"
import React from 'react'
import { ScrollView } from 'react-native-gesture-handler';
import styles from '../Styles'


const { height, width } = Dimensions.get('window')


class ListComponent extends Component{
    render(){
        return(
            <View style={{flexDirection:'row', justifyContent:'center',backgroundColor:this.props.backgroundColor, height: 60, borderRadius:20, marginLeft: 20, marginBottom:5, marginRight:20}}>
                  <View style={{justifyContent:'center',width:145, marginLeft:10, flex:1}}>
                    <Text style={[{color:this.props.fontcolor, justifyContent:'center'}, styles.h2]} >{this.props.text}</Text>
                  </View>
                </View>
        )

    }
}

export default ListComponent; 