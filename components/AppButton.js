import React from 'react';
import PropTypes from 'prop-types';

import {
  TouchableOpacity,
  View,
  Text,
  StyleSheet
} from 'react-native';

const BORDER_COLOR = 'black';
const BG_COLOR = 'lightgreen';
const TEXT_COLOR = '#000';
const DISABLED_COLOR = `${TEXT_COLOR}5`;

export class AppButton extends React.Component
{
  constructor(props) {
    super(props);
  }/*
  getDefaultProps() {
    return {
      active: true,
      onPress: null
    }
  }*/
  render() {
    return (
        <TouchableOpacity
          activeOpacity={this.props.active ? 0.7 : 1}
          onPress={this.props.active ? this.props.onPress : null}
          style={[styles.button, this.props.style, !this.props.active ? styles.disabledButton : {}]}>
          <Text style={[styles.text, !this.props.active ? styles.disabledText : {}]}>
            {this.props.children}
          </Text>
        </TouchableOpacity>
    );
  }
}
/*
AppButton.propTypes = {
  active: PropTypes.bool,
  style: View.propTypes.style,
  onPress: PropTypes.func
  //children: PropTypes.node //temporarily deactivated because of >> Cannot read property 'node' of undefined
};
*/
const styles = StyleSheet.create({
  button: {
    borderStyle: 'solid',
    borderColor: BORDER_COLOR,
    borderWidth: StyleSheet.hairlineWidth,
    backgroundColor: BG_COLOR,
    borderRadius: 5,
    paddingVertical: 8,
    margin: 13,
    paddingHorizontal: 15,
    width: '33%'
  },
  disabledButton: {
    borderColor: DISABLED_COLOR
  },
  text: {
    color: TEXT_COLOR,
    fontWeight: 'bold',
    textAlign:'center'
  },
  disabledText: {
    color: DISABLED_COLOR
  }
});

export default AppButton;
