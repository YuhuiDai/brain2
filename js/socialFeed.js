import React, { Component } from 'react';
import {Platform,StyleSheet,Text,ScrollView,Image,View, Button} from 'react-native';
import Influencer from './brain';
import data from './data';

export default class SocialFeed extends React.Component {
    static navigationOptions = {
        title: 'Feed',
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
        tabBarLabel: 'Feed',
        labelStyle: {fontFamily:  'Georgia'},
        tabBarIcon: ({ tintColor }) => (
			<Image
				source={require('../resource/feed.png')}
				style={[styles.icon, {tintColor: tintColor}]}/>
        ),
    };
    render() {
        return (
		<ScrollView>
			<View style={styles.row}>
				<View style={styles.col}>
					<Image source={require('../resource/assets/avi/icon-avi2.png')} style={styles.user}/>
					<Influencer
						pieWidth={130}
						pieHeight={130}
						width={240}
						height={150}
						data={data.userdata.user2} />
				</View>
				<View style={styles.col}>
					<Image source={require('../resource/assets/avi/icon-avi3.png')} style={styles.user}/>
					<Influencer
						pieWidth={130}
						pieHeight={130}
						width={240}
						height={150}
						data={data.userdata.user3} />
				</View>
			</View>
			<View style={styles.row}>
				<View style={styles.col}>
					<Image source={require('../resource/assets/avi/icon-avi4.png')} style={styles.user}/>
					<Influencer
						pieWidth={130}
						pieHeight={130}
						width={240}
						height={150}
						data={data.userdata.user4} />
				</View>
				<View style={styles.col}>
					<Image source={require('../resource/assets/avi/icon-avi5.png')} style={styles.user}/>
					<Influencer
						pieWidth={130}
						pieHeight={130}
						width={240}
						height={150}
						data={data.userdata.user9} />
				</View>
			</View>
			<View style={styles.row}>
				<View style={styles.col}>
					<Image source={require('../resource/assets/avi/icon-avi6.png')} style={styles.user}/>
					<Influencer
						pieWidth={130}
						pieHeight={130}
						width={240}
						height={150}
						data={data.userdata.user7} />
				</View>
				<View style={styles.col}>
					<Image source={require('../resource/assets/avi/icon-avi7.png')} style={styles.user}/>
					<Influencer
						pieWidth={130}
						pieHeight={130}
						width={240}
						height={150}
						data={data.userdata.user8} />
				</View>
			</View>
		</ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    icon: {
        width: 26,
        height: 26,
    },
    user : {width:50, height:50},
    row: {
        flex: 1,
        flexDirection: 'row',
        justifyContent:'space-between',
		marginTop: 30,
    },
	col : {
        flex: 1,
        flexDirection: 'column',
		justifyContent: 'center',
	}
});