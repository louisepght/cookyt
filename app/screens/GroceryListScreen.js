import { StyleSheet, Text, View, TextInput, Platform, KeyboardAvoidingView } from 'react-native'
import React from 'react'
import GroceryList from '../components/GroceryList';
import styles from '../Styles'
import { ScrollView } from 'react-native-gesture-handler';

function GroceryListScreen(props) {
  console.log("grocery");
  return (
    <View style={styles.androidSafeArea}> 
      <View style={styles.titleContainer}>
        <Text style={styles.titleText}>
          Vos listes de courses
        </Text>
      </View>

      <KeyboardAvoidingView 
            behavior={Platform.OS === "ios" ? "padding" : "height"}
            style={localStyles.writeAList}>
        <TextInput style={localStyles.input} placeholder={"Créer une nouvelle liste"}/>

      </KeyboardAvoidingView>
      <TextInput style={localStyles.input} placeholder={"Créer une nouvelle liste"}/>


      {/* Liste des listes de courses */}
      <ScrollView contentContainerStyle ={localStyles.container}>
        <GroceryList navigation={props.navigation} name="MaListe" />
        <GroceryList navigation={props.navigation} name="MaSuperListeQuiDechireSaRace" />
        <GroceryList navigation={props.navigation} name="MaListe" />
        <GroceryList navigation={props.navigation} name="MaListe" />
        <GroceryList navigation={props.navigation} name="MaListe" />
        <GroceryList navigation={props.navigation} name="MaListe" />
        <GroceryList navigation={props.navigation} name="MaListe" />
        <GroceryList navigation={props.navigation} name="MaListe" />
        <GroceryList navigation={props.navigation} name="MaListe" />

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
    },
    writeAList: {
      flex: 1
    },
    input:{

    }
  });

export default GroceryListScreen;