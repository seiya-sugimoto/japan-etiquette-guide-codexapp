import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { Alert, Pressable, StyleSheet, View } from "react-native";

import { AppButton } from "@/components/ui/AppButton";
import { AppCard } from "@/components/ui/AppCard";
import { AppScreen } from "@/components/ui/AppScreen";
import { AppText } from "@/components/ui/AppText";
import { hasFeedbackFormUrl, openFeedbackForm } from "@/features/feedback/lib/feedback-form";
import { useAppLanguage } from "@/features/localization/hooks/useAppLanguage";
import { colors } from "@/lib/constants/colors";
import { getFeedbackCopy } from "@/lib/i18n/feedback-copy";
import { radius } from "@/lib/constants/radius";
import { spacing } from "@/lib/constants/spacing";

const cardIcons: [keyof typeof Ionicons.glyphMap, keyof typeof Ionicons.glyphMap, keyof typeof Ionicons.glyphMap] = [
  "create-outline",
  "trail-sign-outline",
  "language-outline"
];

export default function FeedbackPlaceholderScreen() {
  const router = useRouter();
  const { currentLanguage } = useAppLanguage();
  const copy = getFeedbackCopy(currentLanguage);
  const formReady = hasFeedbackFormUrl();

  const handleOpenForm = async () => {
    const opened = await openFeedbackForm();

    if (!opened) {
      Alert.alert(copy.unavailableTitle, copy.unavailableBody);
    }
  };

  return (
    <AppScreen>
      <View style={styles.headerRow}>
        <Pressable onPress={() => router.back()} style={({ pressed }) => [styles.headerButton, pressed && styles.headerButtonPressed]}>
          <Ionicons color={colors.primary} name="arrow-back" size={20} />
        </Pressable>
        <AppText style={styles.headerTitle} variant="caption">
          {copy.headerTitle}
        </AppText>
        <View style={styles.headerSpacer} />
      </View>

      <View style={styles.header}>
        <AppText color={colors.accent} style={styles.eyebrow} variant="eyebrow">
          {copy.eyebrow}
        </AppText>
        <AppText style={styles.title} variant="hero">
          {copy.title}
        </AppText>
        <AppText color={colors.textMuted} style={styles.body}>
          {copy.body}
        </AppText>
      </View>

      <View style={styles.cardStack}>
        {copy.cards.map((card, index) => (
          <AppCard key={card.title} style={styles.infoCard}>
            <View style={styles.cardHeader}>
              <View style={styles.iconCircle}>
                <Ionicons color={colors.primary} name={cardIcons[index]} size={18} />
              </View>
              <AppText style={styles.cardTitle} variant="subtitle">
                {card.title}
              </AppText>
            </View>
            <AppText color={colors.textMuted}>{card.body}</AppText>
          </AppCard>
        ))}
      </View>

      <AppCard style={styles.helpCard}>
        <AppText style={styles.helpTitle} variant="subtitle">
          {copy.checklistTitle}
        </AppText>
        <AppText color={colors.textMuted}>{copy.checklistBody}</AppText>
        {copy.checklistPoints.map((point) => (
          <View key={point} style={styles.helpRow}>
            <Ionicons color={colors.primary} name="checkmark-circle" size={18} />
            <AppText color={colors.textSubtle} style={styles.helpText}>
              {point}
            </AppText>
          </View>
        ))}
      </AppCard>

      <AppCard style={styles.templateCard}>
        <View style={styles.statusHeader}>
          <Ionicons color={colors.primary} name="document-text-outline" size={18} />
          <AppText style={styles.statusTitle} variant="subtitle">
            {copy.templateTitle}
          </AppText>
        </View>
        <AppText color={colors.textMuted}>{copy.templateBody}</AppText>
        <View style={styles.templateList}>
          {copy.templateLines.map((line) => (
            <View key={line} style={styles.templateLine}>
              <Ionicons color={colors.primary} name="chevron-forward" size={14} />
              <AppText color={colors.textSubtle} style={styles.templateText}>
                {line}
              </AppText>
            </View>
          ))}
        </View>
      </AppCard>

      <AppCard style={styles.statusCard}>
        <View style={styles.statusHeader}>
          <Ionicons color={colors.primary} name="chatbubble-ellipses-outline" size={18} />
          <AppText style={styles.statusTitle} variant="subtitle">
            {copy.statusTitle}
          </AppText>
        </View>
        <AppText color={colors.textMuted}>{formReady ? copy.statusBodyReady : copy.statusBodyMissing}</AppText>
        <AppText color={colors.textSubtle} style={styles.browserNote}>
          {copy.browserNote}
        </AppText>
      </AppCard>

      <AppCard style={styles.nextCard}>
        <View style={styles.statusHeader}>
          <Ionicons color={colors.primary} name="sparkles-outline" size={18} />
          <AppText style={styles.statusTitle} variant="subtitle">
            {copy.nextTitle}
          </AppText>
        </View>
        <AppText color={colors.textMuted}>{copy.nextBody}</AppText>
      </AppCard>

      <View style={styles.ctaWrap}>
        <AppButton label={formReady ? copy.openFormCta : copy.openFormPendingCta} onPress={handleOpenForm} tone="primary" />
        <AppButton label={copy.browseCta} onPress={() => router.push("/browse")} tone="secondary" />
        <AppButton label={copy.premiumCta} onPress={() => router.push("/premium")} tone="secondary" />
      </View>
    </AppScreen>
  );
}

const styles = StyleSheet.create({
  headerRow: {
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
  headerButtonPressed: {
    opacity: 0.72
  },
  headerTitle: {
    color: colors.primary
  },
  headerSpacer: {
    width: 40
  },
  header: {
    gap: spacing.sm
  },
  eyebrow: {
    textTransform: "uppercase"
  },
  title: {
    color: colors.primary
  },
  body: {
    lineHeight: 26
  },
  cardStack: {
    gap: spacing.md
  },
  infoCard: {
    borderRadius: 28,
    backgroundColor: colors.surface
  },
  cardHeader: {
    flexDirection: "row",
    alignItems: "center",
    gap: spacing.sm
  },
  iconCircle: {
    width: 38,
    height: 38,
    borderRadius: 19,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#F6EDEB"
  },
  cardTitle: {
    color: colors.primary,
    flex: 1
  },
  helpCard: {
    borderRadius: 28,
    backgroundColor: colors.surfaceMuted
  },
  templateCard: {
    borderRadius: 28,
    backgroundColor: colors.surface
  },
  helpTitle: {
    color: colors.primary
  },
  helpRow: {
    flexDirection: "row",
    alignItems: "flex-start",
    gap: spacing.sm
  },
  helpText: {
    flex: 1,
    lineHeight: 22
  },
  statusCard: {
    borderRadius: 28,
    backgroundColor: colors.surfaceSoft
  },
  nextCard: {
    borderRadius: 28,
    backgroundColor: colors.surfaceMuted
  },
  statusHeader: {
    flexDirection: "row",
    alignItems: "center",
    gap: spacing.sm
  },
  statusTitle: {
    color: colors.primary
  },
  browserNote: {
    lineHeight: 22
  },
  templateList: {
    gap: spacing.sm
  },
  templateLine: {
    flexDirection: "row",
    alignItems: "flex-start",
    gap: spacing.xs
  },
  templateText: {
    flex: 1,
    lineHeight: 22
  },
  ctaWrap: {
    gap: spacing.md,
    paddingBottom: spacing.md
  }
});
