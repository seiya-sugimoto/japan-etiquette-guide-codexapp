import { ImageBackground, StyleSheet, View } from "react-native";

import { AppBadge } from "@/components/ui/AppBadge";
import { AppText } from "@/components/ui/AppText";
import { colors } from "@/lib/constants/colors";
import { radius } from "@/lib/constants/radius";
import { spacing } from "@/lib/constants/spacing";
import type { Category } from "@/types/category";

export function CategoryHero({ category }: { category: Category }) {
  return (
    <View>
      <ImageBackground imageStyle={styles.image} source={{ uri: category.imageUrl }} style={styles.hero}>
        <View style={styles.overlay} />
        <View style={styles.copy}>
          <AppBadge
            label={category.access === "premium" ? "Premium" : "Guide"}
            tone={category.access === "premium" ? "premium" : "default"}
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
