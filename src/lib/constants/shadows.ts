import { Platform } from "react-native";

export const shadows = {
  card: Platform.select({
    ios: {
      shadowColor: "#1B1C1A",
      shadowOpacity: 0.06,
      shadowRadius: 18,
      shadowOffset: { width: 0, height: 8 }
    },
    android: {
      elevation: 2
    },
    default: {}
  }),
  strong: Platform.select({
    ios: {
      shadowColor: "#500C07",
      shadowOpacity: 0.14,
      shadowRadius: 24,
      shadowOffset: { width: 0, height: 12 }
    },
    android: {
      elevation: 5
    },
    default: {}
  })
};
