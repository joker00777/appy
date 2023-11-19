import { Tabs } from "expo-router";
import Search from "../../src/assets/icon/search.svg";
import Profile from "../../src/assets/icon/profile.svg";
import { colors } from "../../src/design/color";

export default function Layout() {
  return (
    <Tabs>
      <Tabs.Screen
        name="search"
        options={{
          tabBarLabel: "Search",
          tabBarLabelStyle: {
            color: "grey",
          },
          headerShown: false,
          tabBarIcon: () => <Search />,
          // tabBarBackground: colors.secondary,
          tabBarStyle: {
            padding: 10,
            backgroundColor: colors.secondary,
          },
        }}
      ></Tabs.Screen>
      <Tabs.Screen
        name="profile"
        options={{
          tabBarLabel: "Profile",
          tabBarLabelStyle: {
            color: "grey",
          },
          headerShown: false,
          tabBarIcon: () => <Profile />,
          // tabBarBackground: colors.secondary,
          tabBarStyle: {
            padding: 10,
            backgroundColor: colors.secondary,
          },
        }}
      ></Tabs.Screen>
    </Tabs>
  );
}
