import { Tabs } from "expo-router";
import { Ionicons } from "@expo/vector-icons";

import { useAppLanguage } from "@/features/localization/hooks/useAppLanguage";
import { colors } from "@/lib/constants/colors";
import { radius } from "@/lib/constants/radius";

export default function TabLayout() {
  const { t } = useAppLanguage();

  return (
    <Tabs
      screenOptions={{
        headerStyle: { backgroundColor: colors.background },
        headerTintColor: colors.text,
        tabBarActiveTintColor: colors.primary,
        tabBarInactiveTintColor: colors.textMuted,
        tabBarStyle: {
          position: "absolute",
          left: 16,
          right: 16,
          bottom: 14,
          backgroundColor: "rgba(251, 249, 246, 0.94)",
          height: 76,
          paddingTop: 8,
          borderTopWidth: 0,
          borderRadius: radius.lg
        },
        tabBarLabelStyle: { fontSize: 11, fontWeight: "700", marginBottom: 6 },
        tabBarItemStyle: {
          marginVertical: 8,
          borderRadius: radius.pill
        },
        tabBarBackground: () => null
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: t.homeTab,
          tabBarIcon: ({ color, focused }) => (
            <Ionicons color={color} name={focused ? "home" : "home-outline"} size={22} />
          )
        }}
      />
      <Tabs.Screen
        name="browse"
        options={{
          title: t.browseTab,
          tabBarIcon: ({ color, focused }) => (
            <Ionicons color={color} name={focused ? "compass" : "compass-outline"} size={22} />
          )
        }}
      />
      <Tabs.Screen
        name="search"
        options={{
          title: t.searchTab,
          tabBarIcon: ({ color, focused }) => (
            <Ionicons color={color} name={focused ? "search" : "search-outline"} size={22} />
          )
        }}
      />
      <Tabs.Screen
        name="settings"
        options={{
          title: t.settingsTab,
          tabBarIcon: ({ color, focused }) => (
            <Ionicons color={color} name={focused ? "settings" : "settings-outline"} size={22} />
          )
        }}
      />
    </Tabs>
  );
}
