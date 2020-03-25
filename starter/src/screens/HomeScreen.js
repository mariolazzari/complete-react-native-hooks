import React from "react";
import { StyleSheet, View, Button } from "react-native";

const HomeScreen = ({ navigation }) => {
  const routes = [
    { title: "Components" },
    { title: "List" },
    { title: "Image" },
    { title: "Counter" },
    { title: "Colors" },
    { title: "Square" }
  ];

  return (
    <View>
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
    fontSize: 30
  }
});

export default HomeScreen;
