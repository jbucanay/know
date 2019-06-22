import React, { Component } from "react";
import { Text, StyleSheet, View } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";

export default class Home extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Hit</Text>
        <View style={styles.iconCont}>
          <View style={styles.first}>
            <Icon name="ios-home" color="gray" size={20} />
            <Text> Home </Text>
          </View>
          <View style={styles.single}>
            <Icon name="ios-wifi" color="gray" size={20} />
            <Text>Tech</Text>
          </View>
          <View style={styles.single}>
            <Icon name="ios-contacts" color="gray" size={20} />
            <Text>Social</Text>
          </View>
          <View style={styles.single}>
            <Icon name="ios-globe" color="gray" size={20} />
            <Text>Sports</Text>
          </View>
          <View style={styles.single}>
            <Icon name="ios-trending-up" color="gray" size={20} />
            <Text>Trending</Text>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-end",
    backgroundColor: "#F5FCFF",
    marginBottom: 24
  },
  single: {
    alignItems: "center",
    marginLeft: 15
  },
  first: {
    alignItems: "center"
  },

  iconCont: {
    paddingTop: 7,
    borderTopColor: "red",
    flexDirection: "row",
    justifyContent: "space-evenly",
    backgroundColor: "white",
    alignSelf: "stretch"
  }
});
