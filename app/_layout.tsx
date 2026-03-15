import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";

import { LanguageProvider } from "@/features/localization/store/LanguageProvider";
import { colors } from "@/lib/constants/colors";

export default function RootLayout() {
  return (
    <LanguageProvider>
      <StatusBar style="dark" />
      <Stack
        screenOptions={{
          headerStyle: { backgroundColor: colors.background },
          headerTintColor: colors.text,
          contentStyle: { backgroundColor: colors.background }
        }}
      >
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen name="category/[slug]" options={{ title: "Guide" }} />
        <Stack.Screen name="language/index" options={{ title: "Language" }} />
        <Stack.Screen name="premium/index" options={{ title: "Premium" }} />
        <Stack.Screen name="feedback/index" options={{ title: "Feedback" }} />
      </Stack>
    </LanguageProvider>
  );
}
