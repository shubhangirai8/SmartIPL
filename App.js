import {createAppContainer} from 'react-navigation';
import { createStackNavigator} from 'react-navigation-stack';
import { StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native';
import HomeScreen from "./src/screens/HomeScreen";
import LibraryScreen from "./src/screens/LibraryScreen";


const navigator = createStackNavigator(
  {
    
    Home : HomeScreen,
    Library : LibraryScreen
  },

{
initialRouteName : "Home",
defaultNavigatorOptions : {
  title : "SmartIPL"
}
}
);
export default createAppContainer(navigator);
