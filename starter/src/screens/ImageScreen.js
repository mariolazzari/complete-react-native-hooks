import React from "react";
import { StyleSheet, Text, View } from "react-native";
import ImageDetail from "../components/ImageDetail";

const ImageScreen = () => {
  const images = [
    {
      title: "Forest",
      imageSource: require("../../assets/forest.jpg"),
      score: 8
    },
    {
      title: "Beach",
      imageSource: require("../../assets/beach.jpg"),
      score: 8
    },
    {
      title: "Mountain",
      imageSource: require("../../assets/mountain.jpg"),
      score: 8
    }
  ];

  return (
    <View>
      <Text>Images</Text>

      {images.map(({ title, imageSource, score }) => (
        <ImageDetail
          key={title}
          title={title}
          imageSource={imageSource}
          score={score}
        />
      ))}
    </View>
  );
};

export default ImageScreen;

const styles = StyleSheet.create({});
