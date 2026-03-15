import { useState } from "react";
import { Pressable, StyleSheet, View } from "react-native";

import { CategoryList } from "@/components/category/CategoryList";
import { AppScreen } from "@/components/ui/AppScreen";
import { AppText } from "@/components/ui/AppText";
import { useCategories } from "@/features/categories/hooks/useCategories";
import { useAppLanguage } from "@/features/localization/hooks/useAppLanguage";
import { colors } from "@/lib/constants/colors";
import { radius } from "@/lib/constants/radius";
import { spacing } from "@/lib/constants/spacing";

export default function BrowseScreen() {
  const [viewMode, setViewMode] = useState<"situation" | "place">("situation");
  const categories = useCategories();
  const { t } = useAppLanguage();

  return (
    <AppScreen>
      <View style={styles.segment}>
        <Pressable onPress={() => setViewMode("situation")} style={[styles.segmentButton, viewMode === "situation" && styles.segmentActive]}>
          <AppText variant="caption" color={viewMode === "situation" ? colors.primary : colors.textMuted}>
            {t.bySituation}
          </AppText>
        </Pressable>
        <Pressable onPress={() => setViewMode("place")} style={[styles.segmentButton, viewMode === "place" && styles.segmentActive]}>
          <AppText variant="caption" color={viewMode === "place" ? colors.primary : colors.textMuted}>
            {t.byPlace}
          </AppText>
        </Pressable>
      </View>
      <View style={styles.header}>
        <AppText variant="title">{t.browseTitle}</AppText>
        <AppText color={colors.textMuted}>{t.browseDescription}</AppText>
      </View>
      <CategoryList categories={categories} />
    </AppScreen>
  );
}

const styles = StyleSheet.create({
  segment: {
    flexDirection: "row",
    backgroundColor: "#E7EAF0",
    borderRadius: radius.md,
    padding: 4
  },
  segmentButton: {
    flex: 1,
    alignItems: "center",
    paddingVertical: 11,
    borderRadius: radius.md
  },
  segmentActive: {
    backgroundColor: colors.surface
  },
  header: {
    gap: spacing.xs
  }
});
