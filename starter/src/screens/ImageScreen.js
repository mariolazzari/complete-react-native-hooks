import React from "react";
import { StyleSheet, Text, View } from "react-native";
import ImageDetail from "../components/ImageDetail";

const ImageScreen = () => {
  return (
    <View>
      <Text>Images</Text>

      <ImageDetail
        title="Forest"
        imageSource={require("../../assets/forest.jpg")}
        score="8"
      />
      <ImageDetail
        title="Beach"
        imageSource={require("../../assets/beach.jpg")}
        score="9"
      />
      <ImageDetail
        title="Mountain"
        imageSource={require("../../assets/mountain.jpg")}
        score="7"
      />
    </View>
  );
};

export default ImageScreen;

const styles = StyleSheet.create({});
