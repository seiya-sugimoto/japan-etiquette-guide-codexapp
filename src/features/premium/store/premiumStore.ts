import { useState } from "react";

export function usePremiumStore() {
  const [isUnlocked] = useState(false);

  return { isUnlocked };
}
