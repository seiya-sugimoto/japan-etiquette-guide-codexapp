import { ImageBackground, StyleSheet, View } from "react-native";

import { AppBadge } from "@/components/ui/AppBadge";
import { AppText } from "@/components/ui/AppText";
import { radius } from "@/lib/constants/radius";
import { spacing } from "@/lib/constants/spacing";
import type { Category } from "@/types/category";

export function CategoryHero({ category }: { category: Category }) {
  return (
    <View>
      <ImageBackground imageStyle={styles.image} source={{ uri: category.imageUrl }} style={styles.hero} />
      <View style={styles.copy}>
        <AppBadge
          label={category.access === "premium" ? "PREMIUM" : "FREE"}
          tone={category.access === "premium" ? "premium" : "default"}
        />
        <AppText variant="title">{category.title}</AppText>
        <AppText>{category.shortDescription}</AppText>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  hero: {
    height: 220,
    borderRadius: radius.lg,
    overflow: "hidden"
  },
  image: {
    borderRadius: radius.lg
  },
  copy: {
    gap: spacing.sm,
    paddingTop: spacing.md
  }
});
