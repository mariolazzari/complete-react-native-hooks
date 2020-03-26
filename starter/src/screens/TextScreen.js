import React, { useState } from "react";
import { StyleSheet, Text, View, TextInput } from "react-native";

const TextScreen = () => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  return (
    <View>
      <Text style={styles.text}>Enter name:</Text>
      <TextInput
        style={styles.input}
        autoCapitalize="none"
        autoCorrect={false}
        value={name}
        onChangeText={text => setName(text)}
      />
      <Text style={styles.text}>My name is {name}</Text>

      <Text style={styles.text}>Enter password:</Text>
      <TextInput
        style={styles.input}
        autoCapitalize="none"
        autoCorrect={false}
        value={password}
        onChangeText={text => setPassword(text)}
      />
      {password.length < 5 && (
        <Text style={styles.text}> Password must be at least 5 chars.</Text>
      )}
    </View>
  );
};

export default TextScreen;

const styles = StyleSheet.create({
  text: {
    margin: 1
  },
  input: {
    margin: 15,
    borderColor: "black",
    borderWidth: 1
  }
});
