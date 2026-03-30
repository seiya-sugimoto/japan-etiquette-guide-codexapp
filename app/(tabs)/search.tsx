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
  const defaultResults = categories.slice(0, 4);

  return (
    <AppScreen>
      <View style={styles.searchRow}>
        <Pressable onPress={() => router.back()}>
          <Ionicons color={colors.primary} name="arrow-back" size={20} />
        </Pressable>
        <View style={styles.searchWrap}>
          <SearchBar value={query} onChangeText={setQuery} placeholder={t.searchPlaceholder} />
        </View>
      </View>

      <AppText variant="caption" color={colors.primary}>
        {t.suggestedTopics.toUpperCase()}
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
            <AppText>{topic.label}</AppText>
          </Pressable>
        ))}
      </View>

      <AppText variant="caption" color={colors.primary}>
        {t.searchResults.toUpperCase()}
      </AppText>
      <CategoryList categories={query ? results : defaultResults} />

      <View style={styles.recentHeader}>
        <AppText variant="caption" color={colors.primary}>
          {t.recentSearches.toUpperCase()}
        </AppText>
        <Pressable onPress={() => setRecentItems([])}>
          <AppText variant="caption" color={colors.textMuted}>
            {t.clearAll}
          </AppText>
        </Pressable>
      </View>
      <AppCard>
        {recentItems.map((topic) => (
          <View key={topic} style={styles.recentRow}>
            <Ionicons color={colors.textMuted} name="time-outline" size={18} />
            <Pressable
              onPress={() => {
                setQuery(topic);
              }}
              style={styles.recentTextWrap}
            >
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
  searchRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: spacing.sm
  },
  searchWrap: {
    flex: 1
  },
  chips: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: spacing.sm
  },
  chip: {
    paddingHorizontal: spacing.md,
    paddingVertical: spacing.sm,
    backgroundColor: colors.surface,
    borderRadius: radius.pill,
    borderWidth: 1,
    borderColor: "#E6EAF0"
  },
  recentHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  },
  recentRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: spacing.sm,
    paddingVertical: spacing.sm
  },
  recentText: {
    flex: 1
  },
  recentTextWrap: {
    flex: 1
  }
});
