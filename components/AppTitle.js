import React, { PropTypes } from 'react';
import {
  StyleSheet,
  Text
} from 'react-native';
import AppText from './AppText';
import * as globalStyles from '../styles/global';

const AppTitle = ({ style, children }) => (
  <AppText style={[styles.title, style]}>
    {children}
  </AppText>
);

AppTitle.propTypes = {
  style: Text.propTypes.style,
  //children: PropTypes.node //temporarily deactivated because of >> Cannot read property 'node' of undefined
};

const styles = StyleSheet.create({
  title: {
    fontFamily: 'HelveticaNeue-CondensedBold',
    fontSize: 18,
    color: globalStyles.HEADER_TEXT_COLOR,
    backgroundColor: `${globalStyles.BG_COLOR}99`
  }
});

export default AppTitle;
