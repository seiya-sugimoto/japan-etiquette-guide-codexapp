import { Pressable, StyleSheet } from "react-native";

import { AppText } from "@/components/ui/AppText";
import { colors } from "@/lib/constants/colors";
import { radius } from "@/lib/constants/radius";
import { shadows } from "@/lib/constants/shadows";
import { spacing } from "@/lib/constants/spacing";

type AppButtonProps = {
  label: string;
  onPress: () => void;
  tone?: "primary" | "secondary";
};

export function AppButton({ label, onPress, tone = "primary" }: AppButtonProps) {
  return (
    <Pressable onPress={onPress} style={[styles.button, tone === "primary" ? styles.primary : styles.secondary]}>
      <AppText style={styles.label} variant="caption" color={tone === "primary" ? colors.surface : colors.primary}>
        {label}
      </AppText>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    alignSelf: "stretch",
    borderRadius: radius.pill,
    paddingHorizontal: spacing.lg,
    paddingVertical: spacing.md,
    borderWidth: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  label: {
    textTransform: "none"
  },
  primary: {
    backgroundColor: colors.primary,
    borderColor: colors.primary,
    ...shadows.strong
  },
  secondary: {
    backgroundColor: colors.surfaceMuted,
    borderColor: "transparent"
  }
});
