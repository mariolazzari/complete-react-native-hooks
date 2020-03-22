import React from "react";
import { StyleSheet, Text, View } from "react-native";

// compoennt
const ComponentScreen = () => {
  const name = "Mario!";
  return (
    <View>
      <Text style={styles.text}>Getting started with react native</Text>
      <Text style={styles.name}>Hello {name}</Text>
    </View>
  );
};

// compoennt styles
const styles = StyleSheet.create({
  text: {
    fontSize: 45
  },
  name: {
    fontSize: 20
  }
});

export default ComponentScreen;
