import React from 'react'
import { StyleSheet, Platform, Image, Text, View } from 'react-native'
import { SwitchNavigator, createStackNavigator, createAppContainer } from 'react-navigation'

// import the different screens
import Loading from './Loading'
import SignUp from './SignUp'
import Login from './Login'
import Main from './Main'

// create our app's navigation stack
const App = SwitchNavigator(
  {
    Loading,
    SignUp,
    Login,
    Main
  },
  {
    initialRouteName: 'Loading'
  }
)

//export default App

import HomeScreen from './Main';

const AppNavigator = createStackNavigator({
  Home: { screen: HomeScreen }
});

export default createAppContainer(AppNavigator);