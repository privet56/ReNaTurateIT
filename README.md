# ReNa-TurateIT
A React-Native App with Redux State-Management<br>
## Documentation: 
* General **development environment** setup description: [docs/HowTo-WorkWithReactNative.md](docs/HowTo-WorkWithReactNative.md)<br>
* Project **structure** description: [docs/AppStructure.md](docs/AppStructure.md)<br>

## **Init** a React Native Project:
```sh
# npm install -g expo-cli # would apply for an expo-baed app, we don't use it!
# expo init renaexp .     # would apply for an expo-baed app, we don't use it!
npm install -g react-native-cli
react-native init renaexp
npm install
```

## **Start** the App
```sh
startAndroidEmulator.bat
react-native run-android    # in the emulator, use CTRL-M & CTRL-R to switch hot-reloading & debug(http://localhost:8081/debugger-ui/)
adb logcat                  # look android logs
```

## Redux
> $ npm install redux react-redux --save
```js
// implementation:
./flux/store, ./flux/actions/{star}.js, ./flux/reducers/{star}.js
//
//usage: App.js
import configureStore from './flux/store';
const store = configureStore();
// render App with store provider:
<Provider store = { store }>
//
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
Q: How to log Redux?<br/>
A: Use the **redux-logger** middleware! (and watch in the Chrome debug/console window)

Q: How to handle async actions?<br/>
A: Use the **redux-promise** middleware! (alternatives: saga, thunk)

Q: How to convert data inside of reducers?<br/>
A: Use the **reselect** redux addon!

A: How to subscribe to changes in a *part* of redux state?<br/>
Q: Use https://github.com/ivantsov/redux-subscriber

A: Do I have alternative flux implementations?<br/>
Q: Best known alternatives to redux: reflux, mobx

## Build - (for android, plain react-native app, without expo)
run these commands:
```sh
react-native bundle --platform android --dev true --entry-file index.js --bundle-output android/app/src/main/assets/index.android.bundle --assets-dest android/app/src/main/res/

cd android
./gradlew assembleDebug
```

## Build a react-native app in a docker container (in a CI/CD pipeline)
Description: [./build/build.md](./build/build.md)

## TODO:
* Login (HTTP-GET with response code 200)
    * Services auf localhost kann man vom Android Virtual Device aufrufen unter der IP 10.0.2.2
* solve npm install error "Error: Command failed: D:\projects\renature\devenv\python\python.exe -c import sys; print "%s.%s.%s" % sys.version_info[:3]"
    * possible solution: set path for python in the correct way
* Speedup with **PureComponent** instead of React.Component. Details: [https://reactjs.org/docs/react-api.html#reactpurecomponent](https://reactjs.org/docs/react-api.html#reactpurecomponent)
* Design target-specific Icon & Splash
* Write Unit Tests with **import renderer from 'react-test-renderer';**
* implement **Async** flux-actions: use better **thunk**/saga instead of redux-promise
* Use &lt;KeyboardAvoidingView ...&gt; around inputs

## Gotchas
* unexplainable build/execution errors?
    * npm start -- --reset-cache
    * close & deinstall app from emulator & close everything & cleanup %TEMP% + android/.gradle/* + android/app/build/*

## Directory Structure
<img src=_res/dir_structure.png width="450px">

## Development Environment
<img src=_res/devenv.png width="750px">

## App in Action (without network access!)
<img src=_res/renature.gif width="750px">
<img src=_res/renature.settings.gif>
<img src=_res/renature.tabbarani.gif>

## Project structure:
<img src=_res/project.structure.png>






## Build - (only for expo)
These build-instructions are **only for expo-based ReactNative-Apps!** Normal react-native apps do not need any special treatments.
#### Build in the cloud (expo-account necessary)
```sh
expo build:android  # take care: you need an online Expo user account!
```
#### cloud-circumvented build of an expo app (inofficial solution)
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
#### cloud-circumvented build of an expo app (official but not well supported solution)
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
#### do-it-yourself build with target-system-tools, after detaching the project 
```sh
expo detach
```
