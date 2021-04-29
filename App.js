/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import { StatusBar } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'

import HomeScreen from './src/screens/HomeScreen/index';
import SearchResults from './src/screens/SearchResults/index';
import SearchPlace from './src/screens/SearchPlace';


const App: () => React$Node = () => {
 
  return (
    <>
      <StatusBar barStyle="dark-content"/> 
      <SearchPlace/>
      

    </>
  );
};


export default App;
