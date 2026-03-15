import { StyleSheet, View } from "react-native";

import { AppText } from "@/components/ui/AppText";
import { colors } from "@/lib/constants/colors";
import { radius } from "@/lib/constants/radius";
import { spacing } from "@/lib/constants/spacing";

type BadgeTone = "default" | "premium";

export function AppBadge({ label, tone = "default" }: { label: string; tone?: BadgeTone }) {
  return (
    <View style={[styles.badge, tone === "premium" ? styles.premium : styles.default]}>
      <AppText variant="caption" color={tone === "premium" ? colors.surface : colors.primary}>
        {label}
      </AppText>
    </View>
  );
}

const styles = StyleSheet.create({
  badge: {
    alignSelf: "flex-start",
    paddingHorizontal: spacing.sm,
    paddingVertical: spacing.xs,
    borderRadius: radius.pill
  },
  default: {
    backgroundColor: colors.surfaceMuted
  },
  premium: {
    backgroundColor: colors.primary
  }
});
