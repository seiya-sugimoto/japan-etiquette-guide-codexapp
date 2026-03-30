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
import { colors } from "@/lib/constants/colors";
import { radius } from "@/lib/constants/radius";
import { shadows } from "@/lib/constants/shadows";
import { spacing } from "@/lib/constants/spacing";

export default function CategoryDetailScreen() {
  const router = useRouter();
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

  const heroBadge = category.badge === "high-risk" ? t.avoidLabel : category.access === "premium" ? "Premium" : t.quickView;

  return (
    <AppScreen>
      <View style={styles.header}>
        <Pressable onPress={() => router.back()} style={styles.headerButton}>
          <Ionicons color={colors.primary} name="arrow-back" size={20} />
        </Pressable>
        <AppText numberOfLines={1} style={styles.headerTitle} variant="caption">
          {category.title}
        </AppText>
        <View style={styles.headerSpacer} />
      </View>

      <View style={styles.titleBlock}>
        <AppBadge label={heroBadge} tone={category.access === "premium" ? "premium" : "default"} />
        <AppText style={styles.title} variant="title">
          {category.title}
        </AppText>
        <AppText color={colors.textMuted} style={styles.lead}>
          {category.shortDescription}
        </AppText>
      </View>

      <Image source={{ uri: category.imageUrl }} style={styles.heroImage} />

      {category.content.whyItMatters.length > 0 ? (
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

      {category.content.quickView.length > 0 ? (
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

      {category.content.dos.length > 0 ? (
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

      {category.content.donts.length > 0 ? (
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

      {category.content.commonMistakes.length > 0 ? (
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

      {category.content.readMore.length > 0 ? (
        <AppCard style={styles.readMoreCard}>
          <AppText style={styles.sectionTitle} variant="subtitle">
            {t.readMore}
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

      <View style={styles.premiumPanel}>
        <View style={styles.premiumPanelHeader}>
          <Ionicons color={colors.accentSoft} name="sparkles" size={16} />
          <AppText color={colors.accentSoft} style={styles.rowEyebrow} variant="eyebrow">
            Premium
          </AppText>
        </View>
        <AppText color={colors.surface} style={styles.premiumPanelTitle} variant="subtitle">
          {t.unlockTitle}
        </AppText>
        <AppText color="rgba(255,255,255,0.82)">{t.unlockBody}</AppText>
        <AppButton label={t.goPremium} onPress={() => router.push("/premium")} />
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
    justifyContent: "center",
    backgroundColor: colors.surfaceMuted
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
  contextHeader: {
    flexDirection: "row",
    alignItems: "center",
    gap: spacing.sm
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
  }
});
