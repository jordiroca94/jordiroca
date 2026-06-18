import {StrictMode} from "react";
import {createRoot} from "react-dom/client";
import {HelmetProvider} from "react-helmet-async";
import "./styles/index.css";
import "./styles/fonts.css";
import App from "./App.tsx";
import "./i18n/i18n.ts";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <HelmetProvider>
      <App />
    </HelmetProvider>
  </StrictMode>,
);
