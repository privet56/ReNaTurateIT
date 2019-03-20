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

export default class SettingsScreen extends React.Component
{
  static navigationOptions = ({ navigation }) => {
    return {
      header: <AppHeader>Settings</AppHeader>
    }
  };

  constructor(props) {
    super(props);
    this.state = {
      areaOfInterest: '',
      region: '',
      dateFrom: null,
      dateTo: null
    }
  }

  onSave() {
    console.log("//TODO: SettingsScreen:onSave!");
  }

  render() {
    return (
      <ImageBackground source={require('../assets/images/spring-background-with-leaves.png') } style={{width: '100%', height: '100%'}}>

        <AppTitle style={{marginTop:11}}>Settings</AppTitle>

        <AppText style={[styles.sttng, {width: '99%', color:'blue'}]}>You can adjust here the default filter for the Event list!</AppText>

        <View style={styles.cont}>
          <AppText style={styles.sttng}>Are of Interest:</AppText>

          {/*AreaOfInteres*/}
          <Picker style={styles.pckr} mode="dropdown"
            selectedValue={this.state.areaOfInterest}
            onValueChange={(itemValue, itemIndex) => this.setState({areaOfInterest: itemValue})}>
              <Picker.Item label="BMW" value="bmw" />
              <Picker.Item label="Siemens" value="siemens" />
              <Picker.Item label="Daimler" value="daimler" />
          </Picker>
        </View>
        {/*Region*/}
        <View style={styles.cont}>
          <AppText style={styles.sttng}>Region:</AppText>

          <Picker style={styles.pckr} mode="dropdown"
            selectedValue={this.state.region}
            onValueChange={(itemValue, itemIndex) => this.setState({region: itemValue})}>
            <Picker.Item label="EU" value="eu" />
            <Picker.Item label="US" value="us" />
            <Picker.Item label="GB" value="gb" />
            <Picker.Item label="RU" value="ru" />
          </Picker>
        </View>
        {/*TimeWindow*/}
        <View style={styles.cont}>
          <AppText style={styles.sttng}>Time Window:</AppText>

          <Picker style={styles.pckr} mode="dropdown"
            selectedValue={this.state.region}
            onValueChange={(itemValue, itemIndex) => this.setState({region: itemValue})}>
            <Picker.Item label="EU" value="eu" />
            <Picker.Item label="US" value="us" />
            <Picker.Item label="GB" value="gb" />
            <Picker.Item label="RU" value="ru" />
          </Picker>
        </View>

        <AppButton style={[styles.sttng, {marginTop: 33}]} active={true} onPress={() => {this.onSave();}}>Save!</AppButton>

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
    width: '50%'
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
