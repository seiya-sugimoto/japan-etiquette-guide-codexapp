import type { Category, CategoryId } from "@/types/category";

export type BrowseViewMode = "situation" | "place";

const placeCategoryIds = new Set<CategoryId>([
  "shrine",
  "onsen",
  "temple",
  "ryokan",
  "convenience-store",
  "residential-private",
  "toilet"
]);

export function filterCategoriesForBrowse(categories: Category[], viewMode: BrowseViewMode) {
  return categories.filter((category) => {
    const isPlaceCategory = placeCategoryIds.has(category.id);
    return viewMode === "place" ? isPlaceCategory : !isPlaceCategory;
  });
}
