import * as React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import BackArrow from "../assets/icon/arrow-left.svg";

export interface TopProps {
  navigateBack: () => void;
  text: string;
  color?: string;
  textColor?: string;
}

// bug hain center mein nahi ho raha yeah text.

export default function Top({
  navigateBack,
  text,
  color,
  textColor,
}: TopProps) {
  return (
    <View
      style={{
        paddingTop: 15,
        paddingBottom: 10,
        flexDirection: "row",
        flexBasis: "auto",
        backgroundColor: color,
      }}
    >
      <TouchableOpacity onPress={navigateBack}>
        <View style={{ paddingLeft: 10 }}>
          <BackArrow />
        </View>
      </TouchableOpacity>
      {/* this is wrong flexBasis correct later flexBasis */}
      <View
        style={{
          alignItems: "center",
          flexBasis: 300,
        }}
      >
        <Text style={{ textAlign: "center", fontSize: 23, color: textColor }}>
          {text}
        </Text>
      </View>
    </View>
  );
}
