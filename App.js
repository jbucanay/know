import React, { Component } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import Home from "./components/Home";
import Tech from "./components/Tech";
<<<<<<< HEAD
import Icon from "react-native-vector-icons/Ionicons";
import { NativeRouter, Route, Link } from "react-router-native";

export default class App extends Component {
  render() {
    return (
      // <NativeRouter>
      //   <Route exact path="/" component={Home} />
      //   <Route path="/tech" component={Tech} />
      // </NativeRouter>
      <NativeRouter style={styles.container}>
        <Route exact path="/" component={Home} />
        <Route path="/tech" component={Tech} />
        <View style={styles.iconCont}>
          <View style={styles.first}>
            <Icon name="ios-home" color="gray" size={20} />
            <Text> Home </Text>
          </View>
          <Link to="/tech">
            <TouchableOpacity style={styles.single}>
              <Icon name="ios-wifi" color="gray" size={20} />
              <Text>Tech</Text>
            </TouchableOpacity>
          </Link>
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
      </NativeRouter>
    );
=======

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
>>>>>>> master
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 3,
    alignItems: "center",
    justifyContent: "flex-end",
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
