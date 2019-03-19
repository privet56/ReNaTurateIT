import React from 'react';
import { ScrollView, View, Text, StyleSheet, Button } from 'react-native';
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
      <View style={{ flex: 1, backgroundColor: 'lightred', minHeight: 33, minWidth: 33 }}>
        <Text>Help me!</Text>
      </View>
    );
  }
} 
