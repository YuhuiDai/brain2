import React, { Component } from 'react';
import {Dimensions,Text,ScrollView,Image,View, Button} from 'react-native';

export default class Categlog extends React.Component {
	static navigationOptions = {
	    title: 'History',
        headerTintColor: 'white',
        headerRight: <Image source={require('../resource/search.png')} style={{width:24, height:24, marginRight: 20}}/>,
        headerStyle: {
            backgroundColor: 'rgba(152, 152, 152, 0.8)',
        },
        headerTitleStyle: {
            fontFamily:  'Georgia',
            fontSize: 24
        },
	  };
	render() {
	    return (
	      <ScrollView>
              <Text style={{fontFamily: "Georgia", textAlign:'center', fontSize:26, paddingTop:20}}>My Favorite Topics</Text>
	        <Image source={require('../resource/history.png')} style={{ resizeMode:'contain', width: Dimensions.get('window').width}}/>
	      </ScrollView>
	    );
	  }
}


