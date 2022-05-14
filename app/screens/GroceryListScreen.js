import { StyleSheet, Text, View, TextInput, Platform, KeyboardAvoidingView, TouchableOpacity, Image, Keyboard  } from 'react-native'
import React, {useState} from 'react';
import GroceryList from '../components/GroceryList';
import styles from '../Styles'
import { ScrollView } from 'react-native-gesture-handler';

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
      <View style={styles.titleContainer}>
        <Text style={styles.titleText}>
          Vos listes de courses
        </Text>
      </View>

      
      <KeyboardAvoidingView 
            behavior={Platform.OS === "ios" ? "padding" : "height"}
            style={[localStyles.writeAListContainer]}>
        <View style={localStyles.writeAList}>
          <TextInput style={localStyles.input} placeholder={"Créer une nouvelle liste"} 
            value={glist} onChangeText={text => setGlist(text)}/>
        </View>
        <TouchableOpacity style={styles.addAListContainer} onPress={() => handleAddGlist()}>
        <Image source={require('../assets/add2.png')}
            resizeMode='contain'
            style={[localStyles.imagesAdd]}/>
        </TouchableOpacity>

      </KeyboardAvoidingView>

      {/* Liste des listes de courses */}
      <ScrollView contentContainerStyle ={[styles.GroceryListScreenContainer]}>
        <GroceryList navigation={props.navigation} name="MaListe" />
        <GroceryList navigation={props.navigation} name="MaListe" />
        <GroceryList navigation={props.navigation} name="MaListe" />
        <GroceryList navigation={props.navigation} name="MaListe" />
        <GroceryList navigation={props.navigation} name="MaListe" />
        <GroceryList navigation={props.navigation} name="MaListe" />
        <GroceryList navigation={props.navigation} name="MaListe" />

        <GroceryList navigation={props.navigation} name="MaSuperListeQuiDechireSaRace" />
        {glistItems.map( (item, index) => {
           return <GroceryList navigation={props.navigation} name={item} color={getAColor(index)} key={index}/>
        })}


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
      backgroundColor: '#f71',
      alignItems:"center",
      paddingBottom:75,
    },
    writeAListContainer:{
      marginLeft:15,
      marginRight:15,
      marginBottom:15,
      justifyContent: "space-around",
      flexDirection:'row',
      alignItems:'center'

    },
    writeAList: {
      padding:10,
      width:'70%',
      borderColor:'#555',
      borderWidth:0.2,
      borderRadius:25
    },
    input:{

    },
    addButtonText: {
      color:'#fff',
      fontSize:28,
      backgroundColor: 'transparent'

    },
    addAListContainer:{
      backgroundColor:'#2a2',
      borderRadius:15,
      width:30,
      height:30,
      justifyContent:'center',
      alignItems:'center'
    },
    imagesAdd:{
      width:20,
      height:20,
      tintColor: '#fff',
    }
  });

export default GroceryListScreen;