import { View } from "react-native";

import { AppText } from "@/components/ui/AppText";

export function SectionHeader({ title, description }: { title: string; description?: string }) {
  return (
    <View>
      <AppText variant="subtitle">{title}</AppText>
      {description ? <AppText>{description}</AppText> : null}
    </View>
  );
}
