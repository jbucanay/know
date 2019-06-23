import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import { styles } from "./HomeView";

export default function AllHome(props) {
  console.log(props.all);
  return (
    //     <View style={styles.parent}>
    <View style={styles.imgCont}>
      <Image source={{ uri: props.all.urlToImage }} style={styles.img} />
      <Text style={styles.credit}>{props.all.author}</Text>
    </View>
    //     <View style={styles.descCont}>
    //       <Text style={styles.head}>{one.title}</Text>
    //       <Text style={styles.desc}>{one.description}</Text>
    //       <Text style={styles.credit}>{newsDate}</Text>
    //     </View>
    //     <AllHome all={this.props.children.slice(1)} />
    //   </View>
  );
}
