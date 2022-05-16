import React, {useState} from 'react';
import { StyleSheet, Text, View, KeyboardAvoidingView, Keyboard, Platform, TextInput, TouchableOpacity, Image  } from 'react-native'
import PropTypes from 'prop-types'
import styles from '../Styles'
import ReturnScreenButton from '../components/ReturnScreenButton'
import SharedUser from '../components/SharedUser'
import GroceryItem from '../components/GroceryItem';

import * as data from '../data/groceryLists/MaListe.json';
import { ScrollView } from 'react-native-gesture-handler'

function GroceryListDetails({route, navigation}) {
  let {liste} = route.params;
  const parsedData =  JSON.parse(JSON.stringify(data)); //makes a clean copy of data

  let [plist, setPlist] = useState(); //utilisé pour le produit à ajouter
  let [plistItems, setPlistItems] = useState([]); //utilisé pour tous les produits de la liste

  let handleAddPlist = () => { //Pour l'ajout d'un produit dans la liste des produits
    if(plist && plist.length>0){
      setPlistItems([...plistItems,  plist]);
      setPlist(null);
      Keyboard.dismiss();
    }
  }
  
  //let contribs = parsedData.contributors;

//  console.log(liste);

  return (
    <View style={ [styles.androidSafeArea, localStyles.mainContainer]}>
      <ReturnScreenButton navigation={navigation}/>
      <View style={localStyles.mainContainer}>

        <ScrollView>
          <View style={localStyles.titleContainer}>
            <Text style={localStyles.titleText}>
              {liste.name}
            </Text>
          </View>

          {/*
            Section "partagée avec qui?"
          */}
          <View style={localStyles.sharingContainer}>
            <Text style={localStyles.shareText}>
              Partagé avec
            </Text>
            <View style={localStyles.sharingcontainer}>
              
              <SharedUser navigation={navigation} name="Cécile" />
              <SharedUser navigation={navigation} name="Alphonse DelarocheBatt" />
              <SharedUser navigation={navigation} name="Alphonse Delaroche" />
              <SharedUser navigation={navigation} name="Alphonse Delarocheau" />
              
              {/* Si on veut utiliser un fichier json par liste}
              {contribs.map( (it, index) => {
                return <SharedUser navigation={navigation} name={it} key={index}/>
              })}
              */}
              
              {liste.contributors.map( (it, index) => {
                return <SharedUser navigation={navigation} name={it} key={index}/>
              })}
            </View>
          </View> 

           {/*
            Section "produits de la liste"
          */}

          <KeyboardAvoidingView 
            behavior={Platform.OS === "ios" ? "padding" : "height"}
            style={[styles.writeSomethingViewContainer, {paddingTop:20, justifyContent:'space-between'}]}>
            <View style={styles.writeSomethingTextView}>
              <TextInput style={styles.input} placeholder={"Ajouter un produit"} 
                value={plist} onChangeText={text => setPlist(text)}/>
            </View>
            <TouchableOpacity style={styles.addAListContainer} onPress={() => handleAddPlist()}>
            <Image source={require('../assets/add2.png')}
                resizeMode='contain'
                style={[styles.imageButonAdd]}/>
            </TouchableOpacity>
          </KeyboardAvoidingView>


          <View style={localStyles.itemsContainer}>            
          <GroceryItem  name="salut" key="4"/>                
              {liste.items.map( (it, index) => {
                //console.log(it);
                
                return <GroceryItem  name={it.name} key={index}/>
              })}
            

          </View> 



        </ScrollView>
      </View>
    </View>
  )
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
export default GroceryListDetails
