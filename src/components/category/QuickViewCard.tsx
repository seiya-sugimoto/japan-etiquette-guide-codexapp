import { StyleSheet, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";

import { AppCard } from "@/components/ui/AppCard";
import { AppText } from "@/components/ui/AppText";
import { colors } from "@/lib/constants/colors";
import { spacing } from "@/lib/constants/spacing";

export function QuickViewCard({ title, items, tone = "success" }: { title: string; items: string[]; tone?: "success" | "danger" }) {
  return (
    <AppCard>
      <View style={styles.row}>
        <View style={[styles.iconWrap, tone === "success" ? styles.success : styles.danger]}>
          <Ionicons color={tone === "success" ? colors.success : "#C13D4B"} name={tone === "success" ? "checkmark-circle" : "close-circle"} size={18} />
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
  }
});
