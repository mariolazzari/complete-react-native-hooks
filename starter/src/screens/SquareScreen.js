import React, { useReducer } from "react";
import { StyleSheet, Text, View } from "react-native";
import ColorScreen from "../components/ColorCounter";

const COLOR_INCREMENT = 15;

const reducer = (state, action) => {
  switch (action.type) {
    case "red":
      return state.red + action.payload < 0 || state.red + action.payload > 255
        ? state
        : { ...state, red: state.red + action.payload };
    case "green":
      return state.green + action.payload < 0 ||
        state.green + action.payload > 255
        ? state
        : { ...state, green: state.green + action.payload };
    case "blue":
      return state.blue + action.payload < 0 ||
        state.blue + action.payload > 255
        ? state
        : { ...state, blue: state.blue + action.payload };
    default:
      return state;
  }
};

const SquareScreen = () => {
  const [state, dispatch] = useReducer(reducer, { red: 0, green: 0, blue: 0 });
  const { red, green, blue } = state;

  return (
    <View>
      <Text>Square</Text>
      <ColorScreen
        color="Red"
        onIncrease={() => dispatch({ type: "red", payload: COLOR_INCREMENT })}
        onDecrease={() => dispatch({ type: "red", payload: -COLOR_INCREMENT })}
      />
      <ColorScreen
        color="Green"
        onIncrease={() => dispatch({ type: "green", payload: COLOR_INCREMENT })}
        onDecrease={() =>
          dispatch({ type: "green", payload: -COLOR_INCREMENT })
        }
      />
      <ColorScreen
        color="Blue"
        onIncrease={() => dispatch({ type: "blue", payload: COLOR_INCREMENT })}
        onDecrease={() => dispatch({ type: "blue", payload: -COLOR_INCREMENT })}
      />
      <View
        style={{
          ...styles.view,
          backgroundColor: `rgb(${red},${green},${blue})`
        }}
      />
    </View>
  );
};

export default SquareScreen;

const styles = StyleSheet.create({
  view: {
    width: 100,
    height: 100
  }
});
