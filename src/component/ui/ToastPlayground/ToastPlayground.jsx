import { ToastContext } from "../ToastProvider/ToastContext";
import { Button } from "../Button/Button";
import { ToastShelf } from "../ToastShelf/ToastShelf";

import styles from "./ToastPlayground.module.css";
import { useContext } from "react";

const VARIANT_OPTIONS = ["notice", "warning", "success", "error"];

export function ToastPlayground() {
  // const [popToast, setPopToast] = useState(false);
  // const [errorMessage, setErrorMessage] = useState(false);

  // const handlePopToast = () => {
  //   if (!message || message.trim() === "") {
  //     setErrorMessage("Please enter a message");
  //     setVariant("error");
  //   } else {
  //     setErrorMessage("");
  //     setPopToast(true);
  //   }
  // };
  const {
    message,
    variant,
    toasts,
    handleMessageChange,
    handleVariantChange,
    handleOnsubmit,
  } = useContext(ToastContext);

  return (
    <div className={styles.wrapper}>
      <header>
        <img alt="Cute toast mascot" src="/toast.png" />
        <h1>Toast Playground</h1>
      </header>

      {/* {popToast && (
        <Toast
          message={message}
          variant={variant}
          handleDismiss={() => setPopToast(false)}
        />
      )}

      {errorMessage && (
        <Toast
          message={errorMessage}
          variant={variant}
          handleDismiss={() => setErrorMessage(false)}
        />
      )} */}

      <ToastShelf toasts={toasts} />

      <form className={styles.controlsWrapper} onSubmit={handleOnsubmit}>
        <div className={styles.row}>
          <label
            htmlFor="message"
            className={styles.label}
            style={{ alignSelf: "baseline" }}
          >
            Message
          </label>
          <div className={styles.inputWrapper}>
            <textarea
              id="message"
              className={styles.messageInput}
              value={message}
              onChange={handleMessageChange}
            />
          </div>
        </div>

        <div className={styles.row}>
          <div className={styles.label}>Variant</div>
          <div className={`${styles.inputWrapper} ${styles.radioWrapper}`}>
            {VARIANT_OPTIONS.map((option) => (
              <label key={option} htmlFor={`variant-${option}`}>
                <input
                  id={`variant-${option}`}
                  type="radio"
                  name="variant"
                  value={option}
                  checked={option === variant}
                  onChange={handleVariantChange}
                />
                {option}
              </label>
            ))}

            {/* TODO Other Variant radio buttons here */}
          </div>
        </div>

        <div className={styles.row}>
          <div className={styles.label} />
          <div className={`${styles.inputWrapper} ${styles.radioWrapper}`}>
            <Button type="submit">Pop Toast!</Button>
          </div>
        </div>
      </form>
    </div>
  );
}
