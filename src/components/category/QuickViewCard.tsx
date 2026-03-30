import { StyleSheet, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";

import { AppCard } from "@/components/ui/AppCard";
import { AppText } from "@/components/ui/AppText";
import { colors } from "@/lib/constants/colors";
import { spacing } from "@/lib/constants/spacing";

export function QuickViewCard({
  title,
  items,
  tone = "neutral"
}: {
  title: string;
  items: string[];
  tone?: "success" | "danger" | "neutral";
}) {
  const iconName = tone === "success" ? "checkmark-circle" : tone === "danger" ? "close-circle" : "sparkles";
  const iconColor = tone === "success" ? colors.success : tone === "danger" ? "#C13D4B" : colors.primary;
  const iconBackground = tone === "success" ? styles.success : tone === "danger" ? styles.danger : styles.neutral;

  return (
    <AppCard>
      <View style={styles.row}>
        <View style={[styles.iconWrap, iconBackground]}>
          <Ionicons color={iconColor} name={iconName} size={18} />
        </View>
        <AppText variant="subtitle">{title}</AppText>
      </View>
      {items.map((item) => (
        <AppText key={item}>{item}</AppText>
      ))}
    </AppCard>
  );
}

const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
    alignItems: "center",
    gap: spacing.sm
  },
  iconWrap: {
    width: 32,
    height: 32,
    borderRadius: 16,
    alignItems: "center",
    justifyContent: "center"
  },
  success: {
    backgroundColor: "#E8F6EE"
  },
  danger: {
    backgroundColor: "#FBECEE"
  },
  neutral: {
    backgroundColor: "#EEF3FA"
  }
});
