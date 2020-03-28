import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import SearchBar from "../components/SearchBar";
import yelp from "../api/yelp";

const SearchScreen = () => {
  const [term, setTerm] = useState("");
  const [results, setResults] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const searchApi = async () => {
    try {
      const { data } = await yelp.get("/search", {
        params: {
          limit: 50,
          term,
          location: "Rome"
        }
      });
      setResults(data.businesses);
    } catch (ex) {
      setErrorMessage(ex.message);
    }
  };

  return (
    <View>
      <SearchBar term={term} onTermChange={setTerm} onTermSubmit={searchApi} />
      <Text>{errorMessage && { errorMessage }}</Text>
      <Text>We have found {results.length} results.</Text>
    </View>
  );
};

export default SearchScreen;

const styles = StyleSheet.create({});
