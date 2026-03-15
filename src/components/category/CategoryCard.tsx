import { router } from "expo-router";
import { Image, Pressable, StyleSheet, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";

import { AppBadge } from "@/components/ui/AppBadge";
import { AppCard } from "@/components/ui/AppCard";
import { AppText } from "@/components/ui/AppText";
import { colors } from "@/lib/constants/colors";
import { radius } from "@/lib/constants/radius";
import { spacing } from "@/lib/constants/spacing";
import type { Category } from "@/types/category";

export function CategoryCard({ category }: { category: Category }) {
  const badgeLabel =
    category.badge === "high-risk" ? "HIGH RISK" : category.badge === "essential" ? "ESSENTIAL" : category.access === "premium" ? "PREMIUM" : "FREE";

  return (
    <Pressable onPress={() => router.push(`/category/${category.slug}`)}>
      <AppCard style={styles.card}>
        <View style={styles.iconWrap}>
          <Image source={{ uri: category.imageUrl }} style={styles.thumb} />
        </View>
        <View style={styles.body}>
        <View style={styles.header}>
          <AppText variant="subtitle">{category.title}</AppText>
            <AppBadge label={badgeLabel} tone={category.access === "premium" ? "premium" : "default"} />
        </View>
        <AppText color={colors.textMuted}>{category.shortDescription}</AppText>
        </View>
        <Ionicons color={colors.textMuted} name="chevron-forward" size={18} />
      </AppCard>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  card: {
    flexDirection: "row",
    alignItems: "center"
  },
  iconWrap: {
    width: 56,
    height: 56,
    borderRadius: radius.md,
    overflow: "hidden"
  },
  thumb: {
    width: "100%",
    height: "100%"
  },
  body: {
    flex: 1,
    gap: 4
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    gap: spacing.sm
  }
});
