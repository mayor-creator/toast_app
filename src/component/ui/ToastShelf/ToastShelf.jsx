import { useState } from "react";
import Toast from "../Toast/Toast";
import styles from "./ToastShelf.module.css";

export function ToastShelf() {
  const [toasts, setToasts] = useState([
    {
      id: crypto.randomUUID(),
      message: "Something went wrong!",
      variant: "error",
    },
    {
      id: crypto.randomUUID(),
      message: "17 photos uploaded",
      variant: "success",
    },
  ]);

  const addToast = (message, variant) => {
    const nextToast = [
      ...toasts,
      {
        id: crypto.randomUUID(),
        message,
        variant,
      },
    ];
    setToasts(nextToast);
  };

  const removeToast = (id) => {
    setToasts(toasts.filter((toast) => toast.id !== id));
  };

  return (
    <>
      <ol className={styles.wrapper}>
        {toasts.map((toast) => (
          <li key={toast.id} className={styles.toastWrapper}>
            <Toast
              key={toast.id}
              id={toast.id}
              variant={toast.variant}
              message={toast.message}
              handleDismiss={() => removeToast(toast.id)}
            />
          </li>
        ))}
      </ol>
    </>
  );
}
