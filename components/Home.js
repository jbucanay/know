import React, { Component } from "react";
import { Text, StyleSheet, View, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import http from "../http/getAll";
import HomeView from "./HomeView";
import { Navigation } from "react-native-navigation";

export default class Home extends Component {
  static get options() {
    return {
      topBar: {
        title: {
          text: "Home"
        }
      }
    };
  }
  state = {
    data: []
  };

  async componentDidMount() {
    let data = await http.getData();
    this.setState({ data });
  }

  render() {
    console.log(this.props);
    return (
      <View style={styles.container}>
        <HomeView>
          {this.state.data.map((news, index) => {
            return news;
          })}
        </HomeView>
        <View style={styles.iconCont}>
          <View style={styles.first}>
            <Icon name="ios-home" color="gray" size={20} />
            <Text> Home </Text>
          </View>
          <View
            style={styles.single}
            onPress={() => this.props.navigation.navigate("Tech")}
          >
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
