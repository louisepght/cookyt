import { StyleSheet, Text, View, TextInput, Platform, KeyboardAvoidingView, TouchableOpacity, Image, Keyboard  } from 'react-native'
import React, {useState} from 'react';
import GroceryList from '../components/GroceryList';
import styles from '../Styles'
import { ScrollView } from 'react-native-gesture-handler';
import { backgroundColor } from 'react-native/Libraries/Components/View/ReactNativeStyleAttributes';

function GroceryListScreen(props) {

  let [glist, setGlist] = useState();
  let [glistItems, setGlistItems] = useState([]);

  let handleAddGlist = () => {
    if(glist && glist.length>0){
      setGlistItems([...glistItems,  glist]);
      setGlist(null);
      Keyboard.dismiss();
    }
  }

  let getAColor = (index) =>{
    switch(index%3){
      case 0: return "#511";
        break;
      case 1: return '#151';
        break;
      case 2 : return '#115';
    }
  }

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
            style={[styles.writeSomethingViewContainer]}>
        <View style={styles.writeSomethingTextView}>
          <TextInput style={styles.input} placeholder={"Créer une nouvelle liste"} 
            value={glist} onChangeText={text => setGlist(text)}/>
        </View>
        <TouchableOpacity style={styles.addAListContainer} onPress={() => handleAddGlist()}>
        <Image source={require('../assets/add2.png')}
            resizeMode='contain'
            style={[styles.imageButonAdd]}/>
        </TouchableOpacity>

      </KeyboardAvoidingView>
      <View style={localStyles.container}>
      {/* Liste des listes de courses */}
        <GroceryList navigation={props.navigation} name="MaListe" />
        <GroceryList navigation={props.navigation} name="MaListe" />
        <GroceryList navigation={props.navigation} name="MaListe" />
        <GroceryList navigation={props.navigation} name="MaListe" />
        <GroceryList navigation={props.navigation} name="MaListe" />

        <GroceryList navigation={props.navigation} name="MaSuperListeQuiDechireSaRace" />
        {glistItems.map( (item, index) => {
           return <GroceryList navigation={props.navigation} name={item} color={getAColor(index)} key={index}/>
        })}
      </View>

    </ScrollView>




{/*
      <KeyboardAvoidingView 
            behavior={Platform.OS === "ios" ? "padding" : "height"}
            style={localStyles.writeAList}>
        <TextInput style={localStyles.input} placeholder={"Créer une nouvelle liste"}/>

      </KeyboardAvoidingView>*/}
      

    </View>
  )
}

const localStyles = StyleSheet.create({
    container: {
      //flex: 1,
      alignItems:"center",
      paddingBottom:75,
    },

  });

export default GroceryListScreen;