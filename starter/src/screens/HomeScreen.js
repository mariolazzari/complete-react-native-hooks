import React from "react";
import { StyleSheet, View, Button } from "react-native";

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

      <Button
        title="Go to Images"
        onPress={() => navigation.navigate("Image")}
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
