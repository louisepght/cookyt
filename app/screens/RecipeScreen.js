import { Text, View, SafeAreaView, StyleSheet, Image, LogBox  } from 'react-native'
import React, { Component, useEffect } from 'react'
import styles from '../Styles'
import StarRating from 'react-native-star-rating';
import { COLORS } from '../values/colors';
import ReturnScreenButton from '../components/ReturnScreenButton';
import { ScrollView } from 'react-native-gesture-handler';

import database from '../config'
import {ref, onValue,  child, get} from "firebase/database";
import { Button } from 'react-native-elements';
import RecipeIngredient from '../components/RecipeIngredient';
import RecipeStep from '../components/RecipeStep';

import RecipeModel from '../models/RecipeModel';


//console.log(database);

export default class RecipeScreen extends Component {

  constructor(props){
    super(props);
    this.path = props.route.params.recipe;
    this.state = {hasMount: false};
    this.data = new RecipeModel("default");
  }

  componentDidMount(){
    this.readData();
    this.setState({hasMount: true});
    LogBox.ignoreLogs(['source.uri should not be an empty string']);
  }

  readData = () => {
    const starCountRef = ref(database, 'Recipes/'+this.path);
    var data2;
    onValue(starCountRef, (snapshot) => {
      data2 = snapshot.val();
      this.data.setName(data2.name);
      this.data.setImage(data2.image);
      this.data.setRating(data2.rating);
      this.data.setIngredients(data2.ingredients);
      this.data.setSteps(data2.steps);
      this.setState({hasMount: true});
    });
  }

  render() {
    console.log(this.data)
    return (
      <SafeAreaView style={styles.androidSafeArea}>
        <View style={[styles.titleContainer , {flexDirection:'row'}]}>
          <ReturnScreenButton navigation={this.props.navigation}/>
          <Text style={[styles.titleText, {margin:10, marginTop:0}]}>{this.data.name}</Text>
        </View>

        <ScrollView>

        <Image style={localstyles.imageStyle} source={{uri: this.data.image}}></Image>   

          <View style={localstyles.infosContainer}>
            <View style={localstyles.infoIconContainer}>
              <Image source={require('../assets/knife.png')}
                resizeMode='contain'
                style={[localstyles.infoIcon]}/>
              <Text>
                15 min
              </Text>
            </View>
            
            <View style={[localstyles.infoIconContainer, {paddingRight:0}]}>
              <Image source={require('../assets/cooking.png')}
                resizeMode='contain'
                style={[localstyles.infoIcon]}/>
              <Text>
                15 min
              </Text>
            </View>

            <View style={[localstyles.infoIconContainer, {paddingLeft:0}]}>
              <StarRating
                starSize={20}
                disabled={true}
                maxStars={5}
                rating={this.data.rating}
                iconSet={'Ionicons'}
                emptyStar={'heart-outline'}
                fullStar={'heart'}
                halfStar={'heart-half-outline'}
                halfStarColor={COLORS.neonGreen}
                fullStarColor={COLORS.neonGreen}
                emptyStarColor={COLORS.neonGreen}
                containerStyle={localstyles.starsContainer}
              />
              <Text>
                {this.data.rating}/5
              </Text>
            </View>
          </View>

          <View style={localstyles.mainContainer}>
            <View style={localstyles.sectionTitleContainer}>
              <Text style={localstyles.sectionTitle}>
                Ingrédients:
              </Text>
            </View>

            <View style={localstyles.ingredientsContainer}>            
                {this.data.ingredients.map( (it, index) => {
                  return <RecipeIngredient  item={it} key={index}/>
                })}
            </View> 


            <View style={localstyles.sectionTitleContainer}>
              <Text style={localstyles.sectionTitle}>
                Préparation:
              </Text>
            </View>

            <View style={localstyles.stepsContainer}>            
                {this.data.steps.map( (it, index) => {
                  return <RecipeStep  item={it} key={index}/>
                })}
            </View> 

            


          </View>
        </ScrollView>
      </SafeAreaView>
    )
  }
}

const localstyles = StyleSheet.create({
  starsContainer: {
    maxWidth:'35%',
    marginRight:35,
    backgroundColor:COLORS.pageBackgroundGray,
  },
  imageStyle:{
    borderRadius:20,
    justifyContent:'center',
    minHeight:200, 
    maxHeight:300, //faudrait un truc pour calculer le Height qui va bien entre les deux là
    width:'100%'
  },
  infosContainer:{
    marginVertical:10,
    paddingHorizontal:10,
    flexDirection:"row",
    flexGrow:1,
    flex:1,
    flexWrap:'wrap',
    alignItems:'center',
    justifyContent:'space-evenly'
  },
  infoIcon:{
    width:25,
    height:25
  },
  infoIconContainer:{
    alignItems:'center',
    paddingHorizontal:10,
  },

  mainContainer:{
    paddingHorizontal:"5%"
  },
  sectionTitleContainer:{

  },
  sectionTitle:{
    fontSize:25
  },
  ingredientsContainer:{

  },
  stepsContainer:{

  }
});
