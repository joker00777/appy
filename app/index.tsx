import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { router } from "expo-router";

// show this screen jab tak data na aa jaaye see how to do it.....................
// set cache vagera.
export default function App() {
  setTimeout(() => {
    router.replace("/home"); //this.props.navigation.navigate('Login')
  }, 500);

  return (
    <View style={styles.container}>
      <View>
        <View
          style={{
            marginLeft: 20,
            position: "absolute",
            borderRadius: 37,
            width: 74,
            height: 74,
            backgroundColor: "#C528FF",
            // stroke-width: 1px;
            // stroke: #000;
            // mix-blend-mode: overlay;
            // filter: blur(16px);
          }}
        />

        {/* <LinearGradient
          colors={["#FDD5D7", "#000000"]}
          start={{ x: 0.0, y: 1.0 }}
          end={{ x: 1.0, y: 1.0 }}
          style={{
            marginLeft: 20,
            paddingRight: 10,
            position: "absolute",
            borderWidth: 0,
            borderRadius: 74,
            width: 74,
            height: 74,
          }}
        ></LinearGradient> */}
        <Text style={{ fontWeight: "bold", fontSize: 50, color: "white" }}>
          montra
        </Text>
        {/* <View style={styles.circle}>
          <Text style={{ fontWeight: "bold", fontSize: 50 }}>montra</Text>
        </View> */}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  circle: {
    // width: 74,
    // height: 74,
    backgroundColor: "#FCAC12",
    // borderRadius: 74,
  },
  container: {
    flex: 1,
    backgroundColor: "#7F3DFF",
    alignItems: "center",
    justifyContent: "center",
  },
});
