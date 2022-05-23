import { StyleSheet, Text, View, TextInput, Platform, KeyboardAvoidingView, TouchableOpacity, Image, Keyboard  } from 'react-native'
import React, {useState, Component}  from 'react';
import GroceryList from '../components/GroceryList';
import styles from '../Styles'
import { menuBarHeight } from '../values/constantes';
import { ScrollView } from 'react-native-gesture-handler';
import { backgroundColor } from 'react-native/Libraries/Components/View/ReactNativeStyleAttributes';
import GroceryListModel from '../models/GroceryListModel'
//import { render } from 'react-dom';

//import {writeJsonFile} from 'write-json-file';
//import AsyncStorage from '@react-native-async-storage/async-storage';

//import * as data from '../data/groceries.json';
const data = require('../data/groceries.json');



class GroceryListScreen extends React.Component{

  constructor( props) {
    super(props);
    this.state = {text: ''}
    this.glistItems=[];
  }

  componentDidMount() {
    //après avoir monté le composant, on charge les listes depuis le fichier JSON et on les ajoute au tableau glistItems
    const data = require('../data/groceries.json');
    for(var i=0; i<data.length; i++){
      var obj = data[i];
      if(obj.hasOwnProperty('name') && obj.name.length>0){
        let liste = new GroceryListModel(obj.name);
        if(obj.hasOwnProperty('contributors')){
          liste.setContributors(obj.contributors);
        }
        if(obj.hasOwnProperty('items')){
          liste.setItems(obj.items);
        }
        this.glistItems.push(liste);
      }
    }
    this.setState({ text:'' }); //ça sert juste à appeler render une fois qu'on a ajouté les listes de courses au tableau
  }

  handleAddGlist = () => {
    if(this.state.text && this.state.text.length>0){
      let liste = new GroceryListModel(this.state.text);
      this.glistItems.push(liste);
      this.setState({text:''});
      Keyboard.dismiss();
      this.textInput.clear();
      //il faut aussi ajouter la nouvelle liste au json
      data.push(liste);
      //await writeJsonFile('../data/groceries.json', data);    
    }
  }

  getAColor = (index) =>{
    switch(index%3){
      case 0: return "#511";
        break;
      case 1: return '#151';
        break;
      case 2 : return '#115';
    }
  }

  render(){
    return (
      <View style={[styles.androidSafeArea, {paddingBottom:0}]}> 
      <ScrollView contentContainerStyle ={[styles.GroceryListScreenContainer]}>

        <View style={styles.titleContainer}>
          <Text style={styles.titleText}>
            Vos listes de courses
          </Text>
        </View>

        
        <KeyboardAvoidingView 
              behavior={Platform.OS === "ios" ? "padding" : "height"}
              style={[styles.writeSomethingViewContainer, {marginRight:25, marginLeft:25}]}>
          <View style={styles.writeSomethingTextView}>
            <TextInput style={styles.input} placeholder={"Créer une nouvelle liste"} 
              ref={input => { this.textInput = input }}
              onChangeText={(text) => this.setState({text})} />
          </View>
          <TouchableOpacity style={styles.addAListContainer} onPress={() => this.handleAddGlist()}>
          <Image source={require('../assets/add2.png')}
              resizeMode='contain'
              style={[styles.imageButonAdd]}/>
          </TouchableOpacity>
          
        </KeyboardAvoidingView>
        

        <View style={localStyles.container}>
        {/* Liste des listes de courses */}        
          {this.glistItems.map( (item, index) => {
            return <GroceryList navigation={this.props.navigation} liste={item} color={this.getAColor(index)} key={index}/>
          })}
        </View>

      </ScrollView>
    </View>
    )
}
}

const localStyles = StyleSheet.create({
    container: {
      //flex: 1,
      alignItems:"center",
      paddingBottom:menuBarHeight,
    },

  });

export default GroceryListScreen;