import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";

const ImageDetail = ({ title, imageSource, score }) => {
  return (
    <View>
      <Image source={imageSource} />
      <Text>{title}</Text>
      <Text>Image score: {score}</Text>
    </View>
  );
};

export default ImageDetail;

const styles = StyleSheet.create({});
