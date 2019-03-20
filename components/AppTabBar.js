import React from 'react';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';

import TabBarIcon from '../components/TabBarIcon';
import HomeScreen from '../screens/HomeScreen';
import EventsScreen from '../screens/EventsScreen';
import SettingsScreen from '../screens/SettingsScreen';
import HelpScreen from '../screens/HelpScreen';

import {
  SafeAreaView,
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  ImageBackground,
  TextInput,
  Button,
  View,
} from 'react-native';

import { AppTitle } from '../components/AppTitle';
import AppText from '../components/AppText';
import AppButton from '../components/AppButton';
import AppHeader from '../components/AppHeader';

import { connect } from 'react-redux';
import { setAuthData, doPromiseLogin, doLoginAndDispatch } from '../flux/actions/actions.auth';
import { subscribe } from 'redux-subscriber';
import store from '../flux/store';
import PropTypes from 'prop-types';

//TODO: do ani!
//https://stackoverflow.com/questions/54589073/hide-and-show-createbottomtabnavigator-tabbar-with-animation-in-react-native

class AppTabBar extends React.Component
{
    displayName = "AppTabBar";

    constructor(props)
    {
        super(props);
        this.navigationHandler = this.navigationHandler.bind(this);
    }

    navigationHandler = (routeName) => {
        console.log("Pressed!!! " +routeName);
        console.log(routeName);
       this.props.navigation.navigate(routeName);
    }

    render() {
  
      const {navigation, needHide, icons} = this.props;
      // a navigator component receives a routes object, which holds all the routes of your tab bar
      const routes = navigation.state.routes;
  
      if (needHide) {
        return <View/>;
      };
      
      return (
        <SafeAreaView>
          <View style={styles.container}>
            {routes.map((route, index) => {
              return (
                <TouchableOpacity onPress={() => { this.navigationHandler(route.routes[0].routeName); }} activeOpacity={navigation.state.index === index ? 0.7 : 1} active={true} style={styles.tabBarItem} key={route.routes[0].routeName}>
                  <View style={styles.tabBarItem} key={route.routes[0].routeName}>
                    <TabBarIcon
                        routeName={route.routes[0].routeName}
                        onPress={this.navigationHandler}
                        focused={navigation.state.index === index}
                        index={index}
                        name={icons[index]}
                    />
                    <Text>{route.routes[0].routeName}</Text>
                  </View>
                </TouchableOpacity>
              );
            })}
          </View> 
        </SafeAreaView>
      );
    }
}
  
const styles = StyleSheet.create({

container: {
    flexDirection: 'row',
    alignContent: 'center',
    height: 40,
    width: '100%',
},
tabBarItem: {
    flex: 1,
    alignItems: 'center'
}
});

const mapStateToProps = (state) => {
    return {
        needHide: !!(state.auth.jwt)
    };
};

export default connect(mapStateToProps)(AppTabBar);
