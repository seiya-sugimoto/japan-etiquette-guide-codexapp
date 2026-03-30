import { AppCard } from "@/components/ui/AppCard";
import { AppText } from "@/components/ui/AppText";

export function DetailSection({ title, items }: { title: string; items: string[] }) {
  return (
    <AppCard>
      <AppText variant="subtitle">{title}</AppText>
      {items.map((item) => (
        <AppText key={`${title}-${item}`}>- {item}</AppText>
      ))}
    </AppCard>
  );
}
