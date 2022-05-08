import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'
import { backgroundColor } from 'react-native/Libraries/Components/View/ReactNativeStyleAttributes'
import styles from '../Styles'

export default function ReturnScreenButton(props) {
const { navigation } = props;
  return (
    <TouchableOpacity style={localStyles.container}
    onPress={() => navigation.pop()}>
      <Image source={require('../assets/angle-small-down.png')}
            resizeMode='contain'
            style={[localStyles.imageBack]}/>
    </TouchableOpacity>
  )
}

const localStyles = StyleSheet.create({
  container:{
    marginTop:5,
    padding:10,
    //backgroundColor:"#722",
  },
  imageBack:{
    width:30,
    height:30,
  }
});
