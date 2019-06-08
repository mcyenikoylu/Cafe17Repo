/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';

import firebase from 'firebase';
import dbconfig from './firebaseconn';

import { Container, Item, Form, Input, Button, Label } from "native-base";

import { createAppContainer, createStackNavigator, StackActions, NavigationActions } from 'react-navigation';

// const instructions = Platform.select({
//   ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
//   android:
//     'Double tap R on your keyboard to reload,\n' +
//     'Shake or press menu button for dev menu',
// });

// export default class App extends React.Component {
  
//   constructor(props) {
//     super(props);
//     this.state = {
//       email: "",
//       password: ""
//     };
//   }

//   componentWillMount()  {
//     var config = dbconfig;
//     firebase.initializeApp(config); 
//   }
  
//   SignUp = (email, password) => {
//     try {
//       firebase.auth().createUserWithEmailAndPassword(email, password);
//     } catch (error) {
//       console.log(error.toString(error));
//     }
//   };

//   SignIn = (email, password) => {
//     try {
//       firebase.auth().signInWithEmailAndPassword(email, password);
//       firebase.auth().onAuthStateChanged(user => {
//          alert(user.email);
//       })
// } catch (error) {
//       console.log(error.toString(error));
//     }
//   };

//   render() {
//     return (
//       // <View style={styles.container}>
//       //   <Text style={styles.welcome}>Welcome to React Native!</Text>
//       //   <Text style={styles.instructions}>To get started, edit App.js</Text>
//       //   <Text style={styles.instructions}>{instructions}</Text>
//       // </View>
      
//       <Container style={styles.container}>
//         <Form>
//           <Item floatingLabel>
//             <Label>Email</Label>
//             <Input autoCapitalize="none" 
//             autoCorrect={false}
//             onChangeText={email => this.setState({ email })}
//              />
//           </Item>
//           <Item floatingLabel>
//             <Label>Sifre</Label>
//             <Input
//               secureTextEntry={true}
//               autoCapitalize="none"
//               autoCorrect={false}
//               onChangeText={password => this.setState({ password })}
//             />
//           </Item>
//           <Button full rounded style={{ marginTop: 20 }}
//           onPress={() => this.SignIn(this.state.email, this.state.password)} >
//             <Text>Giris Yap</Text>
//           </Button>
//           <Button full rounded success style={{ marginTop: 20 }}
//           onPress={() => this.SignUp(this.state.email, this.state.password)} > 
//             <Text>Kayit Ol</Text>
//           </Button>
//         </Form>
//       </Container>



//     );
//   }
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: '#F5FCFF',
//   },
//   welcome: {
//     fontSize: 20,
//     textAlign: 'center',
//     margin: 10,
//   },
//   instructions: {
//     textAlign: 'center',
//     color: '#333333',
//     marginBottom: 5,
//   },
// });

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    // alignItems: "center",
    justifyContent: "center"
  }
});

class HomeScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Home Screen</Text>
        
        <Button full rounded style={{ marginTop: 20 }}
          onPress={() => {
            this.props.navigation.dispatch(StackActions.reset({
              index: 0,
              actions: [
                NavigationActions.navigate({ routeName: 'Details' })
              ],
            }))
          }}
          >
            <Text>Details</Text>
          </Button>

      </View>
    );
  }  
}

class DetailsScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Details Screen</Text>

        <Button full rounded style={{ marginTop: 20 }}
          onPress={() => {
            this.props.navigation.dispatch(StackActions.reset({
              index: 0,
              actions: [
                NavigationActions.navigate({ routeName: 'Home' })
              ],
            }))
          }}
          >
            <Text>Home</Text>
          </Button>


      </View>
    );
  }  
}

const AppNavigator = createStackNavigator(
  {
    Home: HomeScreen,
    Details: DetailsScreen
  },
  {
    initialRouteName: "Details"
  }
);

export default createAppContainer(AppNavigator);

// const AppContainer = createAppContainer(AppNavigator);

// export default class App extends React.Component {
//   render() {
//     return <AppContainer />;
//   }
// }