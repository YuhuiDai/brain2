import React, {Component } from 'react';
import {StyleSheet,Text,Image,View, Button, TouchableOpacity,TouchableHighlight} from 'react-native';
import Brain from './js/brain.js'
import CataglogScreen from './js/catalog.js'
import HomeScreen from './js/home.js'
import RecommendNews from './js/recommended_news.js'
import ExploreScreen from './js/explore.js'
import SocialFeedScreen from './js/socialFeed.js'
import { StackNavigator } from 'react-navigation';
import { TabNavigator } from "react-navigation";

class LoginScreen extends React.Component {
   static navigationOptions = {
    header: null
   }
  render() {
    const { navigate } = this.props.navigation;
    console.log(this.props);
    return (
      <View style={styles.container}>
        <Text style={styles.mainText}>MyBrain</Text>
        <Image source={require('./resource/brain_wht.png')} style={{height: 300, width: 300, margin: 20 }}/>
        <TouchableHighlight onPress={() => this.props.navigation.navigate('Home')} underlayColor="white">
          <View style={styles.button}>
            <Text style={styles.buttonText}>Login</Text>
          </View>
        </TouchableHighlight>
      </View>
    );
  }
}

const MainScreenNavigator = TabNavigator({
  Home: { screen: HomeScreen },
  socialFeed: { screen: SocialFeedScreen},
  Explore: { screen: ExploreScreen },
}, {
  animationEnabled: true,
  tabBarOptions: {
    activeTintColor: '#ffbdb2',
  }});

const SimpleApp = StackNavigator({
  Login: {screen: LoginScreen},
  Home: {screen: MainScreenNavigator},
  Catalog: {screen: CataglogScreen}
}, );
export default SimpleApp;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'black',
      alignItems: 'center',
      justifyContent: 'center',
    },
    mainText: {
      fontFamily:  'Cochin',
      color:"#FFE4E1", 
      fontSize: 40, 
    },
    button: {
      marginTop: 30,
      width: 200,
      alignItems: 'center',
      backgroundColor: 'transparent',
      borderRadius: 15,
      borderWidth: 2,
      borderColor: '#FFE4E1',
    },
    buttonText: {
      fontFamily:  'Cochin',
      padding: 10,
      fontSize: 20, 
      color: '#FFE4E1'
  }
});



