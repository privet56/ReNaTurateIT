# Project Structure
The App sources are structured in the following directories
## /\_\_tests__/
Contains the Unit tests, which are based on the lib
> $ import renderer from 'react-test-renderer';

## /android/
Contains the android-specific
* build files (*.gradle)
* assets (splash, icons, ...)
* Android-Native code, partly
    * generated and later changed, like MainActivity.java
    * newly, manually created, like SplahsActivity.java
## /assets/
Contains the resources of the app, mainly images and fonts.

## /cfg/
Contains the overall configuration files (e.g. backend URL and initial settings)

## /components/
Contains the app-wide available, pre-styled React components, like Header, Title, Buttons, ...

## /contstants/
Containts app-wide available predefined styles, colors and available screen size.

## /docs/
Contains the app description

## /flux/
Contains the flux-implementation, in redux, with the central store and its actions and reducers.

## /ios/
Contains the react-native-generated ios-specific resources (.xcodeproj)

## /navigation/
Contains the sources for the overall app navigation: Tab-Navigator with a StackNavigator inside.

## /screens/
Contains the sources for the screens (eg. login, events, settings, help, ...). These screens **use** the
* /flux/ infrastructure for state management
* /components/ for building the UI based on predefined & prestyled components
* /constants/ and /styles/ for predefined styles

## /styles/
Contains the sources for app-wide available styles (partly separated for each target platform, like ios/android)

## Important Files in the project-root directory
* **App.js** builds the root component of the app, controls the Splash, defines the flux store.
* **app.json** serves as react-native configuration file (used by building the app)
* **babel.config.js** configures the babel transpiler (change here if plan to use newer JavaScript version features, like @-attributes for MobX)
* **index.js** serves as the entry point of the app
* **metro.config.js** is the Metro bundler config file
* **package-lock.json** lists the **exact** used library versions
* **package.json** is the central node/npm project file, listing the project attributes, (start-)commands and its dependencies

# Plugins
Following 3rd-party plugins are used in the app:
* **react-native-splash-screen** (incl. native components): builds a Splash screen while js-app is loading
* **react-native-vector-icons** (incl. native components): offers a standardized iconset
* **react-navigation**: pure JavaScript plugins for Tab-/Stack-/Drawer navigation components
* **redux** (pure JavaScript implementation of the flux-architecture) with 
    * **react-redux**: Redux for React
    * **redux-logger**: allows the logging of the set Actions (see [../flux/store.js](../flux/store.js))
    * **redux-promise**: support for Async Actions
    * **redux-subscriber**: support for Notifications after partical store change
* **react-test-renderer** (pure JavaScript implementation) allows the virtual rendering of react-native components

**Pure** JavaScript-Plugins are immediately useable after an *npm install*.<br>
Plugins with **native** components are only useable after changing the native platform-specific code, automatically done by the call:
> $ react-native link
