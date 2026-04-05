import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";

import { LanguageProvider } from "@/features/localization/store/LanguageProvider";
import { PremiumProvider } from "@/features/premium/store/PremiumProvider";
import { colors } from "@/lib/constants/colors";

export default function RootLayout() {
  return (
    <LanguageProvider>
      <PremiumProvider>
        <StatusBar style="dark" />
        <Stack
          screenOptions={{
            headerStyle: { backgroundColor: colors.background },
            headerTintColor: colors.text,
            contentStyle: { backgroundColor: colors.background }
          }}
        >
          <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
          <Stack.Screen name="category/[slug]" options={{ headerShown: false }} />
          <Stack.Screen name="language/index" options={{ title: "Language" }} />
          <Stack.Screen name="feedback/index" options={{ title: "Feedback" }} />
        </Stack>
      </PremiumProvider>
    </LanguageProvider>
  );
}
