import React, { useState } from "react";
import { View } from "react-native";
import { Button, Overlay, Text } from "react-native-elements";
import { Input } from "react-native-elements";

const OverlayCard = () => {
  const [visible, setVisible] = useState(false);

  const toggleOverlay = () => {
    setVisible(!visible);
  };

  return (
    <View>
      <Button title="Add Expense" onPress={toggleOverlay} />
      <Overlay isVisible={visible} onBackdropPress={toggleOverlay}>
        <Input placeholder="Amount" />
      </Overlay>
    </View>
  );
};

export default OverlayCard;
