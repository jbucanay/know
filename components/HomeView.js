import React, { Component } from "react";
import PropTypes from "prop-types";
import { View, Text, StyleSheet, Image } from "react-native";

/// responsibility: show home news

export default class HomeView extends Component {
  render() {
    if (this.props.children.length) {
      const one = this.props.children[0];
      console.log(one);
      return (
        <View>
          <View style={styles.imgCont}>
            <Image source={{ uri: one.urlToImage }} style={styles.img} />
            <Text style={styles.credit}>{one.author}</Text>
          </View>
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
  },
  imgCont: {
    justifyContent: "flex-end",
    alignItems: "flex-end",
    flex: 1
  },
  credit: {
    padding: 5,
    fontWeight: "300",
    fontStyle: "italic",
    fontSize: 10
  }
});
