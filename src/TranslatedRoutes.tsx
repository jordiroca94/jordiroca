import { Routes, Route, useParams } from "react-router-dom";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import i18n from "./i18n";
import Home from "./components/Home";
import About from "./components/About";

function TranslatedRoutes() {
  const { lang } = useParams();
  const { t } = useTranslation();

  useEffect(() => {
    if (lang && i18n.language !== lang) {
      i18n.changeLanguage(lang);
    }
  }, [lang]);

  return (
    <Routes>
      <Route path="" element={<Home />} />
      <Route path={t("routes.about")} element={<About />} />
    </Routes>
  );
}

export default TranslatedRoutes;
