import type { PropsWithChildren } from "react";
import { StyleSheet, Text, type TextProps, type TextStyle } from "react-native";

import { colors } from "@/lib/constants/colors";
import { typography } from "@/lib/constants/typography";

type Variant = keyof typeof typography;

type AppTextProps = PropsWithChildren<
  TextProps & {
    variant?: Variant;
    color?: string;
    style?: TextStyle;
  }
>;

export function AppText({
  children,
  variant = "body",
  color = colors.text,
  style,
  ...props
}: AppTextProps) {
  return (
    <Text {...props} style={[styles.base, typography[variant], { color }, style]}>
      {children}
    </Text>
  );
}

const styles = StyleSheet.create({
  base: {
    color: colors.text
  }
});
