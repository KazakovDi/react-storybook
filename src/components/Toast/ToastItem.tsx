import { CSSProperties, useEffect, useState } from "react";
import { Cross } from "../../shared/icons/Cross";
import { ToastData } from "./toastManager";

interface ToastItemProps {
  toast: ToastData;
  onRemove: (id: string) => void;
}

export const ToastItem = ({ toast, onRemove }: ToastItemProps) => {
  const [isVisible, setIsVisible] = useState(true);
  const [isAnimating, setIsAnimating] = useState(false);

  const handleClose = () => {
    setIsAnimating(true);
    setTimeout(() => {
      onRemove(toast.id);
    }, 300);
  };

  useEffect(() => {
    setTimeout(() => setIsVisible(true), 10);
  }, []);

  const toastStyles: CSSProperties = {
    ...styles.toastBaseContainer,
    ...(toast.variant === "primary"
      ? styles.primaryToast
      : toast.variant === "success"
      ? styles.successToast
      : styles.warningToast),
    transition: "all 0.3s ease-in-out",
    transform: isAnimating ? "translateX(100%)" : "translateX(0)",
    opacity: isVisible ? 1 : 0,
  };

  return (
    <div style={toastStyles}>
      <div style={styles.headline}>
        <h3 style={styles.normalizeText}>{toast.title}</h3>
        <button style={styles.button} onClick={handleClose}>
          <Cross fill={toast.variant === "success" ? "#006d2c" : "#fff"} />
        </button>
      </div>
      <p style={styles.normalizeText}>{toast.message}</p>
    </div>
  );
};

const styles: { [key: string]: React.CSSProperties } = {
  toastBaseContainer: {
    position: "absolute",
    right: 16,
    bottom: 16,
    borderRadius: 12,
    zIndex: 10,
    maxWidth: 350,
    paddingTop: 12,
    paddingBottom: 12,
    paddingLeft: 16,
    paddingRight: 16,
  },
  primaryToast: {
    backgroundColor: "#2e2e39",
    color: "#fff",
  },
  warningToast: {
    backgroundColor: "#ff9800",
    color: "#fff",
  },
  successToast: {
    backgroundColor: "#74c476",
    color: "#006d2c",
  },
  headline: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 12,
  },
  normalizeText: {
    margin: 0,
  },
  button: {
    background: "none",
    border: "none",
    outline: "none",
  },
};
