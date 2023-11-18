import React from "react";
import { AnimatePresence, MotiView } from "moti";
import {
  NativeSyntheticEvent,
  TextInput,
  TextInputFocusEventData,
  ViewStyle,
  Text,
  StyleProp,
  TextStyle,
  View,
  StyleSheet,
} from "react-native";
import { useFormikContext } from "formik";
import { colors } from "../design/color";
import Location from "../assets/icon/location.svg";

export interface InputProps {
  placeholder: string;
  name: string;
  style: StyleProp<TextStyle>;
  type?: string;
}

const startingAnimation = { opacity: 0, scale: 0.5 };
const finalAnimation = { opacity: 1, scale: 1 };
const exitAnimation = { opacity: 0, scale: 0.5 };

export default function Input({ placeholder, style, name, type }: InputProps) {
  const formik = useFormikContext();

  const { error, value } =
    formik?.getFieldMeta<number | string | undefined>(name) || {};

  const blurHandler = React.useCallback(
    (e: NativeSyntheticEvent<TextInputFocusEventData>) => {
      formik?.setFieldTouched?.(name, true, true);
      formik?.handleBlur?.(name)?.(e);
    },
    [formik, name]
  );

  const handleChange = React.useCallback(
    (value: string) => {
      formik?.setFieldTouched?.(name, true, true);
      formik?.handleChange?.(name)?.(value);
    },
    [formik, name]
  );
  return (
    <>
      {type === "line" ? (
        <View>
          <View
            style={{ flexDirection: "row", marginTop: 10, marginBottom: 5 }}
          >
            <Location />
            <TextInput
              onChangeText={handleChange}
              onBlur={blurHandler}
              placeholder={placeholder}
              placeholderTextColor={"grey"}
              style={style}
            />
          </View>
          <View style={styles.line} />
        </View>
      ) : (
        <View
          style={{
            marginTop: 20,
            borderColor: "#CDCDDB",
            borderWidth: 1,
            borderRadius: 15,
            marginLeft: 10,
            marginRight: 10,
          }}
        >
          <TextInput
            onChangeText={handleChange}
            onBlur={blurHandler}
            placeholder={placeholder}
            placeholderTextColor={"grey"}
            style={style}
          />
        </View>
      )}
      {error && (formik?.submitCount ?? 0) > 0 ? (
        <AnimatePresence>
          {error !== undefined && (
            <MotiView
              from={startingAnimation}
              animate={finalAnimation}
              exit={exitAnimation}
            >
              <Text
                style={{
                  color: colors.danger,
                  paddingTop: 10,
                  textAlign: "center",
                }}
              >
                {error}
              </Text>
            </MotiView>
          )}
        </AnimatePresence>
      ) : (
        <></>
      )}
    </>
  );
}

const styles = StyleSheet.create({
  line: {
    height: 1, // For a thin horizontal line; set to 2 or more for a thicker line
    backgroundColor: "grey", // Line color
    width: "auto", // Line width
    marginLeft: 10,
    marginRight: 10,
  },
});
