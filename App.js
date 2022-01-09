/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React , {useState}from 'react'
import { View, Text, TextInput } from 'react-native'
import { Button } from 'react-native-elements';
import Shop from './src/Screens/Shop';
import {NavigationContainer} from '@react-navigation/native'
import Tabs from './src/Navigation/tabs';
const App=() => {
  return(
    <NavigationContainer>
      <Tabs />
    </NavigationContainer>
  );
}


export default App;
