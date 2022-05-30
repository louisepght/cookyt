import { StyleSheet, Text, View, StatusBar, SafeAreaView, Image, Dimensions } from 'react-native'
import { Component } from "react"
import React from 'react'
import { ScrollView } from 'react-native-gesture-handler';
import styles from '../Styles'
import { COLORS } from '../values/colors';


const { height, width } = Dimensions.get('window')


class NavBarItem extends Component{
    render(){
        return(
            <View style={{marginRight:10}}>
            <View style={{backgroundColor: COLORS.grey, borderRadius: 20, flex : 1, margin: 10, alignContent:'flex-end', alignSelf:'flex-end', alignItems:'flex-end', justifyContent:'flex-end'}}>
                <Image source={this.props.imageUri} style={{height: 40, width: 40, margin: 7}}></Image>
            </View>
            </View>
        )

    }
}

export default NavBarItem; 