import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, Button, TextInput, Image } from "react-native";
import { stylesUsers } from "./style";

const Users = () => {
  return (
    <View style={stylesUsers.wrapper}>
      <View style={stylesUsers.mainContainer}>
        <Text>USERS</Text>
      </View>
      <StatusBar style="auto" />
    </View>
  );
};

export default Users;
