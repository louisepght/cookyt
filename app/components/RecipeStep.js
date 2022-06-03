import { Text, View, StyleSheet} from 'react-native'
import { WebView } from 'react-native-webview';
import React, { Component } from 'react'

export default class RecipeStep extends Component {
    constructor(props){
        super(props);
        this.text = props.item;
        this.number = props.number;
    }

    render() {
        return (    
        <View style={localStyles.mainContainer}>
            <View style={localStyles.numberContainer}>
                <Text>
                    {this.number}
                </Text>
            </View>

            <View style={localStyles.textContainer}>
                <Text style={localStyles.textStyle}>{this.text}</Text>

            </View>
        
        </View>
        )
    }
}

const localStyles = StyleSheet.create({
    mainContainer:{
        flexDirection:'row',
        alignItems:'center',
        flex:1,
        paddingBottom:10
    },
    numberContainer:{
        height:"90%",
        paddingRight:4,
        borderRightWidth:1,
        marginRight:4,
        alignItems:'center',
        alignContent:'center',
        justifyContent:'center'
    },

    textContainer:{
        paddingRight:6
    },
    numberStyle:{
        textAlign:'center',
        textAlignVertical :'bottom'
    },
    textStyle:{
        fontSize:15
    }
})
