import { useState } from "react";
import { Pressable, StyleSheet, View } from "react-native";

import { CategoryList } from "@/components/category/CategoryList";
import { AppCard } from "@/components/ui/AppCard";
import { AppScreen } from "@/components/ui/AppScreen";
import { AppText } from "@/components/ui/AppText";
import { filterCategoriesForBrowse, type BrowseViewMode } from "@/data/categories/meta";
import { useCategories } from "@/features/categories/hooks/useCategories";
import { useAppLanguage } from "@/features/localization/hooks/useAppLanguage";
import { colors } from "@/lib/constants/colors";
import { radius } from "@/lib/constants/radius";
import { spacing } from "@/lib/constants/spacing";

export default function BrowseScreen() {
  const [viewMode, setViewMode] = useState<BrowseViewMode>("situation");
  const categories = useCategories();
  const { t } = useAppLanguage();
  const visibleCategories = filterCategoriesForBrowse(categories, viewMode);

  return (
    <AppScreen>
      <View style={styles.header}>
        <AppText style={styles.title} variant="hero">
          {t.browseTitle}
        </AppText>
        <AppText color={colors.textMuted} style={styles.body}>
          {t.browseDescription}
        </AppText>
      </View>

      <View style={styles.segmentShell}>
        <Pressable
          onPress={() => setViewMode("situation")}
          style={[styles.segmentButton, viewMode === "situation" && styles.segmentActive]}
        >
          <AppText variant="caption" color={viewMode === "situation" ? colors.primary : colors.textMuted}>
            {t.bySituation}
          </AppText>
        </Pressable>
        <Pressable
          onPress={() => setViewMode("place")}
          style={[styles.segmentButton, viewMode === "place" && styles.segmentActive]}
        >
          <AppText variant="caption" color={viewMode === "place" ? colors.primary : colors.textMuted}>
            {t.byPlace}
          </AppText>
        </Pressable>
      </View>

      <AppCard style={styles.tipCard}>
        <AppText color={colors.primary} style={styles.tipEyebrow} variant="eyebrow">
          {t.quickView}
        </AppText>
        <AppText style={styles.tipTitle} variant="subtitle">
          {viewMode === "situation" ? t.commonSituations : t.byPlace}
        </AppText>
        <AppText color={colors.textMuted}>{t.browseDescription}</AppText>
      </AppCard>

      <CategoryList categories={visibleCategories} />
    </AppScreen>
  );
}

const styles = StyleSheet.create({
  header: {
    gap: spacing.sm
  },
  title: {
    maxWidth: 300
  },
  body: {
    maxWidth: 320
  },
  segmentShell: {
    flexDirection: "row",
    gap: spacing.sm,
    backgroundColor: colors.surfaceMuted,
    borderRadius: radius.lg,
    padding: 6
  },
  segmentButton: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: radius.lg,
    minHeight: 48
  },
  segmentActive: {
    backgroundColor: colors.surface
  },
  tipCard: {
    backgroundColor: colors.surfaceMuted,
    borderRadius: 28
  },
  tipEyebrow: {
    textTransform: "uppercase"
  },
  tipTitle: {
    color: colors.primary
  }
});
