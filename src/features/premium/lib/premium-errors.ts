export type PremiumErrorCode =
  | "not-available"
  | "missing-package"
  | "purchase-cancelled"
  | "purchase-failed"
  | "restore-failed"
  | "unknown";

export type PremiumError = {
  code: PremiumErrorCode;
  message: string;
  cause?: unknown;
};

export function toPremiumError(error: unknown, fallbackCode: PremiumErrorCode = "unknown"): PremiumError {
  if (typeof error === "object" && error !== null) {
    const maybeError = error as { userCancelled?: boolean; message?: string };

    if (maybeError.userCancelled) {
      return {
        code: "purchase-cancelled",
        message: "The purchase was cancelled before it finished.",
        cause: error
      };
    }

    if (typeof maybeError.message === "string" && maybeError.message.length > 0) {
      return {
        code: fallbackCode,
        message: maybeError.message,
        cause: error
      };
    }
  }

  return {
    code: fallbackCode,
    message: "Something went wrong while checking premium access.",
    cause: error
  };
}
