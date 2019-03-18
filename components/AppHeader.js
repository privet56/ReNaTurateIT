import React, { PropTypes } from 'react';
import {
  TouchableOpacity,
  View,
  Text,
  StyleSheet
} from 'react-native';
import { DEVICE_WIDTH } from '../styles/global';
import { findRepos } from 'jest-changed-files';

const BORDER_COLOR = '#fff';
const BG_COLOR = 'transparent';
const TEXT_COLOR = '#fff';
const DISABLED_COLOR = `${TEXT_COLOR}5`;

const AppHeader = ({ style, activeRight, activeLeft, onPressRight, onPressLeft, children, ...rest }) => (

  <View style={{ flexDirection: 'row', backgroundColor: 'blue', width: DEVICE_WIDTH }}>
    <TouchableOpacity
        style={{ alignSelf: 'flex-start' }}
        activeOpacity={activeLeft ? 0.7 : 1}
        onPressLeft={activeLeft ? onPressLeft : null}
        {...rest}
        style={[styles.button, style, !activeLeft ? styles.disabledButton : {}]}
    >
        <Text style={[styles.text, !activeLeft ? styles.disabledText : {}]}>
            &lt;
        </Text>
    </TouchableOpacity>
    <View style={{ alignSelf: 'stretch' }} {...rest}>
        <Text style={[styles.text]}>
            {children} 
        </Text>
    </View>
    <TouchableOpacity
        style={{ alignSelf: 'flex-end' }}
        activeOpacity={activeRight ? 0.7 : 1}
        onPressRight={activeRight ? onPress : null}
        {...rest}
        style={[styles.button, style, !(activeRight != null) ? styles.disabledButton : {}]}
    >
        <Text style={[styles.text, !(activeRight != null) ? styles.disabledText : {}]}>
            &gt;
        </Text>
    </TouchableOpacity>
  </View>

);
/*
AppHeader.propTypes = {
  active: PropTypes.bool,
  style: View.propTypes.style,
  onPress: PropTypes.func,
  //children: PropTypes.node //temporarily deactivated because of >> Cannot read property 'node' of undefined
};

AppHeader.defaultProps = {

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
    paddingHorizontal: 15
  },
  disabledButton: {
    borderColor: DISABLED_COLOR
  },
  text: {
    color: TEXT_COLOR,
    fontWeight: 'bold'
  },
  disabledText: {
    color: DISABLED_COLOR
  }
});

export default AppHeader;
