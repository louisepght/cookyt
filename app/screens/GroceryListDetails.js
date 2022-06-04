import React, {useState} from 'react';
import { StyleSheet, Text, View, KeyboardAvoidingView, Keyboard, Platform, TextInput, TouchableOpacity, Image, Alert  } from 'react-native'
import PropTypes from 'prop-types'
import styles from '../Styles'
import { menuBarHeight } from '../values/constantes';
import ReturnScreenButton from '../components/ReturnScreenButton'
import SharedUser from '../components/SharedUser'
import GroceryItem from '../components/GroceryItem';
import ItemModel from '../models/itemModel';
import { COLORS } from '../values/colors';
import { ScrollView } from 'react-native-gesture-handler'
 

class GroceryListDetails extends React.Component{

  constructor(props){
    super(props);
    this.state = {text: ''}
    this.plistItems=[];
    this.liste = props.route.params.liste;

    //let {liste} = props.route.params;
    //this.liste.name="oui";

    //let [plist, setPlist] = useState(); //utilisé pour le produit à ajouter
    //let [plistItems, setPlistItems] = useState([]); //utilisé pour tous les produits de la liste
  }

  componentDidMount() {
    //après avoir monté le composant, on charge les listes depuis le fichier JSON et on les ajoute au tableau glistItems
    this.setState({ text:'' }); //ça sert juste à appeler render une fois qu'on a ajouté les listes de courses au tableau
    //console.log(this.liste);
    //console.log("TAILLE:");
    //console.log(menuBarHeight);
  }

  handleAddPlist = () => { //Pour l'ajout d'un produit dans la liste des produits
    if(this.state.text && this.state.text.length>0){
      let item = new ItemModel(this.state.text);
      this.liste.items.push(item);
      this.setState({text:''});
      Keyboard.dismiss();
      this.textInput.clear();  
    }
  }
  
  addUser = () => {
    Alert.alert(
      "Attention",
      "Cette fonction n'a pas encore été implémentée",
      [

        { text: "OK", onPress: () => console.log("OK Pressed") }
      ]
    );
  }

  render(){
    return (
      <View style={ [styles.androidSafeArea]}>
        <ReturnScreenButton navigation={this.props.navigation}/>
        <View style={localStyles.mainContainer}>

          <ScrollView>
            <View style={localStyles.titleContainer}>
              <Text style={localStyles.titleText}>
                {this.liste.name}
              </Text>
            </View>

            {/*
              Section "partagée avec qui?"
            */}
            <View style={localStyles.sharingContainer}>
              <View style={localStyles.aboveSharingUser}>
                <Text style={localStyles.shareText}>
                  Partagé avec
                </Text>
                
              </View>
              <View style={localStyles.sharingcontainer}>

                {this.liste.contributors.map( (it, index) => {
                  return <SharedUser navigation={this.props.navigation} name={it} key={index}/>
                })}
                <TouchableOpacity style={localStyles.addUser} onPress={()=> this.addUser()}>
                <Image source={require('../assets/user-add.png')}
                  resizeMode='contain'
                  style={[styles.imageButonAdd]}/>
                </TouchableOpacity>
              </View>
            </View> 

            {/*
              Section "produits de la liste"
            */}

            <KeyboardAvoidingView 
              behavior={Platform.OS === "ios" ? "padding" : "height"}
              style={[styles.writeSomethingViewContainer, {marginTop:25}]}>
              <View style={styles.writeSomethingTextView}>
                <TextInput style={styles.input} placeholder={"Ajouter un produit"} 
                  ref={input => { this.textInput = input }}
                  onChangeText={(text) => this.setState({text})}/>
              </View>
              <TouchableOpacity style={styles.addAListContainer} onPress={() => this.handleAddPlist()}>
              <Image source={require('../assets/add2.png')}
                  resizeMode='contain'
                  style={[styles.imageButonAdd]}/>
              </TouchableOpacity>
            </KeyboardAvoidingView>

            
            <View style={localStyles.itemsContainer}>            
                {this.liste.items.map( (it, index) => {
                  //console.log(it);
                  
                  return <GroceryItem  item={it} key={index}/>
                })}
              
              

            </View> 
              
            



          </ScrollView>
        </View>
      </View>
    )
  }
}

const localStyles = StyleSheet.create({
  mainContainer:{
    paddingLeft:"8%",
    paddingRight:"8%",
  },
  titleContainer:{
    marginBottom:10,
  },
  titleText:{
    fontSize:22,
  },
  aboveSharingUser: {
    flexDirection:"row",
    alignContent:"center",
    marginRight:"0%"
    
  },
  shareText:{
    fontSize:18,
  },
  sharingcontainer:{
    flexDirection:'row',
    flexGrow:1,
    flex:1,
    flexWrap:'wrap',
    alignItems:'center',
  },
  addUser:{      
    backgroundColor: COLORS.neonGreen,
    borderRadius:18,
    width:36,
    height:36,
    marginHorizontal:2,
    justifyContent:'center',
    alignItems:'center'
  },
  itemsContainer:{
    alignItems:'flex-start',
    //marginVertical:8,
    paddingBottom: menuBarHeight,
    flex:1
  }
})
export default GroceryListDetails
