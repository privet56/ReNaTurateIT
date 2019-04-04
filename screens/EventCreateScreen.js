import React from 'react';
import {
  Image,
  Picker,
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
import AppHeader from '../components/AppHeader';
import AppButton from '../components/AppButton';
import AppLoading from '../components/AppLoading';

import { connect } from 'react-redux';
import { createEventAndDispatch } from '../flux/actions/actions.event';
import { subscribe } from 'redux-subscriber';
import store from '../flux/store';
import { Event, newEvent } from '../model/event';
import { hasMember } from '../components/util';

import { settingsInputData as defaultSettingsInputData } from '../cfg/cfg';

import { COMMON_STYLES } from '../styles/global';

export class EventCreateScreen extends React.Component
{
  static navigationOptions = ({ navigation }) => {
    return {
      header: <AppHeader onPressLeft={() => { navigation.pop(); }}>Create Event</AppHeader>
    }
  };

  constructor(props)
  {
    super(props);

    this.onReset = this.onReset.bind(this);

    this.state = {
      event: newEvent(props.inputEvent),
      errorMsg: undefined,
      infoMsg: undefined,
      accessingServer: false,
      settingsInputData: defaultSettingsInputData,
    }
  }

  componentWillReceiveProps(nextProps)
  {
    for(var propName in nextProps)
    {
      if(hasMember(this.state, propName))
      {
        var o = {};
        o[propName] = nextProps[propName];
        this.setState(o);
      }
      //else { console.log("prop2state NOTINSTATE:'"+propName+"'"); }
    }
  }

  componentWillUnmount() {
  }

  onSave() {
    this.props.createEvent({ ...this.state }, store.getState().auth.jwt);  //call backend & set Redux state!
  }
  onReset() {
    this.setState({ accessingServer: false, errorMsg: undefined, infoMsg: 'Settings reset.', event: newEvent(this.props.inputEvent) });
  }

  render() {

    return (
      <ImageBackground source={require('../assets/images/spring-background-with-leaves.png') } style={{width: '100%', height: '100%'}}>

        <AppTitle style={{marginTop:11}}>Create New Event</AppTitle>

        {/*title*/}
        <View style={styles.cont}>
        <TextInput style={COMMON_STYLES.inp} value={this.state.event.title}
            onChangeText={(val) => this.setState({ event: {...this.state.event, title: val}})} placeholder="Event Title" />
        </View>

        {/*description*/}
        <View style={styles.cont}>
        <TextInput style={[COMMON_STYLES.inp, {textAlignVertical: "top", alignItems: "flex-start", height: 66}]} value={this.state.event.description}
            multiline={true} numberOfLines={5} underlineColorAndroid='transparent'
            onChangeText={(val) => this.setState({ event: {...this.state.event, description: val}})} placeholder="Description" />
        </View>

        {/*startDate*/}
        {/*endDate*/}

        {/*type*/}
        <View style={styles.cont}>
          <AppText style={styles.sttng}>Type:</AppText>

          <Picker style={styles.pckr} mode="dropdown"
            selectedValue={this.state.event.type}
            onValueChange={(itemValue, itemIndex) => this.setState({event: {...this.state.event, type: itemValue}})}>
            <Picker.Item label="[None]" value="" />
            {
                this.state.settingsInputData.type.map((itemValue, itemIndex) => {
                   return <Picker.Item label={itemValue.label} value={itemValue.value} key={itemValue.value} /> 
                })
              }
          </Picker>
        </View>

        {/*AreaOfInteres*/}
        <View style={styles.cont}>
          <AppText style={styles.sttng}>Area of Interest:</AppText>
          <Picker style={styles.pckr} mode="dropdown"
            selectedValue={this.state.event.areaOfInterest}
            onValueChange={(itemValue, itemIndex) => this.setState({ event: {...this.state.event, areaOfInterest: itemValue}})}>
              <Picker.Item label="[None]" value="" />
              {
                this.state.settingsInputData.areaOfInterest.map((itemValue, itemIndex) => {
                   return <Picker.Item label={itemValue.label} value={itemValue.value} key={itemValue.value} /> 
                })
              }
          </Picker>
        </View>
        {/*Region*/}
        <View style={styles.cont}>
          <AppText style={styles.sttng}>Region:</AppText>

          <Picker style={styles.pckr} mode="dropdown"
            selectedValue={this.state.event.region}
            onValueChange={(itemValue, itemIndex) => this.setState({event: {...this.state.event, region: itemValue}})}>
            <Picker.Item label="[None]" value="" />
            {
                this.state.settingsInputData.region.map((itemValue, itemIndex) => {
                   return <Picker.Item label={itemValue.label} value={itemValue.value} key={itemValue.value} /> 
                })
              }
          </Picker>
        </View>

        <View style={styles.cont}>
          <AppButton style={[styles.sttng, {marginTop: 33}]} active={!this.state.accessingServer} onPress={() => {this.onSave();}}>Save!</AppButton>
          <AppButton style={[styles.sttng, {marginTop: 33, backgroundColor: 'orange'}]} active={!this.state.accessingServer} onPress={() => {this.onReset();}}>Reset!</AppButton>
        </View>
        { this.state.accessingServer &&
         <View style={[styles.cont, {borderColor: 'transparent'}]}>
          <AppLoading>Accessing Backend Server ...</AppLoading>
         </View>
        }
        { this.state.errorMsg &&
          <View style={[styles.cont, {borderColor: 'transparent'}]}>
            <Text style={COMMON_STYLES.errorText}>{ this.state.errorMsg }</Text>
          </View>
        }
        { this.state.infoMsg &&
          <View style={[styles.cont, {borderColor: 'transparent'}]}>
            <Text style={[COMMON_STYLES.errorText, {color:'blue'}]}>{ this.state.infoMsg }</Text>
          </View>
        }

      </ImageBackground>
    );
  }
} 
const styles = StyleSheet.create({
  sttng: {
    color:'black',
    margin: 11,
    marginTop: 15,
    fontSize: 16,
    width: '40%'
  },
  pckr: {
    height: 50,
    width: '40%'

  },
  cont: {
    width: '100%',
    backgroundColor: 'blue',
    flexDirection: 'row',

    borderStyle: 'solid',
    borderColor: 'gray',
    borderWidth: StyleSheet.hairlineWidth,
    backgroundColor: 'transparent',
    borderRadius: 5,
    paddingVertical: 8,
    paddingHorizontal: 15
  }
});

const mapStateToProps = (storeState, ownProps, ownState) => {
  return {
    errorMsg: storeState.event.errorMsg,
    infoMsg: storeState.event.infoMsg,
    accessingServer: storeState.event.accessingServer,
    //event: storeState.event.event,
  }
};

const mapDispatchToProps = dispatch => {
  return {
    createEvent: (state, jwt) => {
        createEventAndDispatch(state.event, jwt, dispatch)
    },
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(EventCreateScreen);
