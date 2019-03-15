import React from 'react';
import { ScrollView, View, Text, StyleSheet, Button } from 'react-native';

export default class SettingsScreen extends React.Component {
  static navigationOptions = {
    title: 'app.json',
  };

  render() {
    return (
      <View style={{ flex: 1, backgroundColor: 'red', minHeight: 33, minWidth: 33 }}>
        <Button
          title="Success"
        />
      </View>
    );
  }
} 
