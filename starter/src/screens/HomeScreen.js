import React from "react";
import { Text, StyleSheet, View, Button } from "react-native";

const HomeScreen = ({ navigation }) => {
  return (
    <View>
      <Button
        title="Go to Components demo"
        onPress={() => navigation.navigate("Components")}
      />

      <Button
        title="Go to Lists demo"
        onPress={() => navigation.navigate("List")}
      />
    </View>
  );
};

// component styles
const styles = StyleSheet.create({
  text: {
    fontSize: 30
  }
});

export default HomeScreen;
