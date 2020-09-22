import "react-native-gesture-handler";
import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import { Link, NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
import Profile from "./assets/components/Profile";
import Users from "./assets/components/Users";
import Header from "./assets/components/Header";
import Dialogs from "./assets/components/Dialogs";
import Footer from "./assets/components/Footer";
import { stylesApp } from "./styleApp";
import { NativeRouter, Route } from "react-router-native";

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NativeRouter>
      <View style={stylesApp.header}>
        <Header title="header" />
      </View>
      <View style={stylesApp.wrapper}>
        <View style={stylesApp.wrapperContent}>
          <Route path="/profile" component={Profile} />
          <Route path="/users" component={Users} />
          <Route path="/dialogs" component={Dialogs} />
        </View>
      </View>
      <View style={stylesApp.footer}>
        <Footer />
      </View>
    </NativeRouter>
  );
}

const drawerStyle = {
  backgroundColor: "#c6cbef",
  width: "80%",
};
