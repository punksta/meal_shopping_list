# Meal planner


## available scripts

1. `npm run ts` - runs static type check using typescript
2. `npm run prettier-check` - runs code formatting check using prettier
3. `npm run test` - runs _some_ unit tests using jest
4. `npm run prettier` - performs code formatting using prettier

## how to run app

### configure project
put your access token to 
```
src/config.json
```

### ios
#### requirements
1. xcode, xcode-command-line tools
2. node 11+
3. npm 6
4. `npm ci` - installs exact npm packages
5. `cd ios`
6. `pod install --deployment` - installs exact Pods packages

#### run app
4. `npm run start` - starts metro 
4. `react-native run-ios` - runs ios 

### android
#### requirements
1. openjdk8
2. android sdk
3. node 11+, npm 6
4. `npm ci` - installs exact npm packages

#### run app
1. `npm run start` - starts metro 
2. `cd android`
3. make sure your device/emulator is visible by `adb devices` 
4. `./gradlew installDebug` - installs debug build to connected device/running emulator


## how to build release 

### android
follow `requirements` in section above
1. set up signing certificate in build.gradle file
2. `cd android ./gradlew assembleRelease`

OR
1. use android studio "build signed apk" option and choose certificate in UI

### ios
follow `requirements` in section above
1. get apple developer account
2. generate certificate
3. use xcode to build `release` version

OR (if you experienced ios dev)
1. use `xcodebuild` or `fastlane` cli tools


## notes
tested on

```
> npm -v
6.11.3

> node -v
v12.10.0

>xcodebuild -version 
Xcode 10.3
Build version 10G8

> java -version
openjdk version "1.8.0_222"

> pod --version
1.7.5

```