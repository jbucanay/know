import React, { Component } from "react";
import PropTypes from "prop-types";
import { View, Text, StyleSheet, Image } from "react-native";

export default class HomeView extends Component {
  render() {
    if (this.props.children.length) {
      const one = this.props.children[0];
      console.log(one);
      return (
        <View>
          <Image source={{ uri: one.urlToImage }} style={styles.img} />
        </View>
      );
    }
    return (
      <View>
        <Text>Loading...</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  img: {
    width: 375,
    height: 200
  }
});
