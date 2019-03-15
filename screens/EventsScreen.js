import React from 'react';
import { ScrollView, View, Text, StyleSheet } from 'react-native';

import { connect } from 'react-redux';

export class EventsScreen extends React.Component {
  static navigationOptions = {
    title: 'Events',
  };

  state = {
    un:'{unknown user}'
 }

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <ScrollView style={styles.container}>
        <View>
          <Text>Hello { this.props.un }!</Text>
        </View>
        
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#fff',
  },
});

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