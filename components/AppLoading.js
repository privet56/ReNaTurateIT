import React, { PropTypes } from 'react';
import {
  StyleSheet,
  ImageBackground,
  Text,
  View
} from 'react-native';
import AppText from './AppText';
import * as globalStyles from '../styles/global';

export class AppLoading extends React.Component
{
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <View style={{width: '100%', height: 33, backgroundColor:'transparent', textAlign: 'center', alignItems: 'center'}}>
      <ImageBackground source={require('../assets/images/loading.gif') } style={{width: 199, height: 33}}>
        <Text style={[styles.infoText, {color:'blue', textAlign: 'center'}]}> </Text>
      </ImageBackground>
      <Text style={[styles.infoText, {color:'blue', textAlign: 'center'}]}>{this.props.children}</Text>
    </View>
    );
  }
}

AppLoading.propTypes = {
  style: Text.propTypes.style,
  //children: PropTypes.node //temporarily deactivated because of >> Cannot read property 'node' of undefined
};

const styles = StyleSheet.create({
  infoText: {
  }
});

export default AppLoading;
