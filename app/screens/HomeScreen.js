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
 

class HomeScreen extends React.Component{

  constructor(props){
    super(props);
    this.state = {recommendations: []};
  }

  componentDidMount(){
    const data = require("../data/recipes.json");
    //console.log(data);
    let myList=[];
    for(var i=0; i<Math.min(data.length,5); i++){
      var obj = data[i];
      if(obj.hasOwnProperty('name') && obj.name.length>0){
        myList.push(obj);
      }
    }
    this.setState({recommendations: myList})
  }

  render(){
    console.log("this.state.recommendations:");
    console.log(this.state.recommendations);
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
                
              </View>
              <View style={{flexDirection:'column'}}>
                <RecipeItemList backgroundColor={COLORS.black} fontcolor={COLORS.white} text='Recettes faciles' imageUri={require('../assets/crevettes.jpg')}></RecipeItemList>
                <RecipeItemList backgroundColor={COLORS.grey} fontcolor={COLORS.black} text='Pâtisserie' imageUri={require('../assets/crevettes.jpg')}></RecipeItemList>
                <RecipeItemList backgroundColor={COLORS.kaki} fontcolor={COLORS.white} text='Epater la galerie' imageUri={require('../assets/crevettes.jpg')}></RecipeItemList>
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
                {/*}
                <ScrollView horizontal={true}
                                    showsHorizontalScrollIndicator={false}
                                    scrollEventThrottle={16}
                                    style = {{marginLeft:10, marginEnd:10}}>
                                  <Category navigation={this.props.navigation} imageUri={require('../assets/crevettes.jpg')} name="Spaghettis aux crevettes et pesto" color='#32582B' fontcolor='#fff' recipe={this.data[0]}></Category>
                                  <Category navigation={this.props.navigation} imageUri={require('../assets/crevettes.jpg')} name="Semoule aux olives" color='#fff' recipe={this.data[0]}></Category>
                                  <Category navigation={this.props.navigation} imageUri={require('../assets/crevettes.jpg')} name="Tiramisu aux framboises" color='#000' fontcolor='#fff' recipe={this.data[0]}></Category>
                                  <Category navigation={this.props.navigation} imageUri={require('../assets/crevettes.jpg')} name="Quiche au thon" color='#fff' recipe={this.data[0]}></Category>
                                  <Category navigation={this.props.navigation} imageUri={require('../assets/crevettes.jpg')} name="Gateau au chocolat" color='#32582B' fontcolor='#fff' recipe={this.data[0]}></Category>     
                </ScrollView>
    */}
    
              <ScrollView horizontal={true}
                  showsHorizontalScrollIndicator={false}
                  scrollEventThrottle={16}
                  style = {{marginLeft:10, marginEnd:10}}>
                {this.state.recommendations.map( (item, index) => {
                return <Category navigation={this.props.navigation} imageUri={item.image} name={item.name} color='#32582B' fontcolor='#fff' recipe={item.path} key={index}></Category>
                })}
              </ScrollView>
              </View>
            </View>
            <View>
              <View style={styles.titleContainer}>
                <Text style = {styles.titleText}>
                Astuce du jour
                </Text>
              </View>
              <AstuceduJour backgroundColor={COLORS.white} fontcolor={COLORS.black} text="Philippe Etchebest : C'est qui le patron?" imageUri={require('../assets/etchebest.jpg')}></AstuceduJour>

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