import { toast } from "@/hooks/use-toast";

export const USER_ERRORS = {
  LOAD_FAILED: "Failed to load data. Please try again.",
  SAVE_FAILED: "Failed to save. Please try again.",
  DELETE_FAILED: "Failed to delete. Please try again.",
  UPDATE_FAILED: "Failed to update. Please try again.",
  NOT_FOUND: "Resource not found.",
  UNAUTHORIZED: "You are not authorized to perform this action.",
  NETWORK_ERROR: "Network error. Please check your connection.",
  UNKNOWN: "An unexpected error occurred.",
};

export const handleError = (error: unknown, userMessage?: string) => {
  console.error("Error:", error);
  
  let message = userMessage || USER_ERRORS.UNKNOWN;
  
  // Handle specific error types
  if (error instanceof Error) {
    if (error.message.includes("network") || error.message.includes("fetch")) {
      message = USER_ERRORS.NETWORK_ERROR;
    }
  }
  
  toast({
    title: "Error",
    description: message,
    variant: "destructive",
  });
};
