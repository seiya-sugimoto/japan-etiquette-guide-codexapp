import { ImageBackground, StyleSheet, View } from "react-native";

import { AppBadge } from "@/components/ui/AppBadge";
import { AppText } from "@/components/ui/AppText";
import { useAppLanguage } from "@/features/localization/hooks/useAppLanguage";
import { usePremium } from "@/features/premium/hooks/usePremium";
import { colors } from "@/lib/constants/colors";
import { getPremiumTierCopy } from "@/lib/i18n/premium-tier-copy";
import { radius } from "@/lib/constants/radius";
import { spacing } from "@/lib/constants/spacing";
import type { Category } from "@/types/category";

export function CategoryHero({ category }: { category: Category }) {
  const { currentLanguage, t } = useAppLanguage();
  const { isPremiumUnlocked } = usePremium();
  const premiumTierCopy = getPremiumTierCopy(currentLanguage);
  const premiumBadgeLabel =
    category.premiumTier === "premium-only"
      ? premiumTierCopy.premiumOnlyBadge
      : category.premiumTier === "preview"
        ? t.premiumAccess
        : t.quickView;
  const tone = category.premiumTier === "free" ? "default" : "premium";
  const label = category.premiumTier === "premium-only" && isPremiumUnlocked ? premiumTierCopy.premiumOnlyBadge : premiumBadgeLabel;

  return (
    <View>
      <ImageBackground imageStyle={styles.image} source={{ uri: category.imageUrl }} style={styles.hero}>
        <View style={styles.overlay} />
        <View style={styles.copy}>
          <AppBadge label={label} tone={tone} />
          <AppText color={colors.surface} variant="title">
            {category.title}
          </AppText>
          <AppText color="rgba(255,255,255,0.88)">{category.shortDescription}</AppText>
        </View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  hero: {
    height: 300,
    borderRadius: radius.lg,
    overflow: "hidden",
    justifyContent: "flex-end"
  },
  image: {
    borderRadius: radius.lg
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: colors.overlayDark
  },
  copy: {
    gap: spacing.sm,
    padding: spacing.lg
  }
});
