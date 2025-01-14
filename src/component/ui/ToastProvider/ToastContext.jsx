import { createContext, useState } from "react";
import PropTypes from "prop-types";

// eslint-disable-next-line react-refresh/only-export-components
export const ToastContext = createContext();

export function ToastProvider({ children }) {
  const [message, setMessage] = useState("");
  const [variant, setVariant] = useState("notice");

  const handleMessageChange = (event) => {
    setMessage(event.target.value);
  };
  const handleVariantChange = (event) => {
    setVariant(event.target.value);
  };

  const handleOnsubmit = (event) => {
    event.preventDefault();
    if (!message || message.trim() === "") {
      addToast("Please enter a message", "error");
    } else {
      addToast(message, variant);
      setMessage("");
      setVariant("notice");
    }
  };

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

  const removeToast = (id) => {
    setToasts(toasts.filter((toast) => toast.id !== id));
  };

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

  const values = {
    message,
    variant,
    toasts,
    addToast,
    removeToast,
    handleMessageChange,
    handleVariantChange,
    handleOnsubmit,
  };

  return (
    <ToastContext.Provider value={values}>{children}</ToastContext.Provider>
  );
}

ToastProvider.propTypes = { children: PropTypes.node };
