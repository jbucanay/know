import React, { Component } from "react";

import { createStackNavigator, createAppContainer } from "react-navigation";
import Home from "./components/Home";

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
