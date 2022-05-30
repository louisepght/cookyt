import { StyleSheet, Text, View, StatusBar, SafeAreaView, Image, Dimensions } from 'react-native'
import { Component } from "react"
import React from 'react'
import { ScrollView } from 'react-native-gesture-handler';
import styles from '../Styles'
import NavBarItem from './NavBarItem';


const { height, width } = Dimensions.get('window')


class NavBar extends Component{
    render(){
        return(
            <View style={{flexDirection:'row-reverse', marginRight : 10}}>
                <NavBarItem imageUri={require('../assets/filter.png')}></NavBarItem>
                <NavBarItem imageUri={require('../assets/shuffle.png')}></NavBarItem>
                <NavBarItem imageUri={require('../assets/shopping-cart.png')}></NavBarItem>

            </View>
        )

    }
}

export default NavBar; 