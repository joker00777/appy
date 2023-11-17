import { LinearGradient } from "expo-linear-gradient";
import { router } from "expo-router";
import React from "react";
import { View, Text, GestureResponderEvent } from "react-native";
import Button from "../../src/components/Button";

export default function Home() {
  // navigateToDebts
  const navigateToDebts = React.useCallback(
    (item: GestureResponderEvent) => {
      router.push("/debit");
    },
    [router]
  );
  const navigateToIncomes = React.useCallback(
    (item: GestureResponderEvent) => {
      router.push("/income");
    },
    [router]
  );

  return (
    <View style={{ backgroundColor: "#FFF6E6", height: "100%" }}>
      <LinearGradient
        colors={["#FFF6E6", "#C6C6C6", "#FCFCFC"]}
        style={{ height: "100%" }}
      >
        <View>
          <View style={{ marginTop: "90%", marginLeft: 25, marginRight: 25 }}>
            <Text
              style={{
                fontWeight: "bold",
                fontSize: 25,
                textAlign: "center",
              }}
            >
              Manage Finances
            </Text>
            <View style={{ marginTop: 20 }}>
              <Button
                text="Debts"
                style={{
                  borderRadius: 45,
                  height: 140,
                  width: "100%",
                  shadowColor: "#52006A",
                  elevation: 4,
                }}
                type="debt"
                onPress={navigateToDebts}
                textColor="white"
              />
              <View
                style={{
                  marginTop: 20,
                  flexDirection: "row",
                  flexWrap: "wrap",
                }}
              >
                {/* inpe cost bhi likh denge if the person is logged in */}
                <Button
                  text="Credits"
                  style={{
                    borderRadius: 45,
                    height: 140,
                    width: 160,
                    marginRight: 20,
                    shadowColor: "#52006A",
                    elevation: 4,
                  }}
                  type="credit"
                  textColor="white"
                />
                <Button
                  text="Incomes"
                  style={{
                    borderRadius: 45,
                    height: 140,
                    width: 160,
                    marginLeft: 20,
                    shadowColor: "#52006A",
                    elevation: 4,
                  }}
                  onPress={navigateToIncomes}
                  type="credit"
                  textColor="white"
                />
              </View>
            </View>
          </View>
        </View>
      </LinearGradient>
    </View>
  );
}
