import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import { styles } from "./HomeView";

export default function AllHome(props) {
  console.log(props.all);
  const ccDate = new Date(props.all.publishedAt);
  const time = ccDate.toString().slice(0, 10);
  console.log(time);
  return (
    <View style={cc.top}>
      <View>
        <Text style={styles.head}>{props.all.title}</Text>
        <Text style={styles.credit}>{time}</Text>
      </View>
      <Image source={{ uri: props.all.urlToImage }} style={cc.img} />
    </View>
  );
}

const cc = StyleSheet.create({
  top: {
    flexDirection: "row",
    width: 300,
    justifyContent: "space-between"
  },
  img: {
    width: 100,
    height: 100
  }
});
