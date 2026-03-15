import { Link } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import { Pressable, StyleSheet, View } from "react-native";

import { AppCard } from "@/components/ui/AppCard";
import { AppScreen } from "@/components/ui/AppScreen";
import { AppText } from "@/components/ui/AppText";
import { useAppLanguage } from "@/features/localization/hooks/useAppLanguage";
import { colors } from "@/lib/constants/colors";
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
            <AppText variant="subtitle">{title}</AppText>
            <AppText color={colors.textMuted}>{description}</AppText>
          </View>
          <View style={styles.trailing}>
            {trailing ? (
              <AppText variant="caption" color={colors.textMuted}>
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

  return (
    <AppScreen>
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
  rowCard: {
    flexDirection: "row",
    alignItems: "center"
  },
  rowIcon: {
    width: 40
  },
  rowBody: {
    flex: 1,
    gap: 4
  },
  trailing: {
    flexDirection: "row",
    alignItems: "center",
    gap: spacing.xs
  }
});
