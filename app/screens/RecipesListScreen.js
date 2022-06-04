import React, {useState} from 'react';
import { Component } from "react";
import { SafeAreaView,StyleSheet, Text, View, KeyboardAvoidingView, Keyboard, Platform, TextInput, TouchableOpacity, Image , Dimensions } from 'react-native'
import LibrairiesScreen from './LibrairiesScreen';
import { ScrollView } from 'react-native-gesture-handler';
import ReturnScreenButton from '../components/ReturnScreenButton';
import * as data from '../lists/recipelibraries.json'
import ListComponent from '../components/ListComponent';
import { COLORS } from '../values/colors';
import Category from '../components/Category';



const { height, width } = Dimensions.get('window')

function RecipesListScreen({route,navigation}) {
    let {liste} = route.params; 

    const recipes = require('../data/recipes.json'); //lis le fichier json
    //ecran fils de LibrariesScreen

    let [plist, setPlist] = useState(); //utilisé pour le produit à ajouter
    let [plistItems, setPlistItems] = useState([]); //utilisé pour tous les produits de la liste

  let handleAddPlist = () => { //Pour l'ajout d'un produit dans la liste des produits
    if(plist && plist.length>0){
      setPlistItems([...plistItems,  plist]);
      setPlist(null);
      Keyboard.dismiss();
    }
  }

  
  console.log(liste);
  console.log(recipes);
 
    return (
        <SafeAreaView style={ [styles.androidSafeArea, localStyles.mainContainer]}>
          <ReturnScreenButton navigation={navigation}/>
          <View style={localStyles.mainContainer}>
          <Text style={localStyles.titleText}>
              {liste.name}
            </Text>
          </View>
          
          <ScrollView>            
          
          {liste.items.map((it, index) => {
                console.log(it);
                
                //return <ListComponent navigation={navigation} backgroundColor={COLORS.kaki} fontcolor={COLORS.white} liste={it} target={'RecipesListScreen'} ></ListComponent>
                for(var i=0;i<recipes.length;i++){
                  //console.log(recipes[i]);
                  if(recipes[i].name == it.name){
                    
                    return <RecipesList navigation={navigation} backgroundColor={COLORS.kaki}imageUri={recipes[i].image} text={recipes[i].name} recipe ={recipes[i].path} fontcolor={COLORS.white}  target={'RecipesListScreen'} path={recipes[i].path} ></RecipesList>
                  }
                }

              })}
          
          </ScrollView> 
        </SafeAreaView>
      )
}

class RecipesList extends Component{
  render(){
      return(
          <TouchableOpacity style={{flexDirection:'row',backgroundColor:this.props.backgroundColor, height: 60, borderRadius:20, marginLeft: 5, marginBottom:5, marginTop:10}} onPress={()=> {this.props.navigation.navigate('RecipeScreen', {recipe: this.props.path})}}>

               <View style={{justifyContent:'center', marginLeft:10}}>
                <Image style={{width: 50, height: 50, borderRadius:20,justifyContent:'center'}} source={{uri:this.props.imageUri}}></Image>
                </View>
                
                <View style={{justifyContent:'center', alignItems:'flex-start', alignContent:'flex-start', marginLeft:10}}>
                  <Text style={{color:this.props.fontcolor,textAlign:'left'}}>{this.props.text}</Text>
                </View>
              </TouchableOpacity>
      )
  }
}

const localStyles = StyleSheet.create({
  mainContainer:{
    paddingLeft:"5%",
    paddingRight:"5%"
  },
  titleContainer:{
    marginBottom:10,
  },
  titleText:{
    fontSize:22,
  },
  shareText:{
    fontSize:18,
  },
  sharingcontainer:{
    flexDirection:'row',
    flexGrow:1,
    flex:1,
    flexWrap:'wrap',
    alignItems:'center',
  },
  itemsContainer:{
    alignItems:'center',
    marginVertical:8
  }
})
export default RecipesListScreen
