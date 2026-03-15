import { AppCard } from "@/components/ui/AppCard";
import { AppText } from "@/components/ui/AppText";

export function EmptyState({ title, message }: { title: string; message: string }) {
  return (
    <AppCard>
      <AppText variant="subtitle">{title}</AppText>
      <AppText>{message}</AppText>
    </AppCard>
  );
}
