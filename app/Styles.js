import { StyleSheet, Platform, StatusBar} from 'react-native';
import { COLORS } from './values/colors';


const colors = new Map();
colors.set("white", "#fff");
colors.set("vividGreen", "#4cd736");

console.log(Platform.OS)
console.log(StatusBar.currentHeight)



export default styles = StyleSheet.create({

    container: {
      flex: 1,
      backgroundColor: colors.get("white"),
      alignItems: 'center',
      justifyContent: 'center',
    },
    imagesMenu: {
      width:30,
      height:30,
      tintColor: '#000',
      bottom:2,
      
    },
    iconContainer:{
      width:45,
      height:45,
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 20,
    },

    androidSafeArea: {
      paddingTop: Platform.OS === 'android' ?  StatusBar.currentHeight : 0,
      flex:1,
      paddingBottom:75,
      backgroundColor:COLORS.pageBackgroundGray

    },

    groceryListComponent:{
      backgroundColor:colors.get("vividGreen"),
      width:'80%',
      padding:20,
      marginTop:20,
      //alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 20,
    },
    groceryListComponentBottom:{
      flexDirection:'row',
      alignItems:'center',
      flexWrap:'wrap'
    },

    titleText: {
      fontSize:30,
      fontWeight:'bold',
      margin: 20,
    },
    subtitleText: {
      fontSize:20,
      fontWeight:'bold',
      marginLeft: 15,
      marginTop: 20,
      marginBottom: 0,
    },
    titleContainer:{
      //margin:10,
      padding:10
    },
    GroceryListScreenContainer: {
     // backgroundColor: '#fe1',
      //alignItems:"center",
      //paddingBottom:75,
    },

    addAListContainer:{
      backgroundColor: colors.get("vividGreen"),
      borderRadius:15,
      width:30,
      height:30,
      justifyContent:'center',
      alignItems:'center',
    },

    writeSomethingViewContainer:{
      marginLeft:15,
      marginRight:15,
      marginBottom:15,
      paddingRight:15,
      justifyContent: "space-around",
      flexDirection:'row',
      alignItems:'center',
      backgroundColor:COLORS.white,
      flex:1,
      
      borderColor:COLORS.grey,
      borderWidth:0.5,
      borderTopLeftRadius:12,
      borderTopRightRadius:12,
      borderBottomLeftRadius:18,
      borderBottomRightRadius:12,
      overflow: 'hidden',
      elevation:5

    },
    writeSomethingTextView: {
      padding:10,
      //width:'70%',
      //borderColor:'#555',
      //borderWidth:0.2,
      borderRadius:25,
      //backgroundColor:"#FFF",
      flex:4
    },
    inputTextKeyboard:{

    },
    imageButonAdd:{
      width:20,
      height:20,
      tintColor: '#fff',
    },
    h2:{
      fontSize:20,
      fontWeight:'500',
   
    }
  

  });


  //export default {styles};
