import { Ionicons } from "@expo/vector-icons";
import { StyleSheet, View } from "react-native";

import { AppCard } from "@/components/ui/AppCard";
import { AppScreen } from "@/components/ui/AppScreen";
import { AppText } from "@/components/ui/AppText";
import { useAppLanguage } from "@/features/localization/hooks/useAppLanguage";
import { colors } from "@/lib/constants/colors";
import { spacing } from "@/lib/constants/spacing";

export default function FeedbackPlaceholderScreen() {
  const { t } = useAppLanguage();

  return (
    <AppScreen>
      <View style={styles.header}>
        <AppText style={styles.title} variant="hero">
          {t.settingsTitleFeedback}
        </AppText>
        <AppText color={colors.textMuted}>{t.settingsBodyFeedback}</AppText>
      </View>

      <AppCard style={styles.infoCard}>
        <View style={styles.infoHeader}>
          <View style={styles.iconCircle}>
            <Ionicons color={colors.primary} name="chatbubble-ellipses-outline" size={18} />
          </View>
          <AppText style={styles.infoTitle} variant="subtitle">
            {t.settingsTitleFeedback}
          </AppText>
        </View>
        <AppText color={colors.textMuted}>{t.feedbackPlaceholder}</AppText>
      </AppCard>
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
  infoHeader: {
    flexDirection: "row",
    alignItems: "center",
    gap: spacing.sm
  },
  iconCircle: {
    width: 36,
    height: 36,
    borderRadius: 18,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#F6EDEB"
  },
  infoTitle: {
    color: colors.primary
  }
});
