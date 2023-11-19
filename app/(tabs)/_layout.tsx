import { Tabs } from "expo-router";
export default function Layout() {
  return (
    <Tabs>
      <Tabs.Screen
        name="home"
        options={{ tabBarLabel: "search", headerShown: false }}
      ></Tabs.Screen>
      <Tabs.Screen
        name="search"
        options={{ tabBarLabel: "search" }}
      ></Tabs.Screen>
    </Tabs>
  );
}
