import React from 'react';
import { ScrollView, View, Text, StyleSheet, Button } from 'react-native';
import { createAppContainer, createSwitchNavigator, createStackNavigator } from 'react-navigation';
import HomeScreen from '../screens/HomeScreen';
import SettingsScreen from '../screens/SettingsScreen';
import MainTabNavigator from './MainTabNavigator';

export default createAppContainer(createSwitchNavigator({
  // You could add another route here for authentication.
  // Read more at https://reactnavigation.org/docs/en/auth-flow.html
  Main: MainTabNavigator,
}));

/*
export class DummyScreen extends React.Component {
  static navigationOptions = {
    title: 'app.json',
  };

  render() {
    return (
      <View style={{ flex: 1, backgroundColor: 'red', minHeight: 33, minWidth: 33 }}>
        <Button title="Success" />
      </View>
    );
  }
}

const AppNavigator = createStackNavigator(
  {
    //Home: { screen: DummyScreen }
    Home: { screen: SettingsScreen }
  },
  {
    swipeEnabled:false,
    animationEnabled:false,
    defaultNavigationOptions: {
      gesturesEnabled: false,
    },
    initialRouteName: 'Home',

    lazy: true
  }
);

export default createAppContainer(AppNavigator);
*/
