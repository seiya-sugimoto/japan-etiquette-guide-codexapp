import type { PropsWithChildren } from "react";
import { SafeAreaView, ScrollView, StyleSheet, View } from "react-native";

import { colors } from "@/lib/constants/colors";
import { spacing } from "@/lib/constants/spacing";

type AppScreenProps = PropsWithChildren<{
  scroll?: boolean;
}>;

export function AppScreen({ children, scroll = true }: AppScreenProps) {
  const content = <View style={styles.content}>{children}</View>;

  return (
    <SafeAreaView style={styles.safeArea}>
      {scroll ? <ScrollView contentContainerStyle={styles.scroll}>{content}</ScrollView> : content}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: colors.background
  },
  scroll: {
    paddingBottom: spacing.xxl
  },
  content: {
    paddingHorizontal: spacing.lg,
    paddingTop: spacing.lg,
    gap: spacing.lg
  }
});
