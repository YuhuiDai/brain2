import React, { Component } from 'react';
import {Linking,StyleSheet,Text,ScrollView,Image,View, TouchableHighlight,Modal} from 'react-native';


export default class RecommendNews extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            modalVisible: false,
            mynews: null,
            mightLike: null,
            plug: null
        };
    }

    componentDidMount() {
        this.myNews();
        this.whatYouMayLike();
    }

    setModalVisible(visible) {
        this.setState({modalVisible: visible});
    }


    myNews() {
        const key1 = "edd89c67f19142afb8450474b653440a";
        const api_params = {api_key:key1, q:"politics", sort:"newest"};
        var article_url = 'https://api.nytimes.com/svc/search/v2/articlesearch.json?api_key='+api_params.api_key+'&q='+api_params.q+'&sort='+api_params.sort;

        return fetch(article_url)
            .then((response) => response.json())
            .then((responseJson) => {
                //console.log(responseJson.response.docs[0]);
                this.setState({
                    mynews: responseJson.response.docs,
                });
            })
            .catch((error) => {
                console.error(error);
            });
    }

    whatYouMayLike() {
        var key2 = "5553cd185bba4098bac03e8f78f6d602";
        var top_story_url = "https://api.nytimes.com/svc/topstories/v2/home.json?api_key="+key2;

        return fetch(top_story_url)
            .then((response) => response.json())
            .then((responseJson) => {
                //console.log(responseJson.results);
                this.setState({
                    mightLike:responseJson.results,
                });

            })
            .catch((error) => {
                console.error(error);
            });
    }

    plugIn() {
        var key3 = "59b410c54a554aeab71572514f67729b";
        var most_popular_url = "https://api.nytimes.com/svc/mostpopular/v2/mostviewed/all-sections/1.json?api_key=59b410c54a554aeab71572514f67729b";

        return fetch(most_popular_url)
            .then((response) => response.json())
            .then((responseJson) => {
                this.setState({
                    plug:responseJson.response.docs,
                });
            })
            .catch((error) => {
                console.error(error);
            });
    }


    render() {
        if (!this.state.mynews || !this.state.mightLike) {
            return (
				<Text style={styles.welcome}>My News</Text>
            )
        } else {

            var my_news_obj = [];

            for (var i=0; i<this.state.mynews.length; i++) {

                if (this.state.mynews[i].multimedia.length != 0) {
                    my_news_obj.push(this.state.mynews[i]);
                }
            }

            var mightLikeUrl = [];
            for (var i=0; i<this.state.mightLike.length; i++) {

                if (this.state.mightLike[i].multimedia.length > 1) {

                    mightLikeUrl.push(this.state.mightLike[i].multimedia[1].url);
                }
            }

            console.log(mightLikeUrl[0]);


            return (
				<View>
					<Text style={styles.welcome}>My News</Text>

					<ScrollView horizontal= {true} showsHorizontalScrollIndicator= {false} style={{ height: 200 }}>
						<View style={{flex: 1, flexDirection: 'row'}}>


							<View>
								<Modal animationType="slide" transparent={true} visible={this.state.modalVisible}>
									<View style={styles.news_overview}>
										<View>
											<Text style={styles.news_headline}>{my_news_obj[0].headline.main}</Text>
											<Text style={styles.dates}>{my_news_obj[0].pub_date.split('T')[0]}</Text>
											<Text style={styles.snippet}>{my_news_obj[0].snippet}</Text>
                                            <TouchableHighlight onPress={() => Linking.openURL(my_news_obj[0].web_url)} underlayColor="rgba(0,0,0,0.1)">
                                                <Text style={styles.back}>Read Entire Article</Text>
                                            </TouchableHighlight>
											<TouchableHighlight onPress={() => {this.setModalVisible(!this.state.modalVisible)}} underlayColor="rgba(0,0,0,0.1)">
												<Text style={styles.back}>Go Back</Text>
											</TouchableHighlight>

										</View>
									</View>
								</Modal>


								<TouchableHighlight onPress={() => {this.setModalVisible(true)}} underlayColor="transparent">
									<Image source={{ url: my_news_obj[0] == null ?
                                        default2:("http://www.nytimes.com/"+my_news_obj[0].multimedia[1].url)}} style={styles.news}/>
								</TouchableHighlight>

							</View>

                            <TouchableHighlight onPress={() => Linking.openURL(my_news_obj[1].web_url)} underlayColor="white">
                                <View>
                                    <Image source={{ url: my_news_obj[1] == null ?
                                        default1:("http://www.nytimes.com/"+my_news_obj[1].multimedia[1].url)}} style={styles.news}/>
                                </View>
                            </TouchableHighlight>
							<Image source={{ url: my_news_obj[2] == null ?
                                default3:("http://www.nytimes.com/"+my_news_obj[2].multimedia[1].url)}} style={styles.news}/>

						</View>
					</ScrollView>
					<Text style={styles.welcome}>What You May Like</Text>
					<ScrollView horizontal= {true} showsHorizontalScrollIndicator= {false} style={{ height: 200 }}>
						<View style={{flex: 1, flexDirection: 'row'}}>
							<Image source={{ url: mightLikeUrl[0] }} style={styles.news}/>
							<Image source={{ url: mightLikeUrl[1] }} style={styles.news}/>
                            <Image source={{ url: mightLikeUrl[2] }} style={styles.news}/>
						</View>
					</ScrollView>
					<Text style={styles.welcome}>Plug In</Text>
					<ScrollView horizontal= {true} showsHorizontalScrollIndicator= {false} style={{ height: 200 }}>
						<View style={{flex: 1, flexDirection: 'row'}}>
							<Image source={{ url: default1}} style={{height: 170, width: 200, margin: 10 }}/>
							<Image source={{ url: default2 }} style={{height: 170, width: 200, margin: 10 }}/>
							<Image source={{ url: default3 }} style={{height: 170, width: 200, margin: 10 }}/>
						</View>
					</ScrollView>
				</View>)
        }





    }
}
const default1 = "https://static01.nyt.com/images/2017/09/30/sports/29INJURIESweb1/29INJURIESweb1-master768.jpg";
const default2 = "https://i.pinimg.com/736x/62/73/15/627315522985d2728433740c0e2b6f8f--computer-technology-wearable-technology.jpg";
const default3 = "https://media.wmagazine.com/photos/59d24d5f4e36e83b070ab0ba/1:1/w_767/GettyImages-856265866.jpg";
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    welcome: {
        fontFamily:  'Georgia',
        fontSize: 20,
        textAlign: 'left',
        margin: 10,
    },
    news : {height: 170, width: 200, margin: 10, borderRadius: 5 },
    news_overview : {
        backgroundColor:"rgba(0,0,0,0.8)",
        flex:1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    news_headline : {
        fontFamily:  'Georgia',
        fontSize: 28,
        color: 'white',
        textAlign: 'left',
        margin: 20,
        fontWeight: 'bold',
    },
    dates :{
        fontFamily:  'Georgia',
        fontSize: 18,
        textAlign: 'left',
        marginLeft: 20,
        color: 'white',
    },
    snippet: {
        fontFamily:  'Georgia',
        fontSize: 22,
        textAlign: 'left',
        margin: 20,
        color: 'white',
    },
    back:{
        fontFamily:  'Georgia',
        fontSize: 18,
        textAlign: 'right',
        margin: 20,
        color: 'white',
    }
});
