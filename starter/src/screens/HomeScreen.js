import React from "react";
import { StyleSheet, View, Text, Button } from "react-native";

const HomeScreen = ({ navigation }) => {
  const routes = [
    { title: "Components" },
    { title: "List" },
    { title: "Image" },
    { title: "Counter" },
    { title: "Colors" },
    { title: "Square" },
    { title: "Text" }
  ];

  return (
    <View>
      <Text style={styles.text}>Home screen</Text>
      {routes.map(({ title }) => (
        <Button
          key={title}
          title={`Go to ${title} demo`}
          onPress={() => navigation.navigate(title)}
        />
      ))}
    </View>
  );
};

// component styles
const styles = StyleSheet.create({
  text: {
    textAlign: "Center",
    fontSize: 30,
    margin: 1
  }
});

export default HomeScreen;
