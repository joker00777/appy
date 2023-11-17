import * as React from "react";
import { useMutation } from "@tanstack/react-query";
import { Text, TouchableOpacity, View } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import * as Yup from "yup";
import Button from "../../src/components/Button";
import { router } from "expo-router";
import { Formik, FormikProps } from "formik";
import { LoginValuesType, ResponseType } from "../../types";
import Input from "../../src/components/Input";
import { LoginApi } from "../../api";
import Top from "../../src/components/Top";

export default function Login() {
  const initialValue: LoginValuesType = {
    email: "",
    password: "",
  };
  const formikRef = React.useRef<FormikProps<typeof initialValue>>(null);

  const validationSchema = Yup.object().shape({
    email: Yup.string()
      .email("Please enter valid email")
      .required("Enter email"),
    password: Yup.string().required("Enter password"),
  });

  const create = useMutation<ResponseType, unknown, LoginValuesType>({
    mutationFn: LoginApi,
  });

  const handleLogIn = React.useCallback(
    (user: LoginValuesType) => {
      // create.mutateAsync(user).then((data: ResponseType) => {
      //   console.log("sssssssssssssssssssssss", data);
      //   return AsyncStorage.setItem("session", data.session).then(() => {
      return router.push("/home");
      //   });
      // });
    },
    [router]
  );

  const navigateBack = React.useCallback(() => {
    router.push("/onboarding");
  }, [router]);

  const navigateToSignUp = React.useCallback(() => {
    router.push("/onboarding/signup");
  }, [router]);

  return (
    <View>
      <Top text="Login" navigateBack={navigateBack} />
      <Formik
        initialValues={initialValue}
        onSubmit={handleLogIn}
        // validationSchema={validationSchema}
        validateOnMount
        validateOnChange
        innerRef={formikRef}
      >
        <View>
          <View
            style={{
              marginTop: 70,
              borderColor: "#CDCDDB",
              borderWidth: 1,
              borderRadius: 15,
              marginLeft: 10,
              marginRight: 10,
            }}
          >
            <Input placeholder="Email" name="email" style={{ padding: 10 }} />
          </View>
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
            <Input
              placeholder="Password"
              name="password"
              style={{ padding: 10 }}
            />
          </View>
          <Button
            text="Login"
            style={{
              // backgroundColor: "#7F3DFF",
              borderRadius: 15,
              marginTop: 50,
              marginLeft: 10,
              marginRight: 10,
              height: 56,
              width: 380,
              shadowColor: "#52006A",
              elevation: 4,
            }}
            type="primary"
          />
          {/* <Button
            text="Login"
            style={{
              // backgroundColor: "#7F3DFF",
              marginTop: 50,
              borderRadius: 15,
              marginLeft: 10,
              marginRight: 10,
              height: 56,
              shadowColor: "#52006A",
              elevation: 4,
            }}
            type="primary"
          /> */}
        </View>
      </Formik>
      <View style={{ marginTop: 50 }}>
        <Text style={{ color: "#91919F", textAlign: "center" }}>
          Don’t have an account yet?
          <TouchableOpacity onPress={navigateToSignUp}>
            <Text style={{ color: "#7F3DFF", textDecorationLine: "underline" }}>
              {" "}
              Sign Up
            </Text>
          </TouchableOpacity>
        </Text>
      </View>
    </View>
  );
}
