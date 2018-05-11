/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';
import ColorButton from "./ColorButton";


//component
//Props
//State
//Learn one code everyone

// Function Commponent
const Text2 = props => (
  <View>
    <Text>
      {props.children}
      {props.username}
    </Text>
  </View>);

//Class Component
export default class App extends Component {
  state = {
    colors : ["red", "green", "blue", "black"],

    answer : [],
    index: 0
  };
  componentDidMount() {
    this._createRandomRequirement();
  }
  _createRandomRequirement = () => {
    this.setState({
      requirement : Array.from({ length : 4}).map(i => Math.floor(Math.random() * 4)),
      answer : [],
      index : 0
    });
  }

  _input = (id) => {
    this.setState({
      answer : this.state.answer.concat([id]),
      index : this.state.index + 1
    })
  }

  _onButtonPressed = id => {
    id = this.state.requirement[this.state.index] ? this._input(id) : this._createRandomRequirement(); 
    
  };

  render() {
    const buttons = this.state.colors
      .map((color, index) => <ColorButton 
      key = {index}
      onButtonPressed = {this._onButtonPressed}
       id = { index} bgColor={color} />)
    return (
      <View style={styles.container}>
        <Text> {this.state.requirement} </Text>
        <Text> {this.state.answer} </Text>
        {buttons}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
