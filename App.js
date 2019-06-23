import React, { Component } from "react";
import { View } from "react-native";
import Home from "./components/Home";
import Tech from "./components/Tech";
// import {NativeRouter, Route, Link} from 'react-router-native'

const RootStack = createStackNavigator(
  {
    Land: Home
  },
  {
    initialRouteName: "Land"
  }
);

const AppCont = createAppContainer(RootStack);

export default class App extends Component {
  render() {
    return <AppCont />;
  }
}
