import { Link } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import { Pressable, StyleSheet, View } from "react-native";

import { AppCard } from "@/components/ui/AppCard";
import { AppScreen } from "@/components/ui/AppScreen";
import { AppText } from "@/components/ui/AppText";
import { useAppLanguage } from "@/features/localization/hooks/useAppLanguage";
import { usePremium } from "@/features/premium/hooks/usePremium";
import { colors } from "@/lib/constants/colors";
import { getPremiumMockCopy } from "@/lib/i18n/premium-mock-copy";
import { spacing } from "@/lib/constants/spacing";

function SettingsRow({
  href,
  icon,
  title,
  description,
  trailing
}: {
  href: "/language" | "/premium" | "/feedback";
  icon: keyof typeof Ionicons.glyphMap;
  title: string;
  description: string;
  trailing?: string;
}) {
  return (
    <Link asChild href={href}>
      <Pressable>
        <AppCard style={styles.rowCard}>
          <View style={styles.rowIcon}>
            <Ionicons color={colors.primary} name={icon} size={20} />
          </View>

          <View style={styles.rowBody}>
            <AppText style={styles.rowTitle} variant="subtitle">
              {title}
            </AppText>
            <AppText color={colors.textMuted}>{description}</AppText>
          </View>

          <View style={styles.trailing}>
            {trailing ? (
              <AppText color={colors.textMuted} numberOfLines={1} style={styles.trailingText} variant="caption">
                {trailing}
              </AppText>
            ) : null}
            <Ionicons color={colors.textMuted} name="chevron-forward" size={18} />
          </View>
        </AppCard>
      </Pressable>
    </Link>
  );
}

export default function SettingsScreen() {
  const { currentLanguage, getLanguageLabel, t } = useAppLanguage();
  const { isPremiumUnlocked } = usePremium();
  const premiumStateCopy = getPremiumMockCopy(currentLanguage);
  const premiumTrailing = isPremiumUnlocked ? premiumStateCopy.unlockedState : premiumStateCopy.previewState;

  return (
    <AppScreen>
      <View style={styles.header}>
        <AppText style={styles.title} variant="hero">
          {t.settingsTab}
        </AppText>
        <AppText color={colors.textMuted}>
          {t.languagePlaceholder}
        </AppText>
      </View>

      <AppCard style={styles.infoCard}>
        <AppText color={colors.primary} style={styles.eyebrow} variant="eyebrow">
          Japan Etiquette Guide
        </AppText>
        <AppText style={styles.infoTitle} variant="subtitle">
          {t.browseTitle}
        </AppText>
        <AppText color={colors.textMuted}>
          {t.browseDescription}
        </AppText>
      </AppCard>

      <SettingsRow
        href="/language"
        icon="language"
        title={t.settingsTitleLanguage}
        description={t.settingsBodyLanguage}
        trailing={getLanguageLabel(currentLanguage)}
      />
      <SettingsRow
        href="/premium"
        icon="diamond-outline"
        title={t.settingsTitlePremium}
        description={t.settingsBodyPremium}
        trailing={premiumTrailing}
      />
      <SettingsRow
        href="/feedback"
        icon="chatbubble-ellipses-outline"
        title={t.settingsTitleFeedback}
        description={t.settingsBodyFeedback}
      />
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
  infoCard: {
    borderRadius: 28,
    backgroundColor: colors.surfaceMuted
  },
  eyebrow: {
    textTransform: "uppercase"
  },
  infoTitle: {
    color: colors.primary
  },
  rowCard: {
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 28,
    padding: spacing.md
  },
  rowIcon: {
    width: 48,
    height: 48,
    borderRadius: 24,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: colors.surfaceMuted
  },
  rowBody: {
    flex: 1,
    gap: 6,
    paddingHorizontal: spacing.md
  },
  rowTitle: {
    color: colors.primary
  },
  trailing: {
    flexDirection: "row",
    alignItems: "center",
    gap: spacing.xs,
    maxWidth: 132
  },
  trailingText: {
    textAlign: "right"
  }
});
