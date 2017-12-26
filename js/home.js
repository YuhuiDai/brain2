import React, { Component } from 'react';
import MainBrain from './mainbrain.js';
import CataglogScreen from './catalog.js';
import RecommendNews from './recommended_news.js';
import ExploreScreen from './explore.js';
import SocialFeedScreen from './socialFeed.js';
import { StackNavigator } from 'react-navigation';
import { TabNavigator } from "react-navigation";
import {TouchableHighlight,StyleSheet,Text,ScrollView,Image,View, Button} from 'react-native';

export default class HomeScreen extends React.Component {
    static navigationOptions = {
        title: 'MyBrain',
        headerTintColor: 'white',
        headerLeft: <Image source={require('../resource/assets/avi/icon-avi.png')} style={{width:40, height:40, marginLeft: 13}}/>,
        headerRight: <Image source={require('../resource/search.png')} style={{width:24, height:24, marginRight: 20}}/>,
        headerStyle: {
            backgroundColor: 'rgba(152, 152, 152, 0.8)',
        },
        headerTitleStyle: {
            fontFamily:  'Georgia',
            fontSize: 24
        },
        tabBarLabel: 'Home',
        labelStyle: {fontFamily:  'Georgia'},
        tabBarIcon: ({ tintColor }) => (
            <Image
                source={require('../resource/home.png')}
                style={[styles.icon, {tintColor: tintColor}]}/>
        ),
    };

    constructor(props) {
        super(props)
    }

    render() {
        var {navigate} = this.props.navigation;
        return (
            <ScrollView showsVerticalScrollIndicator= {false}>
              <TouchableHighlight onPress={() => navigate('Catalog')} underlayColor="white">
                <Text style={styles.welcome}>My Brain</Text>
              </TouchableHighlight>
              <MainBrain style={{alignItems: 'center', justifyContent: 'center',}}/>
              <RecommendNews/>
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    icon: {
        width: 26,
        height: 26,
    },
    welcome: {
        fontFamily:  'Georgia',
        fontSize: 20,
        textAlign: 'left',
        margin: 10,
    },
});

