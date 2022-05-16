import { StyleSheet, Platform, StatusBar} from 'react-native';


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
      backgroundColor: colors.get("white"),
    },

    groceryListComponent:{
      backgroundColor:'#22aa55',
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
    titleContainer:{
      margin:10,
      padding:10
    },
    h2:{
      fontSize:20,
      fontWeight:'500',
   
    }
  

  });


  //export default {styles};
