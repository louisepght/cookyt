import { Text, View } from 'react-native'

import React, { Component } from 'react'

export default class RecipeIngredient extends Component {
    constructor(props){
        super(props);
        this.textToDisplay = props.item.name;
        if(props.item.quantityLeft){
          this.textToDisplay+=' ('+props.item.quantityLeft;
          if(props.item.quantityType){
            this.textToDisplay+=' '+props.item.quantityType;
          }
          this.textToDisplay+=')';
        }
    }

    render() {
        return (
        <View>
            <Text>{this.textToDisplay}</Text>
        </View>
        )
    }
}