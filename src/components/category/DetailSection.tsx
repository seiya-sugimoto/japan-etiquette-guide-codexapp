import { StyleSheet, View } from "react-native";

import { AppCard } from "@/components/ui/AppCard";
import { AppText } from "@/components/ui/AppText";
import { colors } from "@/lib/constants/colors";
import { radius } from "@/lib/constants/radius";
import { spacing } from "@/lib/constants/spacing";

export function DetailSection({ title, items }: { title: string; items: string[] }) {
  return (
    <AppCard style={styles.card}>
      <AppText style={styles.title} color={colors.primary} variant="subtitle">
        {title}
      </AppText>
      <View style={styles.list}>
        {items.map((item) => (
          <View key={`${title}-${item}`} style={styles.row}>
            <View style={styles.bullet} />
            <AppText style={styles.text}>{item}</AppText>
          </View>
        ))}
      </View>
    </AppCard>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: colors.surface
  },
  title: {
    marginBottom: spacing.xs
  },
  list: {
    gap: spacing.sm
  },
  row: {
    flexDirection: "row",
    gap: spacing.sm,
    alignItems: "flex-start"
  },
  bullet: {
    width: 8,
    height: 8,
    borderRadius: radius.pill,
    backgroundColor: colors.primarySoft,
    marginTop: 7
  },
  text: {
    flex: 1,
    color: colors.textSubtle
  }
});
