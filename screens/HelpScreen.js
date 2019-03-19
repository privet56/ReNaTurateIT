import React from 'react';
import {
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
import AppHeader from '../components/AppHeader';

export default class HelpScreen extends React.Component {
  static navigationOptions = ({ navigation }) => {
    return {
      header: <AppHeader onPressLeft={() => {
        navigation.pop();
      }}>Help</AppHeader>
    }
  };

  render() {
    return (
      <ImageBackground source={require('../assets/images/spring-background-with-leaves.png') } style={{width: '100%', height: '100%'}}>

        <AppTitle style={{marginTop:11}}>Help me!</AppTitle> 

        <AppText style={styles.help}>
          Hier werden Sie geholfen!
        </AppText>

        <AppText style={styles.help}>
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
        </AppText>
        <AppText style={styles.help}>
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
        </AppText>

      </ImageBackground>
    );
  }
} 
const styles = StyleSheet.create({
  help: {
    color:'black',
    margin: 11,
    fontSize: 13
  }
});
