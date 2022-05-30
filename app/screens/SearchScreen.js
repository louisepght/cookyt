import { StyleSheet, Text, View, StatusBar, SafeAreaView, FlatList } from 'react-native'
import React from 'react'
import styles from '../Styles'
import { ScrollView } from 'react-native-gesture-handler';
import { Component } from 'react/cjs/react.production.min';
import { COLORS } from '../values/colors';
import SearchBar from '../components/SearchBar';
import RecipeItemList from '../components/RecipeItemList';
import RecipeItemResearch from '../components/RecipeItemResearch';

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
            <View style={{flexDirection:'column', marginStart:20,marginEnd:20}}>
              <RecipeItemResearch imageUri={require('../assets/crevettes.jpg')} name="Spaghettis aux crevettes et pesto" color='#32582B' fontcolor='#fff'></RecipeItemResearch>
                                  <RecipeItemResearch imageUri={require('../assets/semoule-framboise.jpg')} name="Semoule aux framboises" color='#fff' ></RecipeItemResearch>
                                  <RecipeItemResearch imageUri={require('../assets/tiramisu.png')} name="Tiramisu aux olives" color='#000' fontcolor='#fff'></RecipeItemResearch>
                                  <RecipeItemResearch imageUri={require('../assets/bouillie.jpg')} name="La bouillie qui nourrit" color='#fff'></RecipeItemResearch></View>
          </View>

          <View style={{flex:1}}>
            <View style={styles.titleContainer}>
                <Text style = {styles.subtitleText}>
                  Tout
                </Text>
            </View>
            <View style={{flexDirection:'column', marginStart:20,marginEnd:20}}>
                <RecipeItemResearch imageUri={require('../assets/crevettes.jpg')} name="Spaghettis aux crevettes et pesto" color='#32582B' fontcolor='#fff'></RecipeItemResearch>
                                    <RecipeItemResearch imageUri={require('../assets/crevettes.jpg')} name="SDemoule aux olives" color='#fff' ></RecipeItemResearch>
                                    <RecipeItemResearch imageUri={require('../assets/crevettes.jpg')} name="Tiramisu aux framboises" color='#000' fontcolor='#fff'></RecipeItemResearch>
                                    <RecipeItemResearch imageUri={require('../assets/crevettes.jpg')} name="Quiche au thon" color='#fff'></RecipeItemResearch>
                                    <RecipeItemResearch imageUri={require('../assets/crevettes.jpg')} name="Gateau au chocolat" color='#32582B' fontcolor='#fff'></RecipeItemResearch>     
                  
              </View>
          </View>

      </ScrollView>
    </View>
</SafeAreaView>

  )
}


export default SearchScreen;