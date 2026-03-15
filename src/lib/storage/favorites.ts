import AsyncStorage from "@react-native-async-storage/async-storage";

const FAVORITES_KEY = "favorites";

export async function loadFavoriteIds() {
  const stored = await AsyncStorage.getItem(FAVORITES_KEY);
  return stored ? (JSON.parse(stored) as string[]) : [];
}

export async function saveFavoriteIds(ids: string[]) {
  await AsyncStorage.setItem(FAVORITES_KEY, JSON.stringify(ids));
}
