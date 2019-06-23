import React, { Component } from "react";
import { View } from "react-native";
import Home from "./components/Home";
import Tech from "./components/Tech";
import { NativeRouter, Route, Link } from "react-router-native";

export default class App extends Component {
  render() {
    return (
      <NativeRouter>
        <Text>Hit</Text>
        <Route exact path="/" component={Home} />
        <Route path="/tech" component={Tech} />
      </NativeRouter>
    );
  }
}
