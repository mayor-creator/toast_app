import { useContext } from "react";
import PropTypes from "prop-types";

import { ToastContext } from "../ToastProvider/ToastContext";
import Toast from "../Toast/Toast";
import styles from "./ToastShelf.module.css";

export function ToastShelf({ toasts }) {
  const { removeToast } = useContext(ToastContext);

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

ToastShelf.propTypes = { toasts: PropTypes.array };
