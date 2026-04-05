import { Image, Pressable, StyleSheet, View } from "react-native";
import { useRouter } from "expo-router";
import { Ionicons } from "@expo/vector-icons";

import { AppButton } from "@/components/ui/AppButton";
import { AppCard } from "@/components/ui/AppCard";
import { AppScreen } from "@/components/ui/AppScreen";
import { AppText } from "@/components/ui/AppText";
import { useAppLanguage } from "@/features/localization/hooks/useAppLanguage";
import { colors } from "@/lib/constants/colors";
import { getPremiumPreviewCopy } from "@/lib/i18n/marketing-copy";
import { radius } from "@/lib/constants/radius";
import { shadows } from "@/lib/constants/shadows";
import { spacing } from "@/lib/constants/spacing";

const topImage =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuBMsadtsc5m3U9lICnRQz74t0IxnNVuwQmoIeiWlJSE74n-5_u97px9jqFQcj000D_WFogrUQGVtEIkXEeUuxmVy8JTzu81m40lLWlcQJu8OJIPfr91zlgWcN41yvB1gq7t7BCROuSIRmQUMliU2a5dqIOeEyN2SvqOZ4_T-2EFeoUYvto66LkBunKeN67SZnuYBCxpOy8c6k9-dg7ytd4PYvai-dMIhzPJUgMbKpEeNFWtzEl8t8Kyt6roGsL4o6L4A4QjxhxtHXU";

export default function PremiumScreen() {
  const router = useRouter();
  const { currentLanguage, supportedLanguages } = useAppLanguage();
  const copy = getPremiumPreviewCopy(currentLanguage);

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
