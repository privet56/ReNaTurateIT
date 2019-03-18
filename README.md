# ReNa-TurateIT
A React-Native App with Redux State-Management

## Init React Native Project:
```sh
NO: npm install -g expo-cli
NO: expo init renaexp .
npm install -g react-native-cli
react-native init renaexp
npm install
```

## Start App
```sh
startAndroidEmulator.bat
react-native run-android    # in the emulator, use CTRL-M & CTRL-R to switch hot-reloading & debug(http://localhost:8081/debugger-ui/)
adb logcat                  # look android logs
```

## Redux
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

## Advanced Redux
#### How to log Redux?
* Use the **redux-logger** middleware! (and watch in the Chrome debug/console window)
#### How to handle async actions?
* Use the **redux-promise** middleware! (alternatives: saga, thunk)
#### How to convert data inside of reducers?
* Use the **reselect** redux addon!
#### How to subscribe to changes in a *part* of redux state?
* Use https://github.com/ivantsov/redux-subscriber

## Build - (only for expo)
These build-instructions are **only for expo-based ReactNative-Apps!** Normal react-native apps do not need any special treatments.
```sh
expo build:android  # take care: you need an online Expo user account!
```
```sh
# create js bundle
## setup:
npm install     #maybe: npm install -g react-native-cli react-native-scripts
# npm install react-native@0.59.1
## call:
react-native bundle --platform android --dev false --entry-file index.js --bundle-output _rena4android/app/src/main/assets/index.android.bundle --assets-dest _rena4android/app/src/main/res
# android build with gradle:
cd _rena4android
./gradlew assembleDebug
```
```sh
# setup: expo local
npm install -g gulp --save
npm install -g gulp gulp-shell gulp-cli isobject --save
npm link gulp
git checkout https://github.com/expo/expo in a local dir
cd expo && npm install  # ...and pray!  # preferably on linux!
cd expo/tools-public/ && npm install
# call
expo start
cd ../expo
#gulp android-shell-app --url http://localhost:19002/ --sdkVersion 29 --workingDir=../.
#inside of project:
gulp android-shell-app --url exp://10.0.75.1:19000 --sdkVersion 29 --workingDir=. --gulpfile ../expo/tools-public/gulpfile.js
#inside of expo/tools-public/:
gulp android-shell-app --url exp://10.0.75.1:19000 --sdkVersion 29 --workingDir=../../renaexp
    # -> opens check-dynamic-macros-android.sh
# iOS:
# gulp ios-shell-app --action build --type [simulator or archive] --configuration [Debug or Release]
```
```sh
expo detach
```

## TODO:
* build prod apk
* redux with HTTP(S) call
* Login (HTTP-GET with response code 200)
    * Services auf localhost kann man vom Android Virtual Device aufrufen unter der IP 10.0.2.2
* No Tab-Change if not logged in!
* solve npm install error "Error: Command failed: D:\projects\expoapp\client\reactnative\devenv\python\python.exe -c import sys; print "%s.%s.%s" % sys.version_info[:3]"

## Directory Structure
<img src=_res/dir_structure.png width="450px">

## Development Environment
<img src=_res/devenv.png width="750px">
