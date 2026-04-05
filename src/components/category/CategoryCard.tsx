import { router } from "expo-router";
import { Image, Pressable, StyleSheet, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";

import { AppBadge } from "@/components/ui/AppBadge";
import { AppCard } from "@/components/ui/AppCard";
import { AppText } from "@/components/ui/AppText";
import { colors } from "@/lib/constants/colors";
import { spacing } from "@/lib/constants/spacing";
import type { Category } from "@/types/category";

export function CategoryCard({ category }: { category: Category }) {
  const badgeLabel =
    category.badge === "high-risk"
      ? "HIGH RISK"
      : category.badge === "essential"
        ? "ESSENTIAL"
        : category.premiumTier !== "free"
          ? "PREVIEW"
          : null;

  return (
    <Pressable onPress={() => router.push(`/category/${category.slug}`)}>
      <AppCard style={styles.card}>
        <View style={styles.thumbWrap}>
          <Image source={{ uri: category.imageUrl }} style={styles.thumb} />
        </View>
        <View style={styles.body}>
          <View style={styles.header}>
            <AppText style={styles.title} variant="subtitle">
              {category.title}
            </AppText>
            {badgeLabel ? <AppBadge label={badgeLabel} tone={category.premiumTier !== "free" ? "premium" : "default"} /> : null}
          </View>
          <AppText color={colors.textMuted} numberOfLines={2} style={styles.description}>
            {category.shortDescription}
          </AppText>
        </View>
        <View style={styles.chevronWrap}>
          <Ionicons color={colors.textMuted} name="chevron-forward" size={18} />
        </View>
      </AppCard>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  card: {
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 28,
    padding: spacing.md
  },
  thumbWrap: {
    width: 72,
    height: 72,
    borderRadius: 22,
    overflow: "hidden"
  },
  thumb: {
    width: "100%",
    height: "100%"
  },
  body: {
    flex: 1,
    gap: 8,
    paddingHorizontal: spacing.md
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    gap: spacing.sm
  },
  title: {
    flex: 1,
    color: colors.primary
  },
  description: {
    lineHeight: 22
  },
  chevronWrap: {
    width: 32,
    height: 32,
    borderRadius: 16,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: colors.surfaceMuted
  }
});
