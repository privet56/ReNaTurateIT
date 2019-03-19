import React, { PropTypes } from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';
import AppText from './AppText';
import * as globalStyles from '../styles/global';

export class AppTitle extends React.Component
{
  constructor(props) {
    super(props);
  }
  render() {
    return (<AppText style={[styles.title, this.props.style]}>
      {this.props.children}
    </AppText>);
  }
}

AppTitle.propTypes = {
  style: Text.propTypes.style,
  //children: PropTypes.node //temporarily deactivated because of >> Cannot read property 'node' of undefined
};

const styles = StyleSheet.create({
  title: {
    fontFamily: 'HelveticaNeue-CondensedBold',
    fontSize: 18,
    color: 'black',//globalStyles.HEADER_TEXT_COLOR,
    backgroundColor: `${globalStyles.BG_COLOR}22`,
    minWidth: 333,
    minHeight: 44,
    paddingTop: 7,
    borderRadius: 19,
    alignSelf: 'center',
    justifyContent: 'center', 
    textAlign: 'center'
  }
});

export default AppTitle;
