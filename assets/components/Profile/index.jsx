import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, Button, TextInput, Image } from "react-native";

import images from "../images";
import { stylesProfile } from "./style";

const Profile = () => {
  return (
    <View style={stylesProfile.wrapper}>
      <View style={stylesProfile.mainContainer}>
        <View style={stylesProfile.headerContainer}>
          <View style={stylesProfile.avatar}>
            <Image
              style={stylesProfile.avatarImage}
              source={images.unknownUser}
            />
          </View>
          <View>
            <View>
              <Text>Ярослав Малютин</Text>
            </View>
            <View>
              <Text>статус</Text>
            </View>
          </View>
        </View>
      </View>
      <StatusBar style="auto" />
    </View>
  );
};

export default Profile;
