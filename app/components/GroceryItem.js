import { View, Text, StyleSheet, Image } from 'react-native'
import React, { useState } from 'react';
import { backgroundColor } from 'react-native/Libraries/Components/View/ReactNativeStyleAttributes';
import { TouchableOpacity } from 'react-native-gesture-handler';
//import { CheckBox, Icon } from '@rneui/themed';
import BouncyCheckbox from "react-native-bouncy-checkbox";


class GroceryItem extends React.Component {
  
  constructor(props){
    super(props);
    //let item = props.item;
    this.textToDisplay = props.item.name;
    if(props.item.quantityLeft){
      this.textToDisplay+=' ('+props.item.quantityLeft;
      if(props.item.quantityType){
        this.textToDisplay+=' '+props.item.quantityType;
      }
      this.textToDisplay+=')';
    }
  }


  handleCheck = (isChecked) => {
    if(isChecked){
      this.props.item.bought = true;
      this.props.item.boughtBy = "Me";
      var today = new Date(); 
      this.props.item.boughtDate = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
      this.quantityLeft=0;
    }
    else{
      this.props.item.bought = false;
      this.props.item.boughtBy = "";
      this.props.item.boughtDate = "";
      this.quantityLeft = this.quantityInitial;
    }
  }
  render(){
    return (

      <View style={localStyles.container}>
        
        {/* <Text style={localStyles.productName}>{name} oui</Text>

        
        <TouchableOpacity style={localStyles.checkbox}>

        </TouchableOpacity>
    */}
        {/*<Image source={require('../assets/add2.png')}
                  resizeMode='contain'/>*/}
        
        <BouncyCheckbox
          size={25}
          style={localStyles.checkBoxContainer}
          fillColor="#292"
          unfillColor="#FFFFFF"
          text={this.textToDisplay}
          iconStyle={{ borderColor: "grey", marginLeft:5, borderRadius:5 }}
          textStyle={{
            color:"#000",
            textDecorationLine: "none",
          }}
          bounceEffect={0.8}
          bounceFriction={100}
          onPress={(isChecked) => { this.handleCheck(isChecked)}}
          isChecked={this.props.item.bought}
          />
      </View>

      //<View style={localStyles.container2}>
        //<Text style={localStyles.text}>{name}</Text>
    //</View>*/}
    )
  }
}

const localStyles = StyleSheet.create({
    wsh:{
      backgroundColor:'#f88', width:50, height:50
    },
    container:{
        alignItems:'center',
        justifyContent:'center',
        alignContent:'center',
        borderRadius:15,
        padding:8,
        flexDirection: 'row',
        marginHorizontal:0,
        marginVertical:3
    },

    checkBoxContainer:{
      alignItems:'center',
      justifyContent:'flex-start',
      alignContent:'center',
      borderRadius:3,
      padding:5,
      paddingRight:5,
      flexDirection: 'row',
      width:'95%',
      //borderColor:"#a1a1a1",
      //borderWidth:0.1

    },
    productName:{
        fontSize:14,
        fontWeight:'bold',
    }

})

export default GroceryItem;