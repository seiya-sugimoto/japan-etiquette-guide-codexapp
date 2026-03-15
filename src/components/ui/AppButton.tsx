import { Pressable, StyleSheet } from "react-native";

import { AppText } from "@/components/ui/AppText";
import { colors } from "@/lib/constants/colors";
import { radius } from "@/lib/constants/radius";
import { spacing } from "@/lib/constants/spacing";

type AppButtonProps = {
  label: string;
  onPress: () => void;
  tone?: "primary" | "secondary";
};

export function AppButton({ label, onPress, tone = "primary" }: AppButtonProps) {
  return (
    <Pressable onPress={onPress} style={[styles.button, tone === "primary" ? styles.primary : styles.secondary]}>
      <AppText variant="caption" color={tone === "primary" ? colors.surface : colors.primary}>
        {label}
      </AppText>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    alignSelf: "flex-start",
    borderRadius: radius.pill,
    paddingHorizontal: spacing.md,
    paddingVertical: spacing.sm,
    borderWidth: 1
  },
  primary: {
    backgroundColor: colors.primary,
    borderColor: colors.primary
  },
  secondary: {
    backgroundColor: colors.surface,
    borderColor: colors.border
  }
});
