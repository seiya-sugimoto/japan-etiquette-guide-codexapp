import { useEffect, useState } from "react";

import { loadFavoriteIds, saveFavoriteIds } from "@/lib/storage/favorites";

export function useFavoritesStore() {
  const [favoriteIds, setFavoriteIds] = useState<string[]>([]);
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    loadFavoriteIds()
      .then((ids) => setFavoriteIds(ids))
      .finally(() => setIsReady(true));
  }, []);

  const toggleFavorite = async (id: string) => {
    const nextIds = favoriteIds.includes(id)
      ? favoriteIds.filter((favoriteId) => favoriteId !== id)
      : [...favoriteIds, id];

    setFavoriteIds(nextIds);
    await saveFavoriteIds(nextIds);
  };

  return { favoriteIds, isReady, toggleFavorite };
}
