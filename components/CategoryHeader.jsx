import React from "react";
import { View, StyleSheet } from "react-native";
import { Text } from "react-native-elements";

const CategoryHeader = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.MonthText}>October 2019</Text>
      <Text style={styles.AmountText}>200/1000</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
  },
  MonthText:{
    top: 20,
    fontSize: 18,
    alignSelf: "flex-start",
  },
  AmountText:{
    top: 20,
    fontSize: 18,
    alignSelf: "flex-end",
    right: 30,
  }
});

export default CategoryHeader;
