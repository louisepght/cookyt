import { Text, View } from 'react-native'
import React, { Component } from 'react'

export default class RecipeStep extends Component {
    constructor(props){
        super(props);
        //console.log(props.item);
    }

    render() {
        return (
        <View>
            <Text>{this.props.item}</Text>
        </View>
        )
    }
}