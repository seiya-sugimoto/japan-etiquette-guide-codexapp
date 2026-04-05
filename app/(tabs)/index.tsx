import { Link, useRouter } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import { ImageBackground, Pressable, StyleSheet, View } from "react-native";

import { AppScreen } from "@/components/ui/AppScreen";
import { AppText } from "@/components/ui/AppText";
import { useCategories } from "@/features/categories/hooks/useCategories";
import { useAppLanguage } from "@/features/localization/hooks/useAppLanguage";
import { colors } from "@/lib/constants/colors";
import { radius } from "@/lib/constants/radius";
import { shadows } from "@/lib/constants/shadows";
import { spacing } from "@/lib/constants/spacing";

const heroSlug = "photo-video";
const featuredGridSlugs = ["restaurant", "train", "shrine", "onsen"] as const;

const categoryIcons: Record<string, keyof typeof Ionicons.glyphMap> = {
  restaurant: "restaurant-outline",
  train: "train-outline",
  shrine: "business-outline",
  onsen: "water-outline"
};

export default function HomeScreen() {
  const router = useRouter();
  const { currentLanguage, getLanguageLabel, t } = useAppLanguage();
  const categories = useCategories();

  const hero = categories.find((category) => category.slug === heroSlug) ?? categories[0];
  const featuredCards = featuredGridSlugs
    .map((slug) => categories.find((category) => category.slug === slug))
    .filter((category): category is NonNullable<typeof category> => Boolean(category));

  return (
    <AppScreen>
      <View style={styles.topBar}>
        <View style={styles.brandBlock}>
          <AppText color={colors.textMuted} style={styles.brandKicker} variant="eyebrow">
            {t.homeTab}
          </AppText>
          <AppText style={styles.brandName} variant="subtitle">
            {t.appName}
          </AppText>
        </View>

        <View style={styles.topActions}>
          <Link asChild href="/language">
            <Pressable style={styles.languageChip}>
              <Ionicons color={colors.primary} name="language" size={16} />
              <AppText color={colors.primary} variant="caption">
                {getLanguageLabel(currentLanguage)}
              </AppText>
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
        <AppText style={styles.headline} variant="hero">
          {t.homeQuestion}
        </AppText>
        <AppText color={colors.textMuted} style={styles.intro}>
          {t.homeIntro}
        </AppText>
      </View>

      <Link asChild href="/(tabs)/search">
        <Pressable style={styles.searchEntry}>
          <Ionicons color={colors.textMuted} name="search" size={18} />
          <AppText color={colors.textMuted}>{t.searchPlaceholder}</AppText>
        </Pressable>
      </Link>

      {hero ? (
        <Link asChild href={`/category/${hero.slug}`}>
          <Pressable style={styles.heroCard}>
            <ImageBackground imageStyle={styles.heroImage} source={{ uri: hero.imageUrl }} style={styles.heroImage}>
              <View style={styles.heroOverlay} />
              <View style={styles.heroContent}>
                <View style={styles.heroBadge}>
                  <AppText color={colors.surface} style={styles.heroBadgeLabel} variant="caption">
                    {hero.badge === "premium" ? t.settingsTitlePremium : t.commonSituations}
                  </AppText>
                </View>

                <View style={styles.heroCopy}>
                  <AppText color={colors.surface} style={styles.heroTitle} variant="title">
                    {hero.title}
                  </AppText>
                  <AppText color="rgba(255,255,255,0.84)" style={styles.heroDescription}>
                    {hero.shortDescription}
                  </AppText>
                </View>

                <View style={styles.heroButton}>
                  <AppText color={colors.primary} variant="caption">
                    {t.readMore}
                  </AppText>
                  <Ionicons color={colors.primary} name="arrow-forward" size={16} />
                </View>
              </View>
            </ImageBackground>
          </Pressable>
        </Link>
      ) : null}

      <View style={styles.sectionHeader}>
        <AppText style={styles.sectionTitle} variant="subtitle">
          {t.browseTitle}
        </AppText>
        <Pressable onPress={() => router.push("/browse")}>
          <AppText color={colors.primary} variant="caption">
            {t.seeAll}
          </AppText>
        </Pressable>
      </View>

      <View style={styles.cardGrid}>
        {featuredCards.map((category) => (
          <Link asChild href={`/category/${category.slug}`} key={category.id}>
            <Pressable style={styles.categoryCard}>
              <View style={styles.iconCircle}>
                <Ionicons
                  color={colors.primary}
                  name={categoryIcons[category.slug] ?? "ellipse-outline"}
                  size={20}
                />
              </View>
              <AppText style={styles.categoryTitle} variant="subtitle">
                {category.title}
              </AppText>
              <AppText color={colors.textMuted} numberOfLines={2} style={styles.categoryDescription}>
                {category.shortDescription}
              </AppText>
            </Pressable>
          </Link>
        ))}
      </View>

      <View style={styles.premiumBanner}>
        <View style={styles.premiumCopy}>
          <AppText color={colors.accentSoft} style={styles.premiumKicker} variant="eyebrow">
            {t.settingsTitlePremium}
          </AppText>
          <AppText color={colors.surface} style={styles.premiumTitle} variant="title">
            {t.unlockTitle}
          </AppText>
          <AppText color="rgba(255,255,255,0.82)">{t.unlockBody}</AppText>
        </View>

        <Pressable onPress={() => router.push("/premium")} style={styles.premiumAction}>
          <AppText color={colors.primary} variant="caption">
            {t.goPremium}
          </AppText>
        </Pressable>
      </View>
    </AppScreen>
  );
}

const styles = StyleSheet.create({
  topBar: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between"
  },
  brandBlock: {
    gap: 4,
    flex: 1,
    paddingRight: spacing.md
  },
  brandKicker: {
    textTransform: "uppercase"
  },
  brandName: {
    color: colors.primary
  },
  topActions: {
    flexDirection: "row",
    alignItems: "center",
    gap: spacing.sm
  },
  languageChip: {
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
    paddingHorizontal: spacing.sm,
    paddingVertical: 10,
    borderRadius: radius.pill,
    backgroundColor: colors.surfaceMuted
  },
  iconButton: {
    width: 42,
    height: 42,
    borderRadius: radius.pill,
    backgroundColor: colors.surfaceMuted,
    alignItems: "center",
    justifyContent: "center"
  },
  headingBlock: {
    gap: spacing.sm
  },
  headline: {
    maxWidth: 320
  },
  intro: {
    maxWidth: 320
  },
  searchEntry: {
    flexDirection: "row",
    alignItems: "center",
    gap: spacing.sm,
    backgroundColor: colors.surfaceMuted,
    paddingHorizontal: spacing.md,
    paddingVertical: 18,
    borderRadius: radius.lg,
    ...shadows.card
  },
  heroCard: {
    borderRadius: 32,
    overflow: "hidden",
    ...shadows.strong
  },
  heroImage: {
    minHeight: 440,
    justifyContent: "flex-end"
  },
  heroOverlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "rgba(27, 28, 26, 0.28)"
  },
  heroContent: {
    padding: spacing.lg,
    gap: spacing.md
  },
  heroBadge: {
    alignSelf: "flex-start",
    paddingHorizontal: spacing.sm,
    paddingVertical: 6,
    borderRadius: radius.pill,
    backgroundColor: "rgba(80, 12, 7, 0.78)"
  },
  heroBadgeLabel: {
    textTransform: "uppercase"
  },
  heroCopy: {
    gap: spacing.sm,
    maxWidth: 280
  },
  heroTitle: {
    lineHeight: 32
  },
  heroDescription: {
    lineHeight: 22
  },
  heroButton: {
    alignSelf: "flex-start",
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
    backgroundColor: colors.surface,
    paddingHorizontal: spacing.lg,
    paddingVertical: 14,
    borderRadius: radius.pill
  },
  sectionHeader: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between"
  },
  sectionTitle: {
    color: colors.primary
  },
  cardGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: spacing.md
  },
  categoryCard: {
    width: "47.5%",
    minHeight: 180,
    borderRadius: 30,
    backgroundColor: colors.surface,
    padding: spacing.md,
    justifyContent: "space-between",
    ...shadows.card
  },
  iconCircle: {
    width: 48,
    height: 48,
    borderRadius: 24,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: colors.surfaceMuted
  },
  categoryTitle: {
    color: colors.primary
  },
  categoryDescription: {
    marginTop: spacing.xs,
    minHeight: 42
  },
  premiumBanner: {
    backgroundColor: colors.primary,
    borderRadius: 32,
    padding: spacing.lg,
    gap: spacing.lg,
    ...shadows.strong
  },
  premiumCopy: {
    gap: spacing.sm
  },
  premiumKicker: {
    textTransform: "uppercase"
  },
  premiumTitle: {
    lineHeight: 34
  },
  premiumAction: {
    alignSelf: "flex-start",
    backgroundColor: colors.surface,
    borderRadius: radius.pill,
    paddingHorizontal: spacing.lg,
    paddingVertical: 14
  }
});
