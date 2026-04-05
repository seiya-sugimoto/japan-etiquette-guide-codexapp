import { useMemo } from "react";
import { Image, Pressable, StyleSheet, View } from "react-native";
import { useRouter } from "expo-router";
import { Ionicons } from "@expo/vector-icons";

import { AppBadge } from "@/components/ui/AppBadge";
import { AppButton } from "@/components/ui/AppButton";
import { AppCard } from "@/components/ui/AppCard";
import { AppScreen } from "@/components/ui/AppScreen";
import { AppText } from "@/components/ui/AppText";
import { useCategories } from "@/features/categories/hooks/useCategories";
import { useAppLanguage } from "@/features/localization/hooks/useAppLanguage";
import { usePremium } from "@/features/premium/hooks/usePremium";
import { colors } from "@/lib/constants/colors";
import { getPremiumPreviewCopy } from "@/lib/i18n/marketing-copy";
import { getPremiumMockCopy } from "@/lib/i18n/premium-mock-copy";
import { getPremiumTierCopy } from "@/lib/i18n/premium-tier-copy";
import { radius } from "@/lib/constants/radius";
import { shadows } from "@/lib/constants/shadows";
import { spacing } from "@/lib/constants/spacing";

const topImage =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuBMsadtsc5m3U9lICnRQz74t0IxnNVuwQmoIeiWlJSE74n-5_u97px9jqFQcj000D_WFogrUQGVtEIkXEeUuxmVy8JTzu81m40lLWlcQJu8OJIPfr91zlgWcN41yvB1gq7t7BCROuSIRmQUMliU2a5dqIOeEyN2SvqOZ4_T-2EFeoUYvto66LkBunKeN67SZnuYBCxpOy8c6k9-dg7ytd4PYvai-dMIhzPJUgMbKpEeNFWtzEl8t8Kyt6roGsL4o6L4A4QjxhxtHXU";

export default function PremiumScreen() {
  const router = useRouter();
  const { currentLanguage, supportedLanguages } = useAppLanguage();
  const categories = useCategories();
  const { isPremiumUnlocked, isReady, toggleMockPremium } = usePremium();
  const copy = getPremiumPreviewCopy(currentLanguage);
  const mockCopy = getPremiumMockCopy(currentLanguage);
  const tierCopy = getPremiumTierCopy(currentLanguage);

  const previewCandidates = useMemo(
    () => categories.filter((category) => category.premiumTier === "preview"),
    [categories]
  );
  const premiumOnlyCandidates = useMemo(
    () => categories.filter((category) => category.premiumTier === "premium-only"),
    [categories]
  );
  const featuredPremiumOnly = useMemo(() => premiumOnlyCandidates.slice(0, 4), [premiumOnlyCandidates]);
  const featuredPreview = useMemo(() => previewCandidates.slice(0, 3), [previewCandidates]);

  const effectiveUnlocked = isReady && isPremiumUnlocked;
  const currentStateLabel = effectiveUnlocked ? mockCopy.unlockedState : mockCopy.previewState;
  const statusTitle = effectiveUnlocked ? mockCopy.unlockedModeTitle : mockCopy.previewModeTitle;
  const statusBody = effectiveUnlocked ? mockCopy.unlockedModeBody : mockCopy.previewModeBody;
  const statusIconName = effectiveUnlocked ? "diamond" : "eye-outline";
  const toggleLabel = effectiveUnlocked ? mockCopy.resetMockCta : mockCopy.unlockMockCta;

  return (
    <AppScreen>
      <View style={styles.header}>
        <Pressable onPress={() => router.back()} style={styles.headerButton}>
          <Ionicons color={colors.primary} name="close" size={20} />
        </Pressable>
        <AppText style={styles.headerTitle} variant="caption">
          Premium Preview
        </AppText>
        <View style={styles.headerSpacer} />
      </View>

      <View style={styles.heroSection}>
        <Image source={{ uri: topImage }} style={styles.heroThumb} />
        <View style={styles.heroCopy}>
          <AppText color={colors.accent} style={styles.heroEyebrow} variant="eyebrow">
            {copy.eyebrow}
          </AppText>
          <AppText style={styles.heroTitle} variant="title">
            {copy.title}
          </AppText>
          <AppText color={colors.textMuted} style={styles.heroBody}>
            {copy.body}
          </AppText>
        </View>
      </View>

      <View style={styles.statRow}>
        <AppCard style={styles.statCard}>
          <AppText color={colors.textMuted} variant="caption">
            {copy.guidesLabel}
          </AppText>
          <AppText style={styles.statValue} variant="hero">
            69
          </AppText>
        </AppCard>
        <AppCard style={styles.statCard}>
          <AppText color={colors.textMuted} variant="caption">
            {copy.languagesLabel}
          </AppText>
          <AppText style={styles.statValue} variant="hero">
            {supportedLanguages.length}
          </AppText>
        </AppCard>
      </View>

      <AppCard style={styles.statusCard}>
        <View style={styles.statusHeader}>
          <View style={[styles.statusIcon, effectiveUnlocked ? styles.unlockedIcon : styles.previewIcon]}>
            <Ionicons color={effectiveUnlocked ? colors.surface : colors.primary} name={statusIconName} size={18} />
          </View>
          <View style={styles.sectionCopy}>
            <AppText color={colors.textMuted} variant="caption">
              {mockCopy.stateLabel}
            </AppText>
            <AppText style={styles.sectionTitle} variant="subtitle">
              {currentStateLabel}
            </AppText>
          </View>
        </View>
        <AppText style={styles.sectionTitle} variant="subtitle">
          {statusTitle}
        </AppText>
        <AppText color={colors.textMuted}>{statusBody}</AppText>
      </AppCard>

      {effectiveUnlocked ? (
        <>
          <AppCard style={styles.unlockedHeroCard}>
            <View style={styles.unlockedHeroTop}>
              <View style={[styles.sectionIcon, styles.unlockedHeroIcon]}>
                <Ionicons color={colors.surface} name="diamond" size={18} />
              </View>
              <View style={styles.sectionCopy}>
                <AppText color="rgba(255,255,255,0.74)" variant="caption">
                  {currentStateLabel}
                </AppText>
                <AppText color={colors.surface} style={styles.unlockedHeroTitle} variant="subtitle">
                  {mockCopy.unlockedModeTitle}
                </AppText>
              </View>
            </View>

            <AppText color="rgba(255,255,255,0.82)">{mockCopy.unlockedModeBody}</AppText>

            <View style={styles.unlockedStatRow}>
              <View style={styles.unlockedMiniStat}>
                <AppText color="rgba(255,255,255,0.72)" variant="caption">
                  {tierCopy.premiumOnlyBadge}
                </AppText>
                <AppText color={colors.surface} style={styles.unlockedMiniStatValue} variant="subtitle">
                  {premiumOnlyCandidates.length}
                </AppText>
              </View>
              <View style={styles.unlockedMiniStat}>
                <AppText color="rgba(255,255,255,0.72)" variant="caption">
                  {mockCopy.previewState}
                </AppText>
                <AppText color={colors.surface} style={styles.unlockedMiniStatValue} variant="subtitle">
                  {previewCandidates.length}
                </AppText>
              </View>
            </View>
          </AppCard>

          <View style={styles.sectionBlock}>
            <AppText style={styles.sectionTitle} variant="subtitle">
              {tierCopy.premiumOnlyListTitle}
            </AppText>
            <AppText color={colors.textMuted}>{tierCopy.premiumOnlyListBody}</AppText>

            <View style={styles.featuredGrid}>
              {featuredPremiumOnly.map((category) => (
                <Pressable key={category.id} onPress={() => router.push(`/category/${category.slug}`)} style={styles.featuredPressable}>
                  <AppCard style={styles.featuredCard}>
                    <Image source={{ uri: category.imageUrl }} style={styles.featuredImage} />
                    <AppBadge label={tierCopy.premiumOnlyBadge} tone="premium" />
                    <AppText style={styles.featuredTitle} variant="subtitle">
                      {category.title}
                    </AppText>
                    <AppText color={colors.textMuted} numberOfLines={3} style={styles.featuredBody}>
                      {category.shortDescription}
                    </AppText>
                  </AppCard>
                </Pressable>
              ))}
            </View>
          </View>

          <AppCard style={styles.unlockedListCard}>
            <View style={styles.sectionHeader}>
              <View style={[styles.sectionIcon, styles.unlockedIcon]}>
                <Ionicons color={colors.surface} name="layers" size={18} />
              </View>
              <View style={styles.sectionCopy}>
                <AppText style={styles.sectionTitle} variant="subtitle">
                  {mockCopy.unlockedListTitle}
                </AppText>
                <AppText color={colors.textMuted}>{mockCopy.unlockedListBody}</AppText>
              </View>
            </View>

            <View style={styles.previewList}>
              {featuredPreview.map((category) => (
                <Pressable key={category.id} onPress={() => router.push(`/category/${category.slug}`)} style={styles.previewLink}>
                  <View style={styles.previewListRow}>
                    <Ionicons color={colors.primary} name="checkmark-circle" size={16} />
                    <AppText color={colors.textSubtle} style={styles.previewListText}>
                      {category.title}
                    </AppText>
                    <Ionicons color={colors.textMuted} name="chevron-forward" size={16} />
                  </View>
                </Pressable>
              ))}
            </View>
          </AppCard>
        </>
      ) : (
        <>
          <AppCard style={styles.sectionCard}>
            <View style={styles.sectionHeader}>
              <View style={[styles.sectionIcon, styles.nowIcon]}>
                <Ionicons color={colors.primary} name="checkmark" size={18} />
              </View>
              <View style={styles.sectionCopy}>
                <AppText style={styles.sectionTitle} variant="subtitle">
                  {copy.nowTitle}
                </AppText>
                <AppText color={colors.textMuted}>{copy.nowBody}</AppText>
              </View>
            </View>
            {copy.nowPoints.map((point) => (
              <View key={point} style={styles.pointRow}>
                <Ionicons color={colors.success} name="checkmark-circle" size={18} />
                <AppText color={colors.textSubtle} style={styles.pointText}>
                  {point}
                </AppText>
              </View>
            ))}
          </AppCard>

          <AppCard style={[styles.sectionCard, styles.plannedCard]}>
            <View style={styles.sectionHeader}>
              <View style={[styles.sectionIcon, styles.laterIcon]}>
                <Ionicons color={colors.surface} name="sparkles" size={18} />
              </View>
              <View style={styles.sectionCopy}>
                <AppText style={styles.sectionTitle} variant="subtitle">
                  {copy.laterTitle}
                </AppText>
                <AppText color={colors.textMuted}>{copy.laterBody}</AppText>
              </View>
            </View>
            {copy.laterPoints.map((point) => (
              <View key={point} style={styles.pointRow}>
                <Ionicons color={colors.primary} name="arrow-forward-circle" size={18} />
                <AppText color={colors.textSubtle} style={styles.pointText}>
                  {point}
                </AppText>
              </View>
            ))}
          </AppCard>

          <AppCard style={styles.unlockedListCard}>
            <View style={styles.sectionHeader}>
              <View style={[styles.sectionIcon, styles.previewIcon]}>
                <Ionicons color={colors.primary} name="lock-closed" size={18} />
              </View>
              <View style={styles.sectionCopy}>
                <AppText style={styles.sectionTitle} variant="subtitle">
                  {tierCopy.premiumOnlyListTitle}
                </AppText>
                <AppText color={colors.textMuted}>{tierCopy.premiumOnlyListBody}</AppText>
              </View>
            </View>

            <View style={styles.previewList}>
              {premiumOnlyCandidates.map((category) => (
                <View key={category.id} style={styles.previewListRow}>
                  <Ionicons color={colors.primary} name="lock-closed" size={16} />
                  <AppText color={colors.textSubtle} style={styles.previewListText}>
                    {category.title}
                  </AppText>
                </View>
              ))}
            </View>
          </AppCard>
        </>
      )}

      <AppCard style={styles.noteCard}>
        <View style={styles.noteHeader}>
          <Ionicons color={colors.primary} name="information-circle-outline" size={18} />
          <AppText style={styles.noteTitle} variant="subtitle">
            {copy.noteTitle}
          </AppText>
        </View>
        <AppText color={colors.textMuted}>{copy.noteBody}</AppText>
      </AppCard>

      <View style={styles.ctaWrap}>
        <AppButton label={toggleLabel} onPress={() => void toggleMockPremium()} />
        <AppButton label={copy.browseCta} onPress={() => router.push("/browse")} />
        <AppButton label={copy.feedbackCta} onPress={() => router.push("/feedback")} tone="secondary" />
      </View>
    </AppScreen>
  );
}

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between"
  },
  headerButton: {
    width: 40,
    height: 40,
    borderRadius: radius.pill,
    alignItems: "center",
    justifyContent: "center"
  },
  headerTitle: {
    color: colors.primary
  },
  headerSpacer: {
    width: 40
  },
  heroSection: {
    alignItems: "center",
    gap: spacing.lg
  },
  heroThumb: {
    width: 104,
    height: 104,
    borderRadius: 28,
    ...shadows.strong
  },
  heroCopy: {
    alignItems: "center",
    gap: spacing.sm
  },
  heroEyebrow: {
    textTransform: "uppercase",
    textAlign: "center"
  },
  heroTitle: {
    textAlign: "center",
    maxWidth: 320
  },
  heroBody: {
    textAlign: "center",
    maxWidth: 330,
    lineHeight: 26
  },
  statRow: {
    flexDirection: "row",
    gap: spacing.md
  },
  statCard: {
    flex: 1,
    borderRadius: 28,
    backgroundColor: colors.surfaceMuted,
    alignItems: "center"
  },
  statValue: {
    color: colors.primary
  },
  sectionCard: {
    borderRadius: 30,
    gap: spacing.md
  },
  plannedCard: {
    backgroundColor: colors.surfaceMuted
  },
  statusCard: {
    borderRadius: 30,
    backgroundColor: colors.surfaceMuted,
    gap: spacing.sm
  },
  statusHeader: {
    flexDirection: "row",
    alignItems: "center",
    gap: spacing.md
  },
  statusIcon: {
    width: 44,
    height: 44,
    borderRadius: 22,
    alignItems: "center",
    justifyContent: "center"
  },
  previewIcon: {
    backgroundColor: "#F6EDEB"
  },
  unlockedIcon: {
    backgroundColor: colors.primary
  },
  unlockedHeroCard: {
    borderRadius: 32,
    backgroundColor: colors.primary,
    gap: spacing.md,
    ...shadows.strong
  },
  unlockedHeroTop: {
    flexDirection: "row",
    alignItems: "center",
    gap: spacing.md
  },
  unlockedHeroIcon: {
    backgroundColor: colors.primarySoft
  },
  unlockedHeroTitle: {
    color: colors.surface
  },
  unlockedStatRow: {
    flexDirection: "row",
    gap: spacing.md
  },
  unlockedMiniStat: {
    flex: 1,
    borderRadius: 22,
    padding: spacing.md,
    backgroundColor: "rgba(255,255,255,0.08)",
    gap: spacing.xs
  },
  unlockedMiniStatValue: {
    color: colors.surface
  },
  sectionHeader: {
    flexDirection: "row",
    alignItems: "flex-start",
    gap: spacing.md
  },
  sectionIcon: {
    width: 42,
    height: 42,
    borderRadius: 21,
    alignItems: "center",
    justifyContent: "center"
  },
  nowIcon: {
    backgroundColor: "#F6EDEB"
  },
  laterIcon: {
    backgroundColor: colors.primary
  },
  sectionCopy: {
    flex: 1,
    gap: 6
  },
  sectionTitle: {
    color: colors.primary
  },
  pointRow: {
    flexDirection: "row",
    alignItems: "flex-start",
    gap: spacing.sm
  },
  pointText: {
    flex: 1,
    lineHeight: 22
  },
  sectionBlock: {
    gap: spacing.md
  },
  unlockedListCard: {
    borderRadius: 30,
    backgroundColor: colors.surfaceSoft
  },
  featuredGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: spacing.md
  },
  featuredPressable: {
    width: "47%"
  },
  featuredCard: {
    borderRadius: 24,
    backgroundColor: colors.surface,
    gap: spacing.sm,
    minHeight: 248
  },
  featuredImage: {
    width: "100%",
    height: 108,
    borderRadius: 18
  },
  featuredTitle: {
    color: colors.primary
  },
  featuredBody: {
    lineHeight: 21
  },
  previewList: {
    gap: spacing.sm
  },
  previewLink: {
    borderRadius: 18
  },
  previewListRow: {
    flexDirection: "row",
    alignItems: "flex-start",
    gap: spacing.sm
  },
  previewListText: {
    flex: 1,
    lineHeight: 22
  },
  noteCard: {
    borderRadius: 28,
    backgroundColor: colors.surfaceSoft
  },
  noteHeader: {
    flexDirection: "row",
    alignItems: "center",
    gap: spacing.xs
  },
  noteTitle: {
    color: colors.primary
  },
  ctaWrap: {
    gap: spacing.md,
    paddingBottom: spacing.md
  }
});
