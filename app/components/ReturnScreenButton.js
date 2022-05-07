import { View, Text } from 'react-native'
import { backgroundColor } from 'react-native/Libraries/Components/View/ReactNativeStyleAttributes'
import styles from '../Styles'

export default function ReturnScreenButton(props) {
const { navigation } = props;
  return (
    <View style={{backgroundColor:"#c23", padding:20}}
    onStartShouldSetResponder={() => navigation.pop()}>
      <Text>ReturnScreenButton</Text>
    </View>
  )
}