import { ImageBackground, StyleSheet, View } from "react-native";

import { AppBadge } from "@/components/ui/AppBadge";
import { AppText } from "@/components/ui/AppText";
import { useAppLanguage } from "@/features/localization/hooks/useAppLanguage";
import { colors } from "@/lib/constants/colors";
import { radius } from "@/lib/constants/radius";
import { spacing } from "@/lib/constants/spacing";
import type { Category } from "@/types/category";

export function CategoryHero({ category }: { category: Category }) {
  const { t } = useAppLanguage();

  return (
    <View>
      <ImageBackground imageStyle={styles.image} source={{ uri: category.imageUrl }} style={styles.hero}>
        <View style={styles.overlay} />
        <View style={styles.copy}>
          <AppBadge
            label={category.premiumTier !== "free" ? t.premiumAccess : t.quickView}
            tone={category.premiumTier !== "free" ? "premium" : "default"}
          />
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
