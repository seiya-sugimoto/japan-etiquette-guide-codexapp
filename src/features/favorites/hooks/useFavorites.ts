import { getCategories } from "@/data/categories";
import { useFavoritesStore } from "@/features/favorites/store/favoritesStore";
import { useAppLanguage } from "@/features/localization/hooks/useAppLanguage";

export function useFavorites() {
  const { currentLanguage } = useAppLanguage();
  const { favoriteIds, isReady, toggleFavorite } = useFavoritesStore();
  const categories = getCategories(currentLanguage);

  return {
    favoriteIds,
    favorites: categories.filter((item) => favoriteIds.includes(item.id)),
    isReady,
    toggleFavorite,
    isFavorite: (id: string) => favoriteIds.includes(id)
  };
}
