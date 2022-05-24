import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { backgroundColor } from 'react-native/Libraries/Components/View/ReactNativeStyleAttributes';


export default function GroceryItem(props) {
  let name = props.name;
  console.log(name);
  return (

    <View style={localStyles.container}>
      <Text style={localStyles.productName}>{name}</Text>

    </View>

    //<View style={localStyles.container2}>
      //<Text style={localStyles.text}>{name}</Text>
  //</View>*/}
  )
}

const localStyles = StyleSheet.create({
    wsh:{
      backgroundColor:'#f88', width:50, height:50
    },
    container:{
        backgroundColor: "#aaa",
        alignItems:'center',
        justifyContent:'center',
        alignContent:'center',
        borderRadius:15,
        padding:8,
        flexDirection: 'row',
        marginHorizontal:5,
        marginVertical:3
    },

    productName:{
        fontSize:14,
        fontWeight:'bold',
    }

})