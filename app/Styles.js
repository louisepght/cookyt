import { StyleSheet} from 'react-native';
import { color } from 'react-native-reanimated';


const colors = new Map();
colors.set("white", "#fff");
colors.set("vividGreen", "#4cd736");


const styles = StyleSheet.create({
    container: {
      flex: 1,
      //backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    imagesMenu: {
      width:30,
      height:30,
      
    },
    iconContainer:{
      width:45,
      height:45,
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 20,
  
    }
  });
  
  export default {styles, colors};
