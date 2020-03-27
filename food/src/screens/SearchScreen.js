import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import SearchBar from "../components/SearchBar";

const SearchScreen = () => {
  const [term, setTerm] = useState("");

  return (
    <View>
      <SearchBar
        term={term}
        onTermChange={term => setTerm(term)}
        onTermSubmit={() => console.log(`${term} submitted.`)}
      />
      <Text>Search screen: {term}</Text>
    </View>
  );
};

export default SearchScreen;

const styles = StyleSheet.create({});
