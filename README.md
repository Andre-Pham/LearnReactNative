# LearnReactNative
My repo for learning React Native.

## Resources

Getting set up: https://reactnative.dev/docs/environment-setup?guide=native&platform=ios&os=macos

Tutorial: https://www.youtube.com/watch?v=0-S5a0eXPoc

## Troubleshooting

#### Android Emulator

https://stackoverflow.com/a/38847005

## Docs

#### Components

https://reactnative.dev/docs/components-and-apis

## Expo Notes

Set this up if you want to release to the web, along with iOS and Android.

#### Project Creation

```
npx create-expo-app LearningExpo
```

For web compiling, install the dependencies in the project directory:

```
npx expo install react-native-web@~0.18.10
npx expo install @expo/webpack-config@^18.0.1
```

#### Running

Either use:

```
npm start
```

Or:

```
npm run android
npm run ios
npm run web
```

If you're running Android, ensure the simulator is running beforehand:

```
/Users/andrepham/Library/Android/sdk/emulator/emulator -avd Pixel_6_Pro_API_33 -netdelay none -netspeed full
```

#### Dev Menu

iOS: control + command + z

Android: command + m

#### Adding TypeScript

https://docs.expo.dev/guides/typescript/

## React Native CLI

Set this up if you want to use native components from iOS and Android without releasing to the web.

#### Project Creation

```
npx react-native@latest init LearningProject
```

#### Running on iOS

```
npx react-native run-ios --simulator='iPhone 14 Pro'
```

#### Running on Android

First have an Android emulator open.

```
/Users/andrepham/Library/Android/sdk/emulator/emulator -avd Pixel_6_Pro_API_33 -netdelay none -netspeed full
```

Then run.

```
npx react-native run-android
```

#### Running Metro

```
npx react-native start
```

