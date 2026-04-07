import Constants from "expo-constants";
import * as Linking from "expo-linking";

type FeedbackConfig = {
  formUrl: string;
};

export function getFeedbackFormUrl(): string {
  const config = Constants.expoConfig?.extra?.feedback as Partial<FeedbackConfig> | undefined;
  return typeof config?.formUrl === "string" ? config.formUrl.trim() : "";
}

export function hasFeedbackFormUrl(): boolean {
  return getFeedbackFormUrl().length > 0;
}

export async function openFeedbackForm(): Promise<boolean> {
  const url = getFeedbackFormUrl();

  if (!url) {
    return false;
  }

  await Linking.openURL(url);
  return true;
}
