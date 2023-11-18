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
} from "react-native";
import { useFormikContext } from "formik";
import { colors } from "../design/color";

export interface InputProps {
  placeholder: string;
  name: string;
  style: StyleProp<TextStyle>;
}

const startingAnimation = { opacity: 0, scale: 0.5 };
const finalAnimation = { opacity: 1, scale: 1 };
const exitAnimation = { opacity: 0, scale: 0.5 };

export default function Input({ placeholder, style, name }: InputProps) {
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
