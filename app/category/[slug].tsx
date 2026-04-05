import { useLocalSearchParams, useRouter } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import { Image, Pressable, StyleSheet, View } from "react-native";

import { AppBadge } from "@/components/ui/AppBadge";
import { AppButton } from "@/components/ui/AppButton";
import { AppCard } from "@/components/ui/AppCard";
import { AppScreen } from "@/components/ui/AppScreen";
import { AppText } from "@/components/ui/AppText";
import { EmptyState } from "@/components/ui/EmptyState";
import { useCategoryDetail } from "@/features/categories/hooks/useCategoryDetail";
import { useAppLanguage } from "@/features/localization/hooks/useAppLanguage";
import { usePremium } from "@/features/premium/hooks/usePremium";
import { colors } from "@/lib/constants/colors";
import { getCategoryDetailCopy } from "@/lib/i18n/category-detail-copy";
import { getPremiumDeepDiveCopy } from "@/lib/i18n/premium-deep-dive-copy";
import { getPremiumTierCopy } from "@/lib/i18n/premium-tier-copy";
import { radius } from "@/lib/constants/radius";
import { shadows } from "@/lib/constants/shadows";
import { spacing } from "@/lib/constants/spacing";

export default function CategoryDetailScreen() {
  const router = useRouter();
  const params = useLocalSearchParams<{ slug: string }>();
  const category = useCategoryDetail(params.slug);
  const { currentLanguage, t } = useAppLanguage();
  const { isPremiumUnlocked } = usePremium();

  if (!category) {
    return (
      <AppScreen>
        <EmptyState title={t.guideNotFound} message={t.guideMissing} />
      </AppScreen>
    );
  }

  const premiumTierCopy = getPremiumTierCopy(currentLanguage);
  const detailCopy = getCategoryDetailCopy(currentLanguage);
  const premiumDeepDiveCopy = getPremiumDeepDiveCopy(currentLanguage);
  const isPremiumOnlyLocked = category.premiumTier === "premium-only" && !isPremiumUnlocked;
  const premiumDeepDive = !isPremiumOnlyLocked ? category.content.premiumDeepDive : undefined;
  const heroBadge =
    category.badge === "high-risk"
      ? t.avoidLabel
      : category.premiumTier === "premium-only"
        ? premiumTierCopy.premiumOnlyBadge
        : category.premiumTier !== "free"
        ? t.premiumAccess
        : t.quickView;

  return (
    <AppScreen>
      <View style={styles.header}>
        <Pressable onPress={() => router.back()} style={({ pressed }) => [styles.headerButton, pressed && styles.headerButtonPressed]}>
          <Ionicons color={colors.primary} name="arrow-back" size={20} />
        </Pressable>
        <AppText numberOfLines={1} style={styles.headerTitle} variant="caption">
          {category.title}
        </AppText>
        <View style={styles.headerSpacer} />
      </View>

      <View style={styles.titleBlock}>
        <AppBadge label={heroBadge} tone={category.premiumTier !== "free" ? "premium" : "default"} />
        <AppText style={styles.title} variant="title">
          {category.title}
        </AppText>
        <AppText color={colors.textMuted} style={styles.lead}>
          {category.shortDescription}
        </AppText>
      </View>

      <Image source={{ uri: category.imageUrl }} style={styles.heroImage} />

      {isPremiumOnlyLocked ? (
        <AppCard style={styles.lockedCard}>
          <View style={styles.lockedHeader}>
            <View style={styles.lockedIcon}>
              <Ionicons color={colors.surface} name="lock-closed" size={18} />
            </View>
            <View style={styles.lockedCopy}>
              <AppText color={colors.textMuted} variant="caption">
                {premiumTierCopy.premiumOnlyBadge}
              </AppText>
              <AppText style={styles.contextTitle} variant="subtitle">
                {premiumTierCopy.lockedTitle}
              </AppText>
            </View>
          </View>
          <AppText color={colors.textMuted}>{premiumTierCopy.lockedBody}</AppText>
          <View style={styles.list}>
            {premiumTierCopy.lockedPoints.map((item) => (
              <View key={item} style={styles.bulletRow}>
                <View style={[styles.smallDot, styles.lockedDot]} />
                <AppText style={styles.bulletText}>{item}</AppText>
              </View>
            ))}
          </View>
          <View style={styles.lockedActions}>
            <AppButton label={premiumTierCopy.unlockCta} onPress={() => router.push("/premium")} />
            <AppButton label={premiumTierCopy.browseCta} onPress={() => router.push("/browse")} tone="secondary" />
          </View>
        </AppCard>
      ) : category.content.whyItMatters.length > 0 ? (
        <AppCard style={styles.contextCard}>
          <View style={styles.contextHeader}>
            <View style={styles.contextIcon}>
              <Ionicons color={colors.primary} name="sparkles" size={16} />
            </View>
            <AppText style={styles.contextTitle} variant="subtitle">
              {t.whyItMatters}
            </AppText>
          </View>
          <View style={styles.list}>
            {category.content.whyItMatters.map((item) => (
              <AppText color={colors.textSubtle} key={`why-${item}`} style={styles.contextBody}>
                {item}
              </AppText>
            ))}
          </View>
        </AppCard>
      ) : null}

      {!isPremiumOnlyLocked && category.content.quickView.length > 0 ? (
        <View style={styles.sectionBlock}>
          <AppText style={styles.sectionTitle} variant="subtitle">
            {t.quickView}
          </AppText>
          <View style={styles.ruleList}>
            {category.content.quickView.map((item, index) => (
              <View key={`rule-${item}`} style={styles.ruleCard}>
                <View style={styles.ruleNumber}>
                  <AppText color={colors.surface} variant="caption">
                    {index + 1}
                  </AppText>
                </View>
                <AppText style={styles.ruleText}>{item}</AppText>
              </View>
            ))}
          </View>
        </View>
      ) : null}

      {!isPremiumOnlyLocked && category.content.dos.length > 0 ? (
        <AppCard style={styles.doCard}>
          <View style={styles.rowHeader}>
            <Ionicons color={colors.success} name="checkmark-circle" size={18} />
            <AppText color={colors.success} style={styles.rowEyebrow} variant="eyebrow">
              {t.doLabel}
            </AppText>
          </View>
          <View style={styles.list}>
            {category.content.dos.map((item) => (
              <View key={`do-${item}`} style={styles.bulletRow}>
                <View style={[styles.smallDot, styles.doDot]} />
                <AppText style={styles.bulletText}>{item}</AppText>
              </View>
            ))}
          </View>
        </AppCard>
      ) : null}

      {!isPremiumOnlyLocked && category.content.donts.length > 0 ? (
        <AppCard style={styles.dontCard}>
          <View style={styles.rowHeader}>
            <Ionicons color="#B42318" name="close-circle" size={18} />
            <AppText color="#B42318" style={styles.rowEyebrow} variant="eyebrow">
              {t.avoidLabel}
            </AppText>
          </View>
          <View style={styles.list}>
            {category.content.donts.map((item) => (
              <View key={`dont-${item}`} style={styles.bulletRow}>
                <View style={[styles.smallDot, styles.dontDot]} />
                <AppText style={styles.bulletText}>{item}</AppText>
              </View>
            ))}
          </View>
        </AppCard>
      ) : null}

      {!isPremiumOnlyLocked && category.content.commonMistakes.length > 0 ? (
        <View style={styles.sectionBlock}>
          <View style={styles.noteHeader}>
            <Ionicons color={colors.textMuted} name="bulb-outline" size={16} />
            <AppText style={styles.sectionTitle} variant="subtitle">
              {t.commonMistakes}
            </AppText>
          </View>

          <View style={styles.exampleWrap}>
            <View style={styles.exampleLine} />
            <View style={styles.exampleBody}>
              {category.content.commonMistakes.map((item) => (
                <AppText color={colors.textSubtle} key={`mistake-${item}`} style={styles.exampleText}>
                  {item}
                </AppText>
              ))}
            </View>
          </View>
        </View>
      ) : null}

      {!isPremiumOnlyLocked && category.content.readMore.length > 0 ? (
        <AppCard style={styles.readMoreCard}>
          <AppText style={styles.sectionTitle} variant="subtitle">
            {detailCopy.moreNotesHeading}
          </AppText>
          <View style={styles.list}>
            {category.content.readMore.map((item) => (
              <AppText color={colors.textMuted} key={`more-${item}`}>
                {item}
              </AppText>
            ))}
          </View>
        </AppCard>
      ) : null}

      {premiumDeepDive ? (
        <AppCard style={styles.premiumDeepDiveCard}>
          <View style={styles.premiumDeepDiveHeader}>
            <AppBadge label={premiumDeepDiveCopy.badge} tone="premium" />
            <AppText style={styles.premiumDeepDiveTitle} variant="subtitle">
              {premiumDeepDiveCopy.title}
            </AppText>
            <AppText color={colors.textMuted}>{premiumDeepDiveCopy.body}</AppText>
          </View>

          {premiumDeepDive.culturalNotes.length > 0 ? (
            <View style={styles.deepDiveSection}>
              <AppText style={styles.deepDiveHeading} variant="subtitle">
                {premiumDeepDiveCopy.culturalNotesHeading}
              </AppText>
              <View style={styles.list}>
                {premiumDeepDive.culturalNotes.map((item) => (
                  <View key={`deep-note-${item}`} style={styles.bulletRow}>
                    <View style={[styles.smallDot, styles.premiumDot]} />
                    <AppText style={styles.bulletText}>{item}</AppText>
                  </View>
                ))}
              </View>
            </View>
          ) : null}

          {premiumDeepDive.situationCards.length > 0 ? (
            <View style={styles.deepDiveSection}>
              <AppText style={styles.deepDiveHeading} variant="subtitle">
                {premiumDeepDiveCopy.situationsHeading}
              </AppText>
              <View style={styles.situationList}>
                {premiumDeepDive.situationCards.map((item) => (
                  <View key={`deep-situation-${item.title}`} style={styles.situationCard}>
                    <AppText style={styles.situationTitle} variant="subtitle">
                      {item.title}
                    </AppText>
                    <AppText style={styles.bulletText}>{item.body}</AppText>
                  </View>
                ))}
              </View>
            </View>
          ) : null}

          {premiumDeepDive.phraseCards.length > 0 ? (
            <View style={styles.deepDiveSection}>
              <AppText style={styles.deepDiveHeading} variant="subtitle">
                {premiumDeepDiveCopy.phraseCardsHeading}
              </AppText>
              <View style={styles.phraseList}>
                {premiumDeepDive.phraseCards.map((item) => (
                  <View key={`phrase-${item.phrase}`} style={styles.phraseCard}>
                    <AppText style={styles.phraseText} variant="subtitle">
                      {item.phrase}
                    </AppText>
                    {item.pronunciation ? (
                      <AppText color={colors.textMuted} style={styles.phrasePronunciation}>
                        {item.pronunciation}
                      </AppText>
                    ) : null}
                    <AppText style={styles.bulletText}>{item.explanation}</AppText>
                    <AppText color={colors.textMuted} style={styles.phraseWhen}>
                      {premiumDeepDiveCopy.useWhenLabel}: {item.useWhen}
                    </AppText>
                  </View>
                ))}
              </View>
            </View>
          ) : null}

          {premiumDeepDive.checklist.length > 0 ? (
            <View style={styles.deepDiveSection}>
              <AppText style={styles.deepDiveHeading} variant="subtitle">
                {premiumDeepDiveCopy.checklistHeading}
              </AppText>
              <View style={styles.list}>
                {premiumDeepDive.checklist.map((item) => (
                  <View key={`deep-check-${item}`} style={styles.bulletRow}>
                    <Ionicons color={colors.primary} name="checkmark-circle" size={16} style={styles.checkIcon} />
                    <AppText style={styles.bulletText}>{item}</AppText>
                  </View>
                ))}
              </View>
            </View>
          ) : null}
        </AppCard>
      ) : null}

      {category.premiumTier === "preview" ? (
        <View style={styles.premiumPanel}>
          <View style={styles.premiumPanelHeader}>
            <Ionicons color={colors.accentSoft} name="sparkles" size={16} />
            <AppText color={colors.accentSoft} style={styles.rowEyebrow} variant="eyebrow">
              {t.premiumAccess}
            </AppText>
          </View>
          <AppText color={colors.surface} style={styles.premiumPanelTitle} variant="subtitle">
            {t.unlockTitle}
          </AppText>
          <AppText color="rgba(255,255,255,0.82)">{t.unlockBody}</AppText>
          <AppButton label={t.goPremium} onPress={() => router.push("/premium")} />
        </View>
      ) : null}
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
    justifyContent: "center",
    backgroundColor: colors.surfaceMuted
  },
  headerButtonPressed: {
    opacity: 0.72
  },
  headerTitle: {
    flex: 1,
    textAlign: "center",
    color: colors.primary,
    marginHorizontal: spacing.sm
  },
  headerSpacer: {
    width: 40
  },
  titleBlock: {
    gap: spacing.sm
  },
  title: {
    color: colors.text
  },
  lead: {
    fontSize: 17,
    lineHeight: 28,
    fontStyle: "italic"
  },
  heroImage: {
    width: "100%",
    height: 212,
    borderRadius: 28
  },
  contextCard: {
    backgroundColor: colors.surfaceMuted,
    borderRadius: 28,
    padding: spacing.lg
  },
  lockedCard: {
    backgroundColor: colors.surfaceMuted,
    borderRadius: 28,
    padding: spacing.lg
  },
  contextHeader: {
    flexDirection: "row",
    alignItems: "center",
    gap: spacing.sm
  },
  lockedHeader: {
    flexDirection: "row",
    alignItems: "center",
    gap: spacing.md
  },
  contextIcon: {
    width: 32,
    height: 32,
    borderRadius: 16,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#F6E8E4"
  },
  contextTitle: {
    color: colors.primary
  },
  lockedIcon: {
    width: 38,
    height: 38,
    borderRadius: 19,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: colors.primary
  },
  lockedCopy: {
    flex: 1,
    gap: 4
  },
  contextBody: {
    lineHeight: 26
  },
  list: {
    gap: spacing.sm
  },
  sectionBlock: {
    gap: spacing.md
  },
  sectionTitle: {
    color: colors.primary
  },
  ruleList: {
    gap: spacing.sm
  },
  ruleCard: {
    flexDirection: "row",
    alignItems: "flex-start",
    gap: spacing.sm,
    paddingHorizontal: spacing.md,
    paddingVertical: spacing.md,
    borderRadius: 28,
    backgroundColor: colors.surface,
    ...shadows.card
  },
  ruleNumber: {
    width: 28,
    height: 28,
    borderRadius: 14,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: colors.primarySoft,
    marginTop: 2
  },
  ruleText: {
    flex: 1,
    color: colors.textSubtle,
    lineHeight: 25
  },
  rowHeader: {
    flexDirection: "row",
    alignItems: "center",
    gap: spacing.sm
  },
  rowEyebrow: {
    textTransform: "uppercase"
  },
  doCard: {
    backgroundColor: "#FAFCFA",
    borderRadius: 28
  },
  dontCard: {
    backgroundColor: "#FCF7F7",
    borderRadius: 28
  },
  bulletRow: {
    flexDirection: "row",
    alignItems: "flex-start",
    gap: spacing.sm
  },
  smallDot: {
    width: 6,
    height: 6,
    borderRadius: 3,
    marginTop: 9
  },
  doDot: {
    backgroundColor: colors.success
  },
  dontDot: {
    backgroundColor: "#B42318"
  },
  lockedDot: {
    backgroundColor: colors.primary
  },
  bulletText: {
    flex: 1,
    color: colors.textSubtle,
    lineHeight: 24
  },
  noteHeader: {
    flexDirection: "row",
    alignItems: "center",
    gap: spacing.sm
  },
  exampleWrap: {
    flexDirection: "row",
    gap: spacing.md
  },
  exampleLine: {
    width: 3,
    borderRadius: radius.pill,
    backgroundColor: "#F0B0A6"
  },
  exampleBody: {
    flex: 1,
    gap: spacing.sm
  },
  exampleText: {
    lineHeight: 27
  },
  readMoreCard: {
    borderRadius: 28
  },
  premiumDeepDiveCard: {
    borderRadius: 30,
    backgroundColor: colors.surfaceSoft,
    gap: spacing.lg
  },
  premiumDeepDiveHeader: {
    gap: spacing.sm
  },
  premiumDeepDiveTitle: {
    color: colors.primary
  },
  deepDiveSection: {
    gap: spacing.sm
  },
  deepDiveHeading: {
    color: colors.primary
  },
  phraseList: {
    gap: spacing.sm
  },
  situationList: {
    gap: spacing.sm
  },
  phraseCard: {
    gap: spacing.xs,
    padding: spacing.md,
    borderRadius: 22,
    backgroundColor: colors.surface,
    ...shadows.card
  },
  situationCard: {
    gap: spacing.xs,
    padding: spacing.md,
    borderRadius: 22,
    backgroundColor: "#F9F4F2"
  },
  phraseText: {
    color: colors.primary
  },
  situationTitle: {
    color: colors.primary
  },
  phrasePronunciation: {
    fontSize: 13
  },
  phraseWhen: {
    lineHeight: 22
  },
  premiumDot: {
    backgroundColor: colors.primary
  },
  checkIcon: {
    marginTop: 4
  },
  premiumPanel: {
    backgroundColor: colors.primary,
    borderRadius: 32,
    padding: spacing.lg,
    gap: spacing.md,
    ...shadows.strong
  },
  premiumPanelHeader: {
    flexDirection: "row",
    alignItems: "center",
    gap: spacing.sm
  },
  premiumPanelTitle: {
    color: colors.surface
  },
  lockedActions: {
    gap: spacing.sm
  }
});
