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
import { doSaveSettingsAndDispatch } from '../flux/actions/actions.settings';
import { subscribe } from 'redux-subscriber';
import store from '../flux/store';

import { settingsInputData as defaultSettingsInputData } from '../cfg/cfg';

import { COMMON_STYLES } from '../styles/global';

export class SettingsScreen extends React.Component
{
  static navigationOptions = ({ navigation }) => {
    return {
      header: <AppHeader>Settings</AppHeader>
    }
  };

  constructor(props) {
    super(props);

    this.handleSettingsDataChange = this.handleSettingsDataChange.bind(this);

    this.state = {
      areaOfInterest: null,
      region: null,
      timeWindow: null,
      errorMsg: undefined,
      infoMsg: undefined,
      accessingServer: false,
      unsubscribe: subscribe('settings', state => {
        this.handleSettingsDataChange(state);
      }),
      settingsInputData: defaultSettingsInputData,
    }
  }
  componentWillUnmount() {
    this.state.unsubscribe();
  }
  handleSettingsDataChange(newState)
  {
    if(!newState || !newState.settings) {
      return;
    }

    this.setState(newState.settings);

    let newAccessingServer = (newState.settings.errorMsg === undefined);
    let infoMsg = undefined;
    if(this.state.accessingServer && !newAccessingServer && !newState.errorMsg)
    {
      infoMsg = "Settings saved.";
    }

    this.setState({accessingServer: newAccessingServer, infoMsg});
  }

  onSave() {
    this.setState({ accessingServer: true, errorMsg: undefined, infoMsg: undefined });
    this.props.setSettings({...this.state }, store.getState().auth.jwt);  //call backend & set Redux state!
  }
  onReset() {
    this.setState({ accessingServer: true, errorMsg: undefined, infoMsg: undefined, areaOfInterest: null, region: null, timeWindow: null });
    this.props.setSettings({...this.state }, store.getState().auth.jwt);  //call backend & set Redux state!
  }

  render() {

    return (
      <ImageBackground source={require('../assets/images/spring-background-with-leaves.png') } style={{width: '100%', height: '100%'}}>

        <AppTitle style={{marginTop:11}}>Settings</AppTitle>

        <AppText style={[styles.sttng, {width: '99%', color:'blue'}]}>You can adjust here the default filter for the Event list!</AppText>

        <View style={styles.cont}>
          <AppText style={styles.sttng}>Area of Interest:</AppText>

          {/*AreaOfInteres*/}
          <Picker style={styles.pckr} mode="dropdown"
            selectedValue={this.state.areaOfInterest}
            onValueChange={(itemValue, itemIndex) => this.setState({areaOfInterest: itemValue})}>
              <Picker.Item label="[None]" value="" />
              {
                this.state.settingsInputData.areaOfInterest.map((itemValue, itemIndex) => {
                   return <Picker.Item label={itemValue.label} value={itemValue.value} /> 
                })
              }
          </Picker>
        </View>
        {/*Region*/}
        <View style={styles.cont}>
          <AppText style={styles.sttng}>Region:</AppText>

          <Picker style={styles.pckr} mode="dropdown"
            selectedValue={this.state.region}
            onValueChange={(itemValue, itemIndex) => this.setState({region: itemValue})}>
            <Picker.Item label="[None]" value="" />
            {
                this.state.settingsInputData.region.map((itemValue, itemIndex) => {
                   return <Picker.Item label={itemValue.label} value={itemValue.value} /> 
                })
              }
          </Picker>
        </View>
        {/*TimeWindow*/}
        <View style={styles.cont}>
          <AppText style={styles.sttng}>Time Window:</AppText>

          <Picker style={styles.pckr} mode="dropdown"
            selectedValue={this.state.region}
            onValueChange={(itemValue, itemIndex) => this.setState({region: itemValue})}>
            <Picker.Item label="[None]" value="" />
            {
                this.state.settingsInputData.timeWindow.map((itemValue, itemIndex) => {
                   return <Picker.Item label={itemValue.label} value={itemValue.value} /> 
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

const mapStateToProps = storeState => {
  return {
  }
};

const mapDispatchToProps = dispatch => {
  return {
    setSettings: (settingsData, jwt) => {
      doSaveSettingsAndDispatch(settingsData, jwt, dispatch)
    },
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(SettingsScreen);
