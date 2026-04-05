import { Link } from "expo-router";
import { Image, Pressable, StyleSheet, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";

import { AppBadge } from "@/components/ui/AppBadge";
import { AppCard } from "@/components/ui/AppCard";
import { AppText } from "@/components/ui/AppText";
import { useAppLanguage } from "@/features/localization/hooks/useAppLanguage";
import { usePremium } from "@/features/premium/hooks/usePremium";
import { colors } from "@/lib/constants/colors";
import { getPremiumTierCopy } from "@/lib/i18n/premium-tier-copy";
import { spacing } from "@/lib/constants/spacing";
import type { Category } from "@/types/category";

export function CategoryCard({ category }: { category: Category }) {
  const { currentLanguage } = useAppLanguage();
  const { isPremiumUnlocked } = usePremium();
  const premiumTierCopy = getPremiumTierCopy(currentLanguage);
  const isLocked = category.premiumTier === "premium-only" && !isPremiumUnlocked;
  const badgeLabel =
    category.badge === "high-risk"
      ? "HIGH RISK"
      : category.badge === "essential"
        ? "ESSENTIAL"
        : category.premiumTier === "premium-only"
          ? premiumTierCopy.premiumOnlyBadge
          : category.premiumTier === "preview"
            ? premiumTierCopy.previewBadge
          : null;

  return (
    <Link asChild href={`/category/${category.slug}`}>
      <Pressable style={({ pressed }) => [styles.pressable, pressed && styles.pressablePressed]}>
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
            <Ionicons color={colors.textMuted} name={isLocked ? "lock-closed" : "chevron-forward"} size={18} />
          </View>
        </AppCard>
      </Pressable>
    </Link>
  );
}

const styles = StyleSheet.create({
  pressable: {
    borderRadius: 28
  },
  pressablePressed: {
    opacity: 0.84
  },
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
