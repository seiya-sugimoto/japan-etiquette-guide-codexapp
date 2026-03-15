import { Image, StyleSheet, View } from "react-native";
import { useRouter } from "expo-router";

import { AppCard } from "@/components/ui/AppCard";
import { AppButton } from "@/components/ui/AppButton";
import { AppScreen } from "@/components/ui/AppScreen";
import { AppText } from "@/components/ui/AppText";
import { useAppLanguage } from "@/features/localization/hooks/useAppLanguage";
import { colors } from "@/lib/constants/colors";
import { radius } from "@/lib/constants/radius";
import { spacing } from "@/lib/constants/spacing";

const gallery = [
  "https://lh3.googleusercontent.com/aida-public/AB6AXuBQbVmeI3tkpHKHQdKPJbhH7ulUUlkXZOt-LnA9sAqynDlmUZjIQW9l3gtj3j4-4Tjz92TDbW-iksdQKdfQthK1YCUKT2CtEtBn24PNsY_Oq15odw9aINjjDXiE99E2bY4EfjcxhSM-8yGxcLHaqb7bql7H3kmhZIQ0aMsAdchFEm89XiiP-ya7_0xtqSgDW5z0LvITE6Z6_L6NkOTiYRxt8B1beifvuYc0-hctayR_kx-IQHZSqZcTeQYqG_D37yFt18q_t9WDzsIy",
  "https://lh3.googleusercontent.com/aida-public/AB6AXuCvf0R7-J215zxndN4nPR_cHU9H_hrBMo7bEXWWfvmo4OHxvyExFZ15hNAQQu6oZXCvDFRuBWJUlbYrWRTRY7jb3ims_RvKWB5UghnK3qWTAdXAzSZjZxnnca6S_2Fj4Le12npnJZlprgRf0Th20O3o49-Rdfm8ixhvT5H4_L7ZzmVAYp-esFQnnIr6gUKR4V2o41VTGfEI2_6CJb1HXxI2-3WY9zJPHkFl0fyrmPGKnUJAYWcGj9F4XXMYYzaPsYttuE9hra6pXo-W",
  "https://lh3.googleusercontent.com/aida-public/AB6AXuC1tJjDnfI9teWFS0Ysd-b7qSBXrfvrczdJ8L8VNtCDid-vrUIBSOLH0z5kP6ez46qG_kuxd8eCPdxkEo-muneoXBvMYMaFCMM1q7ZdoPvTbO6h6xdJYgdmYfnV_IezMm6UHDOfP0M1NvXL3zc8Uxg44dkpX9Jx-ckmUrH8FDmoLiljpEnxO0v5PEYQzVvqmjTrM7IkOe8U4aHO9HaxZ3Hrkfy7kcJA9sG9flWMaTmQRbLKpHRb4WynRX_-xU7FcstgRMiQPEPbmn_X"
];

export default function PremiumScreen() {
  const router = useRouter();
  const { t } = useAppLanguage();

  return (
    <AppScreen>
      <Image
        source={{ uri: "https://lh3.googleusercontent.com/aida-public/AB6AXuCGr5Jav_9YULL6NpQa5Wq0SgCsgXrcvqN49shvBe7AJ-hNBYZBV8VIJKw5FSJU09wKFwJ_Gd5Oq_aSIPJ0YFhCZfAq4wXFyrhhyx90y0rk-CnyAHsTM1RJNLTC3w0_fVsI1pZg92mpgxCDD71_lN8ntnqqjYWB-yXDADHRxZBWcJ9fqKLVPjaWYzbeho-WmMiymFaQzjHNlxcfso5d5MeCKe8UmQFV9Trs9Umy0a5wBwsuDDVrXzSDFE14CdFFKW46bTDxU4ZNcfuT" }}
        style={styles.hero}
      />
      <AppText variant="title">{t.premiumAccess}</AppText>
      <AppText color={colors.textMuted}>{t.premiumPlaceholder}</AppText>
      <View style={styles.gallery}>
        {gallery.map((item) => (
          <Image key={item} source={{ uri: item }} style={styles.thumb} />
        ))}
      </View>
      <AppCard style={styles.ctaCard}>
        <AppButton label={t.goPremium} onPress={() => router.push("/feedback")} />
      </AppCard>
    </AppScreen>
  );
}

const styles = StyleSheet.create({
  hero: {
    width: "100%",
    height: 230,
    borderRadius: radius.lg
  },
  gallery: {
    flexDirection: "row",
    gap: spacing.sm
  },
  thumb: {
    flex: 1,
    height: 72,
    borderRadius: radius.md
  },
  ctaCard: {
    backgroundColor: colors.primary
  }
});
