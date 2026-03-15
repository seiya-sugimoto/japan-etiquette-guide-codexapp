import AsyncStorage from "@react-native-async-storage/async-storage";

import type { AppLanguage } from "@/types/language";

const LANGUAGE_KEY = "settings.language";

export async function loadStoredLanguage() {
  const stored = await AsyncStorage.getItem(LANGUAGE_KEY);
  return stored as AppLanguage | null;
}

export async function saveStoredLanguage(language: AppLanguage) {
  await AsyncStorage.setItem(LANGUAGE_KEY, language);
}
