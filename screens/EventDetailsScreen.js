/**
 * Event Details Screen for Sample React Native App
 *
 * @format
 * @flow
 */
'use strict';

import React, {Component} from 'react';
import {Alert, Button, ImageBackground, Text, View} from 'react-native';
import { EVENTS_STYLES, HEADER_COLOR } from '../styles/events';

export default class EventDetailsScreen extends Component {

  render() {
    const { navigation } = this.props;
    const item = navigation.getParam('paramItem', 'no value');
    return (
      <ImageBackground source={require('../assets/images/spring-background-with-leaves.png') } style={{width: '100%', height: '100%'}}>
        <View style={EVENTS_STYLES.MainContainer}>
          <Text style={EVENTS_STYLES.header}>{item.title}</Text>
          <View style={EVENTS_STYLES.SubContainer}>
            <Text style={EVENTS_STYLES.textHeader}>(location...) {this.formatDate(item.startDate)} - {this.formatDate(item.endDate)}</Text>
          </View>
            <Text style={EVENTS_STYLES.textHeader}>{item.type}</Text>
            <Text style={EVENTS_STYLES.detailsListElement}>{item.description}</Text>
            <Text style={EVENTS_STYLES.textHeader}>Participants</Text>
            <Text style={EVENTS_STYLES.detailsListElement}>{item.participants}</Text>
            <Text style={EVENTS_STYLES.detailsListElement}>created: {item.createdBy} {this.formatDate(item.createdAt)}</Text>
            <Text style={EVENTS_STYLES.detailsListElement}>updated: {item.updatedBy} {this.formatDate(item.updatedAt)}</Text>
          <Button
            onPress={this._onPressX}
            title="Aha"
            color={HEADER_COLOR}
          />
          <Text></Text>
        </View>
      </ImageBackground>
    );
  };
  
  // format a date in milliseconds to string
  formatDate(dateInMillis) {
    const date = new Date(dateInMillis);
    console.log("date: " + date.toUTCString());
    return date.toUTCString().substr(5, 11);
  }
  
  // open some dialog
  _onPressX() {
    Alert.alert("And now:"
     + "\n...");
  }

} // end EventDetailsScreen
