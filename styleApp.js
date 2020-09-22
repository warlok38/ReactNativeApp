import React from "react";
import { StyleSheet } from "react-native";

export const stylesApp = StyleSheet.create({
  wrapper: {
    height: "100%",
    paddingHorizontal: "5%",
    paddingTop: "5%",
    backgroundColor: "red",
  },
  wrapperContent: {
    height: "100%",
    backgroundColor: "lightblue",
  },
  footer: {
    position: "absolute",
    bottom: 0,
    width: "100%",
  },
  header: {
    marginTop: 30,
    width: "100%",
  },
});
