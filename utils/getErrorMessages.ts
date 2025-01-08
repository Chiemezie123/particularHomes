export function getErrorMessage(error: unknown): string {
    if (error instanceof Error) {
      return error.message;
    } else if (
      typeof error === "object" &&
      error !== null &&
      "responseMessage" in error
    ) {
      return (error as { responseMessage: string }).responseMessage;
    } else {
      return "An unexpected error occurred";
    }
  }
  