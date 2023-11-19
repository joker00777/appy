import { Stack } from "expo-router";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { colors } from "../src/design/color";

const queryClient = new QueryClient();

export default function Layout() {
  return (
    <QueryClientProvider client={queryClient}>
      <Stack>
        <Stack.Screen
          name="index"
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="login"
          options={{
            headerShown: true,
            headerStyle: { backgroundColor: colors.secondary },
            headerTitleStyle: { color: "white", fontSize: 20 },
            headerTitle: "Log In",
          }}
        />
        <Stack.Screen
          name="signup"
          options={{
            headerShown: true,
            headerStyle: { backgroundColor: colors.secondary },
            headerTitleStyle: { color: "white", fontSize: 20 },
            headerTitle: "Sign Up",
          }}
        />
        <Stack.Screen
          name="(tabs)"
          options={{
            headerShown: false,
          }}
        />
      </Stack>
    </QueryClientProvider>
  );
}
