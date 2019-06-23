import React, { Component } from "react";
import { View } from "react-native";
import { createStackNavigator, createAppContainer } from "react-navigation";
import Home from "./components/Home";
import Tech from "./components/Tech";

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
