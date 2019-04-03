import { StyleSheet } from 'react-native';
import platformStyles from './platform';

const { PAGE_CONTAINER_STYLE, TEXT_STYLE } = platformStyles;

export const BG_COLOR = '#343336';
export const BAR_COLOR = '#4e4d52';
export const TEXT_COLOR = 'white';
export const HEADER_TEXT_COLOR = '#fff';
export const MUTED_COLOR = '#8e8786';
export const LINK_COLOR = '#48e9d9';
export const ACCENT_COLORS = ['#d31d65', '#751c53', '#c248c0', '#7d6e8b', '#bbc6f7'];
export const LIGHT_OVERLAY_COLOR = '#fff2';

export const COMMON_STYLES = StyleSheet.create({
  pageContainer: {
    backgroundColor: BG_COLOR,
    flex: 1,
    ...PAGE_CONTAINER_STYLE
  },
  text: {
    color: TEXT_COLOR,
    ...TEXT_STYLE
  },
  errorText: {
    fontSize: 17,
    color:'red',
    textAlign: 'center',
  },
  inp: {
    height: 33, borderColor: 'lightgray', borderWidth: 1, marginRight: 9, marginLeft: 9, padding: 9, marginTop: 11,
    width: '95%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white'
  },
});

import { Dimensions } from 'react-native';

export const {
 width: DEVICE_WIDTH,
 height: DEVICE_HEIGHT
} = Dimensions.get('window');

