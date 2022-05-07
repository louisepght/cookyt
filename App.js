import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


//import { colors, styles } from './app/Styles'


//Screens
import Home from './app/screens/Home';
import SearchScreen from './app/screens/SearchScreen';
import LibrairiesScreen from './app/screens/LibrairiesScreen';
import GroceryListScreen from './app/screens/GroceryListScreen';
import GroceryListScreenNavigator from './app/components/CustomStackNavigation';
import GroceryListDetails from './app/screens/GroceryListDetails';
import { withSafeAreaInsets } from 'react-native-safe-area-context';
import styles from './app/Styles'

//Scree names
const homeScreen = 'Home';
const searchScreen = 'Search';
const groceryScreen = 'Grocery';
const librariesScreen = 'Librairies';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();





export default function App() {
  return (

    <NavigationContainer>
    {/* Définition de la barre de navigation en bas de l'écran */}
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle:{
          backgroundColor : '#000',
          position: 'absolute',
          height: 75,
          borderTopLeftRadius: 15,
          borderTopRightRadius: 15 

        }
      }}>
      <Tab.Screen name="Home" component={Home} options={{
        tabBarIcon: ({focused}) => (
          <View style= { [styles.iconContainer, {backgroundColor: focused? '#fff' : '#4cd736'}]}>
            <Image source={require('./app/assets/home.png')}
            resizeMode='contain'
            style={[styles.imagesMenu]}/>
          </View>
        )
      }}/>
      <Tab.Screen name="Search" component={SearchScreen}  options={{
        tabBarIcon: ({focused}) => (
          <View style= { [styles.iconContainer, {backgroundColor: focused? '#fff' : '#4cd736'}]}>
            <Image source={require('./app/assets/search.png')}
            resizeMode='contain'
            style={[styles.imagesMenu]}/>
          </View>
        )
      }}/>
      <Tab.Screen name="Grocery" component={GroceryListScreenNavigator}  options={{
        tabBarIcon: ({focused}) => (
          <View style= { [styles.iconContainer, {backgroundColor: focused? '#fff' : '#4cd736'}]}>
            <Image source={require('./app/assets/shopping-cart.png')}
            resizeMode='contain'
            style={[styles.imagesMenu]}/>
          </View>
        )
      }}/>
      <Tab.Screen name="Librairies" component={LibrairiesScreen}  options={{
        tabBarIcon: ({focused}) => (
          <View style= { [styles.iconContainer, {backgroundColor: focused? '#fff' : '#4cd736'}]}>
            <Image source={require('./app/assets/menu-burger.png')}
            resizeMode='contain'
            style={[styles.imagesMenu]}/>
          </View>
        )
      }}/>


    </Tab.Navigator>
    </NavigationContainer>
  )}
  /*
  <NavigationContainer>

    {/* Définition de tous les écrans dans lesquels on peut naviguer *}
    
    <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Search" component={SearchScreen} />
        <Stack.Screen name="GroceryList" component={GroceryListScreen} />
        <Stack.Screen name="GroceryList details" component={GroceryListDetails} />
        <Stack.Screen name="Librairies" component={LibrairiesScreen} />

    </Stack.Navigator>
    
    </NavigationContainer> */



const styles2 = StyleSheet.create({
  container: {
    flex: 1,
    //backgroundColor: '#fff',
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
  }

});
