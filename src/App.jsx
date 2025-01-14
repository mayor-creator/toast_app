import { ToastProvider } from "./component/ui/ToastProvider/ToastContext";
import { ToastPlayground } from "./component/ui/ToastPlayground/ToastPlayground";

import "./App.css";

export default function App() {
  return (
    <>
      <ToastProvider>
        <ToastPlayground />
      </ToastProvider>
    </>
  );
}
