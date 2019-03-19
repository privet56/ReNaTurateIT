import React from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  ImageBackground,
  TextInput,
  Button,
  View,
} from 'react-native';

import { MonoText } from '../components/StyledText';

import { AppTitle } from '../components/AppTitle';
import AppText from '../components/AppText';
import AppButton from '../components/AppButton';
//import AppHeader from '../components/AppHeader';

import { connect } from 'react-redux';
import { setAuthData, doPromiseLogin, doLoginAndDispatch } from '../flux/actions/actions.auth';
import { subscribe } from 'redux-subscriber';

import store from '../flux/store';

import PropTypes from 'prop-types';

export class HomeScreen extends React.Component
{
  constructor(props) {
    super(props);
    this.handleAuthDataChange = this.handleAuthDataChange.bind(this);
    this.state = {
      un:''
      , pwd:''
      , errorMsg: 'Not (yet) logged in...'
      //, unsubscribe: store.subscribe(this.handleAuthChange) //=listens to the *whole* store!
      , unsubscribe: subscribe('auth', state => {
        this.handleAuthDataChange(state);
      })
    };
  }

  static navigationOptions = {
    //header: <AppHeader>Home!</AppHeader>, //TODO: impl header control: [<- {title}  ]
    headerLeft: <AppButton active={true} style={{marginLeft: 3}}>&lt;</AppButton>, 
    headerTitle: <AppText style={{flex:1, fontWeight:'bold', textAlign: 'center', }}>Home!</AppText>, 
    headerRight: <AppButton active={false} style={{marginLeft: 3}}>&gt;</AppButton>,
  };

  /*
  static navigationOptions = {
    //header: null,
    title: 'Home',
  };
  * /
  static navigationOptions = ({ navigation }) => {
    return {
      title: navigation.getParam('myParam', 'Home'/*default value* /),
      headerStyle: {
        backgroundColor: 'lightgreen',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
      /* Inside of render() 
        <Button
        title="Update the title"
        onPress={() => this.props.navigation.setParams({otherParam: 'Updated!'})}
      />
      * /
    };
  };
  */

  handleAuthDataChange(newState)
  {
    if(!newState || !newState.auth) {
      return;
    }
    this.setState(newState.auth);

    if(newState.auth.jwt === undefined)
    {
      this.props.doLogin({un:newState.auth.un, pwd:newState.auth.pwd});
    }
  }

  componentWillUnmount() {
    this.state.unsubscribe();
  }

  componentDidMount() {

  }

  render() {
    return (
      <ImageBackground source={require('../assets/images/spring-background-with-leaves.png') } style={{width: '100%', height: '100%'}}>

        <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
          <View style={styles.welcomeContainer}>
            <Image style={styles.welcomeImage}
              source={ __DEV__ ? require('../assets/images/splash.png') : require('../assets/images/splash.png') } />
          </View>

          <View style={styles.getStartedContainer}>

            {this._maybeRenderDevelopmentModeWarning()}
            {/*<AppTitle> ReNaTure! </AppTitle> //TODO:use AppTitle*/}
            <AppText> Log Me In if you can! </AppText>

            {/* <View style={[styles.codeHighlightContainer, styles.homeScreenFilename]}>
              <MonoText style={styles.codeHighlightText}>Log Me In if you can!</MonoText>
            </View> */}
          </View>

          <TextInput style={styles.inp} value={this.state.un}
            onChangeText={(un) => this.setState({un})} placeholder="username" />
          <TextInput style={styles.inp} value={this.state.pwd} secureTextEntry={true}
            onChangeText={(pwd) => this.setState({pwd})} placeholder="password" />


          <View style={styles.helpContainer}>

            {/*<Button onPress={this.onLogin} title="Login?" style={styles.btn} accessibilityLabel="Login?" color="orange" />*/}
            <TouchableOpacity onPress={this.onLogin} style={styles.btn}>
              <Text> Log me In! </Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={this._handleHelpPress} style={styles.helpLink}>
              <Text style={styles.helpLinkText}>Help...</Text>
            </TouchableOpacity>

            <View style={styles.tabBarInfoContainer}>
              <Text style={styles.tabBarErrorText}>{ this.state.errorMsg }</Text>
            </View>

          </View>
        </ScrollView>

        {/*<View style={styles.tabBarInfoContainer}>
          <Text style={styles.tabBarErrorText}>{ this.state.errorMsg }</Text>
        </View>*/}
      
       </ImageBackground>
    );
  }

  _maybeRenderDevelopmentModeWarning() {
    if (__DEV__) {
      const learnMoreButton = (
        <Text onPress={this._handleLearnMorePress} style={styles.helpLinkText}>  </Text>
      );

      return (
        <Text style={styles.developmentModeText}> ReNaTurate! {learnMoreButton} </Text>
      );
    } else {
      return (
        <Text style={styles.developmentModeText}> You are not in development mode, your app will run at full speed. </Text>
      );
    }
  }

  _handleLearnMorePress = () => {

  };

  _handleHelpPress = () => {

  };

  onLogin = () => {
    console.log("login! un:"+this.state.un);
    this.props.setAuth({un:this.state.un, pwd:this.state.pwd, jwt:undefined, errorMsg: null });  //set Redux state!
  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'transparent',
  },
  developmentModeText: {
    marginBottom: 20,
    color: 'rgba(0,0,0,0.4)',
    fontSize: 24,
    lineHeight: 29,
    textAlign: 'center',
  },
  contentContainer: {
    paddingTop: 30,
  },
  welcomeContainer: {
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 20,
  },
  inp: {
    height: 33, borderColor: 'lightgray', borderWidth: 1, marginRight: 9, marginLeft: 9, padding: 9, marginTop: 11,
  },
  welcomeImage: {
    width: 100,
    height: 80,
    resizeMode: 'contain',
    marginTop: 30,
    marginLeft: -10,
  },
  getStartedContainer: {
    alignItems: 'center',
    marginHorizontal: 50,
  },
  homeScreenFilename: {
    marginVertical: 7,
  },
  codeHighlightText: {
    color: 'rgba(96,100,109, 0.8)',
  },
  codeHighlightContainer: {
    backgroundColor: 'rgba(0,0,0,0.05)',
    borderRadius: 3,
    paddingHorizontal: 4,
  },
  getStartedText: {
    fontSize: 17,
    color: 'rgba(96,100,109, 1)',
    lineHeight: 24,
    textAlign: 'center',
  },
  tabBarInfoContainer: {
    /*
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    */
    ...Platform.select({
      ios: {
        shadowColor: 'black',
        shadowOffset: { height: -3 },
        shadowOpacity: 0.1,
        shadowRadius: 3,
      },
      android: {
        elevation: 20,
      },
    }),
    alignItems: 'center',
    backgroundColor: 'transparent',
    paddingVertical: 20,
  },
  tabBarErrorText: {
    fontSize: 17,
    color:'red',
    textAlign: 'center',
  },
  navigationFilename: {
    marginTop: 5,
  },
  helpContainer: {
    marginTop: 15,
    alignItems: 'center',
  },
  helpLink: {
    paddingVertical: 15,
  },
  btn: {
    marginTop:10,
    paddingTop:20,
    paddingBottom:20,
    color:'red',
    backgroundColor:'orange',
    borderRadius:90,
    borderWidth: 3,
    borderColor: 'gray',
    width: 99,
    height: 99,
    shadowColor: 'black',
    shadowOffset: { height: -33 },
    shadowOpacity: 0.1,
    shadowRadius: 33,
    alignItems: 'center',
    textAlign: 'right',
    justifyContent: 'center',
    elevation: 13,
  },

  helpLinkText: {
    fontSize: 14,
    color: '#2e78b7',
  },
});

const mapStateToProps = storeState => {
  
  return {
    //actually, currently not needed...
    un: storeState.auth.un,
    pwd: storeState.auth.pwd,
    errorMsg: storeState.auth.errorMsg
  }
};

const mapDispatchToProps = dispatch => {
  return {
    doLogin: (authData) => {
      //dispatch(doPromiseLogin(authData));
      doLoginAndDispatch(authData, dispatch)
    },
    setAuth: (authData) => {
      dispatch(setAuthData(authData));
    }
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen);
