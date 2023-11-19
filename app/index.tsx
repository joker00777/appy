import React from "react";
import {
  Dimensions,
  GestureResponderEvent,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
} from "react-native";
import MoneyHand from "../src/assets/icon/money-hand.svg";
import { CarouselRenderItemInfo } from "react-native-reanimated-carousel/lib/typescript/types";
import Button from "../src/components/Button";
import { router } from "expo-router";
import { colors } from "../src/design/color";

// remove width from button............
/* next heading will be pay off your debt. */

/* become your own financial advisor h1
      take steps that benifits you in the longer run */

// parallax-horizontal
export default function login() {
  const handleLogIn = React.useCallback(
    (item: GestureResponderEvent) => {
      router.push("/login");
    },
    [router]
  );
  const handleSignUp = React.useCallback(
    (item: GestureResponderEvent) => {
      router.push("/signup");
    },
    [router]
  );

  const navigateToHome = React.useCallback(
    (item: GestureResponderEvent) => {
      router.push("/search");
    },
    [router]
  );

  // skip ka option dede incase of login
  return (
    <View style={styles.container}>
      <View
        style={{
          height: "60%",
          width: "100%",
        }}
      >
        <Image
          source={require("../src/assets/image/try.webp")}
          style={{ width: "100%", height: "100%", resizeMode: "cover" }}
        />
      </View>
      <View>
        <Text
          style={{
            // fontWeight: "bold",
            fontSize: 30,
            textAlign: "center",
            padding: 20,
            color: "white",
          }}
        >
          Connecting journeys with deliveries – safely, swiftly, securely.
        </Text>
        {/* yeah saara style hardcoded nahi hona chahiye as phone sizes can differ */}
        <Button
          text="Sign Up"
          style={{
            borderRadius: 15,
            marginLeft: 10,
            marginRight: 10,
            height: 56,
            width: 343,
            shadowColor: "#52006A",
            elevation: 4,
          }}
          textColor="white"
          type="primary"
          onPress={handleSignUp}
        />
        <Button
          text="Login"
          style={{
            borderRadius: 15,
            marginLeft: 10,
            marginRight: 10,
            height: 56,
            width: 343,
            shadowColor: "#52006A",
            elevation: 4,
            marginTop: 10,
          }}
          type="secondary"
          onPress={handleLogIn}
        />
        <View style={{ marginTop: 10 }}>
          <TouchableOpacity onPress={navigateToHome}>
            <Text
              style={{
                color: "#91919F",
                textAlign: "center",
                textDecorationLine: "underline",
              }}
            >
              Skip for now
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#131514",
    // alignItems: "center",
    // justifyContent: "center",
  },
});
