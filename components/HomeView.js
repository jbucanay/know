import React, { Component } from "react";
import PropTypes from "prop-types";
import { View, Text } from "react-native";

export default class HomeView extends Component {
  render() {
    console.log(this.props.children);
    return <Text>Waiting..</Text>;
  }
}
