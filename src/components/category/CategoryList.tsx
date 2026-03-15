import { View } from "react-native";

import { CategoryCard } from "@/components/category/CategoryCard";
import type { Category } from "@/types/category";

export function CategoryList({ categories }: { categories: Category[] }) {
  return (
    <View style={{ gap: 12 }}>
      {categories.map((category) => (
        <CategoryCard key={category.id} category={category} />
      ))}
    </View>
  );
}
