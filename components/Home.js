import React, { Component } from "react";
import { Text, StyleSheet, View, TouchableOpacity } from "react-native";
import http from "../http/getAll";
import HomeView from "./HomeView";

export default class Home extends Component {
  state = {
    data: []
  };

  async componentDidMount() {
    let data = await http.getData();
    this.setState({ data });
  }

  render() {
    return (
      <View>
        <HomeView>
          {this.state.data.map((news, index) => {
            return news;
          })}
        </HomeView>
      </View>
    );
  }
}
