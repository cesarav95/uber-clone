/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import 'react-native-gesture-handler';
import React, {useEffect} from 'react';
import { StatusBar, PermissionsAndroid, Platform } from 'react-native'
import Geolocation from '@react-native-community/geolocation';

import Router from './src/navigation/Root';

navigator.geolocation = require('@react-native-community/geolocation');

const androidPermission = async() => {
  try {
    const granted = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
      {
        title: "UberClone Permission",
        message:
          "UberClone needs access to your Location " +
          "so you can noew where you stay.",
        buttonNeutral: "Ask Me Later",
        buttonNegative: "Cancel",
        buttonPositive: "OK" 
      }
    );
    if (granted === PermissionsAndroid.RESULTS.GRANTED) {
      console.log("You can use the GPS");
    } else {
      console.log("Location permission denied");
    }
  } catch (err) {
    console.warn(err);
  }
}

const App: () => React$Node = () => {
  useEffect(() => {
    if (Platform.OS === 'android') {
      androidPermission();
    } else {
      Geolocation.requestAuthorization();
    }
    
  }, [])
 
  return (
    <>
      <StatusBar barStyle="dark-content"/> 
      <Router />

    </>
  );
};


export default App;
