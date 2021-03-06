import { View, Text, StyleSheet, TouchableOpacity, Button, Dimensions } from 'react-native'
import React from 'react'
import { ScrollView } from 'react-native-gesture-handler'
import { COLORS } from "../values/colors";
import ItemModel from '../models/ItemModel';
const { height, width } = Dimensions.get('window')


export default function ModalAddToGroceryList(props) {
  return (
    <View style={localStyles.modalBack}>
        <View style={localStyles.mainContainer}>

        <View style={localStyles.titleContainer}>
            <Text style={localStyles.titleText}>
                Ajouter dans la liste:
            </Text>
        </View>

        <ScrollView contentContainerStyle={localStyles.scrollview} style={{marginBottom:10}}>
            {mySharedGroceries.map( (item, index) => {
                return <ViewGroceryList item={item} ingredient={props.ingredient} key={index} changeVis={props.changeVisibility}/>
            })}
        </ScrollView>
        
        <View style={localStyles.cancelButton}>
            <Button 
                onPress={props.changeVisibility}
                title="Annuler"
                color="#e33"
            />
        </View>

        </View>
    </View>
  )
}


function ViewGroceryList(props) {
  return (
    <TouchableOpacity style={localStyles.touchableList} onPress={() =>{ 
        addToGroceryList(props.item, props.ingredient);
        props.changeVis(false)}
    }>
      <Text style={localStyles.listText}>{props.item.name}</Text>
    </TouchableOpacity>
  )
}


function addToGroceryList(liste, ingredient){
    if(liste && liste.items && ingredient && ingredient.name){
        let newIngredient = new ItemModel(ingredient.name);
        if(ingredient.quantity){
            newIngredient.initializeQuantity(ingredient.quantity);
            if(ingredient.quantityType){
                newIngredient.quantityType = ingredient.quantityType;
            }
        }
        liste.items.push(newIngredient);
    }
}

const localStyles = StyleSheet.create({
    modalBack:{
        flex:1,
        backgroundColor:'rgba(0,0,0,0.3)',
        justifyContent:'center',
        alignItems:'center'
    },
    mainContainer:{
        width:width-80,
        maxHeight:350,
        borderRadius:15,
        padding:10,
        backgroundColor:COLORS.white,
        paddingBottom:15
    },
    titleContainer:{
        marginLeft: "5%",
        marginTop: 5,
        marginBottom: 3,
    },
    titleText:{
      fontSize:20,
      fontWeight:'bold',
    },
    scrollview:{
        alignItems:'center'
    },
    touchableList:{
        backgroundColor:COLORS.kaki,
        width:'90%',
        padding:4,
        paddingLeft:10,
        marginVertical:4,
        borderRadius:8
    },
    listText:{
        color:"#fff",
        fontSize:18,
    },
    cancelButton:{
        alignSelf:'flex-end',
        maxWidth:150,
        marginRight:"5%",
    }
})