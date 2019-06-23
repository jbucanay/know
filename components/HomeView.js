import React, { Component } from "react";
import PropTypes from "prop-types";
import { View, Text, StyleSheet, Image, ScrollView } from "react-native";
import AllHome from "./AllHome";

/// responsibility: show home news

export default class HomeView extends Component {
  render() {
    if (this.props.children.length) {
      const one = this.props.children[0];
      const date = new Date(one.publishedAt);
      const newsDate = date.toString().slice(0, 10);
      return (
        <ScrollView style={styles.parent}>
          <View style={styles.imgCont}>
            <Image source={{ uri: one.urlToImage }} style={styles.img} />
            <Text style={styles.credit}>{one.author}</Text>
          </View>
          <View style={styles.descCont}>
            <Text style={styles.head}>{one.title}</Text>
            <Text style={styles.desc}>{one.description}</Text>
            <Text style={styles.credit}>{newsDate}</Text>
          </View>
          <View>
            {this.props.children.slice(1).map((item, index) => {
              return <AllHome key={index} all={item} />;
            })}
          </View>
        </ScrollView>
      );
    }
    return <Text>Loading...</Text>;
  }
}

export const styles = StyleSheet.create({
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
  },
  descCont: {
    paddingLeft: 20,
    paddingRight: 20,
    justifyContent: "space-around",
    flex: 1,
    height: 120
  },
  parent: {
    flex: 2
  },
  head: {
    fontWeight: "600",
    fontSize: 16
  },
  desc: {
    fontWeight: "200"
  }
});
