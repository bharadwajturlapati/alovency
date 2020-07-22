import React from "react";
import { SafeAreaView, StyleSheet } from "react-native";
import { ListItem } from "react-native-elements";

const DrawerMenu = () => {
  return (
    <SafeAreaView style = {styles.container}>
      <ListItem key={1} title={"Time Line"} bottomDivider topDivider />
      <ListItem key={2} title={"January 2019"} bottomDivider topDivider/>
      <ListItem key={3} title={"Feb 2019"} bottomDivider topDivider/>
      <ListItem key={4} title={"Mar 2019"} bottomDivider topDivider/>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
    container: {
      top: 200,
      backgroundColor: "#fff",
      borderColor:"black"
    },
  });

export default DrawerMenu;
