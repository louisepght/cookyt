import { StyleSheet, Text, View, StatusBar, SafeAreaView, FlatList, Image } from 'react-native'
import React from 'react'
import styles from '../Styles'
import { ScrollView } from 'react-native-gesture-handler';
import { Component } from 'react/cjs/react.production.min';
import { COLORS } from '../values/colors';
import { backgroundColor } from 'react-native/Libraries/Components/View/ReactNativeStyleAttributes';
import recipelibraries from '../lists/recipelibraries';
import ListComponent from '../components/ListComponent';
import SearchBar from '../components/SearchBar';
import NavBar from '../components/NavBar';
import LibraryListModel from '../models/LibraryListModel'


class LibrairiesScreen extends Component{

  constructor( props) {
    super(props);
    this.state = {text: ''}
    this.glistItems=[];
  }


  componentDidMount() {
    //après avoir monté le composant, on charge les listes depuis le fichier JSON et on les ajoute au tableau glistItems
    const data = require('../lists/recipelibraries.json');
    for(var i=0; i<data.length; i++){
      var obj = data[i];
      if(obj.hasOwnProperty('libraryname') && obj.libraryname.length>0){
        let liste = new LibraryListModel(obj.libraryname);
        if(obj.hasOwnProperty('contributors')){
          liste.setContributors(obj.contributors);
        }
        {/** 
        if(obj.hasOwnProperty('recipes')){
          liste.setItems(obj.items);
        }
        */}
        this.glistItems.push(liste);
      }
    }
    this.setState({ text:'' }); //ça sert juste à appeler render une fois qu'on a ajouté les listes de courses au tableau
  }

  handleAddGlist = () => {
    if(this.state.text && this.state.text.length>0){
      let liste = new LibraryListModel(this.state.text);
      this.glistItems.push(liste);
      this.setState({text:''});
      Keyboard.dismiss();
      this.textInput.clear();
      //il faut aussi ajouter la nouvelle liste au json
      data.push(liste);
      //await writeJsonFile('../data/groceries.json', data);    
    }
  }

  render(){
    return(
      <SafeAreaView  style={styles.androidSafeArea}>
        <View style={{flexDirection:'column'}}>
          <ScrollView
          scrollEventThrottle={16}
          >
            <View style={styles.titleContainer}>
              <Text style = {styles.titleText}>
                Vos Bibliothèques
              </Text>
            </View>


            <View style={{flex:1}}>


              <SearchBar></SearchBar>
              

            
            </View>


           

            <View style={localstyles.container}>
              
              {/* Liste des listes de courses    
              <FlatList
                scrollEnabled={false}
                data={recipelibraries}
                keyExtractor={item => item.libraryname}
                renderItem={({item}) => (
                  <ListComponent navigation={this.props.navigation} backgroundColor={COLORS.kaki} fontcolor={COLORS.white} text={item.libraryname} imageUri={require('../assets/crevettes.jpg')}></ListComponent>
                )}>
              </FlatList>
              */}

              {this.glistItems.map( (item, index) => {
                return  <ListComponent key={index} navigation={this.props.navigation} liste={item} backgroundColor={COLORS.kaki} fontcolor={COLORS.white} text={item.libraryname} imageUri={require('../assets/crevettes.jpg')}></ListComponent>
                })}
            
             
            </View>





            <View style={{height:100}}></View>

          </ScrollView>
        </View>
  </SafeAreaView>
    );
  }
 
}

const localstyles = StyleSheet.create({
    librairiesScreen: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor:COLORS.pageBackgroundGray,
    },
    container: {
      //flex: 1,
      alignItems:"center",
      paddingBottom:75,
    }
  });

export default LibrairiesScreen;