import { Ionicons } from "@expo/vector-icons";
import { useLocalSearchParams } from "expo-router";
import { StyleSheet, View } from "react-native";

import { CategoryHero } from "@/components/category/CategoryHero";
import { DetailSection } from "@/components/category/DetailSection";
import { QuickViewCard } from "@/components/category/QuickViewCard";
import { AppCard } from "@/components/ui/AppCard";
import { AppScreen } from "@/components/ui/AppScreen";
import { AppText } from "@/components/ui/AppText";
import { EmptyState } from "@/components/ui/EmptyState";
import { useCategoryDetail } from "@/features/categories/hooks/useCategoryDetail";
import { useAppLanguage } from "@/features/localization/hooks/useAppLanguage";
import { colors } from "@/lib/constants/colors";
import { spacing } from "@/lib/constants/spacing";

export default function CategoryDetailScreen() {
  const params = useLocalSearchParams<{ slug: string }>();
  const category = useCategoryDetail(params.slug);
  const { t } = useAppLanguage();

  if (!category) {
    return (
      <AppScreen>
        <EmptyState title={t.guideNotFound} message={t.guideMissing} />
      </AppScreen>
    );
  }

  return (
    <AppScreen>
      <CategoryHero category={category} />
      <QuickViewCard items={category.content.quickView.slice(0, 3)} title={t.quickView} tone="neutral" />
      <DetailSection title={t.doLabel} items={category.content.dos} />
      <DetailSection title={t.avoidLabel} items={category.content.donts} />
      <AppCard>
        <View style={styles.watchRow}>
          <Ionicons color={colors.primary} name="pricetag-outline" size={18} />
          <View style={styles.watchCopy}>
            <AppText variant="subtitle">{t.watchFor}</AppText>
            {category.content.quickView.map((item) => (
              <AppText key={`watch-${item}`} color={colors.textMuted}>
                {item}
              </AppText>
            ))}
          </View>
        </View>
      </AppCard>
      <DetailSection title={t.whyItMatters} items={category.content.whyItMatters} />
      <DetailSection title={t.commonMistakes} items={category.content.commonMistakes} />
      <DetailSection title={t.readMore} items={category.content.readMore} />
    </AppScreen>
  );
}

const styles = StyleSheet.create({
  watchRow: {
    flexDirection: "row",
    gap: spacing.sm
  },
  watchCopy: {
    flex: 1,
    gap: 4
  }
});
