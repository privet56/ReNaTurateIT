import React, { PropTypes } from 'react';
import {
  View,
  StyleSheet
} from 'react-native';

import Button from './Button';

const LinkButton = ({ style, children, ...rest }) => (
  <Button
    {...rest}
    style={[styles.button, style]}
  >
    {children}
  </Button>
);

LinkButton.propTypes = {
  style: View.propTypes.style,
  //children: PropTypes.any //temporarily deactivated because of >> Cannot read property 'node' of undefined
};

const styles = StyleSheet.create({
  button: {
    borderWidth: 0
  }
});

export default LinkButton;
