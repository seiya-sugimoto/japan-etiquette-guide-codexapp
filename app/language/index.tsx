import { Ionicons } from "@expo/vector-icons";
import { Pressable, StyleSheet, View } from "react-native";

import { AppCard } from "@/components/ui/AppCard";
import { AppScreen } from "@/components/ui/AppScreen";
import { AppText } from "@/components/ui/AppText";
import { useAppLanguage } from "@/features/localization/hooks/useAppLanguage";
import { colors } from "@/lib/constants/colors";
import { radius } from "@/lib/constants/radius";
import { spacing } from "@/lib/constants/spacing";

export default function LanguageScreen() {
  const { currentLanguage, deviceSuggestedLanguage, setLanguage, supportedLanguages, t } = useAppLanguage();

  return (
    <AppScreen>
      <View style={styles.header}>
        <AppText style={styles.title} variant="hero">
          {t.chooseLanguage}
        </AppText>
        <AppText color={colors.textMuted}>{t.settingsBodyLanguage}</AppText>
      </View>

      <AppCard style={styles.introCard}>
        <AppText color={colors.primary} style={styles.eyebrow} variant="eyebrow">
          {t.suggestedForDevice}
        </AppText>
        <AppText style={styles.introTitle} variant="subtitle">
          {supportedLanguages.find((language) => language.code === deviceSuggestedLanguage)?.nativeLabel ?? currentLanguage}
        </AppText>
        <AppText color={colors.textMuted}>{t.languagePlaceholder}</AppText>
      </AppCard>

      {supportedLanguages.map((language) => {
        const selected = currentLanguage === language.code;
        const suggested = deviceSuggestedLanguage === language.code;

        return (
          <Pressable
            key={language.code}
            onPress={() => {
              void setLanguage(language.code);
            }}
          >
            <AppCard style={[styles.languageRow, selected ? styles.languageRowSelected : null]}>
              <View style={styles.languageCopy}>
                <AppText variant="subtitle">{language.nativeLabel}</AppText>
                <AppText color={colors.textMuted}>{language.label}</AppText>
                {suggested ? (
                  <View style={styles.suggestedChip}>
                    <AppText color={colors.primary} variant="caption">
                      {t.suggestedForDevice}
                    </AppText>
                  </View>
                ) : null}
              </View>
              <Ionicons color={selected ? colors.primary : colors.textMuted} name={selected ? "radio-button-on" : "radio-button-off"} size={22} />
            </AppCard>
          </Pressable>
        );
      })}
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
  introCard: {
    borderRadius: 28,
    backgroundColor: colors.surfaceMuted
  },
  eyebrow: {
    textTransform: "uppercase"
  },
  introTitle: {
    color: colors.primary
  },
  languageRow: {
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 28
  },
  languageRowSelected: {
    backgroundColor: colors.surfaceMuted
  },
  languageCopy: {
    flex: 1,
    gap: 4
  },
  suggestedChip: {
    alignSelf: "flex-start",
    paddingHorizontal: spacing.sm,
    paddingVertical: 6,
    borderRadius: radius.pill,
    backgroundColor: "#F6EDEB"
  }
});
