import { Text, View, StyleSheet, TouchableOpacity, Image, Alert, Modal } from 'react-native'

import React, { Component } from 'react'

import styles from '../Styles';
import { COLORS } from "../values/colors";

import ModalAddToGroceryList from './ModalAddToGroceryList';

export default class RecipeIngredient extends Component {
    constructor(props){
        super(props);
        this.textToDisplay = props.item.name;
        if(props.item.quantity){
          this.textToDisplay+=' ('+props.item.quantity;
          if(props.item.quantityType){
            this.textToDisplay+=' '+props.item.quantityType;
          }
          this.textToDisplay+=')';
        }
        this.state={added: false, visibleModal:false};
    }


    changeVisibilityModal = (boolValue) =>{
      this.setState({visibleModal:boolValue})
    }

    addToCart = () =>{
      this.setState({ added:true})
      this.changeVisibilityModal(true)
      //console.log(mySharedGroceries)

      /*
      Alert.alert(
        "Alert Title",
        "My Alert Msg",
        [
          {
            text: "Cancel",
            onPress: () => Alert.alert("Cancel Pressed"),
            style: "cancel",
          },
        ],
        {
          cancelable: true,
          onDismiss: () =>
            Alert.alert(
              "This alert was dismissed by tapping outside of the alert dialog."
            ),
        }
       ) */
      };

    render() {
        return (
        <View style={localStyles.mainContainer}>
            <Text style={localStyles.textStyle}>{this.textToDisplay}</Text>

            <TouchableOpacity style={[styles.addAListContainer,{backgroundColor: this.state.added? COLORS.grey: COLORS.neonGreen }]} 
              onPress={() => this.addToCart()}>
              <Image source={require('../assets/shopping-cart.png')}
                resizeMode='contain'
                style={localStyles.cartImage}/>
          </TouchableOpacity>

          <Modal transparent={true} animationType='fade' visible={this.state.visibleModal}
          nRequestClose={()=> {this.setState({visibleModal:false})} }>
            <ModalAddToGroceryList changeVisibility={this.changeVisibilityModal} ingredient={this.props.item}/>
          </Modal>

        </View>
        )
    }
}

const localStyles = StyleSheet.create({
  mainContainer:{
    flexDirection:'row',
    justifyContent: "space-between",
    alignItems:'center',
    borderRadius:10,
    borderTopRightRadius:2,
    borderWidth:0.1,
    elevation:5,
    backgroundColor: COLORS.pageBackgroundGray,
    overflow: 'hidden',
    borderRightWidth:0,
    paddingVertical:2,
    marginVertical:4,
    paddingHorizontal:"2%"
  },
  textStyle:{
    fontSize:16,
  },
  cartTouchable:{

  },
  cartImage:{
    marginTop:2,
    width:20,
    height:20,
    tintColor: '#000',
  }
})