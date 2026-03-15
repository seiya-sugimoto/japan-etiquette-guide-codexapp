import type { Category } from "@/types/category";

export function canAccessCategory(category: Category, isUnlocked: boolean) {
  return category.access === "free" || isUnlocked;
}
