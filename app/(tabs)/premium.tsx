import { useMemo } from "react";
import { Image, Pressable, StyleSheet, View } from "react-native";
import { Link, useRouter } from "expo-router";
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
import { premiumPacks } from "@/lib/constants/premium";
import { getPremiumPreviewCopy } from "@/lib/i18n/marketing-copy";
import { getPremiumMockCopy } from "@/lib/i18n/premium-mock-copy";
import { getPremiumPackBenefitsCopy } from "@/lib/i18n/premium-pack-benefits-copy";
import { getPremiumPackCopy } from "@/lib/i18n/premium-pack-copy";
import { getPremiumPackJourneyCopy } from "@/lib/i18n/premium-pack-journey-copy";
import { getPremiumRecommendedCopy } from "@/lib/i18n/premium-recommended-copy";
import { getPremiumTierCopy } from "@/lib/i18n/premium-tier-copy";
import { shadows } from "@/lib/constants/shadows";
import { spacing } from "@/lib/constants/spacing";

const topImage =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuBMsadtsc5m3U9lICnRQz74t0IxnNVuwQmoIeiWlJSE74n-5_u97px9jqFQcj000D_WFogrUQGVtEIkXEeUuxmVy8JTzu81m40lLWlcQJu8OJIPfr91zlgWcN41yvB1gq7t7BCROuSIRmQUMliU2a5dqIOeEyN2SvqOZ4_T-2EFeoUYvto66LkBunKeN67SZnuYBCxpOy8c6k9-dg7ytd4PYvai-dMIhzPJUgMbKpEeNFWtzEl8t8Kyt6roGsL4o6L4A4QjxhxtHXU";

export default function PremiumTabScreen() {
  const router = useRouter();
  const { currentLanguage, supportedLanguages, t } = useAppLanguage();
  const categories = useCategories();
  const { isPremiumUnlocked, isReady, toggleMockPremium } = usePremium();
  const copy = getPremiumPreviewCopy(currentLanguage);
  const mockCopy = getPremiumMockCopy(currentLanguage);
  const packCopy = getPremiumPackCopy(currentLanguage);
  const packBenefitsCopy = getPremiumPackBenefitsCopy(currentLanguage);
  const packJourneyCopy = getPremiumPackJourneyCopy(currentLanguage);
  const recommendedCopy = getPremiumRecommendedCopy(currentLanguage);
  const tierCopy = getPremiumTierCopy(currentLanguage);
  const englishPackCopy = getPremiumPackCopy("en");

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
  const premiumPackItems = useMemo(
    () =>
      premiumPacks.map((pack) => {
        const scenes = pack.categoryIds
          .map((id) => categories.find((category) => category.id === id))
          .filter((category): category is NonNullable<typeof category> => Boolean(category));

        return {
          id: pack.id,
          title: packCopy.packs[pack.id]?.title ?? englishPackCopy.packs[pack.id].title,
          body: packCopy.packs[pack.id]?.body ?? englishPackCopy.packs[pack.id].body,
          highlights: packBenefitsCopy.packs[pack.id].highlights,
          bestFor: packJourneyCopy.packs[pack.id].bestFor,
          useWhen: packJourneyCopy.packs[pack.id].useWhen,
          deepDiveCount: scenes.filter((scene) => Boolean(scene.content.premiumDeepDive)).length,
          phraseCount: scenes.reduce((total, scene) => total + (scene.content.premiumDeepDive?.phraseCards.length ?? 0), 0),
          scenarioCount: scenes.reduce((total, scene) => total + (scene.content.premiumDeepDive?.situationCards.length ?? 0), 0),
          scenes
        };
      }),
    [categories, englishPackCopy, packBenefitsCopy, packCopy, packJourneyCopy]
  );
  const recommendedPackItems = useMemo(
    () =>
      recommendedCopy.items
        .map((item) => {
          const pack = premiumPackItems.find((candidate) => candidate.id === item.packId);

          if (!pack) {
            return undefined;
          }

          return {
            ...item,
            packTitle: pack.title
          };
        })
        .filter((item): item is NonNullable<typeof item> => Boolean(item)),
    [premiumPackItems, recommendedCopy.items]
  );

  const effectiveUnlocked = isReady && isPremiumUnlocked;
  const currentStateLabel = effectiveUnlocked ? mockCopy.unlockedState : mockCopy.previewState;
  const statusTitle = effectiveUnlocked ? mockCopy.unlockedModeTitle : mockCopy.previewModeTitle;
  const statusBody = effectiveUnlocked ? mockCopy.unlockedModeBody : mockCopy.previewModeBody;
  const statusIconName = effectiveUnlocked ? "diamond" : "eye-outline";
  const toggleLabel = effectiveUnlocked ? mockCopy.resetMockCta : mockCopy.unlockMockCta;

  return (
    <AppScreen>
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

          <AppCard style={styles.recommendedCard}>
            <AppText style={styles.sectionTitle} variant="subtitle">
              {recommendedCopy.title}
            </AppText>
            <AppText color={colors.textMuted}>{recommendedCopy.body}</AppText>
            <View style={styles.recommendedList}>
              {recommendedPackItems.map((item) => (
                <View key={item.packId} style={styles.recommendedItem}>
                  <View style={styles.recommendedTopRow}>
                    <AppBadge label={item.packTitle} tone="premium" />
                    <Ionicons color={colors.primary} name="sparkles" size={16} />
                  </View>
                  <AppText style={styles.recommendedTitle} variant="subtitle">
                    {item.title}
                  </AppText>
                  <AppText color={colors.textMuted}>{item.body}</AppText>
                </View>
              ))}
            </View>
          </AppCard>

          <View style={styles.sectionBlock}>
            <AppText style={styles.sectionTitle} variant="subtitle">
              {packCopy.sectionTitle}
            </AppText>
            <AppText color={colors.textMuted}>{packCopy.sectionBody}</AppText>
            <AppCard style={styles.packChooserCard}>
              <AppText style={styles.packChooserTitle} variant="subtitle">
                {packJourneyCopy.chooseTitle}
              </AppText>
              <AppText color={colors.textMuted}>{packJourneyCopy.chooseBody}</AppText>
            </AppCard>

            <View style={styles.packList}>
              {premiumPackItems.map((pack) => (
                <AppCard key={pack.id} style={styles.packCard}>
                  <View style={styles.packHeader}>
                    <View style={styles.packIcon}>
                      <Ionicons color={colors.primary} name="albums-outline" size={18} />
                    </View>
                    <View style={styles.sectionCopy}>
                      <AppText style={styles.packTitle} variant="subtitle">
                        {pack.title}
                      </AppText>
                      <AppText color={colors.textMuted}>{pack.body}</AppText>
                    </View>
                  </View>

                  <View style={styles.packMeta}>
                    <AppBadge label={tierCopy.premiumOnlyBadge} tone="premium" />
                    <AppText color={colors.textMuted} variant="caption">
                      {pack.scenes.length} {packCopy.scenesLabel}
                    </AppText>
                  </View>

                  <View style={styles.packMetricsRow}>
                    <View style={styles.packMetric}>
                      <AppText color={colors.textMuted} variant="caption">
                        {packBenefitsCopy.deepGuidesLabel}
                      </AppText>
                      <AppText style={styles.packMetricValue} variant="subtitle">
                        {pack.deepDiveCount}
                      </AppText>
                    </View>
                    <View style={styles.packMetric}>
                      <AppText color={colors.textMuted} variant="caption">
                        {packBenefitsCopy.phraseTipsLabel}
                      </AppText>
                      <AppText style={styles.packMetricValue} variant="subtitle">
                        {pack.phraseCount}
                      </AppText>
                    </View>
                    <View style={styles.packMetric}>
                      <AppText color={colors.textMuted} variant="caption">
                        {packBenefitsCopy.scenariosLabel}
                      </AppText>
                      <AppText style={styles.packMetricValue} variant="subtitle">
                        {pack.scenarioCount}
                      </AppText>
                    </View>
                  </View>

                  <View style={styles.packExtrasBlock}>
                    <AppText color={colors.textMuted} variant="caption">
                      {packBenefitsCopy.extrasLabel}
                    </AppText>
                    <View style={styles.packHighlightsList}>
                      {pack.highlights.map((highlight) => (
                        <View key={highlight} style={styles.packHighlightRow}>
                          <Ionicons color={colors.primary} name="sparkles" size={14} />
                          <AppText color={colors.textSubtle} style={styles.packHighlightText}>
                            {highlight}
                          </AppText>
                        </View>
                      ))}
                    </View>
                  </View>

                  <View style={styles.packJourneyBlock}>
                    <View style={styles.packJourneyItem}>
                      <AppText color={colors.textMuted} variant="caption">
                        {packJourneyCopy.bestForLabel}
                      </AppText>
                      <AppText color={colors.textSubtle} style={styles.packJourneyText}>
                        {pack.bestFor}
                      </AppText>
                    </View>
                    <View style={styles.packJourneyItem}>
                      <AppText color={colors.textMuted} variant="caption">
                        {packJourneyCopy.useWhenLabel}
                      </AppText>
                      <AppText color={colors.textSubtle} style={styles.packJourneyText}>
                        {pack.useWhen}
                      </AppText>
                    </View>
                  </View>

                  <View style={styles.featuredGrid}>
                    {pack.scenes.map((category) => (
                      <Link asChild href={`/category/${category.slug}`} key={category.id}>
                        <Pressable style={({ pressed }) => [styles.featuredPressable, pressed && styles.featuredPressablePressed]}>
                          <AppCard style={styles.featuredCard}>
                            <Image source={{ uri: category.imageUrl }} style={styles.featuredImage} />
                            <AppText style={styles.featuredTitle} variant="subtitle">
                              {category.title}
                            </AppText>
                            <AppText color={colors.textMuted} numberOfLines={3} style={styles.featuredBody}>
                              {category.shortDescription}
                            </AppText>
                            <View style={styles.featuredCtaRow}>
                              <AppText color={colors.primary} variant="caption">
                                {t.readMore}
                              </AppText>
                              <Ionicons color={colors.primary} name="arrow-forward" size={14} />
                            </View>
                          </AppCard>
                        </Pressable>
                      </Link>
                    ))}
                  </View>
                </AppCard>
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
                <Link asChild href={`/category/${category.slug}`} key={category.id}>
                  <Pressable style={({ pressed }) => [styles.previewLink, pressed && styles.previewLinkPressed]}>
                    <View style={styles.previewListRow}>
                      <Ionicons color={colors.primary} name="checkmark-circle" size={16} />
                      <AppText color={colors.textSubtle} style={styles.previewListText}>
                        {category.title}
                      </AppText>
                      <Ionicons color={colors.textMuted} name="chevron-forward" size={16} />
                    </View>
                  </Pressable>
                </Link>
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
              {featuredPremiumOnly.map((category) => (
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
  recommendedCard: {
    borderRadius: 28,
    backgroundColor: colors.surfaceMuted,
    gap: spacing.md
  },
  recommendedList: {
    gap: spacing.md
  },
  recommendedItem: {
    borderRadius: 22,
    padding: spacing.md,
    backgroundColor: colors.surface,
    gap: spacing.xs,
    ...shadows.card
  },
  recommendedTopRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    gap: spacing.sm
  },
  recommendedTitle: {
    color: colors.primary
  },
  packList: {
    gap: spacing.md
  },
  packChooserCard: {
    borderRadius: 24,
    backgroundColor: colors.surfaceMuted,
    gap: spacing.xs
  },
  packChooserTitle: {
    color: colors.primary
  },
  packCard: {
    borderRadius: 28,
    backgroundColor: colors.surface
  },
  packHeader: {
    flexDirection: "row",
    alignItems: "flex-start",
    gap: spacing.md
  },
  packIcon: {
    width: 40,
    height: 40,
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: colors.surfaceMuted
  },
  packTitle: {
    color: colors.primary
  },
  packMeta: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    gap: spacing.sm
  },
  packMetricsRow: {
    flexDirection: "row",
    gap: spacing.sm
  },
  packMetric: {
    flex: 1,
    borderRadius: 18,
    padding: spacing.sm,
    backgroundColor: colors.surfaceMuted,
    gap: 4
  },
  packMetricValue: {
    color: colors.primary
  },
  packExtrasBlock: {
    gap: spacing.sm
  },
  packJourneyBlock: {
    gap: spacing.sm
  },
  packJourneyItem: {
    gap: 4
  },
  packJourneyText: {
    lineHeight: 22
  },
  packHighlightsList: {
    gap: spacing.sm
  },
  packHighlightRow: {
    flexDirection: "row",
    alignItems: "flex-start",
    gap: spacing.xs
  },
  packHighlightText: {
    flex: 1,
    lineHeight: 22
  },
  featuredGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: spacing.md
  },
  featuredPressable: {
    width: "47%"
  },
  featuredPressablePressed: {
    opacity: 0.84
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
  featuredCtaRow: {
    marginTop: "auto",
    paddingTop: spacing.xs,
    flexDirection: "row",
    alignItems: "center",
    gap: 6
  },
  previewList: {
    gap: spacing.sm
  },
  previewLink: {
    borderRadius: 18
  },
  previewLinkPressed: {
    opacity: 0.8
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
