import React from "react";
import { StyleSheet, Text, View } from "react-native";

const BoxScreen = () => {
  return (
    <View>
      <View style={styles.viewStyle}>
        <Text style={styles.text1Style}>Child number 1</Text>
        <Text style={styles.text2Style}>Child number 2</Text>
        <Text style={styles.text3Style}>Child number 3</Text>
      </View>

      <View style={styles.containerStyle}>
        <View style={styles.redStyle}></View>
        <View style={styles.greenStyle}></View>
        <View style={styles.purpleStyle}></View>
      </View>
    </View>
  );
};

export default BoxScreen;

const styles = StyleSheet.create({
  viewStyle: {
    borderWidth: 3,
    borderColor: "black",
    height: 300
  },
  text1Style: {
    borderWidth: 3,
    borderColor: "red"
  },
  text2Style: {
    flex: 1,
    alignSelf: "flex-end",
    borderWidth: 3,
    borderColor: "red",
    ...StyleSheet.absoluteFillObject
  },
  text3WStyle: {
    borderWidth: 3,
    borderColor: "red"
  },
  containerStyle: {
    flexDirection: "row",
    height: 200,
    borderWidth: 3,
    justifyContent: "space-between"
  },
  redStyle: {
    backgroundColor: "red",
    height: 100,
    width: 100
  },
  greenStyle: {
    backgroundColor: "green",
    height: 100,
    width: 100,
    alignSelf: "flex-end"
  },
  purpleStyle: { backgroundColor: "purple", height: 100, width: 100 }
});
