import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';

import TabBarIcon from '../components/TabBarIcon';
import HomeScreen from '../screens/HomeScreen';
import EventsScreen from '../screens/EventsScreen';
import EventDetailsScreen from '../screens/EventDetailsScreen';
import SettingsScreen from '../screens/SettingsScreen';
import HelpScreen from '../screens/HelpScreen';
import AppTabBar from '../components/AppTabBar';

import { connect } from 'react-redux';

const HomeStack = createStackNavigator(
  {
    Home: HomeScreen,
    Help: HelpScreen
  },
  {
    initialRouteName: 'Home',
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: 'rgb(153,206,55)', 
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    },
  }
);

HomeStack.navigationOptions = ({ navigation }) => {
  return {
    tabBarLabel: 'Home',
    //tabBarVisible: false, //works, but have to be done dynamically!
    tabBarIcon: ({ focused }) => (
      <TabBarIcon
        focused={focused}
        name={
          Platform.OS === 'ios'
            ? `ios-information-circle${focused ? '' : '-outline'}`
            : 'md-information-circle'
        }
      />
    ),
    tabBarOptions:{
      activeTintColor: "green",
    }
  }
};

const EventsStack = createStackNavigator(
  {
    Events: EventsScreen,
    EventDetails: EventDetailsScreen
  }
);

EventsStack.navigationOptions = {
  tabBarLabel: 'Events',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? 'ios-link' : 'md-link'}
    />
  ),
  tabBarOptions:{
    activeTintColor: "green",
  }
};

const SettingsStack = createStackNavigator({
  Settings: SettingsScreen,
});

SettingsStack.navigationOptions = {
  tabBarLabel: 'Settings',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? 'ios-options' : 'md-options'}
    />
  ),
  tabBarOptions:{
    activeTintColor: "green",
  },
};

const bottomTabNavigator = createBottomTabNavigator({
  HomeStack,
  EventsStack,
  SettingsStack,
}, {
  //tabBarComponent: AppTabBar,
  tabBarComponent: (props) => <AppTabBar icons={[
      Platform.OS === 'ios' ? `ios-information-circle` : 'md-information-circle',
      Platform.OS === 'ios' ? 'ios-link' : 'md-link',
      Platform.OS === 'ios' ? 'ios-options' : 'md-options']} {...props}></AppTabBar>,
  tabBarOptions: {
    activeTintColor: "#4F4F4F",
    inactiveTintColor: "#ddd",
    my: 'rhabarbera'
  }
});

bottomTabNavigator.navigationOptions = ({ navigation }) => {
  return {
    tabBarVisible:false,
  };
};

export default bottomTabNavigator;
