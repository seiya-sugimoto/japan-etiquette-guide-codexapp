import { Platform } from "react-native";

export const shadows = {
  card: Platform.select({
    ios: {
      shadowColor: "#000000",
      shadowOpacity: 0.08,
      shadowRadius: 12,
      shadowOffset: { width: 0, height: 6 }
    },
    android: {
      elevation: 3
    },
    default: {}
  })
};
