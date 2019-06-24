import React, { Component } from "react";
import Tech from "./components/Tech";
import Home from "./components/Home";
import { View, Text } from "react-native";
import { createStackNavigator, createAppContainer } from "react-navigation";

const RootStack = createStackNavigator(
  {
    Home: {
      screen: Home,
      navigationOptions: {
        title: "Home News"
      }
    },
    Tech: {
      screen: Tech,
      navigationOptions: {
        title: "Tech"
      }
    }
  },
  {
    initialRouteName: "Home"
  }
);

const AppCont = createAppContainer(RootStack);

export default class App extends Component {
  render() {
    return <AppCont />;
  }
}
