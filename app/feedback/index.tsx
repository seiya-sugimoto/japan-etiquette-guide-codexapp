import { AppCard } from "@/components/ui/AppCard";
import { AppScreen } from "@/components/ui/AppScreen";
import { AppText } from "@/components/ui/AppText";
import { useAppLanguage } from "@/features/localization/hooks/useAppLanguage";

export default function FeedbackPlaceholderScreen() {
  const { t } = useAppLanguage();

  return (
    <AppScreen>
      <AppCard>
        <AppText variant="title">{t.settingsTitleFeedback}</AppText>
        <AppText>{t.feedbackPlaceholder}</AppText>
      </AppCard>
    </AppScreen>
  );
}
