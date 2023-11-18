import React from "react";
import {
  Dimensions,
  GestureResponderEvent,
  StyleSheet,
  Text,
  View,
  Image,
} from "react-native";
import MoneyHand from "../../src/assets/icon/money-hand.svg";
import Carousel from "react-native-reanimated-carousel";
import { CarouselRenderItemInfo } from "react-native-reanimated-carousel/lib/typescript/types";
import Button from "../../src/components/Button";
import { router } from "expo-router";

// remove width from button............
/* next heading will be pay off your debt. */

/* become your own financial advisor h1
      take steps that benifits you in the longer run */

// parallax-horizontal
export default function login() {
  const { width, height } = Dimensions.get("window");
  const renderItem = React.useCallback(
    ({
      item,
    }: CarouselRenderItemInfo<{
      svg: React.ReactElement;
      heading: string;
      subtext: string;
    }>) => (
      <View style={{ alignItems: "center" }}>
        <View>{item.svg}</View>
        <View
          style={{ justifyContent: "center", marginLeft: 30, marginRight: 30 }}
        >
          <Text
            style={{
              fontWeight: "bold",
              fontSize: 35,
              textAlign: "center",
            }}
          >
            {item.heading}
          </Text>
          <Text
            style={{ color: "#91919F", paddingTop: 10, textAlign: "center" }}
          >
            {item.subtext}
          </Text>
        </View>
      </View>
    ),
    []
  );
  const data: { svg: React.ReactElement; heading: string; subtext: string }[] =
    [
      {
        svg: <MoneyHand />,
        heading: "Become your own Financial Advisor",
        subtext: "Gain total control of your money",
      },
      {
        svg: <MoneyHand />,
        heading: "Becomd Free from BAD DEBT",
        subtext: "Remove bad debt from your life early",
      },
      {
        svg: <MoneyHand />,
        heading: "Planning Ahead",
        subtext:
          "plan ahead to become financially independent in the long run........",
      },
    ];
  const handleLogIn = React.useCallback(
    (item: GestureResponderEvent) => {
      router.push("/onboarding/login");
    },
    [router]
  );
  const handleSignUp = React.useCallback(
    (item: GestureResponderEvent) => {
      router.push("/onboarding/signup");
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
          source={require("../../src/assets/image/try.webp")}
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
