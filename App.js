import React, { Component } from 'react';
import { StackNavigator } from 'react-navigation';
import HomeScreen from './components/HomeScreen';
import DetailScreen from './components/DetailScreen';

const RootNavigator = StackNavigator({
  Home: {
    screen: HomeScreen,
    navigationOptions: ({navigation}) => ({
      title: 'Home',
    })
  },
  Details: {
    screen: DetailScreen,
    navigationOptions: ({navigation}) => ({
      title: 'Detail',
    })
  },
});

export default class App extends Component {
  render() {
    return (
      <RootNavigator />
    );
  }
}
