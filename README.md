# ReNa-TurateIT
A React-Native App with Redux State-Management

# Init React Native Project:
```sh
npm install -g expo-cli
expo init renaexp .
npm install
```

# Start App
```sh
startAndroidEmulator.bat
npm run android # in a new terminal
    # -> http://localhost:19002/ = DevTools
    # -> installs & starts app on running emulator
```

# Redux
> $ npm install redux react-redux --save
```js
// implementation:
./flux/store, ./flux/actions/+.js, ./flux/reducers/+.js

//usage: App.js
import configureStore from './flux/store';
const store = configureStore();
// render App with store provider:
<Provider store = { store }>

//usage in components 
////A: imports:
import { connect } from 'react-redux';
import { setAuthData } from '../flux/actions/actions.auth';
////B: call:
this.props.setAuth({un:this.state.un, pwd:this.state.pwd});  //set Redux state!
////C: connection:
const mapStateToProps = state => { /*...*/ }
const mapDispatchToProps = dispatch => { /*...*/ }
export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen);
```

## TODO:
1. Login (HTTP-GET with response code 200)
2. No Tab-Change if not logged in!

# Directory Structure
<img src=_res/dir_structure.png width="550px">
# Development Environment
<img src=_res/devenv.png width="550px">
