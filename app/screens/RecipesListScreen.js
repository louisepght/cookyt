import React, {useState} from 'react';
import { SafeAreaView,StyleSheet, Text, View, KeyboardAvoidingView, Keyboard, Platform, TextInput, TouchableOpacity, Image  } from 'react-native'
import LibrairiesScreen from './LibrairiesScreen';
import { ScrollView } from 'react-native-gesture-handler';
import ReturnScreenButton from '../components/ReturnScreenButton';
import * as data from '../lists/recipelibraries.json'
import ListComponent from '../components/ListComponent';
import { COLORS } from '../values/colors';


function RecipesListScreen({route,navigation}) {
    let {liste} = route.params; 
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
 
    return (
        <SafeAreaView style={ [styles.androidSafeArea, localStyles.mainContainer]}>
          <ReturnScreenButton navigation={navigation}/>
          <View style={localStyles.mainContainer}>
          <Text style={localStyles.titleText}>
              {liste.name}
            </Text>
          </View>
          
          <View style={localStyles.itemsContainer}>            
          
          {liste.items.map( (it, index) => {
                //console.log(it);
                
                return <ListComponent  backgroundColor={COLORS.kaki} fontcolor={COLORS.white} liste={it} target={'RecipesListScreen'} ></ListComponent>
              })}
            


          </View> 
        </SafeAreaView>
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
export default RecipesListScreen
