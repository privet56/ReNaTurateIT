import React from 'react';
import {ActivityIndicator, Alert, Button, FlatList, ImageBackground, ScrollView, Text, TouchableHighlight, View} from 'react-native';
import { EVENTS_STYLES, HEADER_COLOR } from '../styles/events';

import { connect } from 'react-redux';
import { expoBackendUrl } from '../cfg/cfg';

export class EventsScreen extends React.Component {

  static navigationOptions = {
    title: 'Events',
  };

  state = {
    un:'{unknown user}'
  }

  constructor(props) {
    super(props);
    this.state = { isLoading: true }
  }

  //system function, called after app start
  componentDidMount() {
    this.loadEventData()
  }

  render() {
    if (this.state.isLoading) {
      return (
        <View style={{flex: 1, paddingTop: 20}}>
          <ActivityIndicator />
        </View>
      );
    }
    return (
      
      //<ScrollView style={EVENTS_STYLES.ScrollContainer}>
      <ImageBackground source={require('../assets/images/spring-background-with-leaves.png') } style={{width: '100%', height: '100%'}}>
        <View style={EVENTS_STYLES.MainContainer}>
          <Text>{ this.props.un }</Text>
          <Text style={EVENTS_STYLES.header}>ExpoApp Events</Text>
          <View style={EVENTS_STYLES.SubContainer}>
            <Text style={EVENTS_STYLES.textHeader}>Filter settings:</Text>
            <Text style={EVENTS_STYLES.textListElement}>(show all)</Text>
            <Button
              onPress={this._onPressFilter}
              title="Edit"
              color="gray"
            />
          </View>
          <FlatList
            data={ this.state.dataSource }
            ItemSeparatorComponent = {this.FlatListItemSeparator}
            renderItem={this._renderItem}
            keyExtractor={(item, index) => index.toString()}
            ListEmptyComponent={ <Text>(no entries found)</Text> }
          />
          <Button
            onPress={this.loadEventData.bind(this)}
            title="Reload"
            color={HEADER_COLOR}
            accessibilityLabel="Refresh display"
          />
        </View>
      </ImageBackground>
    );
  }
  
  async loadEventData() {

    //this.setState({ isLoading: true }); - leads to initial screen wipe
    try {
      const url = `${expoBackendUrl}/event`; //get all events
      //const url = `${expoBackendUrl}/event?startDate=1980-01-01&endDate=2019-01-01`; //get all events by date
      //const response = await fetch('http://10.0.2.2:8080/v007/event');
      const response = await fetch(url);
      const responseJson = await response.json();
      this.setState({
        isLoading: false,
        dataSource: responseJson
      });
    }
    catch (error) {
/*      if (error.response) {
        // server responded with a status code out of range 2xx
        console.log("---error.response---");
        console.log(error.response.data);
        console.log(error.response.status);
        console.log(error.response.headers);
      }
      else if (error.request) {
        // no response was received
        // `error.request` is a XMLHttpRequest in the browser and a http.ClientRequest in node.js
        console.log("---error.request---");
        console.log(error.request);
      }
      else {
        // setting up the request triggered an error
        console.log("---error.message---");
        console.log('Error', error.message);
      }
      console.error(error);
 */
      this.setState({
        isLoading: false
      });
      console.log("---error.message---");
      console.log('Error', error);
      Alert.alert("Something went wrong!\n" + error);
    }
  }

  _renderItem = ({item}) => {
    return (
      <TouchableHighlight underlayColor="#dddddd" onPress={this._onPressRow.bind(this, item)}>
        <View style={EVENTS_STYLES.rowContainer}>
          <Text>{this.formatDate(item.startDate)}</Text>
          <View style={EVENTS_STYLES.textContainer}>
            <Text style={EVENTS_STYLES.columnHeader}>{item.title}</Text>
            <Text style={EVENTS_STYLES.columnText} numberOfLines={2}>{item.description}</Text>
          </View>
        </View>
      </TouchableHighlight>
    );
  };

  FlatListItemSeparator = () => {
    return (
      <View
        style={{
          height: 1,
          width: "100%",
          backgroundColor: "#607D8B",
        }}
      />
    );
  }
  
  // action when an item from the list is selected
  _onPressRow(item) {
    //Alert.alert("Selected row: " + item);
    //this.props.navigation.navigate('EventDetails', {paramItem: item})
    this.props.navigation.navigate('EventDetails', {origin: 'Events', paramItem: item});
  }
  
  // format a date in milliseconds to string
  formatDate(dateInMillis) {
    const date = new Date(dateInMillis);
    console.log("date: " + date.toUTCString());
    return date.toUTCString().substr(5, 11);
  }
  
  // open the filter dialog
  _onPressFilter() {
    Alert.alert("Filter options:"
     + "\n...");
  }

} // end EventsScreen

//-------------------------- Navigation ---------------------------------------
const mapStateToProps = state => {

  return {
    //we would like to show the auth.un from the store
    un: state.auth.un
  }
};

const mapDispatchToProps = dispatch => {

  return {
    //we don't write yet the store
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(EventsScreen);
