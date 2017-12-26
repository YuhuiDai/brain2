import React, { Component } from 'react';
import {Platform,StyleSheet,Text,ScrollView,Image,View, Button} from 'react-native';

export default class ExploreScreen extends React.Component {
    static navigationOptions = {
        title: 'Explore',
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
        tabBarLabel: 'Explore',
        labelStyle: {fontFamily:  'Georgia'},
        tabBarIcon: ({ tintColor }) => (
			<Image
				source={require('../resource/icon-brain.png')}
				style={[styles.icon, {tintColor: tintColor}]}/>
        ),
    };
    render() {
        return (
			<View style={{flex:1, flexDirection: 'column'}}>
				<View style={[{marginTop: 25},styles.row]}>
					<View>
						<Image source={require('../resource/assets/braincells/1.png')} style={styles.brain}/>
						<Text style={styles.sub}>Elections</Text>
					</View>
					<View>
						<Image source={require('../resource/assets/braincells/2.png')} style={styles.brain}/>
						<Text style={styles.sub}>Puerto Rico</Text>
					</View>
					<View>
						<Image source={require('../resource/assets/braincells/3.png')} style={styles.brain}/>
						<Text style={styles.sub}>Racism</Text>
					</View>
				</View>
				<View style={styles.row}>
					<View>
						<Image source={require('../resource/assets/braincells/4.png')} style={styles.brain}/>
						<Text style={styles.sub}>Healthcare</Text>
					</View>
					<View>
						<Image source={require('../resource/assets/braincells/5.png')} style={styles.brain}/>
						<Text style={styles.sub}>Russia</Text>
					</View>
					<View>
						<Image source={require('../resource/assets/braincells/6.png')} style={styles.brain}/>
						<Text style={styles.sub}>Scandals</Text>
					</View>
				</View>
				<View style={styles.row}>
					<View>
						<Image source={require('../resource/assets/braincells/7.png')} style={styles.brain}/>
						<Text style={styles.sub}>North Korea</Text>
					</View>
					<View>
						<Image source={require('../resource/assets/braincells/8.png')} style={styles.brain}/>
						<Text style={styles.sub}>Gun Control</Text>
					</View>
					<View>
						<Image source={require('../resource/assets/braincells/9.png')} style={styles.brain}/>
						<Text style={styles.sub}>2017 Recap</Text>
					</View>
				</View>


			</View>
        );
    }
}
const styles = StyleSheet.create({
    icon: {
        width: 26,
        height: 26,
    },
    brain: {
        justifyContent: 'center',
        width: 100,
        height: 111,
    },
    sub: {
        fontFamily:  'Georgia',
        fontSize: 16,
        justifyContent: 'center',
        textAlign: 'center',
        margin: 10,
    },
    row: {
        margin:10,
        flex: 1,
        flexDirection: 'row',
        justifyContent:'space-between'
    }
});
