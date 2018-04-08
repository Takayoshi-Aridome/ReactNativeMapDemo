/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React from 'react';
import { View, Text } from 'react-native';
import { StackNavigator } from 'react-navigation';

import Maps from './app/screens/Maps';


const RootStack = StackNavigator(
 {
     Maps: { screen: Maps },
 },
 { initialRouteName: 'Maps' }
);

export default class App extends React.Component {
 render() {
   return <RootStack />;
 }
}
