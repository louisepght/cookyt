import { StyleSheet, Text, View, StatusBar, SafeAreaView, FlatList } from 'react-native'
import React from 'react'
import styles from '../Styles'
import { ScrollView } from 'react-native-gesture-handler';
import { Component } from 'react/cjs/react.production.min';
import { COLORS } from '../values/colors';
import { backgroundColor } from 'react-native/Libraries/Components/View/ReactNativeStyleAttributes';
import recipelibraries from '../lists/recipelibraries';
import ListComponent from '../components/ListComponent';
import SearchBar from '../components/SearchBar';


class LibrairiesScreen extends Component{
  componentWillMount(){
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
              <Text style = {styles.titleText}>
                Search bar
              </Text>

              <SearchBar></SearchBar>
              

            
            </View>


            <View>
              <Text style = {styles.titleText}>
              menu nav bar
              </Text>
             
            </View>

            <View>
              <FlatList
                data={recipelibraries}
                keyExtractor={item => item.libraryname}
                renderItem={({item}) => (
                  <ListComponent backgroundColor={COLORS.kaki} fontcolor={COLORS.white} text={item.libraryname} imageUri={require('../assets/crevettes.jpg')}></ListComponent>
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