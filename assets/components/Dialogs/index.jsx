import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { StyleSheet, Text, View, Button, TextInput, Image } from "react-native";
import Footer from "../Footer";
import { stylesDialogs } from "./style";

const Dialogs = () => {
  const [state, setState] = useState(1);
  return (
    <View style={stylesDialogs.wrapper}>
      <View style={stylesDialogs.mainContainer}>
        <Text>DIALOGS</Text>
        <View style={stylesDialogs.group}>
          <TextInput style={stylesDialogs.input} />
          <Button title="GO" onPress={() => setState(state + 1)} />
        </View>
        <Text>{state}</Text>
      </View>
      <StatusBar style="auto" />
    </View>
  );
};

export default Dialogs;
