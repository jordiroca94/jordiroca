import { Routes, Route, useParams } from "react-router-dom";
import { useEffect } from "react";
import i18n from "./i18n";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import { localizedRoutes } from "./routes";

function TranslatedRoutes() {
  const { lang } = useParams();

  useEffect(() => {
    if (lang && i18n.language !== lang) {
      i18n.changeLanguage(lang);
    }
  }, [lang]);

  if (!lang || !localizedRoutes[lang as keyof typeof localizedRoutes])
    return null;

  const paths = localizedRoutes[lang as keyof typeof localizedRoutes];

  return (
    <Routes>
      <Route index element={<Home />} />
      <Route path={paths.projects} element={<Projects />} />
    </Routes>
  );
}

export default TranslatedRoutes;
