import { Image, Pressable, StyleSheet, View } from "react-native";
import { useRouter } from "expo-router";
import { Ionicons } from "@expo/vector-icons";

import { AppButton } from "@/components/ui/AppButton";
import { AppCard } from "@/components/ui/AppCard";
import { AppScreen } from "@/components/ui/AppScreen";
import { AppText } from "@/components/ui/AppText";
import { useAppLanguage } from "@/features/localization/hooks/useAppLanguage";
import { colors } from "@/lib/constants/colors";
import { radius } from "@/lib/constants/radius";
import { spacing } from "@/lib/constants/spacing";

const wideImage =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuAcf98yDWwtqepV3bu8GkiGTkogZoynhHZFyX7Dquiwtf-mMMxtza16eGCP44x-JGu9mFVqapJslNeoxpZwVzp2TXY2jU0MGzXae1ASpHfgsaKi5F6Zkr2nzm5hMtORHQ9h_0fjaapg67ek5rPy1_zCwDEcZ2jl4nRcOEsoGCMIzmLJJ6f70sDD94mhEnCvEg9tipcyT4FyM68fJOIjaPpjgmXj2dGmq405sstRsNO7yvbZG6t7Mi9bdqAACwh4cybxdwqWhR40Xq8";
const topImage =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuBMsadtsc5m3U9lICnRQz74t0IxnNVuwQmoIeiWlJSE74n-5_u97px9jqFQcj000D_WFogrUQGVtEIkXEeUuxmVy8JTzu81m40lLWlcQJu8OJIPfr91zlgWcN41yvB1gq7t7BCROuSIRmQUMliU2a5dqIOeEyN2SvqOZ4_T-2EFeoUYvto66LkBunKeN67SZnuYBCxpOy8c6k9-dg7ytd4PYvai-dMIhzPJUgMbKpEeNFWtzEl8t8Kyt6roGsL4o6L4A4QjxhxtHXU";

export default function PremiumScreen() {
  const router = useRouter();
  const { t } = useAppLanguage();

  return (
    <AppScreen>
      <View style={styles.header}>
        <Pressable onPress={() => router.back()} style={styles.headerButton}>
          <Ionicons color={colors.primary} name="close" size={20} />
        </Pressable>
        <AppText style={styles.headerTitle} variant="caption">
          {t.premiumAccess}
        </AppText>
        <View style={styles.headerSpacer} />
      </View>

      <View style={styles.heroSection}>
        <Image source={{ uri: topImage }} style={styles.heroThumb} />
        <AppText style={styles.heroTitle} variant="title">
          {t.unlockTitle}
        </AppText>
        <AppText color={colors.textMuted} style={styles.heroBody}>
          {t.unlockBody}
        </AppText>
        <View style={styles.priceChip}>
          <Ionicons color={colors.primary} name="sparkles" size={14} />
          <AppText color={colors.primary} variant="caption">
            $9.99
          </AppText>
        </View>
      </View>

      <View style={styles.benefits}>
        <AppCard style={styles.benefitCard}>
          <View style={styles.benefitIcon}>
            <Ionicons color={colors.primary} name="book-outline" size={20} />
          </View>
          <View style={styles.benefitCopy}>
            <AppText style={styles.benefitTitle} variant="subtitle">
              {t.commonSituations}
            </AppText>
            <AppText color={colors.textMuted}>{t.unlockBody}</AppText>
          </View>
        </AppCard>

        <AppCard style={styles.benefitCard}>
          <View style={styles.benefitIcon}>
            <Ionicons color={colors.primary} name="download-outline" size={20} />
          </View>
          <View style={styles.benefitCopy}>
            <AppText style={styles.benefitTitle} variant="subtitle">
              {t.readMore}
            </AppText>
            <AppText color={colors.textMuted}>{t.premiumPlaceholder}</AppText>
          </View>
        </AppCard>

        <AppCard style={styles.benefitCard}>
          <View style={styles.benefitIcon}>
            <Ionicons color={colors.primary} name="sparkles-outline" size={20} />
          </View>
          <View style={styles.benefitCopy}>
            <AppText style={styles.benefitTitle} variant="subtitle">
              {t.whyItMatters}
            </AppText>
            <AppText color={colors.textMuted}>{t.feedbackPlaceholder}</AppText>
          </View>
        </AppCard>
      </View>

      <Image source={{ uri: wideImage }} style={styles.wideImage} />

      <AppCard style={styles.compareCard}>
        <AppText color={colors.textMuted} style={styles.compareEyebrow} variant="eyebrow">
          {t.settingsTitlePremium}
        </AppText>
        <View style={styles.compareRow}>
          <AppText style={styles.compareText}>{t.commonSituations}</AppText>
          <Ionicons color={colors.primary} name="checkmark-circle" size={18} />
        </View>
        <View style={styles.compareRow}>
          <AppText style={styles.compareText}>{t.whyItMatters}</AppText>
          <Ionicons color={colors.primary} name="checkmark-circle" size={18} />
        </View>
        <View style={styles.compareRow}>
          <AppText style={styles.compareText}>{t.readMore}</AppText>
          <Ionicons color={colors.primary} name="checkmark-circle" size={18} />
        </View>
      </AppCard>

      <View style={styles.ctaWrap}>
        <AppButton label={t.settingsTitleFeedback} onPress={() => router.push("/feedback")} />
        <View style={styles.footerLinks}>
          <Pressable onPress={() => router.push("/feedback")}>
            <AppText color={colors.textMuted} variant="caption">
              {t.settingsTitleFeedback}
            </AppText>
          </Pressable>
        </View>
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
    gap: spacing.md,
    paddingTop: spacing.sm
  },
  heroThumb: {
    width: 96,
    height: 96,
    borderRadius: 24
  },
  heroTitle: {
    textAlign: "center",
    maxWidth: 320
  },
  heroBody: {
    textAlign: "center",
    maxWidth: 320,
    lineHeight: 28
  },
  priceChip: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
    paddingHorizontal: spacing.md,
    paddingVertical: 10,
    borderRadius: radius.pill,
    backgroundColor: colors.surfaceMuted
  },
  benefits: {
    gap: spacing.md
  },
  benefitCard: {
    flexDirection: "row",
    alignItems: "flex-start",
    gap: spacing.md,
    borderRadius: 28,
    backgroundColor: colors.surfaceMuted,
    padding: spacing.lg
  },
  benefitIcon: {
    width: 40,
    height: 40,
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#F6EDEB"
  },
  benefitCopy: {
    flex: 1,
    gap: 6
  },
  benefitTitle: {
    color: colors.text
  },
  wideImage: {
    width: "100%",
    height: 148,
    borderRadius: 28
  },
  compareCard: {
    borderRadius: 28,
    padding: spacing.lg
  },
  compareEyebrow: {
    textTransform: "uppercase",
    marginBottom: spacing.sm
  },
  compareRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingVertical: spacing.sm
  },
  compareText: {
    color: colors.textSubtle
  },
  ctaWrap: {
    gap: spacing.md,
    paddingBottom: spacing.md
  },
  footerLinks: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: spacing.sm
  }
});
