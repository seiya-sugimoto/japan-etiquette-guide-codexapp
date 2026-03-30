import { StyleSheet, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";

import { AppCard } from "@/components/ui/AppCard";
import { AppText } from "@/components/ui/AppText";
import { colors } from "@/lib/constants/colors";
import { radius } from "@/lib/constants/radius";
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
    <AppCard style={[styles.card, tone === "success" ? styles.cardSuccess : tone === "danger" ? styles.cardDanger : styles.cardNeutral]}>
      <View style={styles.row}>
        <View style={[styles.iconWrap, iconBackground]}>
          <Ionicons color={iconColor} name={iconName} size={18} />
        </View>
        <AppText variant="subtitle">{title}</AppText>
      </View>
      <View style={styles.items}>
        {items.map((item) => (
          <View key={item} style={styles.itemRow}>
            <View style={styles.dot} />
            <AppText style={styles.itemText}>{item}</AppText>
          </View>
        ))}
      </View>
    </AppCard>
  );
}

const styles = StyleSheet.create({
  card: {
    gap: spacing.md
  },
  cardSuccess: {
    backgroundColor: "#F7FBF8"
  },
  cardDanger: {
    backgroundColor: "#FCF5F5"
  },
  cardNeutral: {
    backgroundColor: colors.surfaceMuted
  },
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
    backgroundColor: "#F1ECE8"
  },
  items: {
    gap: spacing.sm
  },
  itemRow: {
    flexDirection: "row",
    gap: spacing.sm,
    alignItems: "flex-start"
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: radius.pill,
    backgroundColor: colors.accent,
    marginTop: 7
  },
  itemText: {
    flex: 1
  }
});
