import { useMemo, useState } from "react";
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { Pressable, StyleSheet, View } from "react-native";

import { CategoryList } from "@/components/category/CategoryList";
import { AppCard } from "@/components/ui/AppCard";
import { AppScreen } from "@/components/ui/AppScreen";
import { AppText } from "@/components/ui/AppText";
import { SearchBar } from "@/components/ui/SearchBar";
import { useCategories } from "@/features/categories/hooks/useCategories";
import { useAppLanguage } from "@/features/localization/hooks/useAppLanguage";
import { searchCategories } from "@/features/categories/utils/searchCategories";
import { colors } from "@/lib/constants/colors";
import { radius } from "@/lib/constants/radius";
import { spacing } from "@/lib/constants/spacing";

export default function SearchScreen() {
  const router = useRouter();
  const categories = useCategories();
  const { currentLanguage, recentSearches, suggestedTopics, t } = useAppLanguage();
  const [query, setQuery] = useState("");
  const [recentItems, setRecentItems] = useState(recentSearches);
  const results = useMemo(() => searchCategories(query, currentLanguage), [currentLanguage, query]);
  const visibleResults = query ? results : categories.slice(0, 4);

  return (
    <AppScreen>
      <View style={styles.header}>
        <AppText style={styles.title} variant="hero">
          {t.searchTab}
        </AppText>
        <AppText color={colors.textMuted}>{t.searchPlaceholder}</AppText>
      </View>

      <SearchBar value={query} onChangeText={setQuery} placeholder={t.searchPlaceholder} />

      <View style={styles.section}>
        <AppText color={colors.primary} style={styles.eyebrow} variant="eyebrow">
          {t.suggestedTopics}
        </AppText>
        <View style={styles.chips}>
          {suggestedTopics.map((topic) => (
            <Pressable
              key={topic.slug}
              onPress={() => {
                setQuery(topic.label);
                router.push(`/category/${topic.slug}`);
              }}
              style={styles.chip}
            >
              <AppText style={styles.chipLabel}>{topic.label}</AppText>
            </Pressable>
          ))}
        </View>
      </View>

      <View style={styles.section}>
        <AppText color={colors.primary} style={styles.eyebrow} variant="eyebrow">
          {t.searchResults}
        </AppText>
        <CategoryList categories={visibleResults} />
      </View>

      <AppCard style={styles.recentCard}>
        <View style={styles.recentHeader}>
          <AppText color={colors.primary} style={styles.eyebrow} variant="eyebrow">
            {t.recentSearches}
          </AppText>
          <Pressable onPress={() => setRecentItems([])}>
            <AppText color={colors.textMuted} variant="caption">
              {t.clearAll}
            </AppText>
          </Pressable>
        </View>

        {recentItems.map((topic) => (
          <View key={topic} style={styles.recentRow}>
            <View style={styles.recentIcon}>
              <Ionicons color={colors.textMuted} name="time-outline" size={16} />
            </View>
            <Pressable onPress={() => setQuery(topic)} style={styles.recentTextWrap}>
              <AppText style={styles.recentText}>{topic}</AppText>
            </Pressable>
            <Pressable onPress={() => setRecentItems((items) => items.filter((item) => item !== topic))}>
              <Ionicons color={colors.textMuted} name="close" size={16} />
            </Pressable>
          </View>
        ))}
      </AppCard>
    </AppScreen>
  );
}

const styles = StyleSheet.create({
  header: {
    gap: spacing.sm
  },
  title: {
    color: colors.primary
  },
  section: {
    gap: spacing.md
  },
  eyebrow: {
    textTransform: "uppercase"
  },
  chips: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: spacing.sm
  },
  chip: {
    paddingHorizontal: spacing.md,
    paddingVertical: 12,
    backgroundColor: colors.surface,
    borderRadius: radius.pill
  },
  chipLabel: {
    color: colors.textSubtle
  },
  recentCard: {
    borderRadius: 28,
    backgroundColor: colors.surfaceMuted
  },
  recentHeader: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between"
  },
  recentRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: spacing.sm,
    paddingVertical: spacing.sm
  },
  recentIcon: {
    width: 32,
    height: 32,
    borderRadius: 16,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: colors.surface
  },
  recentTextWrap: {
    flex: 1
  },
  recentText: {
    color: colors.textSubtle
  }
});
