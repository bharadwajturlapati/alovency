import React from "react";
import { View, StyleSheet } from "react-native";
import { Text } from "react-native-elements";

const CategoryHeader = (props) => {
  return (
    <View style={styles.container}>
      <Text style={styles.MonthText}>{props.month} {props.year}</Text>
  <Text style={styles.AmountText}>{props.amountUsed}/{props.totalAmount}</Text>
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
