export interface ToastData {
  id: string;
  title: string;
  message: string;
  variant?: "primary" | "warning" | "success";
  duration?: number;
}

class ToastManager {
  private toasts: ToastData[] = [];
  private listeners: Array<(toasts: ToastData[]) => void> = [];

  subscribe(listener: (toasts: ToastData[]) => void) {
    this.listeners.push(listener);
    return () => {
      this.listeners = this.listeners.filter((l) => l !== listener);
    };
  }

  private notify() {
    this.listeners.forEach((listener) => listener([...this.toasts]));
  }

  add(toast: Omit<ToastData, "id">) {
    const id = Date.now().toString() + Math.random().toString(36).substr(2, 9);
    const newToast: ToastData = {
      id,
      duration: 5000,
      ...toast,
    };

    this.toasts.push(newToast);
    this.notify();

    setTimeout(() => {
      this.remove(id);
    }, newToast.duration);

    return id;
  }

  remove(id: string) {
    this.toasts = this.toasts.filter((toast) => toast.id !== id);
    this.notify();
  }

  clear() {
    this.toasts = [];
    this.notify();
  }

  getToasts() {
    return [...this.toasts];
  }
}

export const toastManager = new ToastManager();
