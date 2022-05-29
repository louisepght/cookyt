import { Text, View, SafeAreaView, StyleSheet, Image } from 'react-native'
import React, { Component } from 'react'
import styles from '../Styles'
import StarRating from 'react-native-star-rating';
import { COLORS } from '../values/colors';
import * as data from '../data/recipes/spaghettis_crevettes.json';
import ReturnScreenButton from '../components/ReturnScreenButton';
import { ScrollView } from 'react-native-gesture-handler';


export default class RecipeScreen extends Component {

  constructor(props){
    super(props);
    this.state = {text: ''};
    //console.log(props.route.params.recipe);
    
  }

  componentDidMount(){
    //console.log(path)
    const data = require("../data/recipes/spaghettis_crevettes.json");
    //console.log(data);
    this.setState({text:''})
  }

  render() {
    //console.log(data);
    return (
      <SafeAreaView style={styles.androidSafeArea}>
        <View style={[styles.titleContainer , {flexDirection:'row'}]}>
          <ReturnScreenButton navigation={this.props.navigation}/>
          <Text style={[styles.titleText, {margin:10, marginTop:0}]}>{data.name}</Text>
        </View>
        
        <Image style={localstyles.imageStyle} source={{uri: data.image}}></Image>

        <ScrollView>
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
                rating={data.rating}
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
                {data.rating}/5
              </Text>
            </View>
          </View>

          <View style={localstyles.mainContainer}>
            <View style={localstyles.sectionTitleContainer}>
              <Text style={localstyles.sectionTitle}>
                Ingrédients:
              </Text>

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
  }
});
