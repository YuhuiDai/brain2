import React, { Component } from 'react';
import Brain from './brain.js';
import CataglogScreen from './catalog.js';
import RecommendNews from './recommended_news.js';
import ExploreScreen from './explore.js';
import SocialFeedScreen from './socialFeed.js';
import { StackNavigator } from 'react-navigation';
import { TabNavigator } from "react-navigation";
import {Platform,StyleSheet,Text,ScrollView,Image,View, Button} from 'react-native';

export default class LoginScreen extends React.Component {
  
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={{backgroundColor:"black", flex:1}}>
        <Text style={{color:"white", fontSize: 20, }}>My Brain</Text>
        <Image source={require('../resource/brain_gry.png')} style={{height: 300, width: 300, margin: 20 }}/>
        <Button onPress={() => this.props.navigation.navigate('Home')} title="Login"/>
      </View>
    );
  }
}
const SimpleApp = StackNavigator({
  Home: { 
    screen: MainScreenNavigator,
    navigationOptions: {
      title: 'MyBrain',
    }
  },
  Catalog: {screen: CataglogScreen}
});


