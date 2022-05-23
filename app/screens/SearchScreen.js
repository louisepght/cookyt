import { StyleSheet, Text, View, StatusBar, SafeAreaView, FlatList } from 'react-native'
import React from 'react'
import styles from '../Styles'
import { ScrollView } from 'react-native-gesture-handler';
import { Component } from 'react/cjs/react.production.min';
import { COLORS } from '../values/colors';
import SearchBar from '../components/SearchBar';
import RecipeItemList from '../components/RecipeItemList';

function SearchScreen() {
  console.log("search");
  return (      
  <SafeAreaView  style={styles.androidSafeArea}>
    <View style={{flexDirection:'column'}}>
      <ScrollView
      scrollEventThrottle={16}
      >
        <View style={styles.titleContainer}>
          <Text style = {styles.titleText}>
            Rechercher
          </Text>
        </View>

        <View style={{flex:1}}>
          <SearchBar></SearchBar>
        </View>

        <View style={{flex:1}}>
            <View style={styles.titleContainer}>
                <Text style = {styles.subtitleText}>
                  Top recherches
                </Text>
            </View>
            <View style={{flexDirection:'row', marginStart:20,marginEnd:20}}>

              <View style={{flexDirection:'column'}}>
                <RecipeItemList backgroundColor={COLORS.kaki} fontcolor={COLORS.white} text='Mes recettes préférées' imageUri={require('../assets/crevettes.jpg')}></RecipeItemList>
                <RecipeItemList backgroundColor={COLORS.white} fontcolor={COLORS.black} text='Dîner' imageUri={require('../assets/crevettes.jpg')}></RecipeItemList>
                <RecipeItemList backgroundColor={COLORS.black} fontcolor={COLORS.white} text='Brunch' imageUri={require('../assets/crevettes.jpg')}></RecipeItemList>
                <RecipeItemList backgroundColor={COLORS.grey} fontcolor={COLORS.black} text='Recette pour la semaine' imageUri={require('../assets/crevettes.jpg')}></RecipeItemList>
                
              </View>
              <View style={{flexDirection:'column'}}>
                <RecipeItemList backgroundColor={COLORS.black} fontcolor={COLORS.white} text='Recettes faciles' imageUri={require('../assets/crevettes.jpg')}></RecipeItemList>
                <RecipeItemList backgroundColor={COLORS.grey} fontcolor={COLORS.black} text='Pâtisserie' imageUri={require('../assets/crevettes.jpg')}></RecipeItemList>
                <RecipeItemList backgroundColor={COLORS.kaki} fontcolor={COLORS.white} text='Epater la galerie' imageUri={require('../assets/crevettes.jpg')}></RecipeItemList>
                <RecipeItemList backgroundColor={COLORS.white} fontcolor={COLORS.black} text='Coloc' imageUri={require('../assets/crevettes.jpg')}></RecipeItemList>
              </View>
            </View>
          </View>

          <View style={{flex:1}}>
            <View style={styles.titleContainer}>
                <Text style = {styles.subtitleText}>
                  Tout
                </Text>
            </View>
            <View style={{flexDirection:'row', marginStart:20,marginEnd:20}}>

              <View style={{flexDirection:'column'}}>
                <RecipeItemList backgroundColor={COLORS.kaki} fontcolor={COLORS.white} text='Mes recettes préférées' imageUri={require('../assets/crevettes.jpg')}></RecipeItemList>
                <RecipeItemList backgroundColor={COLORS.white} fontcolor={COLORS.black} text='Dîner' imageUri={require('../assets/crevettes.jpg')}></RecipeItemList>
                <RecipeItemList backgroundColor={COLORS.black} fontcolor={COLORS.white} text='Brunch' imageUri={require('../assets/crevettes.jpg')}></RecipeItemList>
                <RecipeItemList backgroundColor={COLORS.grey} fontcolor={COLORS.black} text='Recette pour la semaine' imageUri={require('../assets/crevettes.jpg')}></RecipeItemList>
                
              </View>
              <View style={{flexDirection:'column'}}>
                <RecipeItemList backgroundColor={COLORS.black} fontcolor={COLORS.white} text='Recettes faciles' imageUri={require('../assets/crevettes.jpg')}></RecipeItemList>
                <RecipeItemList backgroundColor={COLORS.grey} fontcolor={COLORS.black} text='Pâtisserie' imageUri={require('../assets/crevettes.jpg')}></RecipeItemList>
                <RecipeItemList backgroundColor={COLORS.kaki} fontcolor={COLORS.white} text='Epater la galerie' imageUri={require('../assets/crevettes.jpg')}></RecipeItemList>
                <RecipeItemList backgroundColor={COLORS.white} fontcolor={COLORS.black} text='Coloc' imageUri={require('../assets/crevettes.jpg')}></RecipeItemList>
              </View>
            </View>
          </View>

      </ScrollView>
    </View>
</SafeAreaView>

  )
}


export default SearchScreen;