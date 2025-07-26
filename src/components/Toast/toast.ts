import { toastManager } from "./toastManager";

export const toast = {
  primary: (
    title: string,
    message: string,
    options?: { duration?: number }
  ) => {
    return toastManager.add({
      title,
      message,
      variant: "primary",
      ...options,
    });
  },

  success: (
    title: string,
    message: string,
    options?: { duration?: number }
  ) => {
    return toastManager.add({
      title,
      message,
      variant: "success",
      ...options,
    });
  },

  warning: (
    title: string,
    message: string,
    options?: { duration?: number }
  ) => {
    return toastManager.add({
      title,
      message,
      variant: "warning",
      ...options,
    });
  },

  dismiss: (id: string) => {
    toastManager.remove(id);
  },

  dismissAll: () => {
    toastManager.clear();
  },
};
