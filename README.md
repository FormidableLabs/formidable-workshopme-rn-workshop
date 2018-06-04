# Workshop.me React Native Workshop

## Prerequisites

- Follow the instructions [here](https://facebook.github.io/react-native/docs/getting-started.html) under the "Building Projects with Native Code" to make sure your environment is set up properly
- Choose to develop for Android or iOS. If you are on Windows, you'll be using Android. On OSX, you have options.
- Follow the instructions [here](https://yarnpkg.com/en/docs/install#mac-stable) to make sure you have Yarn installed
- If using iOS, run `sudo gem install cocoapods` to install CocoaPods

#### Verifying environment setup is complete
- Please make sure that you can get an iOS simulator or a Android emulator running
- Run `react-native init MyProject`
- Run `cd MyProject`
- Run `yarn`
- Run `react-native run-ios` or `react-native run-android` depending on which environment you set up earlier.

If your environment is set up properly, you'll see a simulator pop up with a Welcome app, and you are good to go.

#### Running this repo

- In this repo's root, use your CLI to run `yarn` to install dependencies
- If using iOS, run `pod install` in the `ios` directory.
- When it completes, run `react-native run-ios` or `react-native run-android` to start the simulator for your target platform, and make sure you can get this app running in the simulator or on your device.

## Getting started

For this workshop, the lessons are located in the `src` folder of this repo. Switching from lesson to lesson involves modifying the import in `src/index.js` to point at the folder of the lesson we are working on. Take a look in `src` to identify how this works. You will be prompted at the beginning of each lesson to switch to the current lesson in `src/index.js`.

## Links

[React Native Docs](https://facebook.github.io/react-native/)

[React Native Maps Docs](https://github.com/react-community/react-native-maps)

[React Navigation Docs](https://reactnavigation.org/)

[React Native Firebase Docs](https://github.com/invertase/react-native-firebase)