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
  Animated, Easing,
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
    minHeight = 0;
    maxHeight = 40;

    constructor(props)
    {
        super(props);
        this.state = {
            height:new Animated.Value(this.minHeight),
            unsubscribe: subscribe('auth.jwt', storeState => {

                //this.setState({ height: storeState.auth.jwt ? this.maxHeight : this.minHeight });

                Animated.spring(this.state.height, {
                    toValue: storeState.auth.jwt ? this.maxHeight : this.minHeight,
                    duration: 1999,
                    useNativeDriver: false,//Style property height is not supported by native animated module
                    easing: Easing.bounce,
                    delay: 9
                }).start();
              }),
         };
        this.navigationHandler = this.navigationHandler.bind(this);
    }

    componentWillUnmount() {
        this.state.unsubscribe();
    }

    navigationHandler = (routeName) => {
       this.props.navigation.navigate(routeName);
    }

    render()
    {
      const {navigation, icons} = this.props;

      const routes = navigation.state.routes;// a navigator component receives a routes object, which holds all the routes of your tab bar
  
      //TODO: check if better to use View.collapsed instead of height-animation!?
      
      return (
        <Animated.View style={{height: this.state.height}}>
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
        </Animated.View>
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
