import { StyleSheet, Text, View, StatusBar, SafeAreaView, FlatList } from 'react-native'
import React, { useEffect, useState } from "react";
import styles from '../Styles'
import { ScrollView } from 'react-native-gesture-handler';
import { Component } from 'react/cjs/react.production.min';
import { COLORS } from '../values/colors';
import SearchBar from '../components/SearchBar';
import RecipeItemList from '../components/RecipeItemList';
import RecipeItemResearch from '../components/RecipeItemResearch';
import { render } from 'react-dom';

function SearchScreen({navigation}) {

  const [searchRecipes, setSearchRecipes] = useState();
  const [searchPhrase, setSearchPhrase] = useState("");

  const data = require("../data/recipes.json");
  useEffect(() => {
    let myList = [];
    for (var i = 0; i < Math.max(data.length, 5); i++) {
      var obj = data[i];
      if (obj.hasOwnProperty('name') && obj.name.length > 0) {
        myList.push(obj);
      }
    }


    setSearchRecipes(myList);
  }, []);



  useEffect(() => {
    if (searchPhrase === "") {
      let myList = [];
      for (var i = 0; i < Math.max(data.length, 5); i++) {
        var obj = data[i];
        if (obj.hasOwnProperty('name') && obj.name.length > 0) {
          myList.push(obj);
        }
      }


      setSearchRecipes(myList);
    }
  }, [searchPhrase]);
  useEffect(() => {
    if (searchPhrase) setSearchRecipes(searchRecipes?.filter((recipe) => recipe.name.includes(searchPhrase)))

  }, [searchPhrase]);




      return (
      <SafeAreaView style={styles.androidSafeArea}>
        <View style={{ flexDirection: 'column' }}>
          <ScrollView
            scrollEventThrottle={16}
          >
            <View style={styles.titleContainer}>
              <Text style={styles.titleText}>
                Rechercher
              </Text>
            </View>

            <View style={{ flex: 1 }}>
              <SearchBar searchPhrase={searchPhrase} setSearchPhrase={setSearchPhrase}></SearchBar>
            </View>

            <View style={{ flex: 1 }}>
              <View style={styles.titleContainer}>
                <Text style={styles.subtitleText}>
                  Top recherches
                </Text>
              </View>

              <View style={{ flexDirection: 'column', marginStart: 20, marginEnd: 20 }}>
                {searchRecipes?.map((searchRecipe, index) => {
                  return (
                    <RecipeItemResearch navigation={navigation} imageUri={searchRecipe.image} name={searchRecipe.name} color={COLORS.kaki} recipe={searchRecipe.path} key={index}></RecipeItemResearch>
                  )
                }
                )}
              </View>
            </View>

          </ScrollView>
        </View>
      </SafeAreaView>
  )
}


export default SearchScreen;