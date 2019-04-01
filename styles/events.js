import { Platform, StyleSheet } from 'react-native';

export const BG_COLOR = '#eeeeee';
export const BAR_COLOR = '#4e4d52';
export const TEXT_COLOR = '#656565';
export const HEADER_COLOR = 'darkgreen';

export const EVENTS_STYLES = StyleSheet.create({
  header: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  columnHeader: {
    fontSize: 18,
    color: HEADER_COLOR,
    marginLeft: 5,
    marginBottom: 5,
  },
  columnText: {
    color: TEXT_COLOR,
    marginBottom: 5,
  },
  detailsListElement: {
    color: TEXT_COLOR,
    marginBottom: 10,
    marginRight: 10,
  },
  textHeader: {
    color: TEXT_COLOR,
    fontWeight: 'bold',
    marginRight: 10,
  },
  textListElement: {
    color: TEXT_COLOR,
    marginRight: 10,
  },
  MainContainer: {
    justifyContent: 'center',
    flex:1,
    margin: 10,
    paddingTop: (Platform.OS === 'ios') ? 20 : 0,
  },
  ScrollContainer: {
    flex: 1,
    margin: 10,
    paddingTop: (Platform.OS === 'ios') ? 20 : 0,
    backgroundColor: '#fff',
  },
  SubContainer: {
    flexDirection: "row",
    borderWidth:1,
    borderColor:"lightgrey",
    backgroundColor: BG_COLOR,
    //margin: 10,
    padding: 5,
    alignItems: "center"
  },
  textContainer: {
    flex: 1
  },
  rowContainer: {
    flexDirection: 'row',
    padding: 5
  },
  FlatListItemStyle: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
});
