import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";

const Users = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text>2</Text>
      <Text>There is users component</Text>
      <Button
        title="Go to Profile"
        onPress={() => navigation.navigate("Profile", { name: "Profile" })}
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

export default Users;
