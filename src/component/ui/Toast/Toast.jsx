import {
  AlertOctagon,
  AlertTriangle,
  CheckCircle,
  Info,
  X,
} from "react-feather";
import PropTypes from "prop-types";

import { VisuallyHidden } from "../VisuallyHidden/VisuallyHidden";

import styles from "./Toast.module.css";

const ICONS_BY_VARIANT = {
  notice: Info,
  warning: AlertTriangle,
  success: CheckCircle,
  error: AlertOctagon,
};

export function Toast({ message, variant, handleDismiss }) {
  const Icon = ICONS_BY_VARIANT[variant];

  return (
    <div className={`${styles.toast} ${styles[variant]}`}>
      <div className={styles.iconContainer}>
        <Icon size={24} />
      </div>
      <p className={styles.content}>{message}</p>
      <button className={styles.closeButton} onClick={handleDismiss}>
        <X size={24} />
        <VisuallyHidden>Dismiss message</VisuallyHidden>
      </button>
    </div>
  );
}

Toast.propTypes = {
  message: PropTypes.string,
  variant: PropTypes.string,
  handleDismiss: PropTypes.func,
};
