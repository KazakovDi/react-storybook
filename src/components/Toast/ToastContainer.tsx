import { useEffect, useState } from "react";
import { ToastData, toastManager } from "./toastManager";
import { ToastItem } from "./ToastItem";

export const ToastContainer = () => {
  const [toasts, setToasts] = useState<ToastData[]>([]);

  useEffect(() => {
    const unsubscribe = toastManager.subscribe(setToasts);

    setToasts(toastManager.getToasts());

    return unsubscribe;
  }, []);

  const handleRemove = (id: string) => {
    toastManager.remove(id);
  };

  return (
    <div>
      {toasts.map((toast) => (
        <ToastItem key={toast.id} toast={toast} onRemove={handleRemove} />
      ))}
    </div>
  );
};
