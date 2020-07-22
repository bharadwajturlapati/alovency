import React, { useState } from "react";
import { View, StyleSheet, Image, TouchableOpacity, TouchableNativeFeedback, Text } from "react-native";
import { Button, Overlay, Input } from "react-native-elements";
import {} from "react-native-gesture-handler";

const FloatingActionButton = () => {
  const [visible, setVisible] = useState(false);

  const toggleOverlay = () => {
    setVisible(!visible);
  };
  return (
    <View style={styles.MainContainer}>
      <View>
        <Overlay
          isVisible={visible}
          onBackdropPress={toggleOverlay}
          width="auto"
          height="auto"
        >
          <View style={styles.AddExpenseStyle}>
            <Input placeholder="Amount" />
            <Input placeholder="Description" />
            <Button title="Add Expense" raised={true} />
          </View>
        </Overlay>
      </View>
      {Platform.OS === "ios" ? (
        <TouchableOpacity
          activeOpacity={0.7}
          onPress={toggleOverlay}
          style={styles.TouchableOpacityStyle}
        >
          <View>
            <Image
              source={require("../assets/add.png")}
              style={styles.FloatingActionButtonStyle}
            />
            <Text style={styles.DummyText}></Text>
          </View>
        </TouchableOpacity>
      ) : (
        <TouchableNativeFeedback onPress={toggleOverlay}>
          <View>
            <Image
              source={require("../assets/add.png")}
              style={styles.FloatingActionButtonStyle}
            />
            <Text style={styles.DummyText}></Text>
          </View>
        </TouchableNativeFeedback>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  DummyText: {
    position: "absolute",
    top: 0,
  },
  TouchableOpacityStyle: {
    position: "absolute",
    width: 50,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    right: 30,
    bottom: 30,
    zIndex: 1,
  },
  MainContainer: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5F5F5",
    left: 10,
  },
  FloatingActionButtonStyle: {
    resizeMode: "contain",
    width: 50,
    height: 50,
    borderRadius: 50 / 2,
    backgroundColor: "red",
  },
  AddExpenseStyle: {
    width: 400,
    height: 500,
    margin: 10,
  },
  InputAmount: {
    width: 80,
    height: 10,
  },
});

export default FloatingActionButton;
