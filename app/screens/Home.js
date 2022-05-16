import { StyleSheet, Text, View, StatusBar, SafeAreaView, Image, Dimensions, FlatList } from 'react-native'
import { Component } from "react"
import React from 'react'
import { ScrollView } from 'react-native-gesture-handler';
import styles from '../Styles'
import Category from '../components/Category';
import RecipeItemList from '../components/RecipeItemList';
import { COLORS } from '../values/colors';
import AstuceduJour from '../components/AstuceduJour';
import recipelibraries from '../lists/recipelibraries';
//const { height, width } = Dimensions.get('window')

class HomeScreen extends Component{

  componentWillMount(){
    this.startheaderHeight = 80
    if(Platform.OS == 'android'){
      this.startheaderHeight = 100;
    }
  }
  render(){
    return(
      <SafeAreaView  style={styles.androidSafeArea}>
        <View style={{flexDirection:'column'}}>
          <ScrollView
          scrollEventThrottle={16}
          >
            <View style={{flex:1}}>
              <View style={styles.titleContainer}>
                <Text style = {styles.titleText}>
                  Prêt?
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
                <Text style = {styles.titleText}>
                  Recommandations
                </Text>
              </View>

              
              <View style={{flex:1}}>
                <ScrollView horizontal={true}
                                    showsHorizontalScrollIndicator={false}
                                    scrollEventThrottle={16}
                                    style = {{marginLeft:10, marginEnd:10}}>
                                  <Category imageUri={require('../assets/crevettes.jpg')} name="Spaghettis aux crevettes et pesto" color='#32582B' fontcolor='#fff'></Category>
                                  <Category imageUri={require('../assets/crevettes.jpg')} name="Semoule aux olives" color='#fff' ></Category>
                                  <Category imageUri={require('../assets/crevettes.jpg')} name="Tiramisu aux framboises" color='#000' fontcolor='#fff'></Category>
                                  <Category imageUri={require('../assets/crevettes.jpg')} name="Quiche au thon" color='#fff'></Category>
                                  <Category imageUri={require('../assets/crevettes.jpg')} name="Gateau au chocolat" color='#32582B' fontcolor='#fff'></Category>     
                </ScrollView>
              </View>
            </View>
            <View>
              <View style={styles.titleContainer}>
                <Text style = {styles.titleText}>
                Astuces du jour
                </Text>
              </View>
              <AstuceduJour backgroundColor={COLORS.white} fontcolor={COLORS.black} text='Comment faire un roux digne de ce nom ?' imageUri={require('../assets/etchebest.jpg')}></AstuceduJour>

            </View>
            <View style={{height:100}}></View>

          </ScrollView>
        </View>
  </SafeAreaView>

    );
  }
}


const localstyles = StyleSheet.create({
    homeScreen: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor:COLORS.pageBackgroundGray,
    },
  });

export default HomeScreen;