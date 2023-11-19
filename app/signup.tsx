import React from "react";
import { useMutation } from "@tanstack/react-query";
import {
  GestureResponderEvent,
  Text,
  TouchableOpacity,
  View,
  // CheckBox,
} from "react-native";
import * as Yup from "yup";
import Google from "../src/assets/icon/google.svg";
import Button from "../src/components/Button";
import Input from "../src/components/Input";
import { Formik, FormikProps } from "formik";
import { SignUpValuesType } from "../types";
import { router } from "expo-router";
import { SignUp } from "../api";
import Top from "../src/components/Top";
import { colors } from "../src/design/color";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function Login() {
  const initialValue: SignUpValuesType = {
    name: "",
    email: "",
    password: "",
  };
  const formikRef = React.useRef<FormikProps<typeof initialValue>>(null);

  const validationSchema = Yup.object().shape({
    name: Yup.string().required("Enter name"),
    email: Yup.string()
      .email("Please enter valid email")
      .required("Enter email"),
    password: Yup.string().required("Enter password"),
  });

  const create = useMutation<{ session: string }, unknown, SignUpValuesType>({
    mutationFn: SignUp,
  });

  const handleSignUp = React.useCallback(
    (user: SignUpValuesType) => {
      create.mutateAsync(user).then((data: { session: string }) => {
        console.log("sssssssssssssssssssssss", data);
        return AsyncStorage.setItem("session", data.session).then(() => {
          return router.push("/home");
        });
      });
    },
    [router]
  );


  const navigateToLogin = React.useCallback(
    (item: GestureResponderEvent) => {
      router.push("/login");
    },
    [router]
  );

  return (
    <View style={{ backgroundColor: colors.secondary, height: "100%" }}>
      <Formik
        initialValues={initialValue}
        onSubmit={handleSignUp}
        validationSchema={validationSchema}
        validateOnMount
        validateOnChange
        innerRef={formikRef}
      >
        <View style={{ marginTop: 50 }}>
          <Input
            placeholder="Name"
            name="name"
            style={{ padding: 10, color: "white" }}
          />
          <Input
            placeholder="Email"
            name="email"
            style={{ padding: 10, color: "white" }}
          />
          <Input
            placeholder="Password"
            name="password"
            style={{ padding: 10, color: "white" }}
          />
          <View style={{ marginLeft: 20, marginRight: 20, marginTop: 30 }}>
            {/* <CheckBox></CheckBox> */}
            <Text style={{ fontWeight: "bold", color: "white" }}>
              By signing up, you agree to the{" "}
              <Text style={{ color: colors.primary }}>
                Terms of Service and Privacy Policy
              </Text>
            </Text>
          </View>
          <Button
            text="Sign Up"
            style={{
              // backgroundColor: "#0f1725",
              borderRadius: 15,
              marginTop: 50,
              marginLeft: 10,
              marginRight: 10,
              height: 56,
              width: 380,
              shadowColor: "#52006A",
              elevation: 4,
            }}
            textColor="white"
            type="primary"
          />
        </View>
      </Formik>
      <View>
        <Text style={{ color: "#91919F", textAlign: "center", margin: 30 }}>
          or with
        </Text>
      </View>
      <View>
        <View>
          <TouchableOpacity
            style={{
              alignItems: "center",
            }}
            // onPress={handlePress}
          >
            <View
              style={{
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: 'white',
                borderRadius: 15,
                marginLeft: 10,
                marginRight: 10,
                height: 56,
                width: 380,
                shadowColor: "#52006A",
                elevation: 4,
                flexDirection: "row",
                flexBasis: "auto",
              }}
            >
              <Google style={{ paddingRight: 50 }} />
              <Text
                style={{
                  fontSize: 15,
                  fontWeight: "bold",
                  color: 'black',
                }}
              >
                Sign Up with Google
              </Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
      <View style={{ marginTop: 60 }}>
        <Text style={{ color: "#91919F", textAlign: "center" }}>
          Already have an account?
          <TouchableOpacity onPress={navigateToLogin}>
            <Text
              style={{ color: colors.primary, textDecorationLine: "underline" }}
            >
              {" "}
              Login
            </Text>
          </TouchableOpacity>
        </Text>
      </View>
    </View>
  );
}
