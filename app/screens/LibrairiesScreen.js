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


class LibrairiesScreen extends Component{

  constructor( props) {
    super(props);
    this.state = {text: ''}
    this.glistItems=[];
  }


  componentDidMount(){
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


           

            <View>
              <FlatList
                scrollEnabled={false}
                data={recipelibraries}
                keyExtractor={item => item.libraryname}
                renderItem={({item}) => (
                  <ListComponent navigation={this.props.navigation} backgroundColor={COLORS.kaki} fontcolor={COLORS.white} text={item.libraryname} imageUri={require('../assets/crevettes.jpg')}></ListComponent>
                )}>
              </FlatList>
            
             
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
  });

export default LibrairiesScreen;