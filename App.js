/**
 * ReNa!
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import AppNavigator from './navigation/AppNavigator';
import { Provider } from 'react-redux';

import SplashScreen from 'react-native-splash-screen';

//import configureStore from './flux/store';
//const store = configureStore();
import store from './flux/store';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

import PropTypes from 'prop-types';

type Props = {};
export default class App extends Component<Props> {

  componentDidMount() {
    SplashScreen.hide()
  }

  render() {
    return (<Provider store = { store }>
              <AppNavigator />
            </Provider>);
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
