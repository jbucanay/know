import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";

export default function AllHome(props) {
  const ccDate = new Date(props.all.publishedAt);
  const time = ccDate.toString().slice(0, 10);

  return (
    <View style={cc.top}>
      <View style={cc.desc}>
        <Text style={cc.title}>{props.all.title}</Text>
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
    paddingLeft: 20,
    paddingRight: 20,
    paddingBottom: 30,
    paddingTop: 30,
    flexDirection: "row",
    alignItems: "flex-start",
    borderColor: "grey",
    borderStyle: "dashed",
    borderWidth: 0.4
  },
  img: {
    width: 100,
    height: 100
  },

  time: {
    fontWeight: "300",
    fontStyle: "italic",
    fontSize: 10,
    paddingTop: 10
  },
  desc: {
    alignSelf: "flex-start",
    flexDirection: "column",
    paddingRight: 2,
    flexWrap: "wrap",
    flex: 1,
    justifyContent: "space-between"
  },
  title: {
    fontWeight: "600",
    fontSize: 16
  }
});
