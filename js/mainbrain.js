import React, { Component } from 'react';
import {StyleSheet,Text,TouchableWithoutFeedback,View} from 'react-native';

import Pie from './Pie';
import data from './data';

type State = {
  activeIndex: number,
}

export default class MainBrain extends Component {

  state: State;

  constructor(props) {
    super(props);
    this.state = {
      activeIndex: 0,
    };
    this._onPieItemSelected = this._onPieItemSelected.bind(this);
  }

  _onPieItemSelected(newIndex){
    this.setState({...this.state, activeIndex: newIndex});
  }

  render() {

    return (
      
        <View style={{marginTop:10, marginBottom: 10}} >
          
          <Pie
            pieWidth={220}
            pieHeight={220}
            onItemSelected={this._onPieItemSelected}
            width={500}
            height={270}
            data={data.userdata.user1} />

        </View>
     
    );
  }
}
