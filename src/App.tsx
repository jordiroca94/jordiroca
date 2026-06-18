import {BrowserRouter, Routes, Route, Navigate} from "react-router-dom";
import TranslatedRoutes from "./i18n/TranslatedRoutes";
import i18n from "./i18n/i18n";
import {useEffect} from "react";

export default function App() {
  useEffect(() => {
    document.documentElement.lang = i18n.language;

    const handleLanguageChanged = (lng: string) => {
      document.documentElement.lang = lng;
    };

    i18n.on("languageChanged", handleLanguageChanged);
    return () => {
      i18n.off("languageChanged", handleLanguageChanged);
    };
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/en" replace />} />
        <Route path=":lang/*" element={<TranslatedRoutes />} />
      </Routes>
    </BrowserRouter>
  );
}
