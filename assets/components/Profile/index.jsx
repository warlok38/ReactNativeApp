import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";

const Profile = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text>1</Text>
      <Text>There is profile component</Text>
      <Button
        title="Go to users"
        onPress={() => navigation.navigate("Users", { name: "Users" })}
      />
      <StatusBar style="auto" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default Profile;
