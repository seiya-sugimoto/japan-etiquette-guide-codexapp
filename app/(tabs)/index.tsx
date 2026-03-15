import { Link, useRouter } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import { Image, Pressable, StyleSheet, View } from "react-native";

import { AppCard } from "@/components/ui/AppCard";
import { AppScreen } from "@/components/ui/AppScreen";
import { AppText } from "@/components/ui/AppText";
import { featuredCategorySlugs } from "@/data/mocks/featuredCategories";
import { useCategories } from "@/features/categories/hooks/useCategories";
import { useAppLanguage } from "@/features/localization/hooks/useAppLanguage";
import { colors } from "@/lib/constants/colors";
import { radius } from "@/lib/constants/radius";
import { spacing } from "@/lib/constants/spacing";

export default function HomeScreen() {
  const router = useRouter();
  const { currentLanguage, getLanguageLabel, t } = useAppLanguage();
  const categories = useCategories();
  const featured = categories.filter((category) => featuredCategorySlugs.includes(category.slug));
  const surprisingSlugs = ["photo-video", "smoking", "toilet"];
  const horizontal = categories.filter((category) => surprisingSlugs.includes(category.slug));

  return (
    <AppScreen>
      <View style={styles.topBar}>
        <View style={styles.titleRow}>
          <View style={styles.logo}>
            <Ionicons color={colors.surface} name="shield-checkmark" size={18} />
          </View>
          <AppText variant="subtitle">{t.appName}</AppText>
        </View>
        <View style={styles.actions}>
          <Link asChild href="/language">
            <Pressable style={styles.langButton}>
              <Ionicons color={colors.primary} name="language" size={16} />
              <AppText variant="caption">{getLanguageLabel(currentLanguage)}</AppText>
            </Pressable>
          </Link>
          <Link asChild href="/(tabs)/settings">
            <Pressable style={styles.iconButton}>
              <Ionicons color={colors.primary} name="settings-outline" size={18} />
            </Pressable>
          </Link>
        </View>
      </View>

      <View style={styles.headingBlock}>
        <AppText variant="hero">{t.homeQuestion}</AppText>
        <AppText color={colors.textMuted}>{t.homeIntro}</AppText>
      </View>

      <View style={styles.grid}>
        {featured.map((category) => (
          <Link asChild href={`/category/${category.slug}`} key={category.id}>
            <Pressable style={styles.gridCard}>
              <Image source={{ uri: category.imageUrl }} style={styles.gridImage} />
              <View style={styles.gridOverlay} />
              <AppText style={styles.gridLabel} color={colors.surface} variant="subtitle">
                {category.title}
              </AppText>
            </Pressable>
          </Link>
        ))}
      </View>

      <Link asChild href="/(tabs)/search">
        <Pressable style={styles.searchEntry}>
          <Ionicons color={colors.textMuted} name="search" size={18} />
          <AppText color={colors.textMuted}>{t.searchPlaceholder}</AppText>
        </Pressable>
      </Link>

      <View style={styles.sectionHeader}>
        <AppText variant="subtitle">{t.commonSituations}</AppText>
        <Pressable onPress={() => router.push("/browse")}>
          <AppText variant="caption" color={colors.primary}>
            {t.seeAll}
          </AppText>
        </Pressable>
      </View>

      <View style={styles.horizontalList}>
        {horizontal.map((category) => (
          <Link asChild href={`/category/${category.slug}`} key={category.id}>
            <Pressable style={styles.horizontalCard}>
              <Image source={{ uri: category.imageUrl }} style={styles.horizontalImage} />
              <AppText style={styles.horizontalLabel}>{category.title}</AppText>
            </Pressable>
          </Link>
        ))}
      </View>

      <AppCard style={styles.premiumCard}>
        <AppText variant="title" color={colors.surface}>
          {t.unlockTitle}
        </AppText>
        <AppText color="#D7DDEA">{t.unlockBody}</AppText>
        <Pressable onPress={() => router.push("/premium")} style={styles.premiumButton}>
          <AppText variant="caption" color={colors.primary}>
            {t.goPremium}
          </AppText>
        </Pressable>
      </AppCard>
    </AppScreen>
  );
}

const styles = StyleSheet.create({
  topBar: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  },
  titleRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: spacing.sm
  },
  logo: {
    width: 30,
    height: 30,
    borderRadius: 10,
    backgroundColor: colors.primary,
    alignItems: "center",
    justifyContent: "center"
  },
  actions: {
    flexDirection: "row",
    gap: spacing.sm
  },
  langButton: {
    flexDirection: "row",
    alignItems: "center",
    gap: 4,
    paddingHorizontal: spacing.sm,
    paddingVertical: 8,
    borderRadius: radius.md,
    backgroundColor: colors.surface
  },
  iconButton: {
    width: 36,
    height: 36,
    borderRadius: radius.md,
    backgroundColor: colors.surface,
    alignItems: "center",
    justifyContent: "center"
  },
  headingBlock: {
    gap: spacing.sm
  },
  grid: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: spacing.sm
  },
  gridCard: {
    width: "48%",
    aspectRatio: 1,
    borderRadius: radius.md,
    overflow: "hidden",
    justifyContent: "flex-end",
    padding: spacing.sm
  },
  gridImage: {
    ...StyleSheet.absoluteFillObject
  },
  gridOverlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "rgba(0,0,0,0.28)"
  },
  gridLabel: {
    fontWeight: "700"
  },
  searchEntry: {
    backgroundColor: colors.surface,
    borderRadius: radius.md,
    paddingHorizontal: spacing.md,
    paddingVertical: 16,
    flexDirection: "row",
    alignItems: "center",
    gap: spacing.sm,
    borderWidth: 1,
    borderColor: "#EEF1F5"
  },
  sectionHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  },
  horizontalList: {
    flexDirection: "row",
    gap: spacing.md
  },
  horizontalCard: {
    flex: 1,
    gap: spacing.sm
  },
  horizontalImage: {
    width: "100%",
    aspectRatio: 0.82,
    borderRadius: radius.md
  },
  horizontalLabel: {
    fontWeight: "600"
  },
  premiumCard: {
    backgroundColor: colors.primary
  },
  premiumButton: {
    alignSelf: "flex-start",
    backgroundColor: colors.surface,
    borderRadius: radius.md,
    paddingHorizontal: spacing.lg,
    paddingVertical: spacing.sm
  }
});
