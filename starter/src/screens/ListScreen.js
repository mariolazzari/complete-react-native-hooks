import React from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";

const ListScreen = () => {
  const friends = [
    { name: "Friend #1", age: 41 },
    { name: "Friend #2", age: 42 },
    { name: "Friend #3", age: 43 },
    { name: "Friend #4", age: 44 },
    { name: "Friend #5", age: 45 },
    { name: "Friend #6", age: 46 },
    { name: "Friend #7", age: 23 },
    { name: "Friend #8", age: 14 },
    { name: "Friend #9", age: 66 }
  ];

  return (
    <FlatList
      keyExtractor={item => item.name}
      data={friends}
      renderItem={({ item }) => (
        <Text style={styles.textStyle}>
          {item.name} - age {item.age}
        </Text>
      )}
    />
  );
};

const styles = StyleSheet.create({
  textStyle: {
    marginVertical: 50
  }
});

export default ListScreen;
