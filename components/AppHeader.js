import React, { PropTypes } from 'react';
import {
  TouchableOpacity,
  View,
  Text,
  ImageBackground, 
  StyleSheet
} from 'react-native';

//import { DEVICE_WIDTH } from '../styles/global';

const BORDER_COLOR = '#fff';
const BG_COLOR = 'transparent';
const TEXT_COLOR = '#fff';
const DISABLED_COLOR = `${TEXT_COLOR}5`;

export class AppHeader extends React.Component
{
  constructor(props) {
    super(props);
  }

  render() {
    return (
            <View style={{ width: '100%', height:44, backgroundColor: 'lightgreen' }}>
              <ImageBackground source={require('../assets/images/wtr.gif')} style={{flex: 1, flexDirection: 'row', justifyContent: 'space-between', width:'100%'}}>
                { this.props.onPressLeft &&
                <TouchableOpacity
                    activeOpacity={this.props.onPressLeft ? 0.7 : 1}
                    onPress={this.props.onPressLeft}
                    style={[styles.button, { width: 55, height: 33, alignSelf: 'center' }, !this.props.onPressLeft ? styles.disabledButton : {}]}>
                    <Text style={[styles.text, !this.props.onPressLeft ? styles.disabledText : {}]}>
                        &lt;
                    </Text>
                </TouchableOpacity>
                }
                { !this.props.onPressLeft &&
                  <View style={{ width: 55, height: 33, alignSelf: 'center' }}></View>
                }

                <View style={{ alignSelf: 'center', height: 22 }}>
                    <Text style={[styles.text]}>
                        {this.props.children} 
                    </Text>
                </View>

                { this.props.onPressRight &&
                <TouchableOpacity
                    activeOpacity={this.props.onPressRight ? 0.7 : 1}
                    onPress={this.props.onPressRight}
                    style={[styles.button, { width: 55, height: 33, alignSelf: 'center' }, !this.props.onPressRight ? styles.disabledButton : {}]}>
                    <Text style={[styles.text, !this.props.onPressRight ? styles.disabledText : {}]}>
                        &gt;
                    </Text>
                </TouchableOpacity>
                }
                { !this.props.onPressRight &&
                  <View style={{ width: 55, height: 33, alignSelf: 'center' }}></View>
                }

              </ImageBackground>
            </View> 
            );
  }
}

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
