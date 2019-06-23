import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";

export default function AllHome(props) {
  console.log(props.all);
  const ccDate = new Date(props.all.publishedAt);
  const time = ccDate.toString().slice(0, 10);
  console.log(time);
  return (
    <View style={cc.top}>
      <View style={cc.title}>
        <Text>{props.all.title}</Text>
        <Text style={cc.time}>{time}</Text>
      </View>
      <Image source={{ uri: props.all.urlToImage }} style={cc.img} />
    </View>
  );
}

const cc = StyleSheet.create({
  top: {
    flex: 1,
    justifyContent: "space-around",
    backgroundColor: "red",
    paddingLeft: 20,
    paddingRight: 20,
    flexDirection: "row",
    alignItems: "flex-start"
  },
  img: {
    width: 100,
    height: 100
  },

  time: {
    fontWeight: "300",
    fontStyle: "italic",
    fontSize: 10
  },
  title: {
    alignSelf: "flex-start",
    flexDirection: "column",
    flexWrap: "wrap",
    flex: 0.6
  }
});
