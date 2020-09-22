import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import { stylesHeader } from "./style";

const Header = ({ title }) => {
  return (
    <View style={stylesHeader.container}>
      <Text>{title}</Text>
    </View>
  );
};

export default Header;
