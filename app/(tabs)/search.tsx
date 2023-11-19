import React from "react";
import { View, Text, StyleSheet, SafeAreaView, Pressable } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { colors } from "../../src/design/color";
import Input from "../../src/components/Input";
import { Calendar, DateData } from "react-native-calendars";
import CalendarIcon from "../../src/assets/icon/calendar.svg";
import Button from "../../src/components/Button";
import { Link } from "expo-router";

export default function Home() {
  const [showCalendar, setShowCalendar] = React.useState(false);
  const [date, setDate] = React.useState(
    new Date().toISOString().split("T")[0]
  );

  console.log("dddddddddddddddddddddddddddd", date);
  // const handleCalenderPress = () => {
  //   setShowCalendar(!showCalendar);
  // };

  const handleCalenderPress = React.useCallback(
    () => setShowCalendar(!showCalendar),
    [showCalendar]
  );

  return (
    // This is not working see why later..................
    <SafeAreaProvider>
      <View
        style={{
          backgroundColor: colors.backgroundColor,
          height: "100%",
        }}
      >
        <View
          style={{
            alignItems: "center",
            marginTop: 25,
            marginRight: 55,
            marginLeft: 55,
          }}
        >
          <Text
            style={{
              textAlign: "center",
              fontSize: 23,
              color: "white",
              fontWeight: "bold",
            }}
          >
            Your delivery of goods at reasonable prices
          </Text>
        </View>
        <View style={styles.container}>
          <View style={styles.card}>
            {/* add formik here */}
            <View style={{ paddingLeft: 16, paddingRight: 16 }}>
              <Input
                placeholder="Source"
                name="source"
                style={{
                  padding: 10,
                  color: "white",
                  width: "100%",
                }}
                type="line"
              />
              <Input
                placeholder="Destination"
                name="destination"
                style={{ padding: 10, color: "white", width: "100%" }}
                type="line"
              />
              <View style={{ flexDirection: "row", marginTop: 15 }}>
                <Pressable onPress={handleCalenderPress}>
                  <CalendarIcon />
                </Pressable>
                <Text
                  style={{
                    textAlign: "center",
                    fontSize: 20,
                    color: "white",
                    marginTop: 5,
                    marginLeft: 10,
                  }}
                >
                  {date}
                </Text>
              </View>
            </View>
            <Button
              text="Search"
              style={{
                // borderRadius: 15,
                borderBottomEndRadius: 15,
                borderBottomStartRadius: 15,
                height: 56,
                width: "100%",
                shadowColor: "#52006A",
                elevation: 4,
                marginTop: 15,
              }}
              textColor="white"
              type="primary"
            />
            {showCalendar && (
              <Calendar
                minDate={new Date().toISOString().split("T")[0]}
                onDayPress={(day) => {
                  setDate(day.dateString);
                  setShowCalendar(false);
                }}
                theme={{
                  calendarBackground: colors.secondary,
                }}
                // ... other props and customization options
              />
            )}
          </View>
        </View>
      </View>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  card: {
    width: "90%", // Adjust the width as needed
    height: "auto", // Adjust the height as needed
    backgroundColor: "#252b2b", // Card's background color
    elevation: 5, // Elevation for shadow on Android
    shadowColor: "#000", // Shadow color for iOS
    shadowOffset: { width: 0, height: 2 }, // Shadow offset for iOS
    shadowOpacity: 0.3, // Shadow opacity for iOS
    shadowRadius: 4, // Shadow radius for iOS
    borderRadius: 15, // Optional: if you want rounded corners
    // paddingLeft: 16, // Inner padding of the card
    // paddingRight: 16,
  },
});
