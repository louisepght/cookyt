import { StyleSheet, Platform, StatusBar} from 'react-native';


const colors = new Map();
colors.set("white", "#fff");
colors.set("vividGreen", "#4cd736");

console.log(Platform.OS)
console.log(StatusBar.currentHeight)



export default StyleSheet.create({
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
    }
  });
  
  //export default {styles};
