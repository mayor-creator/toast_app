import { useState } from "react";
import { Button } from "../Button/Button";
import { Toast } from "../Toast/Toast";

import styles from "./ToastPlayground.module.css";

const VARIANT_OPTIONS = ["notice", "warning", "success", "error"];

export function ToastPlayground() {
  const [message, setMessage] = useState("");
  const [variant, setVariant] = useState("notice");
  const [popToast, setPopToast] = useState(false);
  const [errorMessage, setErrorMessage] = useState(false);

  const handlePopToast = () => {
    if (!message || message.trim() === "") {
      setErrorMessage("Please enter a message");
      setVariant("error");
    } else {
      setErrorMessage("");
      setPopToast(true);
    }
  };

  return (
    <div className={styles.wrapper}>
      <header>
        <img alt="Cute toast mascot" src="/toast.png" />
        <h1>Toast Playground</h1>
      </header>

      {popToast && (
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
      )}

      <div className={styles.controlsWrapper}>
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
              onChange={(event) => setMessage(event.target.value)}
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
                  onChange={(event) => setVariant(event.target.value)}
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
            <Button onClick={handlePopToast}>Pop Toast!</Button>
          </div>
        </div>
      </div>
    </div>
  );
}
