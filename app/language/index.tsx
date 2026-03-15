import { Ionicons } from "@expo/vector-icons";
import { Pressable, StyleSheet, View } from "react-native";

import { AppCard } from "@/components/ui/AppCard";
import { AppScreen } from "@/components/ui/AppScreen";
import { AppText } from "@/components/ui/AppText";
import { useAppLanguage } from "@/features/localization/hooks/useAppLanguage";
import { colors } from "@/lib/constants/colors";
import { spacing } from "@/lib/constants/spacing";

export default function LanguageScreen() {
  const { currentLanguage, deviceSuggestedLanguage, setLanguage, supportedLanguages, t } = useAppLanguage();

  return (
    <AppScreen>
      <View style={styles.header}>
        <AppText variant="title">{t.chooseLanguage}</AppText>
        <AppText color={colors.textMuted}>{t.suggestedForDevice}</AppText>
      </View>
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
            <AppCard style={styles.languageRow}>
              <View style={styles.languageCopy}>
                <AppText variant="subtitle">{language.nativeLabel}</AppText>
                <AppText color={colors.textMuted}>{language.label}</AppText>
                {suggested ? (
                  <AppText variant="caption" color={colors.primary}>
                    {t.suggestedForDevice}
                  </AppText>
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
    gap: spacing.xs
  },
  languageRow: {
    flexDirection: "row",
    alignItems: "center"
  },
  languageCopy: {
    flex: 1,
    gap: 2
  }
});
