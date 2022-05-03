import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

//import { colors, styles } from './app/Styles'


//Screens
import Home from './app/screens/Home';
import Search from './app/screens/Search';
import LibrairiesScreen from './app/screens/LibrairiesScreen';
import GroceryList from './app/screens/GroceryList';
import { withSafeAreaInsets } from 'react-native-safe-area-context';

//Scree names
const homeScreen = 'Home';
const searchScreen = 'Search';
const groceryScreen = 'Grocery';
const librariesScreen = 'Librairies';

const Tab = createBottomTabNavigator();


export default function App() {
  return (
    <NavigationContainer>
    <Tab.Navigator
      screenOptions={{
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
      <Tab.Screen name="Search" component={Search}  options={{
        tabBarIcon: ({focused}) => (
          <View style= { [styles.iconContainer, {backgroundColor: focused? '#fff' : '#4cd736'}]}>
            <Image source={require('./app/assets/search.png')}
            resizeMode='contain'
            style={[styles.imagesMenu]}/>
          </View>
        )
      }}/>
      <Tab.Screen name="Grocery" component={GroceryList}  options={{
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
  )
}

      /*
    <NavigationContainer>
      <Tab.Navigator
      initialRouteName={homeScreen}
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, color, size}) => {
          let iconName;
          let rn = route.name;
          if(rn === homeScreen){
            iconName = focused ? 'home' : 'planet'
            return<Image source={require('./app/assets/home.png')} style = {styles.imagesMenu}/>

          }
          else if(rn === groceryScreen){
            iconName = focused ? 'basket' : 'airplane'
            return<Image source={require('./app/assets/shopping-cart.png')} style = {styles.imagesMenu}/>

          }
          else if(rn === searchScreen){
            iconName = focused ? 'searched' : 'medkit'
            return<Image source={require('./app/assets/home.png')} style = {styles.imagesMenu}/>

          }
          else if(rn === librariesScreen){
            iconName = focused ? 'list' : 'list-box'
            return<Image source={require('./app/assets/home.png')} style = {styles.imagesMenu}/>

          }

          //return<Image source={require('./app/assets/home.png')} style = {styles.imagesMenu}/>
          //return <Icon name={iconName} size ={size} color={color}/>

        }
      })}>

        <Tab.Screen name ={homeScreen} component={Home}/>
        <Tab.Screen name ={groceryScreen} component={GroceryList}/>
        <Tab.Screen name ={searchScreen} component={Search}/>
        <Tab.Screen name ={librariesScreen} component={LibrairiesScreen}/>

      </Tab.Navigator>
   

    </NavigationContainer>
    }

    




  );
}*/

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
