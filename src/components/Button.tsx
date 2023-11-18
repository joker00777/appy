import React from "react";
import {
  View,
  TouchableOpacity,
  Text,
  StyleProp,
  ViewStyle,
  GestureResponderEvent,
} from "react-native";
import { colors } from "../design/color";
import { useFormikContext } from "formik";

export interface ButtonProps {
  text: string;
  style: ViewStyle;
  onPress?: (event: GestureResponderEvent) => void | Promise<Function | void>;
  type: "primary" | "secondary" | "debt" | "credit";
  textColor?: string;
}

export default function Button({
  text,
  style,
  onPress,
  type,
  textColor,
}: ButtonProps) {
  const formik = useFormikContext();

  const handlePress = React.useCallback(
    (e: GestureResponderEvent | React.FormEvent<HTMLFormElement>) => {
      console.log("ffffffffffffffffffffffffff", formik);
      if (onPress instanceof Function) {
        onPress(e as GestureResponderEvent);
      } else if (formik?.handleSubmit) {
        console.log("xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx");
        formik.handleSubmit(e as React.FormEvent<HTMLFormElement>);
      }
    },
    [onPress, formik]
  );
  return (
    <View>
      <TouchableOpacity
        style={{
          alignItems: "center",
        }}
        onPress={handlePress}
      >
        <View
          style={{
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: colors.button[type],
            ...style,
          }}
        >
          <Text
            style={{
              fontWeight: "bold",
              fontSize: 15,
              color: textColor
                ? textColor
                : type === "primary"
                ? colors.button.secondary
                : colors.button.primary,
            }}
          >
            {text}
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}
